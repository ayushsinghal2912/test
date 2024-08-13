import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type GroupComponentType = {
  className?: string;
  image12?: string;
  jaguarXELP250?: string;
  prop?: string;
  reviews?: string;
  passagers?: string;
  doors?: string;
  prop1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  propPadding,
  image12,
  propHeight,
  jaguarXELP250,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  prop,
  reviews,
  passagers,
  doors,
  propMinWidth2,
  propMinWidth3,
  prop1,
}) => {
  const carImageContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image12IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const jaguarXELStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const reviewsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const doorsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const dayStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div
      className={`flex-1 shadow-[0px_12px_24px_rgba(16,_76,_139,_0.16)] flex flex-row items-start justify-start min-w-[236px] max-w-[256px] text-left text-base text-gray-600 font-poppins ${className}`}
    >
      <div className="flex-1 rounded-2xl bg-white flex flex-col items-start justify-start">
        <div
          className="self-stretch rounded-t-2xl rounded-b-none bg-white flex flex-row items-start justify-start pt-[26px] px-6 pb-[25px]"
          style={carImageContainerStyle}
        >
          <div className="h-[155px] w-64 relative rounded-t-2xl rounded-b-none bg-white hidden" />
          <img
            className="h-[104px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src={image12}
            style={image12IconStyle}
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-6 pb-6 gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <div
                className="relative leading-[17px] font-medium"
                style={jaguarXELStyle}
              >
                {jaguarXELP250}
              </div>
              <div className="flex flex-row items-center justify-start gap-1.5 text-xs text-black">
                <img
                  className="h-4 w-4 relative rounded-12xs-5"
                  alt=""
                  src="/star-1.svg"
                />
                <div
                  className="relative leading-[8px] inline-block min-w-[113px]"
                  style={reviewsStyle}
                >
                  <span>
                    <span className="font-medium">{prop}</span>
                  </span>
                  <span className="text-gray-200">
                    <span>{` `}</span>
                    <span>{reviews}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xs text-darkgray-300">
              <div className="self-stretch flex flex-row items-center justify-between py-0 pl-0 pr-[17px] gap-5">
                <div className="flex flex-row items-center justify-start gap-1">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/vuesaxlinearuser.svg"
                  />
                  <div className="h-2 relative leading-[17px] inline-block min-w-[73px]">
                    {passagers}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-3.svg"
                  />
                  <div className="h-2 relative leading-[17px] inline-block min-w-[28px]">
                    Auto
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 gap-[19px]">
                <div className="flex flex-row items-center justify-start gap-1">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-4.svg"
                  />
                  <div className="h-2 relative leading-[17px] inline-block min-w-[96px]">
                    Air Conditioning
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[5px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-5.svg"
                  />
                  <div
                    className="h-2 relative leading-[17px] inline-block min-w-[46px]"
                    style={doorsStyle}
                  >
                    {doors}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 text-sm text-dimgray-200">
            <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border" />
            <div className="self-stretch flex flex-row items-center justify-between gap-5">
              <div className="relative leading-[10px] inline-block min-w-[34px]">
                Price
              </div>
              <div
                className="relative leading-[11px] inline-block min-w-[90px] text-base text-gray-300"
                style={dayStyle}
              >
                <span>
                  <span className="font-semibold">{prop1}</span>
                  <span className="text-sm text-darkgray-200">
                    <span className="text-black">{` `}</span>
                  </span>
                </span>
                <span className="text-sm text-darkgray-200">
                  <span>/day</span>
                </span>
              </div>
            </div>
            <Button
              className="self-stretch h-10"
              endIcon={
                <img
                  width="20px"
                  height="20px"
                  src="/vuesaxlineararrowright.svg"
                />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#1572d3",
                borderRadius: "8px",
                "&:hover": { background: "#1572d3" },
                height: 40,
              }}
            >
              Rent Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
