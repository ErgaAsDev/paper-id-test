import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="self-stretch font-lato [background:linear-gradient(125.5deg,_#257ab4,_#113955_99.48%,_#113955_99.49%)] flex flex-col items-center justify-start py-[46px] px-[146px] gap-[75px] text-left text-18xl text-white100 font-heading-heading-large">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[88px]">
        <div className="relative w-[314px] h-[313px] sm:hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[314px] h-[313px] object-cover"
            alt=""
            src="/lady-2@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[59px]">
              <p className="m-0">{`Solusi Pembayaran untuk Kelancaran `}</p>
              <p className="m-0">Cashflow Bisnis via Paper id</p>
            </b>
          </div>
          <div className="rounded-81xl bg-green50 w-[274.46px] h-14 flex flex-row items-center justify-center py-3 px-5 box-border text-lg">
            <div className="relative">Daftar Gratis Sekarang</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-sm">
        <div className="self-stretch border-t border-solid border-white"></div>
        <div className="self-stretch flex flex-row items-start justify-between lg:flex-col lg:gap-[40px] lg:items-center lg:justify-center">
          <div className="w-[470px] flex flex-col items-start justify-start py-0 px-3.5 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <img
                className="relative w-[157px] h-14 overflow-hidden shrink-0"
                alt=""
                src="/paperlogofinalwhitemodify-1.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="w-[204px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <b className="relative leading-[150%]">Hubungi Kami</b>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex flex-row items-start justify-start py-1 px-0.5">
                          <img
                            className="relative w-[15px] h-[15px] overflow-hidden shrink-0"
                            alt=""
                            src="/phoneicon-1.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[5px]">
                          <div className="relative leading-[150%]">
                            +62 821 1767 9137
                          </div>
                          <div className="relative leading-[150%]">
                            +62 811 1098 746 (WA)
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[7px]">
                        <div className="flex flex-row items-start justify-start py-1 px-0.5">
                          <img
                            className="relative w-3.5 h-3 overflow-hidden shrink-0"
                            alt=""
                            src="/emailicon-1.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[150%]">
                            support@paper.id
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[266px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start">
                      <b className="relative leading-[150%]">Jam Operasional</b>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="flex flex-col items-start justify-start gap-[5px]">
                          <div className="flex flex-row items-start justify-start gap-[7px]">
                            <div className="w-[147px] flex flex-row items-start justify-between">
                              <div className="relative leading-[150%]">
                                Senin - Jumat
                              </div>
                              <div className="relative leading-[150%]">:</div>
                            </div>
                            <div className="relative leading-[150%]">
                              07.00 - 22.00 WIB
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                            <div className="w-[146px] flex flex-row items-start justify-between">
                              <div className="relative leading-[150%]">{`Sabtu & Libur Nasional`}</div>
                              <div className="relative leading-[150%]">:</div>
                            </div>
                            <div className="relative leading-[150%]">
                              08.00 - 17.00 WIB
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                  <div className="flex flex-row items-start justify-start py-1 px-0.5">
                    <img
                      className="relative w-3 h-[13px] overflow-hidden shrink-0"
                      alt=""
                      src="/addressicon-1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="relative leading-[150%] inline-block w-[168px]">
                      Jl. Sunter Garden Raya No.5D, RT.6/RW.12, Sunter Agung,
                      Tj. Priok, Kota Jkt Utara, DKI Jakarta 14350
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[477px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[14px]">
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <b className="relative leading-[150%]">Fitur Lainnya</b>
              <div className="flex flex-row items-start justify-start gap-[30px]">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[150%]">
                    Order dan Penawaran
                  </div>
                  <div className="relative leading-[150%]">
                    Akuntansi Gratis
                  </div>
                  <div className="relative leading-[150%]">Digital Payment</div>
                  <div className="relative leading-[150%]">Manajemen Stok</div>
                  <div className="relative leading-[150%]">
                    Laporan Keuangan
                  </div>
                  <div className="relative leading-[150%]">One Click Share</div>
                  <div className="relative leading-[150%]">
                    Template Invoice
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[150%]">Billing</div>
                  <div className="relative leading-[150%]">Financing</div>
                  <div className="relative leading-[150%]">PaperChain</div>
                  <div className="relative leading-[150%]">PaperTrade</div>
                  <div className="relative leading-[150%]">
                    Enterprise Solution
                  </div>
                  <div className="relative leading-[150%]">PayPer</div>
                </div>
              </div>
            </div>
            <div className="w-[67px] flex flex-col items-start justify-start gap-[7px]">
              <b className="relative leading-[150%]">Solusi</b>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[150%]">Jual Beli</div>
                  <div className="relative leading-[150%]">Jasa</div>
                  <div className="relative leading-[150%]">{`F&B`}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px]">
              <b className="relative leading-[150%]">Perusahaan</b>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[150%]">Tentang Kami</div>
                  <div className="relative leading-[150%]">Cara Kerja</div>
                  <div className="relative leading-[150%]">Karir</div>
                  <div className="relative leading-[150%]">Pricing</div>
                  <div className="relative leading-[150%]">Blog</div>
                  <div className="relative leading-[150%]">Help Center</div>
                  <div className="relative leading-[150%]">FAQ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-t border-solid border-white"></div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[28px]">
          <div />
          <div className="flex flex-row items-start justify-start gap-[28px]">
            <div className="flex flex-col items-center justify-start gap-[5px]">
              <b className="relative leading-[150%]">Download Paper.id apps</b>
              <img
                className="relative w-[114px] h-[41px] object-cover"
                alt=""
                src="/playstoreicon-1@2x.png"
              />
            </div>
            <div className="flex flex-col items-center justify-start gap-[5px]">
              <b className="relative leading-[150%]">Keamanan</b>
              <div className="flex flex-row items-center justify-start gap-[13px]">
                <img
                  className="relative w-[98px] h-[19px] overflow-hidden shrink-0"
                  alt=""
                  src="/securewhite-1.svg"
                />
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <img
                    className="relative w-[49px] h-7 object-cover"
                    alt=""
                    src="/kan-logo-27001@2x.png"
                  />
                  <img
                    className="relative w-[71px] h-9 object-cover"
                    alt=""
                    src="/bv-certification-iso27001@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch border-t border-solid border-white"></div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-between text-gray sm:gap-[20px]">
          <b className="relative leading-[150%]">
            Copyright © 2023 Paper.id (PT Pakar Digital Global)
          </b>
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/youtubeicon.svg"
            />
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/facebookicon.svg"
            />
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/linkedinicon.svg"
            />
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/instagramicon.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[35px] text-white100">
            <b className="relative leading-[150%]">Privacy Policy</b>
            <b className="relative leading-[150%]">{`Terms & Condition`}</b>
            <b className="relative leading-[150%]">Sitemap</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
