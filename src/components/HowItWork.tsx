import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";

export type HowItWorkType = {
  className?: string;
};

const HowItWork: FunctionComponent<HowItWorkType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[86px] px-0 pb-[86.5px] box-border max-w-full text-center text-19xl text-darkslategray-400 font-poppins mq450:pt-9 mq450:pb-9 mq450:box-border mq825:pt-14 mq825:pb-14 mq825:box-border ${className}`}
    >
      <div className="ml-[-99.9px] w-[1639.9px] flex flex-col items-center justify-start gap-40 shrink-0 max-w-[114%] mq450:gap-5 mq825:gap-10 mq1425:gap-20">
        <div className="w-[776px] flex flex-col items-center justify-center py-0 px-5 box-border gap-20 max-w-full mq450:gap-5 mq825:gap-10">
          <div className="flex flex-col items-center justify-start py-0 px-5 box-border gap-8 max-w-full mq825:gap-4">
            <Button
              className="w-[161px] h-[42px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1572d3",
                fontSize: "14",
                background: "rgba(21, 114, 211, 0.1)",
                borderRadius: "8px",
                "&:hover": { background: "rgba(21, 114, 211, 0.1)" },
                width: 161,
                height: 42,
              }}
            >
              HOW IT WORK
            </Button>
            <h1 className="m-0 h-[26px] relative text-inherit leading-[130%] font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[30px] mq825:text-11xl mq825:leading-[40px]">
              Rent with following 3 working steps
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
            <FrameComponent1
              propWidth="112px"
              propPadding="0px 0px"
              propPadding1="32px"
              vuesaxboldwallet="/vuesaxboldlocationtick.svg"
              propWidth1="48px"
              propHeight="48px"
              frameDiv
              propWidth2="unset"
              bookYourCar="Choose location"
              propMargin="0"
              selectYourPickUpDateAnd="Choose your and find"
              timeToBookYourCar="your best car"
            />
            <FrameComponent1
              propWidth="112px"
              propPadding="0px 0px"
              propPadding1="32px"
              vuesaxboldwallet="/vuesaxboldcalendar.svg"
              propWidth1="48px"
              propHeight="48px"
              frameDiv
              propWidth2="unset"
              bookYourCar="Pick-up date"
              propMargin="0"
              selectYourPickUpDateAnd="Select your pick up date and"
              timeToBookYourCar="time to book your car"
            />
            <FrameComponent1
              propWidth="112px"
              propPadding="0px 0px"
              propPadding1="32px"
              vuesaxboldwallet="/vuesaxboldcar.svg"
              propWidth1="48px"
              propHeight="48px"
              frameDiv
              propWidth2="unset"
              bookYourCar="Book your car"
              propMargin="0"
              selectYourPickUpDateAnd="Book your car and we will deliver"
              timeToBookYourCar="it directly to you"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-5 mq1425:flex-wrap mq1425:justify-center">
          <img
            className="self-stretch w-[272.1px] relative max-h-full overflow-hidden shrink-0 min-h-[67px]"
            loading="lazy"
            alt=""
            src="/frame-2.svg"
          />
          <img
            className="self-stretch w-[224.1px] relative max-h-full min-h-[67px]"
            loading="lazy"
            alt=""
            src="/frame-24.svg"
          />
          <img
            className="self-stretch w-[78.8px] relative max-h-full min-h-[67px]"
            loading="lazy"
            alt=""
            src="/frame-25.svg"
          />
          <img
            className="self-stretch w-[224.1px] relative max-h-full min-h-[67px]"
            loading="lazy"
            alt=""
            src="/frame-26.svg"
          />
          <img
            className="self-stretch w-[143.6px] relative max-h-full min-h-[67px]"
            loading="lazy"
            alt=""
            src="/frame-27.svg"
          />
          <img
            className="self-stretch w-[217.1px] relative max-h-full min-h-[67px]"
            loading="lazy"
            alt=""
            src="/frame-28.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
