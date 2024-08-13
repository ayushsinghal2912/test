import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import TestimonialCardContainer from "./TestimonialCardContainer";

export type WhatPeopleSayType = {
  className?: string;
};

const WhatPeopleSay: FunctionComponent<WhatPeopleSayType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-ghostwhite overflow-hidden flex flex-col items-start justify-start py-[127px] px-0 box-border max-w-full text-left text-19xl text-darkslategray-400 font-poppins lg:pt-[83px] lg:pb-[83px] lg:box-border mq450:pt-[54px] mq450:pb-[54px] mq450:box-border ${className}`}
    >
      <div className="ml-[-511px] w-[2462px] flex flex-row items-start justify-start relative max-w-[171%] shrink-0">
        <img
          className="h-[310px] w-[292px] absolute !m-[0] top-[-37px] left-[648px]"
          alt=""
          src="/.svg"
        />
        <img
          className="h-[297px] w-[279px] absolute !m-[0] top-[-197px] right-[617px] object-contain"
          loading="lazy"
          alt=""
          src="/-1.svg"
        />
        <div className="flex-1 flex flex-col items-center justify-start gap-20 max-w-full z-[1] mq450:gap-5 mq825:gap-10">
          <div className="flex flex-col items-center justify-start py-0 px-5 box-border gap-6 max-w-full">
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
              TESTIMONIALS
            </Button>
            <h1 className="m-0 h-[26px] relative text-inherit leading-[130%] font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[30px] mq825:text-11xl mq825:leading-[40px]">
              What peole say about us?
            </h1>
          </div>
          <div className="w-[1480px] overflow-x-auto flex flex-row items-start justify-start py-0 px-5 box-border gap-10 max-w-full text-45xl text-darkslategray-300 mq825:gap-5">
            <TestimonialCardContainer
              rectangle8="/rectangle-8@2x.png"
              iHaveBeenUsingYourServices="“I have been using your services for 3 years. Your service is great, I will continue to use your service.”"
              jennyWilson="Jenny Wilson"
            />
            <TestimonialCardContainer
              rectangle8="/rectangle-8@2x.png"
              propWidth="unset"
              propAlignSelf="unset"
              propColor="#383838"
              propGap="66px"
              iHaveBeenUsingYourServices="“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
              propHeight="unset"
              propDisplay="unset"
              propWidth1="unset"
              jennyWilson="Charlie Johnson"
              propAlignSelf1="unset"
              propWidth2="unset"
              propMinWidth="127px"
              propColor1="#838383"
            />
            <TestimonialCardContainer
              rectangle8="/rectangle-8-2@2x.png"
              propWidth="164px"
              propAlignSelf="stretch"
              propColor="#252525"
              propGap="66px"
              iHaveBeenUsingYourServices="“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
              propHeight="unset"
              propDisplay="unset"
              propWidth1="198px"
              jennyWilson="Charlie Johnson"
              propAlignSelf1="stretch"
              propWidth2="127px"
              propMinWidth="unset"
              propColor1="#282828"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
