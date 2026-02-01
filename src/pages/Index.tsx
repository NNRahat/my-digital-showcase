import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProductsSection from "@/components/ProductsSection";
import VideosSection from "@/components/VideosSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <AchievementsSection />
        <ProductsSection />
        <VideosSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
