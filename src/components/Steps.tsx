import { FunctionComponent } from "react";

const Steps: FunctionComponent = () => {
  return (
    <div className="w-[546px] flex flex-col items-start justify-start py-0 px-3 box-border gap-[17px]">
      <button className="cursor-pointer [border:none] p-[22px] bg-text-text-blue self-stretch rounded-3xs flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <b className="relative text-29xl leading-[135%] font-heading-heading-large text-white100 text-left">
            1
          </b>
          <div className="flex-1 relative text-xl leading-[135%] font-heading-heading-large text-white100 text-left">
            Isi data diri dan unggah dokumen legal Anda (SIUP, Akta Perusahaan,
            dll) pada halaman Pendaftaran.
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-[22px] bg-[transparent] self-stretch rounded-3xs flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <b className="relative text-29xl leading-[135%] font-heading-heading-large text-text-text-primary text-left">
            2
          </b>
          <div className="flex-1 relative text-xl leading-[135%] font-heading-heading-large text-text-text-primary text-left">
            Dapatkan persetujuan penawaran dari berbagai macam lembaga keuangan
            penyedia pembayaran.
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-[22px] bg-[transparent] self-stretch rounded-3xs flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
          <b className="relative text-29xl leading-[135%] font-heading-heading-large text-text-text-primary text-left">
            3
          </b>
          <div className="flex-1 relative text-xl leading-[135%] font-heading-heading-large text-text-text-primary text-left">
            Tanda tangan dokumen secara digital.
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-[22px] bg-[transparent] self-stretch rounded-3xs flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <b className="relative text-29xl leading-[135%] font-heading-heading-large text-text-text-primary text-left">
            4
          </b>
          <div className="flex-1 relative text-xl leading-[135%] font-heading-heading-large text-text-text-primary text-left">
            Selesai! Anda dapat langsung melakukan transaksi dengan Paper Usaha.
          </div>
        </div>
      </button>
    </div>
  );
};

export default Steps;
