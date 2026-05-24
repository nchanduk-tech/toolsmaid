import { Metadata } from 'next';
import ToolLayout from '@/components/tools/ToolLayout';
import HanaCalculator from './HanaCalculator';

export const metadata: Metadata = {
  title: 'SAP HANA Memory Calculator | ToolsMaid',
  description:
    'Free SAP HANA memory sizing calculator. Estimate column store compression, delta merge buffer, row store and get BTP HANA Cloud tier recommendations.',
  keywords: [
    'SAP HANA memory calculator',
    'HANA memory sizing tool',
    'BTP HANA Cloud sizing',
    'SAP HANA memory requirements',
  ],
  openGraph: {
    title: 'SAP HANA Memory Calculator',
    description: 'Estimate your SAP HANA memory requirements for free.',
    url: 'https://toolsmaid.com/tools/hana-memory-calculator',
    siteName: 'ToolsMaid',
    type: 'website',
  },
};

export default function HanaCalculatorPage() {
  return (
    <ToolLayout
      title="SAP HANA Memory Calculator"
      description="Estimate memory requirements including column store compression, delta merge buffer, and BTP tier recommendations."
      category="SAP Tools"
    >
      <HanaCalculator />
    </ToolLayout>
  );
}