import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openForm } from "../../slices/appSlice";
import { RootState } from "../../store";

const RegistrationFormTwo: FunctionComponent = () => {
  const { isFormOpen } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    nama: "",
    alamat: "",
    tanggalLahir: "",
    nomorTelponPribadi: 123142,
    nomorTelponPerusahaan: 123142,
    ktp: 123,
    npwp: 123,
    jumlahPinjaman: 5000000,
    namaPerusahaan: "",
    alamatPerusahaan: "",
  });

  const onChangeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const isFormValid = Object.values(formValues).every((value) => !!value);

  return (
    <div className="flex flex-row items-start justify-start text-left text-xs text-text-text-primary">
      <div className="rounded-3xs px-4 [background:linear-gradient(110.88deg,_rgba(255,_255,_255,_0.62),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(24px)] flex flex-col items-start justify-start p-4">
        <div className="self-stretch rounded-3xs bg-white100 flex flex-col items-center justify-start py-[30px] px-8 relative gap-[18px]">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start z-[0] text-sm text-gainsboro">
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
            <input
              value={formValues.nama}
              className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
              placeholder="cth. Priska Aprilia"
              type="text"
              name="nama"
              onChange={onChangeHandler}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[3]">
            <b className="self-stretch relative leading-[150%]">
              Alamat Lengkap
            </b>
            <input
              value={formValues.alamat}
              className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
              placeholder="cth. Jl. Sunter Garden Raya No.5D, RT.6/RW.12"
              type="text"
              name="alamat"
              onChange={onChangeHandler}
            />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] z-[4]">
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">
                Tanggal Lahir
              </b>
              <input
                value={formValues.tanggalLahir}
                className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
                placeholder="DD/MM/YYYY"
                type="text"
                name="tanggalLahir"
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">No. Telp</b>
              <input
                value={formValues.nomorTelponPribadi}
                className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
                placeholder="cth. 08123456789"
                type="number"
                name="nomorTelponPribadi"
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">
                No. Telp Perusahaan
              </b>
              <input
                value={formValues.nomorTelponPerusahaan}
                className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
                placeholder="cth. 021998997"
                type="number"
                name="nomorTelponPerusahaan"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] z-[5]">
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">No. KTP</b>
              <input
                value={formValues.ktp}
                className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
                placeholder="cth. 327123456789"
                type="number"
                name="ktp"
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">No. NPWP</b>
              <input
                value={formValues.npwp}
                className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
                placeholder="cth. 990998997996"
                type="number"
                name="npwp"
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <b className="self-stretch relative leading-[150%]">
                Jumlah Pinjaman
              </b>
              <input
                value={formValues.jumlahPinjaman}
                className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
                placeholder="Rp 0"
                type="number"
                name="jumlahPinjaman"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[6]">
            <b className="self-stretch relative leading-[150%]">
              Nama Perusahaan
            </b>
            <input
              value={formValues.namaPerusahaan}
              className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
              placeholder="cth. PT Pembangunan Sejahtera"
              type="text"
              name="namaPerusahaan"
              onChange={onChangeHandler}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[5px] z-[7]">
            <b className="self-stretch relative leading-[150%]">
              Alamat Perusahaan
            </b>
            <input
              value={formValues.alamatPerusahaan}
              className="[border:none] font-caption-2 text-sm bg-[transparent] self-stretch flex flex-col items-center justify-center"
              placeholder="cth. Jl Otto Iskandardinata 30, DKI Jakarta"
              type="text"
              name="alamatPerusahaan"
              onChange={onChangeHandler}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start z-[8] text-base">
            <b className="relative leading-[135%]">Unggah Dokumen Pribadi</b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[9] text-sm">
            <div className="flex-1 rounded-3xs flex flex-col items-start justify-center p-2.5 gap-[8px] border-[1px] border-solid border-shades-of-blue-blue-low">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <div className="rounded-8xs bg-blue-20 w-[72px] h-12 flex flex-row items-center justify-center p-2.5 box-border">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/component-1.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <b className="self-stretch relative leading-[150%]">
                    Foto e-KTP
                  </b>
                  <div className="self-stretch relative text-xs leading-[135%] text-icon-icon-lower-emphasis">
                    Foto belum diunggah
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-2 px-5 bg-[transparent] self-stretch rounded-81xl flex flex-row items-center justify-center border-[1px] border-solid border-blue50">
                <div className="relative text-sm font-caption-2 text-blue50 text-left">
                  Unggah
                </div>
              </button>
            </div>
            <div className="flex-1 rounded-3xs flex flex-col items-start justify-center p-2.5 gap-[8px] border-[1px] border-solid border-shades-of-blue-blue-low">
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <div className="rounded-8xs bg-blue-20 w-[72px] h-12 flex flex-row items-center justify-center p-2.5 box-border">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/iconpaperfile.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <b className="self-stretch relative leading-[150%]">
                    Dokumen Legal
                  </b>
                  <div className="self-stretch relative text-xs leading-[135%] text-icon-icon-lower-emphasis">
                    Dokumen belum diunggah
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-2 px-5 bg-[transparent] self-stretch rounded-81xl flex flex-row items-center justify-center border-[1px] border-solid border-blue50">
                <div className="relative text-sm font-caption-2 text-blue50 text-left">
                  Unggah
                </div>
              </button>
            </div>
          </div>
          <button
            className={`[border:none] py-3 px-5 ${
              isFormValid ? "bg-blue-500 cursor-pointer" : "bg-grey30"
            }  rounded-81xl w-[214px] flex flex-row items-center justify-center box-border z-[10]`}
            disabled={!isFormValid}
            onClick={() => dispatch(openForm("three"))}
          >
            <b
              className={`relative text-base leading-[135%] font-caption-2 ${
                isFormValid ? "text-white" : "text-darkgrey30"
              }  text-left`}
            >
              Simpan
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormTwo;
