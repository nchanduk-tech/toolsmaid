import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ToolsGrid from '@/components/home/ToolsGrid';
import FooterCTA from '@/components/home/FooterCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolsGrid />
      <FooterCTA />
    </>
  );
}