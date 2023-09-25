import { FunctionComponent } from "react";
import RegistrationFormOne from "./forms/RegistrationFormOne";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import RegistrationFormTwo from "./forms/RegistrationFormTwo";
import RegistrationFormThree from "./forms/RegistrationFormThree";
import RegistrationFormFour from "./forms/RegistrationFormFour";
import RegistrationFormFive from "./forms/RegistrationFormFive";
import RegistrationFormFinal from "./forms/RegistrationFormFinal";

const Simulator: FunctionComponent = () => {
  const { isFormOpen, isOpacityTransition } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();
  return (
    <div className="flex font-lato flex-row flex-wrap items-start justify-center gap-[40px] text-center text-12xl text-white font-heading-heading-large">
      <div className="flex flex-col items-center justify-start py-0 px-2">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[8px] sm:items-start sm:justify-start">
            <div className="self-stretch relative leading-[150%] sm:text-5xl">
              Simulasikan Pembayaran Lebih Cepat dengan
            </div>
            <b className="self-stretch relative text-37xl leading-[150%] text-left sm:text-center sm:text-11xl">
              <p className="m-0">API Embeded</p>
              <p className="m-0">Financing Paper!</p>
            </b>
          </div>
        </div>
      </div>
      {isFormOpen.one ? (
        <RegistrationFormOne />
      ) : isFormOpen.two ? (
        <div
          className={`transition-opacity duration-300 ${
            isOpacityTransition ? "opacity-100" : "opacity-0"
          }`}
        >
          <RegistrationFormTwo />
        </div>
      ) : isFormOpen.three ? (
        <RegistrationFormThree />
      ) : isFormOpen.four ? (
        <div
          className={`transition-opacity duration-300 ${
            isOpacityTransition ? "opacity-100" : "opacity-0"
          }`}
        >
          <RegistrationFormFour />
        </div>
      ) : isFormOpen.five ? (
        <RegistrationFormFinal />
      ) : (
        ""
      )}
    </div>
  );
};

export default Simulator;
