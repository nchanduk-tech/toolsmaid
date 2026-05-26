'use client';

import { useEffect, useMemo, useState } from 'react';

type Filter = {
  field: string;
  operator: string;
  value: string;
  condition: 'and' | 'or';
};

const publicServices = [
  {
    name: 'Northwind Products',
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Products',
  },
  {
    name: 'Northwind Customers',
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  },
  {
    name: 'TripPin People',
    url: 'https://services.odata.org/V4/TripPinServiceRW/People',
  },
];

export default function ODataBuilderPage() {

  const [odataVersion, setOdataVersion] = useState<'v2' | 'v4'>('v4');

  const [endpoint, setEndpoint] = useState(
    publicServices[0].url
  );

  const [select, setSelect] = useState('');
  const [expand, setExpand] = useState('');
  const [orderby, setOrderby] = useState('');
  const [top, setTop] = useState('5');
  const [skip, setSkip] = useState('0');

  const [filters, setFilters] = useState<Filter[]>([
    {
      field: '',
      operator: 'eq',
      value: '',
      condition: 'and',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState<any>(null);

  const [error, setError] = useState('');

  const [recentQueries, setRecentQueries] = useState<string[]>([]);

  const updateFilter = (
    index: number,
    key: keyof Filter,
    value: string
  ) => {

    const updated = [...filters];

    (updated[index] as any)[key] = value;

    setFilters(updated);
  };

  const addFilter = () => {
    setFilters([
      ...filters,
      {
        field: '',
        operator: 'eq',
        value: '',
        condition: 'and',
      },
    ]);
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const generatedQuery = useMemo(() => {

    const params: string[] = [];

    if (select.trim()) {
      params.push(`$select=${select}`);
    }

    const validFilters = filters.filter(
      f => f.field && f.value
    );

    if (validFilters.length > 0) {

      const filterQuery = validFilters
  .map((f, index) => {

    let expression = '';

    if (f.operator === 'contains') {
      expression = `contains(${f.field},'${f.value}')`;
    } else if (f.operator === 'startswith') {
      expression = `startswith(${f.field},'${f.value}')`;
    } else if (f.operator === 'endswith') {
      expression = `endswith(${f.field},'${f.value}')`;
    } else {
      expression = `${f.field} ${f.operator} '${f.value}'`;
    }

    if (index === 0) {
      return expression;
    }

    return `${f.condition} ${expression}`;

  })
  .join(' ');

      params.push(`$filter=${filterQuery}`);
    }

    if (expand.trim()) {
      params.push(`$expand=${expand}`);
    }

    if (orderby.trim()) {
      params.push(`$orderby=${orderby}`);
    }

    if (top.trim()) {
      params.push(`$top=${top}`);
    }

    if (skip.trim()) {
      params.push(`$skip=${skip}`);
    }

    if (params.length === 0) {
      return endpoint;
    }

    return `${endpoint}?${params.join('&')}`;

  }, [
    endpoint,
    select,
    expand,
    orderby,
    top,
    skip,
    filters,
  ]);

  const validationMessage = useMemo(() => {

    if (!endpoint.startsWith('http')) {
      return 'Endpoint should start with http or https';
    }

    if (
      select.includes(' ') &&
      !select.includes(',')
    ) {
      return 'Use comma separated values in $select';
    }

    return 'Query syntax looks valid';

  }, [endpoint, select]);

  const queryStats = useMemo(() => {

    const activeFilters = filters.filter(
      f => f.field && f.value
    ).length;

    return {
      length: generatedQuery.length,
      filters: activeFilters,
    };

  }, [generatedQuery, filters]);

  const copyQuery = async () => {
    await navigator.clipboard.writeText(generatedQuery);
  };

  const copyCurl = async () => {

    const curl = `curl --location --request GET "${generatedQuery}"`;

    await navigator.clipboard.writeText(curl);
  };

  const saveRecentQuery = () => {

    setRecentQueries(prev => {

      const updated = [
        generatedQuery,
        ...prev.filter(q => q !== generatedQuery),
      ];

      return updated.slice(0, 5);

    });
  };

  const resetBuilder = () => {

    setSelect('');
    setExpand('');
    setOrderby('');
    setTop('5');
    setSkip('0');

    setFilters([
      {
        field: '',
        operator: 'eq',
        value: '',
        condition: 'and',
      },
    ]);

    setResponse(null);

    setError('');
  };

  const runQuery = async () => {

    try {

      setLoading(true);

      setError('');

      setResponse(null);

      saveRecentQuery();

      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 5000);

      const res = await fetch(generatedQuery, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
        },
      });

      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error('Invalid OData response');
      }

      const data = await res.json();

      setResponse(data);

    } catch (err: any) {

      setError(
        'Query generated correctly. Some public OData services block browser execution due to CORS/security policies.'
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    runQuery();

  }, []);

  return (
    <div className="min-h-screen bg-[#f6f8fb]">

      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              OData Query Builder
            </h1>

            <p className="text-xs text-slate-500 mt-1">
              Build, validate and test SAP OData queries visually.
            </p>
          </div>

          <div className="flex gap-2">

            <button
              onClick={() => setOdataVersion('v2')}
              className={`px-4 h-9 rounded-xl text-sm font-medium transition ${
                odataVersion === 'v2'
                  ? 'bg-[#081028] text-white'
                  : 'bg-white border border-slate-200'
              }`}
            >
              OData V2
            </button>

            <button
              onClick={() => setOdataVersion('v4')}
              className={`px-4 h-9 rounded-xl text-sm font-medium transition ${
                odataVersion === 'v4'
                  ? 'bg-[#081028] text-white'
                  : 'bg-white border border-slate-200'
              }`}
            >
              OData V4
            </button>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-[1fr_420px] gap-4">

          {/* LEFT */}
          <div className="space-y-3">

            {/* SERVICES */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="flex flex-wrap gap-2 mb-3">

                {publicServices.map(service => (

                  <button
                    key={service.url}
                    onClick={() => setEndpoint(service.url)}
                    className={`px-3 h-9 rounded-xl text-sm transition ${
                      endpoint === service.url
                        ? 'bg-[#081028] text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {service.name}
                  </button>

                ))}

              </div>

              <label className="text-xs text-slate-500 mb-1 block">
                Service Endpoint
              </label>

              <input
                value={endpoint}
                onChange={e => setEndpoint(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm"
              />

            </div>

            {/* PARAMETERS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between mb-3">

                <h2 className="text-sm font-semibold text-slate-800">
                  Query Parameters
                </h2>

                <div className="flex gap-2">

                  <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                    {queryStats.filters} Filters
                  </span>

                  <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                    {queryStats.length} Chars
                  </span>

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-3">

                <div>
                  <label className="text-xs text-slate-500 mb-1 block">
                    $select
                  </label>

                  <input
                    value={select}
                    onChange={e => setSelect(e.target.value)}
                    placeholder="ID,Name"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500 mb-1 block">
                    $expand
                  </label>

                  <input
                    value={expand}
                    onChange={e => setExpand(e.target.value)}
                    placeholder="Orders,Items"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500 mb-1 block">
                    $orderby
                  </label>

                  <input
                    value={orderby}
                    onChange={e => setOrderby(e.target.value)}
                    placeholder="CreatedAt desc"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">

                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">
                      $top
                    </label>

                    <input
                      value={top}
                      onChange={e => setTop(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">
                      $skip
                    </label>

                    <input
                      value={skip}
                      onChange={e => setSkip(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm"
                    />
                  </div>

                </div>

              </div>

            </div>

            {/* FILTERS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between mb-3">

                <h2 className="text-sm font-semibold text-slate-800">
                  Filters
                </h2>

                <button
                  onClick={addFilter}
                  className="px-4 h-9 rounded-xl bg-emerald-600 text-white text-sm"
                >
                  + Add Filter
                </button>

              </div>

              <div className="space-y-2">

                {filters.map((filter, index) => (

                  <div
                    key={index}
                    className="grid grid-cols-[90px_1fr_120px_1fr_44px] gap-2"
                  >
<select
  value={filter.condition}
  onChange={e =>
    updateFilter(
      index,
      'condition',
      e.target.value as 'and' | 'or'
    )
  }
  className="h-10 px-2 rounded-xl border border-slate-200 text-sm bg-slate-50"
>
  <option value="and">AND</option>
  <option value="or">OR</option>
</select>
                    <input
                      value={filter.field}
                      onChange={e =>
                        updateFilter(index, 'field', e.target.value)
                      }
                      placeholder="Field"
                      className="h-10 px-3 rounded-xl border border-slate-200 text-sm"
                    />

                    <select
                      value={filter.operator}
                      onChange={e =>
                        updateFilter(index, 'operator', e.target.value)
                      }
                      className="h-10 px-3 rounded-xl border border-slate-200 text-sm"
                    >
                      <option value="eq">eq</option>
                      <option value="ne">ne</option>
                      <option value="gt">gt</option>
                      <option value="lt">lt</option>
                      <option value="ge">ge</option>
                      <option value="le">le</option>
                      <option value="contains">contains</option>
                      <option value="startswith">startswith</option>
                      <option value="endswith">endswith</option>
                    </select>

                    <input
                      value={filter.value}
                      onChange={e =>
                        updateFilter(index, 'value', e.target.value)
                      }
                      placeholder="Value"
                      className="h-10 px-3 rounded-xl border border-slate-200 text-sm"
                    />

                    <button
                      onClick={() => removeFilter(index)}
                      className="h-10 rounded-xl border border-red-200 text-red-500 text-sm"
                    >
                      ✕
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-3">

            {/* GENERATED QUERY */}
            <div className="bg-[#081028] rounded-2xl p-4 shadow-xl">

              <div className="flex items-center justify-between mb-3">

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Generated Query
                  </h2>

                  <p className="text-xs text-slate-400">
                    Real-time OData URL preview
                  </p>
                </div>

                <button
                  onClick={copyQuery}
                  className="px-3 h-8 rounded-lg bg-white/10 text-white text-sm"
                >
                  Copy
                </button>

              </div>

              <div className="bg-black/20 rounded-xl p-3 overflow-auto border border-white/10">

                <code className="text-emerald-300 text-xs break-all leading-6">
                  {generatedQuery}
                </code>

              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">

                <button
                  onClick={runQuery}
                  className="h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition"
                >
                  {loading ? 'Executing...' : 'Run Query'}
                </button>

                <button
                  onClick={resetBuilder}
                  className="h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition"
                >
                  Reset
                </button>

              </div>

            </div>

            {/* VALIDATION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between mb-2">

                <h2 className="text-sm font-semibold text-slate-800">
                  Query Validation
                </h2>

                <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  VALID
                </span>

              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm text-emerald-700">
                {validationMessage}
              </div>

            </div>

            {/* CURL */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between mb-2">

                <h2 className="text-sm font-semibold text-slate-800">
                  CURL Preview
                </h2>

                <button
                  onClick={copyCurl}
                  className="px-3 h-8 rounded-lg bg-slate-900 text-white text-xs"
                >
                  Copy
                </button>

              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 overflow-auto">

                <code className="text-xs text-slate-700 leading-6 whitespace-pre-wrap">
{`curl --location --request GET \\
"${generatedQuery}"`}
                </code>

              </div>

            </div>

            {/* RECENT */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <h2 className="text-sm font-semibold text-slate-800 mb-3">
                Recent Queries
              </h2>

              <div className="space-y-2">

                {recentQueries.length === 0 && (
                  <div className="text-xs text-slate-400">
                    No recent queries yet
                  </div>
                )}

                {recentQueries.map((query, index) => (

                  <button
                    key={index}
                    onClick={() => navigator.clipboard.writeText(query)}
                    className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-2 text-[11px] text-slate-600 transition"
                  >
                    {query}
                  </button>

                ))}

              </div>

            </div>

            {/* RESPONSE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between mb-3">

                <h2 className="text-sm font-semibold text-slate-800">
                  Live Response
                </h2>

                <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  LIVE
                </span>

              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3">
                  {error}
                </div>
              )}

              {!error && !response && (
                <div className="text-sm text-slate-400">
                  No response yet
                </div>
              )}

              {response && (

                <div className="bg-slate-950 rounded-xl p-3 overflow-auto max-h-[420px]">

                  <pre className="text-xs text-emerald-300 whitespace-pre-wrap">
                    {JSON.stringify(response, null, 2)}
                  </pre>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}