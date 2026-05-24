export type ToolCategory = 'sap' | 'pdf' | 'developer' | 'converter' | 'finance';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  href: string;
  icon: string;
  tags: string[];
  isPro: boolean;
  isNew: boolean;
  isAI: boolean;
}

export const tools: Tool[] = [
  {
    id: 'hana-memory-calculator',
    name: 'SAP HANA Memory Calculator',
    description: 'Estimate column store, row store, delta merge buffer and get BTP tier recommendations instantly.',
    category: 'sap',
    href: '/tools/hana-memory-calculator',
    icon: '🧮',
    tags: ['SAP', 'HANA', 'BTP', 'Memory'],
    isPro: false,
    isNew: true,
    isAI: false,
  },
  {
    id: 'odata-query-builder',
    name: 'OData Query Builder',
    description: 'Build $filter, $expand, $select and $orderby queries visually without writing them manually.',
    category: 'sap',
    href: '/tools/odata-query-builder',
    icon: '🔗',
    tags: ['SAP', 'OData', 'API'],
    isPro: false,
    isNew: true,
    isAI: false,
  },
  {
    id: 'sap-error-explainer',
    name: 'SAP Error Code Explainer',
    description: 'Paste any SAP error and get a plain-English explanation with a recommended fix.',
    category: 'sap',
    href: '/tools/sap-error-explainer',
    icon: '⚠️',
    tags: ['SAP', 'Debugging', 'AI'],
    isPro: false,
    isNew: false,
    isAI: true,
  },
  {
    id: 'pdf-compressor',
    name: 'PDF Compressor',
    description: 'Reduce PDF file size without losing quality. No upload limits, no watermarks.',
    category: 'pdf',
    href: '/tools/pdf-compressor',
    icon: '📄',
    tags: ['PDF', 'Compress'],
    isPro: false,
    isNew: false,
    isAI: false,
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    description: 'Format, validate, and minify JSON. Spot errors instantly with line-level highlighting.',
    category: 'developer',
    href: '/tools/json-formatter',
    icon: '{ }',
    tags: ['JSON', 'Developer', 'Validator'],
    isPro: false,
    isNew: false,
    isAI: false,
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Live exchange rates for 150+ currencies with historical chart and trend analysis.',
    category: 'converter',
    href: '/tools/currency-converter',
    icon: '💱',
    tags: ['Currency', 'Finance', 'Live'],
    isPro: false,
    isNew: false,
    isAI: false,
  },
];

export const categories = [
  { id: 'all',       label: 'All tools',   icon: '⚡' },
  { id: 'sap',       label: 'SAP Suite',   icon: '⚙️' },
  { id: 'pdf',       label: 'PDF Tools',   icon: '📄' },
  { id: 'developer', label: 'Developer',   icon: '💻' },
  { id: 'converter', label: 'Converters',  icon: '🔄' },
  { id: 'finance',   label: 'Finance',     icon: '💰' },
];