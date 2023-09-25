import { FunctionComponent } from "react";

const RegistrationFormOne: FunctionComponent = () => {
  return (
    <div className="w-[572px] flex flex-row items-start justify-center py-0 px-2 box-border text-left text-base text-text-text-primary font-heading-heading-large">
      <div className="flex-1 rounded-3xs [background:linear-gradient(110.88deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(24px)] flex flex-col items-center justify-start p-4 relative gap-[8px]">
        <div className="self-stretch rounded-3xs bg-white100 flex flex-col items-center justify-start py-[30px] px-6 relative gap-[24px] z-[0]">
          <div className="self-stretch flex flex-col items-center justify-center z-[0] text-center text-lg">
            <b className="relative leading-[135%]">
              Lihat Simulasi Pinjaman Anda
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[1]">
            <b className="relative leading-[135%]">Jumlah Pinjaman</b>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-text-text-blue">
              <div className="self-stretch flex flex-row items-center justify-between py-[5px] px-2.5">
                <b className="flex-1 relative leading-[135%]">Rp 5.000.000</b>
              </div>
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-artboard-border" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[2]">
            <b className="relative leading-[135%]">Estimasi Fee</b>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-text-text-blue">
              <div className="self-stretch flex flex-row items-center justify-between py-[5px] px-2.5">
                <b className="flex-1 relative leading-[135%]">1,1%</b>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-green50 rounded-81xl w-[214px] flex flex-row items-center justify-center box-border z-[3]">
            <b className="relative text-base leading-[135%] font-heading-heading-large text-white100 text-left">
              Daftar Sekarang!
            </b>
          </button>
          <img
            className="absolute my-0 mx-[!important] top-[205px] left-[calc(50%_-_80px)] w-40 h-40 overflow-hidden shrink-0 z-[4]"
            alt=""
            src="/pulse-effect.svg"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[381px] left-[calc(50%_-_194px)] flex flex-row items-center justify-center pt-0 px-2 pb-4 gap-[8px] z-[1] text-text-text-tertiary">
          <img className="relative w-6 h-6" alt="" src="/arrowup-sm1.svg" />
          <b className="relative leading-[135%]">
            Anda dapat berinteraksi pada tampilan ini
          </b>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[-118px] left-[-181.5px] w-[952px] h-[840px] z-[2]"
          alt=""
          src="/decor.svg"
        />
      </div>
    </div>
  );
};

export default RegistrationFormOne;
