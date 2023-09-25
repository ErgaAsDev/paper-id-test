import { FunctionComponent, useState } from "react";
import {
  setCheckoutLoading,
  setCheckoutConfirmation,
  setSelectedOption,
} from "../slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

type PaymentModalType = {
  onClose?: () => void;
};

const PaymentModal: FunctionComponent<PaymentModalType> = ({ onClose }) => {
  //   const [selectedOption, setSelectedOption] = useState("");
  const { checkoutLoading, selectedOption } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  const handleRadioChange = (event: any) => {
    const { value } = event.target;
    dispatch(setSelectedOption(value));
  };

  const isRadioChecked =
    selectedOption === "koinworks" || selectedOption === "investree";

  function handleCheckoutLoading() {
    dispatch(setCheckoutLoading(true));

    setTimeout(() => {
      dispatch(setCheckoutLoading(false));
      dispatch(setCheckoutConfirmation("approve"));
    }, 2000);
  }
  return (
    <div
      className={`${
        checkoutLoading ? "opacity-40 bg-[#F8FBFE]" : "opacity-100"
      } rounded-2xl  bg-artboard-surface-variant w-[747px] flex flex-col items-start justify-start pt-2.5 px-10 pb-10 box-border gap-[30px] max-w-full max-h-full overflow-auto text-left text-xs text-blue50 font-button-normal`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="relative w-[228px] h-[52px]">
            <div className="absolute top-[0px] left-[0px] w-[226px] h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-[3px] bg-steelblue flex flex-row items-start justify-start p-1">
                <div className="relative leading-[135%]">Payment Paper</div>
              </div>
              <b className="w-[226px] absolute top-[50.91%] left-[0%]  leading-[135%] text-lg text-[#133F5D]">
                Pilih metode pembayaran
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] text-sm text-darkblue50">
        <div className="w-[313.5px] flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <b className="relative leading-[20px]">Tokopedia</b>
            </div>
            <div className="w-[363px] flex flex-row items-start justify-start p-2.5 box-border gap-[8px]">
              <input
                className="cursor-pointer relative rounded-[50%] bg-artboard-surface-variant box-border w-5 h-5 border-[1.5px] border-solid border-darkgrey30"
                type="radio"
                name="payment"
                value="tokopedia"
              />
              <div className="rounded-8xs w-[103px] h-5 flex flex-col items-start justify-center">
                <img
                  className="relative w-[47px] h-3.5 object-cover"
                  alt=""
                  src="/image-138@2x.png"
                />
              </div>
              <div className="relative leading-[19px]">Tokopedia</div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[0.3px] shrink-0"
            alt=""
            src="/divider.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
            <div className="self-stretch flex flex-col items-start justify-center">
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative leading-[20px]">Credit Card</b>
              </div>
            </div>
            <div className="w-[363px] flex flex-row items-start justify-start p-2.5 box-border gap-[10px]">
              <input
                className="cursor-pointer relative rounded-[50%] bg-artboard-surface-variant box-border w-5 h-5 border-[1.5px] border-solid border-darkgrey30"
                type="radio"
                name="payment"
                value="kartuKredit"
              />
              <div className="w-[99px] flex flex-col items-start justify-start">
                <img
                  className="relative w-[31.28px] h-[17.88px]"
                  alt=""
                  src="/group-22340.svg"
                />
              </div>
              <div className="relative leading-[19px]">Kartu Kredit</div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[0.3px] shrink-0"
            alt=""
            src="/divider.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[363px] flex flex-row items-start justify-start">
              <b className="relative leading-[20px]">Paper Usaha</b>
            </div>
            <div className="rounded-8xs bg-artboard-surface-variant overflow-hidden flex flex-col items-start justify-start">
              <div className="w-[363px] flex flex-row items-center justify-start p-2.5 box-border gap-[6px]">
                <input
                  className="cursor-pointer relative rounded-[50%] bg-artboard-surface-variant box-border w-5 h-5 border-[1.5px] border-solid border-darkgrey30"
                  type="radio"
                  name="payment"
                  value="koinworks"
                  checked={selectedOption === "koinworks"}
                  onChange={handleRadioChange}
                />
                <img
                  className="relative w-[106px] h-4 object-cover"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className="relative leading-[19px]">KoinWorks</div>
              </div>
              <div
                className={`rounded-8xs bg-artboard-surface-default w-[363px] ${
                  selectedOption === "koinworks" ? "" : "hidden"
                }  flex items-start justify-start pt-1 px-2.5 pb-2.5 box-border gap-[8px] text-text-text-secondary`}
              >
                <div className="rounded-81xl bg-artboard-surface-default w-5 h-5" />
                <div className="w-[156px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Limit</div>
                  <b className="relative leading-[135%] text-darkblue50">
                    Rp 10.000.000
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Fee</div>
                  <b className="relative leading-[135%] text-darkblue50">
                    1.1%
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Tenor</div>
                  <b className="relative leading-[135%] text-darkblue50">
                    30 Hari
                  </b>
                </div>
              </div>
            </div>
            <div className="rounded-8xs bg-artboard-surface-variant flex flex-col items-start justify-start">
              <div className="w-[363px] flex flex-row items-center justify-start p-2.5 box-border gap-[10px]">
                <input
                  className="cursor-pointer relative rounded-[50%] bg-artboard-surface-variant box-border w-5 h-5 border-[1.5px] border-solid border-darkgrey30"
                  type="radio"
                  name="payment"
                  value="investree"
                  checked={selectedOption === "investree"}
                  onChange={handleRadioChange}
                />
                <div className="w-[99px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border">
                  <img
                    className="relative w-[57px] h-4 object-cover"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className="relative leading-[19px]">Investree</div>
              </div>
              <div
                className={`rounded-8xs bg-artboard-surface-default w-[363px] ${
                  selectedOption === "investree" ? "" : "hidden"
                }  flex items-start justify-start pt-1 px-2.5 pb-2.5 box-border gap-[8px] text-text-text-secondary`}
              >
                <div className="rounded-81xl bg-artboard-surface-default w-5 h-5" />
                <div className="w-[156px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Limit</div>
                  <b className="relative leading-[135%] text-darkblue50">
                    Rp 8.000.000
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Fee</div>
                  <b className="relative leading-[135%] text-darkblue50">
                    1.1%
                  </b>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[19px]">Tenor</div>
                  <b className="relative leading-[135%] text-darkblue50">
                    30 Hari
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-8xs bg-artboard-surface-variant shadow-[0px_0px_8px_rgba(63,_86,_103,_0.1)] flex flex-col items-start justify-start p-5 gap-[32px] text-xs text-darkblue40">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-8xs box-border h-[39px] flex flex-row items-center justify-start p-2.5 gap-[10px] border-[0.5px] border-solid border-darkblue20">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24.74px] h-[13.12px]"
                  alt=""
                  src="/group-21804.svg"
                />
                <div className="relative leading-[135%]">{`Gunakan promo `}</div>
              </div>
              <img
                className="relative w-1.5 h-2.5"
                alt=""
                src="/path-817.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm text-darkblue50">
              <b className="relative leading-[135%]">Rincian Pembayaran</b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="relative leading-[135%] inline-block w-[97px] shrink-0">
                    Subtotal
                  </div>
                  <div className="relative leading-[135%] text-right">
                    Rp 5.000.000
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[0.3px] shrink-0"
                  alt=""
                  src="/path-10040.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-between text-sm">
                  <b className="relative leading-[135%]">Total Pembayaran</b>
                  <b className="relative leading-[135%] text-blue50 text-right">
                    Rp 5.000.000
                  </b>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`[border:none] py-3 px-5 ${
              isRadioChecked
                ? "bg-[#93C854] cursor-pointer"
                : "bg-text-text-tertiary"
            }  self-stretch rounded-81xl h-[41px] flex flex-row items-center justify-center box-border gap-[5px]`}
            disabled={!isRadioChecked}
            onClick={handleCheckoutLoading}
          >
            <img
              className="relative w-[12.43px] h-[13.49px] overflow-hidden shrink-0"
              alt=""
              src="/frame.svg"
            />
            <div className="relative text-sm font-button-normal text-artboard-surface-variant text-white">
              Bayar Sekarang
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
