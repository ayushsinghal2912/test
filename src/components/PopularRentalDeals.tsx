import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import GroupComponent from "./GroupComponent";

export type PopularRentalDealsType = {
  className?: string;
};

const PopularRentalDeals: FunctionComponent<PopularRentalDealsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start pt-[84px] px-5 pb-[83px] box-border gap-16 max-w-full text-left text-19xl text-darkslategray-400 font-poppins lg:gap-8 lg:pt-[55px] lg:pb-[54px] lg:box-border mq450:pt-9 mq450:pb-[35px] mq450:box-border mq825:gap-4 ${className}`}
    >
      <div className="w-[1120px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[584px] flex flex-col items-start justify-start gap-6 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <Button
              className="h-[42px] w-[226px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1572d3",
                fontSize: "14",
                background: "rgba(21, 114, 211, 0.1)",
                borderRadius: "8px",
                "&:hover": { background: "rgba(21, 114, 211, 0.1)" },
                width: 226,
                height: 42,
              }}
            >
              POPULAR RENTAL DEALS
            </Button>
          </div>
          <h1 className="m-0 h-[26px] relative text-inherit leading-[130%] font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[30px] mq825:text-11xl mq825:leading-[40px]">
            Most popular cars rental deals
          </h1>
        </div>
      </div>
      <div className="w-[1120px] flex flex-row flex-wrap items-start justify-center gap-8 max-w-full text-base text-gray-600 mq825:gap-4">
        <GroupComponent
          image12="/image-12@2x.png"
          jaguarXELP250="Jaguar XE L P250"
          prop="4.8"
          reviews="(2.436 reviews)"
          passagers="4 Passagers"
          doors="4 Doors"
          prop1="$1,800"
        />
        <GroupComponent
          propPadding="36px 23px 28px 24px"
          image12="/audi-1-1@2x.png"
          propHeight="91px"
          jaguarXELP250="Audi R8"
          propDisplay="inline-block"
          propMinWidth="62px"
          propMinWidth1="110px"
          prop="4.6"
          reviews="(1.936 reviews)"
          passagers="2 Passagers"
          doors="2 Doors"
          propMinWidth2="45px"
          propMinWidth3="88px"
          prop1="$2,100"
        />
        <GroupComponent
          propPadding="31px 24px 27px"
          image12="/image-13@2x.png"
          propHeight="97px"
          jaguarXELP250="BMW M3"
          propDisplay="inline-block"
          propMinWidth="68px"
          propMinWidth1="113px"
          prop="4.5"
          reviews="(2.036 reviews)"
          passagers="4 Passagers"
          doors="4 Doors"
          propMinWidth2="46px"
          propMinWidth3="89px"
          prop1="$1,600"
        />
        <GroupComponent
          propPadding="38px 24px 32px"
          image12="/image-11@2x.png"
          propHeight="85px"
          jaguarXELP250="Lamborghini Huracan"
          propDisplay="unset"
          propMinWidth="unset"
          propMinWidth1="112px"
          prop="4.3"
          reviews="(2.236 reviews)"
          passagers="2 Passagers"
          doors="2 Doors"
          propMinWidth2="45px"
          propMinWidth3="92px"
          prop1="$2,300"
        />
      </div>
      <div className="w-[1120px] h-12 flex flex-row items-start justify-center max-w-full">
        <Button
          className="self-stretch w-[216px]"
          endIcon={
            <img
              width="20px"
              height="20px"
              src="/vuesaxlineararrowright-4.svg"
            />
          }
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#4e4e4e",
            fontSize: "14",
            borderColor: "#e0e0e0",
            borderRadius: "8px",
            "&:hover": { borderColor: "#e0e0e0" },
            width: 216,
          }}
        >
          Show all vehicles
        </Button>
      </div>
    </section>
  );
};

export default PopularRentalDeals;
