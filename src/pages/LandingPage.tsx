import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Content from "../components/Content";
import SearchContainer from "../components/SearchContainer";
import HowItWork from "../components/HowItWork";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularRentalDeals from "../components/PopularRentalDeals";
import WhatPeopleSay from "../components/WhatPeopleSay";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch bg-white flex flex-col items-start justify-start pt-10 px-40 pb-12 box-border gap-[157px] max-w-full mq450:gap-[39px] mq450:p-5 mq450:box-border mq825:gap-[78px] mq825:pt-[26px] mq825:px-20 mq825:pb-[31px] mq825:box-border">
        <header className="self-stretch flex flex-row items-center justify-between top-[0] z-[99] sticky max-w-full gap-5 text-left text-base text-darkslategray-100 font-poppins">
          <div className="flex flex-row items-center justify-start gap-2 text-dodgerblue">
            <img
              className="h-[25.7px] w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div className="h-[11px] relative leading-[150%] font-semibold inline-block min-w-[84px]">
              RENTCARS
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-10 max-w-full lg:hidden mq825:gap-5">
            <div className="relative leading-[11px] font-medium whitespace-nowrap">
              Become a renter
            </div>
            <div className="relative leading-[11px] font-medium inline-block min-w-[100px] whitespace-nowrap">
              Rental deals
            </div>
            <div className="relative leading-[11px] font-medium inline-block min-w-[92px] whitespace-nowrap">
              How it work
            </div>
            <div className="relative leading-[11px] font-medium inline-block min-w-[122px] whitespace-nowrap">
              Why choose us
            </div>
          </div>
          <div className="w-[203px] flex flex-row items-center justify-start gap-6">
            <div className="h-[11px] relative leading-[150%] font-medium inline-block min-w-[54px] whitespace-nowrap">
              Sign in
            </div>
            <Button
              className="h-[43px] flex-1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#1572d3",
                borderRadius: "8px",
                "&:hover": { background: "#1572d3" },
                height: 43,
              }}
            >
              Sign up
            </Button>
          </div>
        </header>
        <Content />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[833px] w-[791px] absolute !m-[0] top-[-680px] right-[-160px]">
            <img
              className="absolute top-[-33px] left-[217px] w-[803px] h-[866px] overflow-hidden z-[1]"
              alt=""
              src="/frame-1.svg"
            />
            <img
              className="absolute top-[182px] left-[0px] w-[1048px] h-[537px] object-cover z-[2]"
              alt=""
              src="/car-2-1@2x.png"
            />
          </div>
          <SearchContainer />
        </div>
      </section>
      <HowItWork />
      <WhyChooseUs />
      <PopularRentalDeals />
      <WhatPeopleSay />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default LandingPage;
