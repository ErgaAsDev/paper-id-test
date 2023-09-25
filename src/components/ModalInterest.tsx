import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { setCheckoutReset, setSelectedOption } from "../slices/appSlice";
interface ModalProps {
  handleCancel: () => void;
}

const ModalInterest: FunctionComponent<ModalProps> = ({ handleCancel }) => {
  const dispatch = useDispatch();

  function handleCheckoutDone() {
    handleCancel();
    setSelectedOption("");
    setTimeout(() => {
      dispatch(setCheckoutReset());
    }, 200);
  }
  return (
    <div className="rounded-3xs [background:linear-gradient(132.62deg,_#1e79b7,_#004575)] w-80 flex flex-col items-center justify-center pt-6 px-4 pb-8 box-border gap-[24px] text-center text-mini text-white100 font-caption-2">
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <b className="self-stretch relative leading-[135%]">
          Siap untuk mencoba Paper.id?
        </b>
        <div className="self-stretch relative text-smi leading-[135%] opacity-[0.7]">
          Paper.id dapat membantu Anda mendapatkan pembayaran lebih cepat untuk
          bisnis Anda!
        </div>
      </div>
      <img
        className="relative w-[174px] h-[135px] object-cover"
        alt=""
        src="/Kerja-Sama2 1.svg"
      />
      <button
        onClick={handleCheckoutDone}
        className="cursor-pointer [border:none] py-2.5 px-6 bg-green50 self-stretch rounded-81xl flex flex-row items-center justify-center"
      >
        <div className="relative text-sm leading-[19px] font-caption-2 text-white100 text-left">
          Selesai
        </div>
      </button>
      <div className="self-stretch relative text-smi leading-[135%] opacity-[0.7]">
        <span>{`Hubungi kami `}</span>
        <b>0821-1767-9137</b>
      </div>
    </div>
  );
};

export default ModalInterest;
