import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center pt-[30px] px-0 pb-0 gap-[80px] text-left text-lg text-white100 font-heading-heading-large lg:items-center lg:justify-center lg:pl-10 lg:pr-10 lg:box-border sm:items-center sm:justify-center">
      <img
        className="relative w-[114.52px] h-[39.96px] overflow-hidden shrink-0"
        alt=""
        src="/logo.svg"
      />
      <div className="w-[937.93px] flex flex-row items-center justify-center gap-[116px]">
        <div className="hidden flex-row items-center justify-end lg:flex sm:hidden">
          <b className="relative">{`SERVICES `}</b>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[32px] lg:hidden">
          <b className="relative">PRODUK</b>
          <b className="relative">SOLUSI BISNIS</b>
          <b className="relative">CARA KERJA</b>
          <b className="relative">HARGA</b>
          <b className="relative">PERUSAHAAN</b>
        </div>
        <div className="flex-1 flex flex-row items-start justify-end gap-[13px] text-sm text-green50 sm:flex">
          <div className="rounded-81xl box-border w-[93.93px] flex flex-row items-center justify-center py-3 px-5 border-[1px] border-solid border-green50 sm:hidden">
            <div className="relative">LOGIN</div>
          </div>
          <div className="rounded-81xl bg-green50 flex flex-row items-center justify-center py-3 px-5 text-white100 sm:hidden">
            <div className="relative">DAFTAR</div>
          </div>
          <img
            className="relative w-10 h-[36.36px] hidden sm:flex"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
