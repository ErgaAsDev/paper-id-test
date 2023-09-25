import { FunctionComponent } from "react";
import HeroSection from "../components/HeroSection";
import ProcessSteps from "../components/ProcessSteps";
import Checkout from "../components/Checkout";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";

const PlayHereLocofy: FunctionComponent = () => {
  return (
    <div className="relative bg-white100 w-full flex flex-col items-start justify-start">
      <HeroSection />
      <ProcessSteps />
      <Checkout />
      <Benefit />
      <Footer />
    </div>
  );
};

export default PlayHereLocofy;
