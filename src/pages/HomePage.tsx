import AboutSection from "../components/AboutSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
    </div>
  );
};

export default HomePage;
