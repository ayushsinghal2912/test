import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-900 overflow-hidden flex flex-col items-start justify-start pt-[41px] px-40 pb-[30px] box-border gap-16 max-w-full text-left text-base text-white font-poppins mq450:gap-4 mq450:pt-[27px] mq450:px-5 mq450:pb-5 mq450:box-border mq825:gap-8 mq825:pl-20 mq825:pr-20 mq825:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[67px] max-w-full lg:gap-[33px] mq825:gap-[17px] mq1425:flex-wrap">
        <div className="w-[317px] flex flex-col items-start justify-start">
          <div className="w-[191px] flex flex-col items-start justify-center gap-8">
            <div className="flex flex-row items-center justify-start gap-2">
              <img
                className="h-[25.7px] w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/frame-15.svg"
              />
              <div className="h-[11px] relative leading-[150%] font-semibold inline-block min-w-[84px]">
                RENTCARS
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-sm text-lightgray">
              <div className="self-stretch flex flex-row items-center justify-start gap-2">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearlocation-1.svg"
                />
                <div className="h-[31px] flex-1 relative leading-[150%] inline-block">
                  25566 Hc 1, Glenallen, Alaska, 99588, USA
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearcall.svg"
                />
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[118px] whitespace-nowrap">
                  +603 4784 273 12
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearsms.svg"
                />
                <div className="h-2.5 relative leading-[150%] inline-block whitespace-nowrap">
                  rentcars@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[509px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq825:flex-wrap">
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[15px] gap-[19px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[96px]">
                Our Product
              </div>
              <div className="flex flex-col items-start justify-start gap-[10.5px] text-sm text-lightgray">
                <div className="relative leading-[150%] inline-block min-w-[49px]">
                  Career
                </div>
                <div className="relative leading-[150%] inline-block min-w-[26px]">
                  Car
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[69px]">
                  Packages
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[61px]">
                  Features
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[59px]">
                  Priceline
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[19px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[84px]">
                Resources
              </div>
              <div className="flex flex-col items-start justify-start gap-[9.4px] text-sm text-lightgray">
                <div className="relative leading-[150%] inline-block min-w-[71px]">
                  Download
                </div>
                <div className="relative leading-[150%] inline-block min-w-[83px]">
                  Help Centre
                </div>
                <div className="relative leading-[150%] inline-block min-w-[49px]">
                  Guides
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[111px]">
                  Partner Network
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[52px]">
                  Cruises
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[71px]">
                  Developer
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[19px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[125px]">
                About Rentcars
              </div>
              <div className="flex flex-col items-start justify-start gap-[10.5px] text-sm text-lightgray">
                <div className="relative leading-[150%] inline-block min-w-[106px]">
                  Why choose us
                </div>
                <div className="relative leading-[150%] inline-block min-w-[65px]">
                  Our Story
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[124px]">
                  Investor Relations
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[88px]">
                  Press Center
                </div>
                <div className="h-2.5 relative leading-[150%] inline-block min-w-[66px]">
                  Advertise
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[19px]">
            <div className="relative leading-[150%] font-medium inline-block min-w-[75px]">
              Follow Us
            </div>
            <div className="flex flex-row items-start justify-start gap-4">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/vuesaxlinearfacebook.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/vuesaxlinearinstagram.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/vuesaxlinearyoutube.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-xs text-lightgray mq825:gap-[15px]">
        <div className="self-stretch h-px relative border-dimgray-300 border-t-[1px] border-solid box-border" />
        <div className="relative leading-[150%]">
          Copyright 2023 ・ Rentcars, All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
