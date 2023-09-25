import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCheckoutConfirmation } from "../slices/appSlice";

const ModalsApprovement: FunctionComponent = () => {
  const { selectedOption } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return (
    <div className="rounded-3xs [background:linear-gradient(132.62deg,_#1e79b7,_#004575)] flex flex-col items-center justify-center pt-4 px-6 pb-6 box-border gap-[24px] text-center text-lg text-white100 font-button-normal">
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
            <b className="self-stretch relative leading-[150%]">
              Selamat, Pembayaran Anda Berhasil!
            </b>
            <div className="self-stretch relative text-sm leading-[150%]">
              Pembayaran sudah diterima oleh Paper.id dan dana akan diteruskan
              ke rekening penerima dengan rincian sebagai berikut:
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-2.5 px-5 gap-[10px] text-left text-sm text-darkblue30">
            <div className="self-stretch rounded-3xs bg-blue10 flex flex-col items-start justify-start p-5 gap-[14px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <b className="relative leading-[135%] text-[#859CAB]">
                  Nominal Transaksi
                </b>
                <b className="relative leading-[135%] text-[#133F5D]">
                  Rp 5,000,000.00
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative text-[#859CAB]">Admin Fee</div>
                <div className="relative leading-[19px]  text-[#133F5D]">
                  Rp 2,090.00
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <b className="relative leading-[135%] text-[#859CAB]">
                  Total Bayar
                </b>
                <b className="relative leading-[135%]  text-[#133F5D]">
                  Rp 5,002,090.00
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative text-[#859CAB]">
                  Tanggal Pembayaran
                </div>
                <div className="relative leading-[19px] text-[#133F5D]">
                  12 Juni 2023 - 12:17:17
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-blue10 flex flex-col items-start justify-start p-5 gap-[14px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative text-[#859CAB]">Metode Pembayaran</div>
                <div className="relative leading-[19px] text-[#133F5D]">
                  Paper Usaha - {selectedOption.toUpperCase()}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative text-[#859CAB]">Sisa Limit</div>
                <b className="relative leading-[135%] text-[#133F5D]">
                  Rp 5.000.000,00
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center pt-6 px-0 pb-0 box-border">
          <button
            onClick={() => dispatch(setCheckoutConfirmation("interest"))}
            className="cursor-pointer [border:none] py-3 px-5 bg-green50 rounded-81xl flex flex-row items-center justify-center"
          >
            <div className="relative text-sm font-button-normal text-white100 text-left">
              Baik, Saya Mengerti
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalsApprovement;
