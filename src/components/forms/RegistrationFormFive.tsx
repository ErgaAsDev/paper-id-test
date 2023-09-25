import { FunctionComponent } from "react";

const RegistrationFormFive: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-start text-left text-sm text-text-text-primary font-caption-2">
      <div className="flex-1 rounded-3xs [background:linear-gradient(110.88deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(24px)] flex flex-col items-start justify-start p-4">
        <div className="self-stretch rounded-3xs bg-white100 flex flex-col items-center justify-start py-[30px] px-6 relative gap-[24px]">
          <div className="self-stretch flex flex-col items-center justify-center z-[0] text-center text-lg">
            <b className="relative leading-[135%]">
              Lihat Simulasi Pinjaman Anda
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start z-[1] text-text-text-green-light">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch rounded-8xs flex flex-row items-center justify-center py-2 px-4 gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img className="relative w-14 h-14" alt="" src="/icon1.svg" />
                  <b className="relative leading-[150%]">Isi Form</b>
                </div>
                <img
                  className="relative w-[35px] h-[3px]"
                  alt=""
                  src="/line.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img className="relative w-14 h-14" alt="" src="/icon1.svg" />
                  <b className="relative leading-[150%]">Pilih Penawaran</b>
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
                      3
                    </b>
                  </div>
                  <b className="relative leading-[150%] text-lightgreen">
                    <p className="m-0">Tanda Tangan</p>
                    <p className="m-0">Dokumen</p>
                  </b>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[-27px] left-[calc(50%_-_80px)] w-40 h-40 overflow-hidden shrink-0 opacity-[0] z-[2]"
            alt=""
            src="/pulse-effect.svg"
          />
          <b className="self-stretch relative text-base leading-[135%] z-[3]">
            Silahkan unggah tanda tangan Anda
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[4]">
            <div className="self-stretch hidden flex-row items-center justify-start gap-[6px]">
              <div className="flex flex-row items-start justify-start gap-[2px]">
                <b className="relative leading-[135%]">Label Text</b>
                <b className="relative leading-[135%] text-text-text-red">*</b>
              </div>
              <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/grid11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center">
              <div className="self-stretch rounded-md bg-artboard-surface-default overflow-hidden flex flex-col items-center justify-center p-8 border-[1px] border-dashed border-artboard-border-blue">
                <div className="flex flex-col items-center justify-start gap-[8px]">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/iconpaperupload1.svg"
                  />
                  <div className="flex flex-col items-center justify-start gap-[8px]">
                    <b className="relative leading-[135%] hidden">
                      Headline text helper
                    </b>
                    <div className="relative text-smi leading-[135%] text-text-text-secondary">
                      Unggah file Anda di sini
                    </div>
                    <button className="cursor-pointer py-3 px-4 bg-[transparent] rounded-3xl box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-artboard-border-blue">
                      <div className="flex flex-row items-center justify-start gap-[6px]">
                        <div className="w-4 h-4 overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                          <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                            <img
                              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/grid12.svg"
                            />
                          </div>
                        </div>
                        <b className="relative text-sm leading-[135%] font-caption-2 text-artboard-border-blue text-center">
                          Unggah File
                        </b>
                        <div className="w-4 h-4 overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                          <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                            <img
                              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/grid12.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-smi leading-[135%] text-text-text-secondary text-left">
                *Ukuran maksimum 10MB
              </div>
            </div>
          </div>
          <button
            className="[border:none] py-3 px-5 bg-grey30 rounded-81xl w-[214px] flex flex-row items-center justify-center box-border z-[5]"
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

export default RegistrationFormFive;
