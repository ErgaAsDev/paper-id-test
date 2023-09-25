import { FunctionComponent, useState } from "react";
import { Modal } from "antd";
import PaymentModal from "./PaymentCheckout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ModalsApprovement from "./ModalApprovement";
import ModalInterest from "./ModalInterest";

const Checkout: FunctionComponent = () => {
  const { checkoutLoading, isCheckoutApprove } = useSelector(
    (state: RootState) => state.app
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="self-stretch font-lato bg-blue10 flex flex-col items-center justify-center py-24 px-[147px] text-left text-21xl text-text-text-primary font-heading-heading-large">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[160px] sm:gap-[100px]">
        <b className="relative leading-[150%] inline-block w-[591px] shrink-0 sm:flex-1">
          Lihat Simulasi Penggunaan Limit yang Diberikan!
        </b>
        <div className="flex flex-row items-center justify-start relative text-smi">
          <div className="my-0 mx-[!important] absolute top-[calc(50%_-_162px)] left-[242.46px] rounded-8xs bg-white100 w-[217px] h-[324px] flex flex-col items-start justify-start p-6 box-border gap-[16px] opacity-[0.4] z-[0] sm:hidden">
            <img
              className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-2595@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[135%] inline-block h-[42px] shrink-0">
                Soleil Kursi Lipat - Hitam
              </b>
              <div className="self-stretch flex flex-col items-center justify-center gap-[32px] text-xs text-blue50">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <b className="flex-1 relative leading-[135%]">Rp5.000.000</b>
                  <div className="rounded-sm flex flex-row items-start justify-start text-3xl border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch w-5 flex flex-col items-center justify-center pt-0 px-0 pb-0.5 box-border">
                      <b className="relative leading-[4px]">-</b>
                    </div>
                    <img
                      className="self-stretch relative max-h-full w-[0.67px] ml-[-1px]"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className="flex flex-col items-center justify-center py-0.5 px-3.5 ml-[-1px] text-xs text-text-text-primary">
                      <div className="relative leading-[135%]">2</div>
                    </div>
                    <img
                      className="self-stretch relative max-h-full w-[0.67px] ml-[-1px]"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className="self-stretch w-5 flex flex-col items-center justify-center ml-[-1px] text-base">
                      <b className="relative leading-[20px]">+</b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl bg-green50 flex flex-row items-center justify-center py-[9px] px-[15px] text-base text-white100">
                  <b className="relative leading-[135%]">Bayar Sekarang</b>
                </div>
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[calc(50%_-_162px)] left-[-160px] rounded-8xs bg-white100 w-[217px] h-[324px] flex flex-col items-start justify-start p-6 box-border gap-[16px] opacity-[0.4] z-[1] sm:hidden">
            <img
              className="self-stretch flex-1 relative rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-2594@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[135%] inline-block h-[42px] shrink-0">
                Soleil Kursi Ayun 2 Dudukan Stripe - Biru/putih
              </b>
              <div className="self-stretch flex flex-col items-center justify-center gap-[32px] text-xs text-blue50">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <b className="flex-1 relative leading-[135%]">Rp10.000.000</b>
                  <div className="rounded-sm flex flex-row items-start justify-start text-3xl border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch w-5 flex flex-col items-center justify-center pt-0 px-0 pb-0.5 box-border">
                      <b className="relative leading-[4px]">-</b>
                    </div>
                    <img
                      className="self-stretch relative max-h-full w-[0.67px] ml-[-1px]"
                      alt=""
                      src="/vector-21.svg"
                    />
                    <div className="flex flex-col items-center justify-center py-0.5 px-3.5 ml-[-1px] text-xs text-text-text-primary">
                      <div className="relative leading-[135%]">1</div>
                    </div>
                    <img
                      className="self-stretch relative max-h-full w-[0.67px] ml-[-1px]"
                      alt=""
                      src="/vector-21.svg"
                    />
                    <div className="self-stretch w-5 flex flex-col items-center justify-center ml-[-1px] text-base">
                      <b className="relative leading-[20px]">+</b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl bg-green50 flex flex-row items-center justify-center py-[9px] px-[15px] text-base text-white100">
                  <b className="relative leading-[135%]">Bayar Sekarang</b>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white100 shadow-[0px_0px_16px_rgba(63,_86,_103,_0.1)] flex flex-col items-start justify-center p-6 gap-[16px] z-[2] text-5xl">
            <img
              className="relative rounded-8xs w-[277.46px] h-[200px] object-cover"
              alt=""
              src="/rectangle-25951@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[135%] inline-block h-[42px] shrink-0">
                EVEDAL Night Lamp
              </b>
              <div className="self-stretch flex flex-col items-center justify-center gap-[32px] text-xl text-blue50">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <b className="flex-1 relative leading-[135%]">Rp5.000.000</b>
                  <div className="rounded-sm flex flex-row items-start justify-start text-base border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch w-5 flex flex-col items-center justify-center pt-0 px-0 pb-0.5 box-border text-3xl">
                      <b className="relative leading-[4px]">-</b>
                    </div>
                    <img
                      className="self-stretch relative max-h-full w-[0.67px] ml-[-1px]"
                      alt=""
                      src="/vector-22.svg"
                    />
                    <div className="flex flex-col items-center justify-center py-0.5 px-3.5 ml-[-1px] text-text-text-primary">
                      <div className="relative leading-[135%]">50</div>
                    </div>
                    <img
                      className="self-stretch relative max-h-full w-[0.67px] ml-[-1px]"
                      alt=""
                      src="/vector-22.svg"
                    />
                    <div className="self-stretch w-5 flex flex-col items-center justify-center ml-[-1px]">
                      <b className="relative leading-[20px]">+</b>
                    </div>
                  </div>
                </div>
                <button
                  onClick={showModal}
                  className="cursor-pointer [border:none] py-[9px] px-[15px] bg-green50 self-stretch rounded-81xl flex flex-row items-center justify-center"
                >
                  <b className="relative text-xl leading-[135%] font-heading-heading-large text-white100 text-left">
                    Bayar Sekarang
                  </b>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[344px] animate-bounce absolute top-[442px] left-[-9.77px] flex flex-row items-center justify-center pt-0 px-2 pb-4 gap-[8px] z-[3] text-base text-text-text-tertiary">
            <img className="relative w-6 h-6" alt="" src="/arrowup-sm1.svg" />
            <b className="">Anda dapat berinteraksi pada tampilan ini</b>
          </div>
          <Modal
            open={isModalOpen}
            footer={[]}
            width={
              !isCheckoutApprove.approve && !isCheckoutApprove.interest
                ? 800
                : isCheckoutApprove.approve
                ? 570
                : isCheckoutApprove.interest
                ? 370
                : ""
            }
            onCancel={handleCancel}
          >
            {checkoutLoading && (
              <div className="flex flex-col items-center z-10 absolute top-[45%] left-[30%] sm:left-[15%]">
                <img src="./Group 22341.png" alt="" className="animate-spin" />
                <h4 className="text-[#718C9E] text-bold">
                  Mohon menunggu. Transkasi Anda sedang diproses
                </h4>
              </div>
            )}
            {!isCheckoutApprove.approve && !isCheckoutApprove.interest ? (
              <PaymentModal />
            ) : isCheckoutApprove.approve ? (
              <ModalsApprovement />
            ) : isCheckoutApprove.interest ? (
              <ModalInterest handleCancel={handleCancel} />
            ) : (
              ""
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
