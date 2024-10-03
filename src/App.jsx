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
import Footer from "./Components/Footer";
function App() {
  const images = [Marble1, Marble2, Marble3, Marble4];
  return (
    <>
      <div className="h-screen">
        <Header />
        <HeroSection />
        <div className="px-20 flex flex-col gap-y-20 mb-20">
          <AboutSection
            title={" Evinizin Konforunu Yeniden Tasarlıyoruz"}
            paragraph={
              " Klar Koltuk olarak, Koltuk Yenileme ve Döşeme, İskelet Yenileme, KoltukTamiri, Mobilya Boyama ve Kişiye Özel Tasarım hizmetlerimizle eski mobilyalarınızı hayalinizdeki tasarıma kavuşturuyor, evinizin tarzına en uygun çözümleri sunuyoruz. Hemen web sitemizi keşfedin, kaliteyi yakından deneyimleyin"
            }
          />
          <SectionHeader bg={true} text="HİZMETLERİMİZ" />
          <FeatureSections
            Img={Marble}
            Title={
              " Koltuklarınızı Modernleştirirken, Anılarınızı Özenle Koruyoruz."
            }
            Paragraph={
              " Yıpranmış ve eski koltuklarınızı alıp adeta yenilenmiş bir şekilde geri getiriyoruz. Bu sayede mobilyalarınızın ömrünü uzatırken, yeni alım masraflarından da kaçınmanızı sağlıyoruz. Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümleri sunarak hem konforunuzu hem de bütçenizi korur."
            }
            Button={"İletişime Geçin"}
          />
          <FeatureSections
            Img={Banner}
            Title={
              " Koltuklarınızı Modernleştirirken, Anılarınızı Özenle Koruyoruz."
            }
            Paragraph={
              " Yıpranmış ve eski koltuklarınızı alıp adeta yenilenmiş bir şekilde geri getiriyoruz. Bu sayede mobilyalarınızın ömrünü uzatırken, yeni alım masraflarından da kaçınmanızı sağlıyoruz. Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümleri sunarak hem konforunuzu hem de bütçenizi korur."
            }
            Button={"İletişime Geçin"}
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
