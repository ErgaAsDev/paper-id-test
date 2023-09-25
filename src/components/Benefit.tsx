import { FunctionComponent } from "react";

const Benefit: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-white100 flex flex-col items-center justify-start pt-24 px-0 pb-[164px] gap-[48px] text-center text-29xl text-text-text-primary font-heading-heading-large">
      <div className="self-stretch flex flex-row items-start justify-center py-2.5 px-0">
        <b className="flex-1 relative leading-[82px]">
          Manfaat yang Bisa Anda Rasakan
        </b>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[10px] text-left text-7xl">
        <div className="w-[652px] flex flex-col items-start justify-start py-0 px-3.5 box-border relative gap-[48px]">
          <div className="absolute my-0 mx-[!important] top-[22px] left-[20.5px] box-border w-[3px] h-[316px] z-[0] border-r-[3px] border-solid border-artboard-border" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[1]">
            <img
              className="relative w-12 h-12"
              alt=""
              src="/iconpapercheck.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
              <b className="self-stretch relative leading-[125%]">
                One Time Integration
              </b>
              <div className="self-stretch relative text-xl leading-[150%]">
                Menyediakan solusi pembiayaan dengan cara yang nyaman dan
                efisien bagi bisnis melalui satu proses integrasi.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[2]">
            <img
              className="relative w-12 h-12"
              alt=""
              src="/iconpapercheck.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
              <b className="self-stretch relative leading-[125%]">
                Seamless User Experience
              </b>
              <div className="self-stretch relative text-xl leading-[150%]">
                Proses pengajuan pinjaman dengan lebih mudah tanpa harus
                berinteraksi atau menelepon pihak pemberi pinjaman.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[3]">
            <img
              className="relative w-12 h-12"
              alt=""
              src="/iconpapercheck.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
              <b className="self-stretch relative leading-[125%]">
                One Submission for Multiple Financial Institutions
              </b>
              <div className="self-stretch relative text-xl leading-[150%]">
                Cukup dengan satu kali pendaftaran, Anda dapat langsung diproses
                secara otomatis ke beberapa lembaga keuangan.
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[473px] h-[499px] object-cover sm:hidden"
          alt=""
          src="/group-22344@2x.png"
        />
      </div>
    </div>
  );
};

export default Benefit;
