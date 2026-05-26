export type ToolCategory =
  | 'sap'
  | 'pdf'
  | 'developer'
  | 'converter'
  | 'finance'
  | 'ai';

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
  gradient: string;
}

export const tools: Tool[] = [
  {
    id: 'hana-memory-calculator',
    name: 'SAP HANA Memory Calculator',
    description:
      'Estimate row store, column store, compression ratio, and memory sizing with intelligent SAP HANA projections.',
    category: 'sap',
    href: '/tools/hana-memory-calculator',
    icon: '🧮',
    tags: ['SAP', 'HANA', 'BTP'],
    isPro: false,
    isNew: true,
    isAI: false,
    gradient: 'from-emerald-50 to-teal-100',
  },

  {
    id: 'odata-query-builder',
    name: 'OData Query Builder',
    description:
      'Visually generate complex OData filters, expand queries, sorting, and API-ready parameters instantly.',
    category: 'sap',
    href: '/tools/odata-query-builder',
    icon: '🔗',
    tags: ['SAP', 'OData', 'API'],
    isPro: false,
    isNew: true,
    isAI: false,
    gradient: 'from-cyan-50 to-blue-100',
  },

  {
    id: 'sap-error-code-explainer',
    name: 'SAP Error Code Explainer',
    description:
      'Instantly decode SAP errors into simple explanations with debugging guidance and recommended fixes.',
    category: 'sap',
    href: '/tools/sap-error-code-explainer',
    icon: '⚠️',
    tags: ['SAP', 'AI'],
    isPro: false,
    isNew: false,
    isAI: true,
    gradient: 'from-amber-50 to-orange-100',
  },

  {
    id: 'pdf-compressor',
    name: 'PDF Compressor',
    description:
      'Compress PDFs without quality loss using fast browser-based optimization and smart compression.',
    category: 'pdf',
    href: '/tools/pdf-compressor',
    icon: '📄',
    tags: ['PDF', 'Compress'],
    isPro: false,
    isNew: false,
    isAI: false,
    gradient: 'from-rose-50 to-pink-100',
  },

  {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    description:
      'Beautify, validate, repair, and inspect JSON structures with instant syntax error detection.',
    category: 'developer',
    href: '/tools/json-formatter',
    icon: '{ }',
    tags: ['JSON', 'Developer'],
    isPro: false,
    isNew: false,
    isAI: false,
    gradient: 'from-slate-100 to-gray-200',
  },

  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description:
      'Convert currencies with live exchange rates, historical insights, and real-time market trends.',
    category: 'converter',
    href: '/tools/currency-converter',
    icon: '💱',
    tags: ['Currency', 'Finance'],
    isPro: false,
    isNew: false,
    isAI: false,
    gradient: 'from-green-50 to-lime-100',
  },

  {
    id: 'prompt-formatter',
    name: 'AI Prompt Formatter',
    description:
      'Structure and optimize prompts for ChatGPT, Claude, Gemini, and modern AI workflows.',
    category: 'ai',
    href: '/tools/prompt-formatter',
    icon: '✨',
    tags: ['AI', 'Prompt'],
    isPro: false,
    isNew: true,
    isAI: true,
    gradient: 'from-violet-50 to-fuchsia-100',
  },

  {
    id: 'sql-query-explainer',
    name: 'SQL Query Explainer',
    description:
      'Understand SQL queries instantly with human-readable breakdowns and optimization insights.',
    category: 'ai',
    href: '/tools/sql-query-explainer',
    icon: '🧠',
    tags: ['SQL', 'AI'],
    isPro: false,
    isNew: true,
    isAI: true,
    gradient: 'from-indigo-50 to-blue-100',
  },

  {
    id: 'code-explainer',
    name: 'Code Explainer',
    description:
      'Paste code snippets and receive clean explanations, logic walkthroughs, and debugging help.',
    category: 'ai',
    href: '/tools/code-explainer',
    icon: '💻',
    tags: ['Code', 'AI'],
    isPro: false,
    isNew: true,
    isAI: true,
    gradient: 'from-purple-50 to-indigo-100',
  },
];

export const categories = [
  {
    id: 'all',
    label: 'All Tools',
    icon: '⚡',
  },
  {
    id: 'sap',
    label: 'SAP Suite',
    icon: '⚙️',
  },
  {
    id: 'pdf',
    label: 'PDF Tools',
    icon: '📄',
  },
  {
    id: 'developer',
    label: 'Developer',
    icon: '💻',
  },
  {
    id: 'converter',
    label: 'Converters',
    icon: '🔄',
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: '💰',
  },
  {
    id: 'ai',
    label: 'AI Tools',
    icon: '✨',
  },
];