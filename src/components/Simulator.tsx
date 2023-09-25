import { FunctionComponent } from "react";
import RegistrationFormOne from "./RegistrationFormOne";

const Simulator: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[40px] text-center text-12xl text-white100 font-heading-heading-large">
      <div className="flex flex-col items-center justify-start py-0 px-2">
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start gap-[8px] sm:items-start sm:justify-start">
            <div className="self-stretch relative leading-[150%] sm:text-5xl">
              Simulasikan Pembayaran Lebih Cepat dengan
            </div>
            <b className="self-stretch relative text-37xl leading-[150%] text-left sm:text-center sm:text-11xl">
              <p className="m-0">{`API Embeded `}</p>
              <p className="m-0">Financing Paper!</p>
            </b>
          </div>
        </div>
      </div>
      <RegistrationFormOne />
    </div>
  );
};

export default Simulator;
