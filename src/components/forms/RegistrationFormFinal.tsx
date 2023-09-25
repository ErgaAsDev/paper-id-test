import { FunctionComponent } from "react";
import FormModal from "./FormModal";

const RegistrationFormFinal: FunctionComponent = () => {
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
              <div className="self-stretch rounded-8xs flex flex-row items-center justify-center py-2 px-4 gap-[16px]">
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
                    src="/grid3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center">
              <div className="self-stretch rounded-md bg-white100 overflow-hidden flex flex-col items-center justify-center py-6 px-8 relative gap-[10px] border-[1px] border-dashed border-artboard-border-blue">
                <img
                  className="relative w-[142px] h-[142px] object-cover z-[0]"
                  alt=""
                  src="/image-1@2x.png"
                />
                <b className="relative leading-[135%] hidden z-[1]">
                  Headline text helper
                </b>
                <div className="flex flex-row items-start justify-start gap-[10px] z-[2] text-artboard-border-blue">
                  <div className="rounded-3xl box-border h-[38px] flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-artboard-border-blue">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="w-4 h-4 overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                        <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/grid4.svg"
                          />
                        </div>
                      </div>
                      <b className="relative leading-[135%]">Ubah File</b>
                      <div className="w-4 h-4 overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                        <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/grid4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl h-[38px] hidden flex-row items-center justify-center py-3 px-4 box-border">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <div className="w-4 h-4 overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                        <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/grid4.svg"
                          />
                        </div>
                      </div>
                      <b className="relative leading-[135%]">Hapus File</b>
                      <div className="w-4 h-4 overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                        <div className="self-stretch flex-1 rounded-sm bg-icon-icon-lower-emphasis flex flex-col items-center justify-center">
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/grid4.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute my-0 mx-[!important] top-[24px] left-[450px] rounded-81xl w-[18px] h-[18px] overflow-hidden shrink-0 z-[3]"
                  alt=""
                  src="/icon2.svg"
                />
              </div>
              <div className="self-stretch relative text-smi leading-[135%] text-text-text-secondary text-left">
                *Ukuran maksimum 10MB
              </div>
            </div>
          </div>
          <div className="rounded-81xl bg-green50 w-[214px] flex flex-row items-center justify-center py-3 px-5 box-border z-[5] text-base text-white100">
            <b className="relative leading-[135%]">Simpan</b>
          </div>
          <div className="absolute my-0 mx-[!important] h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-darkslategray z-[6]" />
          <FormModal />
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormFinal;
