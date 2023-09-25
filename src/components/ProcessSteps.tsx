import { FunctionComponent } from "react";
import Steps from "./Steps";
import Pendaftaran from "./Pendaftaran";

const ProcessSteps: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-white100 overflow-hidden flex flex-col items-center justify-start py-[54px] px-0 gap-[103px] text-center text-29xl text-text-text-primary font-heading-heading-large">
      <b className="self-stretch relative leading-[82px]">
        Proses Pendaftaran SmartCart Pay Later
      </b>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center text-left text-xl">
        <Steps />
        <Pendaftaran />
      </div>
    </div>
  );
};

export default ProcessSteps;
