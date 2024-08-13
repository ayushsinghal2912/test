import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[390px] flex flex-col items-start justify-start pt-0 px-0 pb-[62.6px] box-border gap-[26px] max-w-full text-left text-29xl text-gray-800 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full shrink-0">
        <h1 className="m-0 flex-1 relative text-inherit leading-[100%] font-semibold font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[29px] mq825:text-19xl mq825:leading-[38px]">
          <span>Find, book and rent a car</span>
          <span className="text-dodgerblue"> Easily</span>
        </h1>
        <img
          className="h-[47.7px] w-[134.2px] absolute !m-[0] right-[9.5px] bottom-[-25.8px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
        Get a car wherever and whenever you need it with your IOS and Android
        device.
      </div>
      <div className="flex flex-row items-start justify-start gap-[11.6px]">
        <img
          className="self-stretch w-[123.7px] relative rounded-[7.17px] max-h-full object-cover min-h-[37px] shrink-0"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="self-stretch w-[123.7px] relative rounded-[7.17px] max-h-full object-cover min-h-[37px] shrink-0"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

export default Content;
