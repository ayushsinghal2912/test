import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TestimonialCardContainerType = {
  className?: string;
  rectangle8?: string;
  iHaveBeenUsingYourServices?: string;
  jennyWilson?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor1?: CSSProperties["color"];
};

const TestimonialCardContainer: FunctionComponent<
  TestimonialCardContainerType
> = ({
  className = "",
  rectangle8,
  propWidth,
  propAlignSelf,
  propColor,
  propGap,
  iHaveBeenUsingYourServices,
  propHeight,
  propDisplay,
  propWidth1,
  jennyWilson,
  propAlignSelf1,
  propWidth2,
  propMinWidth,
  propColor1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const starsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      color: propColor,
    };
  }, [propAlignSelf, propColor]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const iHaveBeenStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const jennyWilsonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const fromNewYorkStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth,
      color: propColor1,
    };
  }, [propWidth2, propMinWidth, propColor1]);

  return (
    <div
      className={`w-[794px] shadow-[0px_12px_24px_rgba(16,_76,_139,_0.16)] rounded-3xl bg-white shrink-0 flex flex-row items-center justify-start max-w-full [row-gap:20px] text-left text-45xl text-darkslategray-300 font-poppins mq825:flex-wrap ${className}`}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[258px] min-h-[438px] mq825:flex-1"
        loading="lazy"
        alt=""
        src={rectangle8}
      />
      <div className="flex-[0.7985] flex flex-col items-start justify-center p-10 box-border gap-12 min-w-[258px] max-w-full mq450:gap-6 mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq825:flex-1">
        <div
          className="w-[164px] flex flex-col items-start justify-start gap-6"
          style={frameDiv2Style}
        >
          <div
            className="self-stretch h-[45px] relative leading-[150%] font-medium inline-block whitespace-nowrap mq450:text-lgi mq450:leading-[77px]"
            style={starsStyle}
          >
            <span>5.0</span>
            <span className="text-5xl"> stars</span>
          </div>
          <div className="flex flex-row items-start justify-start gap-1">
            <img
              className="h-6 w-6 relative rounded-[0.75px] min-h-[24px]"
              loading="lazy"
              alt=""
              src="/star-1-4.svg"
            />
            <img
              className="h-6 w-6 relative rounded-[0.75px] min-h-[24px]"
              loading="lazy"
              alt=""
              src="/star-1-4.svg"
            />
            <img
              className="h-6 w-6 relative rounded-[0.75px] min-h-[24px]"
              alt=""
              src="/star-1-4.svg"
            />
            <img
              className="h-6 w-6 relative rounded-[0.75px] min-h-[24px]"
              alt=""
              src="/star-1-4.svg"
            />
            <img
              className="h-6 w-6 relative rounded-[0.75px] min-h-[24px]"
              alt=""
              src="/star-1-4.svg"
            />
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-20 text-lg text-gray-400 mq450:gap-10"
          style={frameDiv3Style}
        >
          <blockquote
            className="m-0 self-stretch h-[94px] relative leading-[150%] inline-block shrink-0"
            style={iHaveBeenStyle}
          >
            {iHaveBeenUsingYourServices}
          </blockquote>
          <div
            className="w-[161px] flex flex-col items-start justify-start gap-4 text-5xl text-gray-700"
            style={frameDiv4Style}
          >
            <h2
              className="m-0 self-stretch h-[17px] relative text-inherit leading-[150%] font-medium font-[inherit] inline-block mq450:text-lgi mq450:leading-[29px]"
              style={jennyWilsonStyle}
            >
              {jennyWilson}
            </h2>
            <div
              className="w-[127px] h-2.5 relative text-sm leading-[150%] text-gray-100 inline-block"
              style={fromNewYorkStyle}
            >
              From New York, US
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardContainer;
