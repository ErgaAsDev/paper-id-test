import { FunctionComponent } from "react";

const FormModal: FunctionComponent = () => {
  return (
    <div className="my-0 mx-[!important] absolute top-[calc(50%_-_206px)] left-[calc(50%_-_160px)] rounded-3xs [background:linear-gradient(132.62deg,_#1e79b7,_#004575)] w-80 flex flex-col items-center justify-center py-6 px-4 box-border gap-[24px] z-[7] text-center text-mini text-white100 font-caption-2">
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <b className="self-stretch relative leading-[135%]">
          Selamat, Limit Anda Sudah Aktif!
        </b>
        <div className="self-stretch relative text-smi leading-[135%] opacity-[0.7]">
          Anda sudah dapat melakukan transaksi di Paper.id menggunakan limit
          Paper Usaha.
        </div>
      </div>
      <img
        className="relative w-[198px] h-[154px] object-cover"
        alt=""
        src="/percepatan-pembayaran-2-1-1@2x.png"
      />
      <button className="cursor-pointer [border:none] py-2.5 px-6 bg-green50 self-stretch rounded-81xl flex flex-row items-center justify-center">
        <div className="relative text-sm leading-[19px] font-caption-2 text-white100 text-left">
          Ya, Saya Mengerti
        </div>
      </button>
      <div className="self-stretch relative text-smi leading-[135%] opacity-[0.7]">
        <span>{`Butuh bantuan? Hubungi kami `}</span>
        <b>{`0821-1767-9137 `}</b>
        <span>{`atau klik `}</span>
        <b>di sini</b>
      </div>
    </div>
  );
};

export default FormModal;
