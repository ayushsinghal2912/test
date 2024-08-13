import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: FunctionComponent<WhyChooseUsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[800px] relative bg-white overflow-hidden shrink-0 max-w-full text-left text-19xl text-darkslategray-400 font-poppins mq450:h-auto mq450:min-h-[800] ${className}`}
    >
      <div className="absolute top-[calc(50%_-_308px)] left-[733px] w-[576px] flex flex-col items-start justify-center gap-14 max-w-full z-[1]">
        <div className="self-stretch flex flex-col items-start justify-center gap-8">
          <Button
            className="w-[181px] h-[42px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1572d3",
              fontSize: "14",
              background: "rgba(21, 114, 211, 0.1)",
              borderRadius: "8px",
              "&:hover": { background: "rgba(21, 114, 211, 0.1)" },
              width: 181,
              height: 42,
            }}
          >
            WHY CHOOSE US
          </Button>
          <h1 className="m-0 self-stretch h-[75px] relative text-inherit leading-[130%] font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[30px] mq825:text-11xl mq825:leading-[40px]">
            We offer the best experience with our rental deals
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center py-0 pl-0 pr-5 box-border gap-10 max-w-full text-xl text-black">
          <div className="flex flex-row items-center justify-start gap-6 max-w-full mq450:flex-wrap">
            <FrameComponent1
              vuesaxboldwallet="/vuesaxboldwallet.svg"
              frameDiv
              bookYourCar="Pick-up date"
              selectYourPickUpDateAnd="Select your pick up date and"
              timeToBookYourCar="time to book your car"
            />
            <div className="flex flex-col items-start justify-center gap-2 max-w-full">
              <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-[inherit] mq450:text-base mq450:leading-[24px]">
                Best price guaranteed
              </h3>
              <div className="h-[35px] relative text-base leading-[150%] text-dimgray-100 inline-block">
                <p className="m-0">Find a lower price? We’ll refund you 100%</p>
                <p className="m-0">of the difference.</p>
              </div>
            </div>
          </div>
          <FrameComponent
            vuesaxbolduserTick="/vuesaxboldusertick.svg"
            experienceDriver="Experience driver"
            dontHaveDriverDontWorryWe="Don’t have driver? Don’t worry, we have many"
            experiencedDriverForYou="experienced driver for you."
          />
          <FrameComponent
            vuesaxbolduserTick="/vuesaxbold24support.svg"
            experienceDriver="24 hour car delivery"
            dontHaveDriverDontWorryWe="Book your car anytime and we will deliver it"
            experiencedDriverForYou="directly to you."
          />
          <FrameComponent
            vuesaxbolduserTick="/vuesaxboldmessages2.svg"
            experienceDriver="24/7 technical support"
            dontHaveDriverDontWorryWe="Have a question? Contact Rentcars support"
            experiencedDriverForYou="any time when you have problem."
          />
        </div>
      </div>
      <div className="absolute top-[98px] left-[0px] w-[777px] h-[859px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-346px] max-h-full w-[1123px] object-contain"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute top-[132px] left-[-181px] w-[813px] h-[359px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/audi-1@2x.png"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
