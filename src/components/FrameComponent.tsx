import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
  vuesaxbolduserTick?: string;
  experienceDriver?: string;
  dontHaveDriverDontWorryWe?: string;
  experiencedDriverForYou?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  vuesaxbolduserTick,
  experienceDriver,
  dontHaveDriverDontWorryWe,
  experiencedDriverForYou,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-6 max-w-full text-left text-xl text-black font-poppins mq450:flex-wrap ${className}`}
    >
      <div className="rounded-2xl bg-aliceblue flex flex-col items-center justify-center p-5">
        <img
          className="w-6 h-6 relative"
          loading="lazy"
          alt=""
          src={vuesaxbolduserTick}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2 max-w-full">
        <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-[inherit] mq450:text-base mq450:leading-[24px]">
          {experienceDriver}
        </h3>
        <div className="h-[35px] relative text-base leading-[150%] text-dimgray-100 inline-block">
          <p className="m-0">{dontHaveDriverDontWorryWe}</p>
          <p className="m-0">{experiencedDriverForYou}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
