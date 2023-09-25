import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import Simulator from "./Simulator";

const HeroSection: FunctionComponent = () => {
  return (
    <div className="self-stretch font-lato [background:linear-gradient(190.6deg,_#4195d5_8.79%,_#3279ae_48.41%,_#26628e_64.15%,_#133f5d)] h-[1139px] lg:h-[1400px] flex flex-col items-center justify-start gap-[120px] text-left text-lg text-white100 font-heading-heading-large">
      <Navbar />
      <Simulator />
    </div>
  );
};

export default HeroSection;
