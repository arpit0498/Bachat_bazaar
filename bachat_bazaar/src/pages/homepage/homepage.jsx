import "./homepage.css"
import { Footer, Header } from "../../components/index.js"
import { FeatureSection } from "./sub components/featured-section/featured-section.jsx";
import { BestSellerSection } from "./sub components/best-seller-section/best-seller-section.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <FeatureSection />
      <BestSellerSection />
      <Footer />


    </>
  );
}

export default HomePage; 