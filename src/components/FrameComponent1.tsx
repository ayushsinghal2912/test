import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  vuesaxboldwallet?: string;
  frameDiv?: boolean;
  bookYourCar?: string;
  selectYourPickUpDateAnd?: string;
  timeToBookYourCar?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propWidth2?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  propWidth,
  propPadding,
  propPadding1,
  vuesaxboldwallet,
  propWidth1,
  propHeight,
  frameDiv,
  propWidth2,
  bookYourCar,
  propMargin,
  selectYourPickUpDateAnd,
  timeToBookYourCar,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const iconCarStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const vuesaxboldwalletIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const bookYourCarStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={`flex flex-col items-center justify-start gap-10 text-left text-xl text-black font-poppins ${className}`}
      style={frameDivStyle}
    >
      <div
        className="rounded-2xl bg-aliceblue flex flex-col items-center justify-center p-5"
        style={iconCarStyle}
      >
        <img
          className="w-6 h-6 relative"
          loading="lazy"
          alt=""
          src={vuesaxboldwallet}
          style={vuesaxboldwalletIconStyle}
        />
      </div>
      {!frameDiv && (
        <div
          className="w-[230px] flex-col items-center justify-center gap-2"
          style={frameDiv1Style}
        >
          <div
            className="relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]"
            style={bookYourCarStyle}
          >
            {bookYourCar}
          </div>
          <div className="h-[31px] relative text-sm leading-[150%] font-medium text-dimgray-100 text-center inline-block">
            <p className="m-0">{selectYourPickUpDateAnd}</p>
            <p className="m-0">{timeToBookYourCar}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameComponent1;
