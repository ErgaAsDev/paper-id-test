import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { openForm, setOpacityTransition } from "../../slices/appSlice";

const RegistrationFormThree: FunctionComponent = () => {
  const dispatch = useDispatch();
  const handleOpenForm = (formName: any) => {
    dispatch(openForm(formName)); // Dispatch the action to open the form

    // Add a short delay before setting opacity to 1 to trigger the transition
    setTimeout(() => {
      dispatch(setOpacityTransition(true));
    }, 300); // Adjust the delay as needed
  };
  return (
    <div className="flex z-10 flex-row items-start justify-start text-left text-xs text-text-text-primary font-caption-2">
      <div className="flex-1 rounded-3xs [background:linear-gradient(110.88deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(24px)] flex flex-col items-start justify-start p-4">
        <div className="self-stretch rounded-3xs bg-white100 flex flex-col items-center justify-start py-[30px] px-6 relative gap-[18px]">
          <div className="self-stretch flex flex-row items-center justify-start z-[0] text-sm text-gainsboro">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch rounded-8xs flex flex-row items-center justify-center py-2 px-4 gap-[16px]">
                <div className="flex flex-row items-center justify-start gap-[10px] text-white100">
                  <div className="relative w-6 h-6">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-palegoldenrod box-border w-6 h-6 border-[1px] border-solid border-lightgreen" />
                    <b className="absolute top-[7.2px] left-[8.26px] leading-[150%] flex items-center w-[7.47px] h-[9.6px]">
                      1
                    </b>
                  </div>
                  <b className="relative leading-[150%] text-lightgreen">
                    Isi Form
                  </b>
                </div>
                <img
                  className="relative w-[35px] h-[3px]"
                  alt=""
                  src="/line.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="relative w-6 h-6">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 box-border w-6 h-6 border-[1px] border-solid border-gainsboro" />
                    <b className="absolute top-[7.2px] left-[8.26px] leading-[150%] flex items-center w-[7.47px] h-[9.6px]">
                      2
                    </b>
                  </div>
                  <b className="relative leading-[150%] text-grey-45">
                    Pilih Penawaran
                  </b>
                </div>
                <img
                  className="relative w-[35px] h-[3px]"
                  alt=""
                  src="/line.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[10px]">
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
          <div className="self-stretch flex flex-col items-start justify-start z-[1] text-base">
            <b className="relative leading-[135%]">Data Diri Lengkap</b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[2]">
            <b className="self-stretch relative leading-[150%]">Nama Lengkap</b>
            <div className="self-stretch flex flex-col items-center justify-center text-sm">
              <div className="self-stretch flex flex-col items-start justify-center">
                <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                  <div className="flex-1 relative leading-[150%]">
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
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[3]">
            <b className="self-stretch relative leading-[150%]">
              Alamat Lengkap
            </b>
            <div className="self-stretch flex flex-col items-center justify-center text-sm">
              <div className="self-stretch flex flex-col items-start justify-center">
                <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                  <div className="flex-1 relative leading-[150%]">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[4]">
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">
                Tanggal Lahir
              </b>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border gap-[10px]">
                    <div className="flex-1 relative leading-[150%]">
                      30-01-97
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon3.svg"
                    />
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">No. Telp</b>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[150%]">
                      08123456789
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">
                No. Telp Perusahaan
              </b>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[150%]">
                      021998997
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[5]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">No. KTP</b>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[150%]">
                      327123456789
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">No. NPWP</b>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[150%]">
                      990998997996
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">
                Jumlah Pinjaman
              </b>
              <div className="self-stretch flex flex-col items-center justify-center text-sm text-darkgrey-50">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                    <div className="flex-1 relative leading-[150%]">
                      Rp 5.000.000
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                    alt=""
                    src="/underline3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[6]">
            <b className="self-stretch relative leading-[150%]">
              Nama Perusahaan
            </b>
            <div className="self-stretch flex flex-col items-center justify-center text-sm text-darkgrey-50">
              <div className="self-stretch flex flex-col items-start justify-center">
                <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                  <div className="flex-1 relative leading-[150%]">
                    PT Pembangunan Sejahtera
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
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[7]">
            <b className="self-stretch relative leading-[150%]">
              Alamat Perusahaan
            </b>
            <div className="self-stretch flex flex-col items-center justify-center text-sm">
              <div className="self-stretch flex flex-col items-start justify-center">
                <div className="self-stretch bg-blue10 h-[27px] flex flex-row items-center justify-start py-[5px] px-2.5 box-border">
                  <div className="flex-1 relative leading-[150%]">
                    Jl Otto Iskandardinata 30, DKI Jakarta
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
          <div className="self-stretch flex flex-col items-start justify-start z-[8] text-base">
            <b className="relative leading-[135%]">Unggah Dokumen Pribadi</b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[9] text-sm">
            <div className="flex-1 rounded-3xs flex flex-col items-start justify-center p-2.5 gap-[8px] border-[1px] border-solid border-shades-of-blue-blue-low">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <div className="rounded-8xs w-[72px] h-12 flex flex-row items-center justify-center p-2.5 box-border bg-[url('/public/frame-26@3x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/component-1.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <b className="self-stretch relative leading-[150%]">
                    Foto e-KTP
                  </b>
                  <div className="self-stretch relative text-xs leading-[135%] text-icon-icon-lower-emphasis">
                    ktp_saya.jpg
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-81xl flex flex-row items-center justify-center py-2 px-5 text-blue50 border-[1px] border-solid border-blue50">
                <div className="relative">Ubah</div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs flex flex-col items-start justify-center p-2.5 gap-[8px] border-[1px] border-solid border-shades-of-blue-blue-low">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative rounded-8xs w-[72px] h-12 object-cover"
                  alt=""
                  src="/image-11@2x.png"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <b className="self-stretch relative leading-[150%]">
                    Dokumen Legal
                  </b>
                  <div className="self-stretch relative text-xs leading-[135%] text-icon-icon-lower-emphasis">
                    legal_document_final.pdf
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-81xl flex flex-row items-center justify-center py-2 px-5 text-blue50 border-[1px] border-solid border-blue50">
                <div className="relative">Ubah</div>
              </div>
            </div>
          </div>
          <div className="rounded-81xl bg-green50 w-[214px] flex flex-row items-center justify-center py-3 px-5 box-border z-[10] text-base text-white100">
            <b className="relative leading-[135%]">Simpan</b>
          </div>
          <img
            className="absolute my-0 mx-[!important] bottom-[-27px] left-[calc(50%_-_80px)] w-40 h-40 overflow-hidden shrink-0 opacity-[0] z-[11]"
            alt=""
            src="/pulse-effect.svg"
          />
          <div className="absolute my-0 mx-[!important] h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-darkslategray z-[12]" />
          <div className="my-0 mx-[!important] absolute top-[calc(50%_-_206.5px)] left-[calc(50%_-_160px)] rounded-3xs [background:linear-gradient(132.62deg,_#1e79b7,_#004575)] w-80 flex flex-col items-center justify-center py-6 px-4 box-border gap-[24px] z-[13] text-center text-mini text-white100">
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <b className="self-stretch relative leading-[135%]">
                Pengajuan Anda Berhasil Diajukan!
              </b>
              <div className="self-stretch relative text-smi leading-[135%] opacity-[0.7]">
                Data pengajuan Anda telah kami terima dan akan diproses dalam
                waktu 2x24 jam.
              </div>
            </div>
            <img
              className="relative w-[196px] h-[154px] overflow-hidden shrink-0"
              alt=""
              src="/csillustration-1.svg"
            />
            <button
              onClick={() => handleOpenForm("four")}
              className="cursor-pointer [border:none] py-2.5 px-6 bg-green50 self-stretch rounded-81xl flex flex-row items-center justify-center"
            >
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
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormThree;
