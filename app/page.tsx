import HeroSection from '@/components/home/HeroSection';
import WhoAmI from '@/components/home/WhoAmI';
import FlourishDivider from '@/components/ui/FlourishDivider';
import FAQSection from '@/components/home/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
        <HeroSection />
        <WhoAmI />
      </div>

      <FlourishDivider />

      <FAQSection />
    </main>
  );
}