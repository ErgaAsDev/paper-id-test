import { FunctionComponent } from "react";

const RegistrationFormFour: FunctionComponent = () => {
  return (
    <div className="w-[572px] flex flex-row items-start justify-start text-left text-sm text-text-text-secondary font-caption-2">
      <div className="flex-1 rounded-3xs [background:linear-gradient(110.88deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(24px)] flex flex-col items-start justify-start p-4">
        <div className="self-stretch rounded-3xs bg-white100 flex flex-col items-center justify-start py-[30px] px-6 relative gap-[18px]">
          <div className="self-stretch flex flex-row items-center justify-start z-[0] text-text-text-green-light">
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="flex-1 rounded-8xs flex flex-row items-center justify-center py-2 px-4 gap-[8px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img className="relative w-14 h-14" alt="" src="/icon1.svg" />
                  <b className="relative leading-[150%]">Isi Form</b>
                </div>
                <img
                  className="relative w-[35px] h-[3px]"
                  alt=""
                  src="/line.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[10px] text-white100">
                  <div className="relative w-6 h-6">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-palegoldenrod box-border w-6 h-6 border-[1px] border-solid border-lightgreen" />
                    <b className="absolute top-[7.2px] left-[8.26px] leading-[150%] flex items-center w-[7.47px] h-[9.6px]">
                      2
                    </b>
                  </div>
                  <b className="relative leading-[150%] text-lightgreen">
                    Pilih Penawaran
                  </b>
                </div>
                <img
                  className="relative w-[35px] h-[3px]"
                  alt=""
                  src="/line.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[10px] text-gainsboro">
                  <div className="relative w-6 h-6">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 box-border w-6 h-6 border-[1px] border-solid border-gainsboro" />
                    <b className="absolute top-[7.2px] left-[8.26px] leading-[150%] flex items-center w-[7.47px] h-[9.6px]">
                      3
                    </b>
                  </div>
                  <b className="relative leading-[150%] text-grey-45">
                    <p className="m-0">Tanda Tangan</p>
                    <p className="m-0">Dokumen</p>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[-26.57px] left-[calc(50%_-_80px)] w-40 h-40 overflow-hidden shrink-0 opacity-[0] z-[1]"
            alt=""
            src="/pulse-effect.svg"
          />
          <div className="self-stretch rounded-8xs bg-blue10 flex flex-col items-start justify-center p-2.5 gap-[5px] z-[2] text-center text-shades-of-blue-blue-high">
            <b className="relative leading-[135%] [transform:_rotate(-0.23deg)] [transform-origin:0_0]">
              Jumlah Pinjaman
            </b>
            <b className="self-stretch relative text-5xl leading-[135%] text-blue50 text-left">
              Rp 5.000.000
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center z-[3] text-center text-lg text-text-text-primary">
            <b className="relative leading-[135%]">
              Pilih penawaran untuk pinjaman Anda
            </b>
          </div>
          <div className="self-stretch rounded-lg bg-white100 shadow-[0px_0px_8px_rgba(61,_149,_210,_0.1)] flex flex-col items-start justify-start p-2.5 z-[4] border-[1px] border-solid border-artboard-border">
            <div className="self-stretch flex flex-col items-start justify-center p-2.5 gap-[16px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <input className="relative w-6 h-6" type="checkbox" />
                <img
                  className="relative w-[154px] h-6 object-cover"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <div className="relative rounded-[50%] bg-white100 box-border w-5 h-5 border-[1.5px] border-solid border-white100" />
                <div className="w-[156px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Jumlah Pinjaman</div>
                  <b className="relative leading-[135%] text-text-text-primary">
                    Rp 3.000.000,00
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Fee</div>
                  <b className="relative leading-[135%] text-text-text-primary">
                    1.1%
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white100 shadow-[0px_0px_8px_rgba(61,_149,_210,_0.1)] flex flex-col items-start justify-start p-2.5 z-[5] border-[1px] border-solid border-artboard-border">
            <div className="self-stretch flex flex-col items-start justify-center p-2.5 gap-[16px]">
              <div className="flex flex-row items-end justify-start gap-[12px]">
                <input className="relative w-6 h-6" type="checkbox" />
                <img
                  className="relative w-[86px] h-6 object-cover"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="relative rounded-[50%] bg-white100 box-border w-5 h-5 border-[1.5px] border-solid border-white100" />
                <div className="w-[156px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Jumlah Pinjaman</div>
                  <b className="relative leading-[135%] text-text-text-primary">
                    Rp 2.000.000,00
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Fee</div>
                  <b className="relative leading-[135%] text-text-text-primary">
                    1.1%
                  </b>
                </div>
              </div>
            </div>
          </div>
          <button
            className="[border:none] py-3 px-5 bg-grey30 rounded-81xl w-[214px] flex flex-row items-center justify-center box-border z-[6]"
            disabled={true}
          >
            <b className="relative text-base leading-[135%] font-caption-2 text-darkgrey30 text-left">
              Simpan
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormFour;
