'use client';

import { useState } from 'react';

interface TableEntry {
  id: number;
  name: string;
  sizGB: number;
  store: 'column' | 'row';
  compression: 'high' | 'medium' | 'low' | 'none';
}

interface Config {
  rowstore: number;
  deltaPct: number;
  shared: number;
  work: number;
  osresPct: number;
  haBufPct: number;
  nodes: number;
}

interface Results {
  colCompressed: number;
  deltaGB: number;
  totalRow: number;
  hanaCore: number;
  osGB: number;
  haGB: number;
  totalRaw: number;
  recRAM: number;
}

const COMPRESSION: Record<string, number> = {
  high: 0.12,
  medium: 0.20,
  low: 0.35,
  none: 1.0,
};

const STD_RAM = [64, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048];

let nextId = 4;

export default function HanaCalculator() {
  const [tables, setTables] = useState<TableEntry[]>([
    { id: 1, name: 'SALES_ORDERS',    sizGB: 20, store: 'column', compression: 'high'   },
    { id: 2, name: 'MATERIAL_MASTER', sizGB: 8,  store: 'column', compression: 'medium' },
    { id: 3, name: 'VBAK',            sizGB: 15, store: 'column', compression: 'high'   },
  ]);

  const [config, setConfig] = useState<Config>({
    rowstore: 8,
    deltaPct: 15,
    shared: 4,
    work: 6,
    osresPct: 5,
    haBufPct: 10,
    nodes: 1,
  });

  const [results, setResults] = useState<Results | null>(null);

  function addTable() {
    setTables(prev => [
      ...prev,
      { id: nextId++, name: 'NEW_TABLE', sizGB: 5, store: 'column', compression: 'medium' },
    ]);
  }

  function removeTable(id: number) {
    setTables(prev => prev.filter(t => t.id !== id));
  }

  function updateTable(id: number, field: keyof TableEntry, value: string | number) {
    setTables(prev =>
      prev.map(t => (t.id === id ? { ...t, [field]: value } : t))
    );
  }

  function calculate() {
    let colCompressed = 0;
    let rowFromTables = 0;

    tables.forEach(t => {
      if (t.store === 'column') {
        colCompressed += t.sizGB * (COMPRESSION[t.compression] ?? 0.2);
      } else {
        rowFromTables += t.sizGB;
      }
    });

    const deltaGB  = colCompressed * (config.deltaPct / 100);
    const totalRow = config.rowstore + rowFromTables;
    const hanaCore = colCompressed + deltaGB + totalRow + config.shared + config.work;
    const osGB     = hanaCore * (config.osresPct / 100);
    const haGB     = hanaCore * (config.haBufPct / 100);
    const totalRaw = hanaCore + osGB + haGB;
    const recRAM   = STD_RAM.find(r => r >= totalRaw) ?? totalRaw;

    setResults({ colCompressed, deltaGB, totalRow, hanaCore, osGB, haGB, totalRaw, recRAM });
  }

  const r = (n: number) => Math.round(n * 100) / 100;

  return (
    <div className="space-y-6">

      {/* ── System configuration ── */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          System configuration
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {(
            [
              { label: 'Number of nodes',    key: 'nodes',     hint: 'Scale-out: nodes count' },
              { label: 'Row store (GB)',      key: 'rowstore',  hint: 'Catalog + metadata tables' },
              { label: 'Delta merge (%)',     key: 'deltaPct',  hint: 'Typically 10–20% of column store' },
              { label: 'Shared memory (GB)', key: 'shared',    hint: 'Code, libs, shared stacks' },
              { label: 'Work memory (GB)',    key: 'work',      hint: 'Processing buffers, temp data' },
              { label: 'OS reservation (%)', key: 'osresPct',  hint: 'Non-HANA OS processes' },
              { label: 'HA buffer (%)',       key: 'haBufPct',  hint: '0% if no HA required' },
            ] as { label: string; key: keyof Config; hint: string }[]
          ).map(({ label, key, hint }) => (
            <div key={key}>
              <label className="block text-sm text-gray-600 mb-1">{label}</label>
              <input
                type="number"
                value={config[key]}
                onChange={e =>
                  setConfig(prev => ({ ...prev, [key]: parseFloat(e.target.value) || 0 }))
                }
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">{hint}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tables ── */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Tables
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-100">
                <th className="text-left py-2 pr-3 font-medium">Table name</th>
                <th className="text-left py-2 pr-3 font-medium">Raw size (GB)</th>
                <th className="text-left py-2 pr-3 font-medium">Store type</th>
                <th className="text-left py-2 pr-3 font-medium">Compression</th>
                <th className="py-2 w-8"></th>
              </tr>
            </thead>
            <tbody>
              {tables.map(t => (
                <tr key={t.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-2 pr-3">
                    <input
                      value={t.name}
                      onChange={e => updateTable(t.id, 'name', e.target.value)}
                      className="w-full border border-gray-200 rounded px-2 py-1 text-sm
                                 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <input
                      type="number"
                      value={t.sizGB}
                      min={0.1}
                      step={0.5}
                      onChange={e => updateTable(t.id, 'sizGB', parseFloat(e.target.value) || 0)}
                      className="w-24 border border-gray-200 rounded px-2 py-1 text-sm
                                 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-2 pr-3">
                    <select
                      value={t.store}
                      onChange={e => updateTable(t.id, 'store', e.target.value)}
                      className="border border-gray-200 rounded px-2 py-1 text-sm"
                    >
                      <option value="column">Column</option>
                      <option value="row">Row</option>
                    </select>
                  </td>
                  <td className="py-2 pr-3">
                    <select
                      value={t.compression}
                      onChange={e => updateTable(t.id, 'compression', e.target.value)}
                      className="border border-gray-200 rounded px-2 py-1 text-sm"
                    >
                      <option value="high">High (~8x)</option>
                      <option value="medium">Medium (~5x)</option>
                      <option value="low">Low (~3x)</option>
                      <option value="none">None (1x)</option>
                    </select>
                  </td>
                  <td className="py-2 text-center">
                    <button
                      onClick={() => removeTable(t.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors text-xl leading-none"
                      aria-label="Remove table"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={addTable}
          className="mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
        >
          + Add table
        </button>
      </section>

      {/* ── Calculate button ── */}
      <button
        onClick={calculate}
        className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium
                   hover:bg-gray-700 transition-colors text-sm tracking-wide"
      >
        Calculate memory requirements
      </button>

      {/* ── Results ── */}
      {results && (
        <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Memory estimate
          </h2>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Column store (compressed)', value: r(results.colCompressed), unit: 'GB' },
              { label: 'Total HANA footprint',       value: r(results.hanaCore),      unit: 'GB' },
              { label: 'Recommended server RAM',      value: results.recRAM,           unit: 'GB' },
            ].map(m => (
              <div key={m.label} className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2 leading-snug">{m.label}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {m.value}
                  <span className="text-sm font-normal text-gray-400 ml-1">{m.unit}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div className="divide-y divide-gray-100 text-sm">
            {[
              ['Column store (compressed)', r(results.colCompressed)],
              ['Delta merge buffer',        r(results.deltaGB)],
              ['Row store total',           r(results.totalRow)],
              ['Shared memory',             config.shared],
              ['Work memory',               config.work],
              ['OS reservation',            r(results.osGB)],
              ['HA buffer',                 r(results.haGB)],
            ].map(([label, val]) => (
              <div key={label as string} className="flex justify-between py-2">
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-800 font-medium">{val} GB</span>
              </div>
            ))}
            <div className="flex justify-between py-3 font-semibold text-gray-900">
              <span>Total raw requirement</span>
              <span>{r(results.totalRaw)} GB</span>
            </div>
          </div>

          {/* Recommendation box */}
          <div
            className={`rounded-lg p-4 text-sm border ${
              results.totalRaw <= 128
                ? 'bg-green-50 text-green-800 border-green-200'
                : results.totalRaw <= 512
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : 'bg-red-50 text-red-800 border-red-200'
            }`}
          >
            <p className="font-medium mb-1">
              {results.totalRaw <= 128
                ? '✓ Suitable for BTP HANA Cloud (flexible tier)'
                : results.totalRaw <= 512
                ? '⚠ Mid-range — consider HANA Cloud Premium'
                : '⚠ Large deployment — scale-out or certified appliance required'}
            </p>
            <p className="opacity-80 text-xs">
              {results.totalRaw <= 128
                ? 'HANA Cloud flexible tier is cost-efficient for this footprint.'
                : results.totalRaw <= 512
                ? 'HANA Cloud Premium or on-premise scale-up server recommended.'
                : 'Scale-out configuration or SAP-certified enterprise appliance needed.'}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}