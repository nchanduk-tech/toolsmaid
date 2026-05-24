export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'sap' | 'pdf' | 'converter' | 'developer' | 'finance';
  href: string;
  icon: string;
  tags: string[];
  isPro: boolean;
  isNew: boolean;
}

export interface CalculatorResult {
  label: string;
  value: number | string;
  unit?: string;
  highlight?: boolean;
}