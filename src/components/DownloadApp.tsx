import { FunctionComponent } from "react";
import { Button } from "@mui/material";

export type DownloadAppType = {
  className?: string;
};

const DownloadApp: FunctionComponent<DownloadAppType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[500px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[72px] pb-[99.3px] pl-40 pr-20 box-border relative gap-[199px] max-w-full text-left text-base text-dimgray-100 font-poppins mq450:h-auto mq450:gap-[25px] mq825:gap-[50px] mq825:pl-10 mq825:pt-[31px] mq825:pb-[42px] mq825:box-border mq1425:gap-[99px] mq1425:pt-[47px] mq1425:pb-[65px] mq1425:pl-20 mq1425:pr-10 mq1425:box-border ${className}`}
    >
      <img
        className="h-[684px] w-[893px] absolute !m-[0] top-[-93px] left-[-244px] object-contain"
        alt=""
        src="/vector-11.svg"
      />
      <img
        className="h-[455px] w-[495px] relative hidden max-w-full z-[1]"
        alt=""
        src="/rectangle-9.svg"
      />
      <div className="mt-[-1400.5px] ml-[-1041px] w-[842px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border max-w-[calc(100%_-_357px)] shrink-0 lg:max-w-full mq450:max-w-full mq825:max-w-full mq1425:max-w-full">
        <div className="w-[322px] relative leading-[150%] inline-block shrink-0 max-w-full">
          <p className="m-0">Find a lower price? We’ll refund you 100%</p>
          <p className="m-0">of the difference.</p>
        </div>
      </div>
      <div className="w-[480px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-[calc(100%_-_1760px)] shrink-0 text-29xl text-gray-400 lg:max-w-[calc(100%_-_1041px)] mq450:max-w-[calc(100%_-_1041px)] mq825:max-w-[calc(100%_-_1041px)] mq1425:max-w-[calc(100%_-_1041px)]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[33.5px] shrink-0 max-w-full z-[1] mq825:gap-[17px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <Button
              className="w-[146px] h-[42px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1572d3",
                fontSize: "14",
                background: "rgba(21, 114, 211, 0.1)",
                borderRadius: "8px",
                "&:hover": { background: "rgba(21, 114, 211, 0.1)" },
                width: 146,
                height: 42,
              }}
            >
              DOWNLOAD
            </Button>
            <h1 className="m-0 self-stretch h-[92px] relative text-inherit leading-[120%] font-semibold font-[inherit] inline-block mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">
              <span>{`Download Rentcars App for `}</span>
              <span className="text-dodgerblue">FREE</span>
            </h1>
          </div>
          <div className="relative text-base leading-[150%] text-darkslategray-200 inline-block max-w-full">
            For faster, easier booking and exclusive deals.
          </div>
          <div className="flex flex-row items-start justify-start gap-[16.3px] max-w-full mq450:flex-wrap">
            <img
              className="self-stretch w-[174.9px] relative rounded-[10.14px] max-h-full object-cover min-h-[52px]"
              loading="lazy"
              alt=""
              src="/image-2-1@2x.png"
            />
            <img
              className="self-stretch w-[174.9px] relative rounded-[10.14px] max-h-full object-cover min-h-[52px]"
              loading="lazy"
              alt=""
              src="/image-3-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[520.2px] flex flex-row items-start justify-start pt-[20.1px] px-6 pb-[23px] box-border shrink-0 max-w-[calc(100%_-_1720px)] lg:pt-5 lg:pb-5 lg:box-border lg:max-w-[calc(100%_-_1041px)] mq450:max-w-[calc(100%_-_1041px)] mq825:max-w-[calc(100%_-_1041px)] mq1425:max-w-[calc(100%_-_1041px)]">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[803px] w-[520.2px] absolute !m-[0] top-[-20.1px] right-[-26.8px]">
            <img
              className="absolute top-[0px] left-[0px] w-[520.2px] h-[1054.4px] object-cover"
              alt=""
              src="/shadow@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[520.2px] h-[1054.4px] object-cover z-[1]"
              alt=""
              src="/main@2x.png"
            />
          </div>
          <img
            className="h-[1011.3px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-normal z-[2]"
            alt=""
            src="/iphone-14-pro-space-black-mockup-label@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
