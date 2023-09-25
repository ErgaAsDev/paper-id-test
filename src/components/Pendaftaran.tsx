import { FunctionComponent } from "react";

const Pendaftaran: FunctionComponent = () => {
  return (
    <div className="w-[691px] h-[616px] overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[60px] px-0 pb-0 box-border text-left text-xl text-text-text-primary font-heading-heading-large sm:hidden">
      <div className="flex-1 shadow-[0px_0px_40px_rgba(19,_63,_93,_0.1)] flex flex-row items-start justify-start py-0 px-10">
        <div className="flex-1 rounded-3xs [background:linear-gradient(110.88deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(24px)] flex flex-col items-start justify-start p-4">
          <div className="self-stretch rounded-3xs bg-white100 flex flex-col items-center justify-start py-[30px] px-6 relative gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-center z-[0]">
              <b className="relative leading-[135%]">Data Diri Lengkap</b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[1] text-sm">
              <b className="relative leading-[135%]">Nama Lengkap</b>
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[19px]">
                      Priska Aprilia
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[2] text-sm">
              <b className="self-stretch relative leading-[135%]">
                Alamat Lengkap
              </b>
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[19px]">
                      Jl. Sunter Garden Raya No.5D, RT.6/RW.12
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[3]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="relative rounded-11xl bg-lightsteelblue w-[77px] h-2.5 opacity-[0.8]" />
                <div className="self-stretch relative rounded-11xl bg-shades-of-blue-blue-low h-2.5 opacity-[0.8]" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                <div className="relative rounded-11xl bg-lightsteelblue w-[77px] h-2.5 opacity-[0.8]" />
                <div className="self-stretch relative rounded-11xl bg-shades-of-blue-blue-low h-2.5 opacity-[0.8]" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center z-[4]">
              <b className="relative leading-[135%]">Unggah Dokumen Pribadi</b>
            </div>
            <div className="self-stretch rounded-3xs flex flex-col items-start justify-center p-2.5 z-[5] border-[1px] border-solid border-shades-of-blue-blue-low">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="rounded-8xs bg-blue-20 w-[72px] h-12 flex flex-row items-center justify-center p-2.5 box-border">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconpaperfile.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 gap-[12px]">
                  <div className="relative rounded-11xl bg-lightsteelblue w-[77px] h-2.5 opacity-[0.8]" />
                  <div className="relative rounded-11xl bg-shades-of-blue-blue-low w-[131px] h-2.5 opacity-[0.8]" />
                </div>
                <div className="rounded-81xl box-border w-[75px] flex flex-row items-center justify-center py-3 px-5 border-[1px] border-solid border-blue50">
                  <div className="flex-1 relative rounded-11xl bg-shades-of-blue-blue-high h-2 opacity-[0.8]" />
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] w-[78.15%] top-[365px] right-[-9.67%] left-[31.52%] max-w-full overflow-hidden h-40 shrink-0 object-cover z-[6]"
              alt=""
              src="/button-daftar-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pendaftaran;
