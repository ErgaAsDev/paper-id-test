import { FunctionComponent } from "react";
import Steps from "./Steps";
import { dataSteps } from "../helpers/dataSteps";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProcessSteps: FunctionComponent = () => {
  const { currentImg } = useSelector((state: RootState) => state.app);
  return (
    <div className="self-stretch font-lato bg-white100 overflow-hidden flex flex-col items-center justify-start py-[54px] px-0 gap-[103px] text-center text-29xl text-text-text-primary font-heading-heading-large">
      <b className="self-stretch relative leading-[82px]">
        Proses Pendaftaran SmartCart Pay Later
      </b>
      <div className="self-stretch flex flex-row flex-wrap gap-[100px] items-center justify-center text-left text-xl">
        <Steps />
        <img
          src={currentImg}
          alt=""
          className=" w-[600px] h-[500px] sm:w-[450px] sm:h-[350px]"
        />
      </div>
    </div>
  );
};

export default ProcessSteps;
