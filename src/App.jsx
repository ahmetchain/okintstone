import React, { useRef } from "react";
import AboutSection from "./Components/AboutSection";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import SectionHeader from "./Components/SectionHeader";
import FeatureSections from "./Components/FeatureSection";
import Banner from "./Assets/Marblebanyo.jpg";
import Marble from "./Assets/Marble.webp";
import Marble1 from "./Assets/Marble1.jpg";
import Marble2 from "./Assets/Marble2.jpg";
import Marble3 from "./Assets/Marble3.webp";
import Marble4 from "./Assets/Marble4.jpg";
import InfiniteCarousel from "./Components/InfiniteSlider";
import FooterMarble from "./Assets/FooterMarble.webp";
import Footer from "./Components/Footer";
function App() {
  const images = [FooterMarble, Marble2, Marble3, Marble4];
  const servicesRef = useRef(null);
  const scrollToRef = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="h-screen">
        <Header />
        <HeroSection scroll={scrollToRef} />
        <div className="px-20 flex flex-col gap-y-20 mb-20">
          <AboutSection
            title={" Nature's Elegance Perfectly Crafted for Your Projects"}
            paragraph={
              " At OKINT Stone, we take pride in being a reliable source of high-quality marble and natural stones. Our products are crafted to seamlessly meet the needs of construction and design projects, adding beauty and value with every slab, granite, and flooring solution."
            }
          />
          <div ref={servicesRef}>
            <SectionHeader
              bg={true}
              text="OUR SERVICES
"
            />
          </div>

          <FeatureSections
            Img={Marble}
            Title={" High-Quality Marble for Lasting Impressions"}
            Paragraph={
              " Our carefully selected marble is the perfect blend of beauty and durability. Enhance the aesthetics of your space with our premium-quality stones, ensuring lasting elegance for every project."
            }
            Button={"Contact Us"}
          />
          <FeatureSections
            Img={Banner}
            Title={" Expertly Crafted Natural Stone Solutions"}
            Paragraph={
              " OKINT Stone offers a wide range of natural stone products tailored to meet the needs of architects and designers. From stunning slabs to elegant flooring, we provide solutions that add value and sophistication to any space."
            }
            Button={"Contact Us"}
            Reverse={true}
            bg={true}
          />
        </div>
        <div className="px-10 mt-10 lg:mt-0 mb-10 lg:mb-0">
          <InfiniteCarousel images={images} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
