import { FunctionComponent, useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type SearchContainerType = {
  className?: string;
};

const SearchContainer: FunctionComponent<SearchContainerType> = ({
  className = "",
}) => {
  const [
    dateContainerDateTimePickerValue,
    setDateContainerDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`flex-1 shadow-[0px_6px_12px_rgba(19,_94,_172,_0.12)] rounded-xl bg-white flex flex-row items-center justify-start py-3 pl-8 pr-3 box-border gap-[50px] max-w-full z-[3] text-left text-base text-darkslategray-200 font-poppins mq825:gap-[25px] mq1425:flex-wrap ${className}`}
      >
        <div className="flex-1 flex flex-row items-center justify-start py-0 px-0 box-border gap-4 min-w-[166px]">
          <img
            className="h-8 w-8 relative shrink-0"
            loading="lazy"
            alt=""
            src="/vuesaxlinearlocation.svg"
          />
          <div className="w-[278px] flex flex-col items-start justify-start pt-0 pb-1 pl-0 pr-5 box-border gap-3 shrink-0">
            <div className="h-[11px] relative leading-[150%] font-medium inline-block min-w-[69px]">
              Location
            </div>
            <div className="h-2.5 relative text-sm leading-[150%] text-silver inline-block">
              Search your location
            </div>
          </div>
        </div>
        <div className="flex-[0.9022] border-darkgray-100 border-l-[1px] border-solid box-border flex flex-row items-center justify-start py-0 pl-6 pr-0 gap-4 min-w-[166px] mq450:flex-1">
          <img
            className="h-8 w-8 relative"
            loading="lazy"
            alt=""
            src="/vuesaxlinearcalendar.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-1 pl-0 pr-5 gap-3">
            <div className="h-[11px] relative leading-[150%] font-medium inline-block min-w-[96px]">
              Pickup date
            </div>
            <div className="h-2.5 relative text-sm leading-[150%] text-silver inline-block min-w-[116px] whitespace-nowrap">
              Tue 15 Feb, 09:00
            </div>
          </div>
        </div>
        <div className="h-[37px] flex-[0.6089] min-w-[166px] mq450:flex-1">
          <DatePicker
            value={dateContainerDateTimePickerValue}
            onChange={(newValue: any) => {
              setDateContainerDateTimePickerValue(newValue);
            }}
            sx={{
              fieldset: {
                borderColor: "#acacac",
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                borderLeftWidth: 1,
              },
              "&:hover": {
                fieldset: { borderColor: "#acacac" },
                ".MuiOutlinedInput-notchedOutline": { borderColor: "#acacac" },
              },
              "& input::placeholder": { textColor: "#b6b6b6", fontSize: 14 },
              input: {
                color: "#b6b6b6",
                fontSize: 14,
                paddingLeft: 0,
                textAlign: "left",
                fontWeight: "400",
              },
              "& .MuiInputBase-root": {
                height: 37,
                gap: "8px",
                flexDirection: { flexDirection: "row-reverse" },
              },
            }}
            slotProps={{
              textField: {
                size: "medium",
                fullWidth: true,
                required: false,
                autoFocus: false,
                error: false,
                placeholder: "Thu 16 Feb, 11:00",
              },
              openPickerIcon: {
                component: () => (
                  <img
                    width="32px"
                    height="32px"
                    src="/vuesaxlinearcalendar-1.svg"
                  />
                ),
              },
            }}
          />
        </div>
        <Button
          className="h-12 w-[159px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1572d3",
            borderRadius: "8px",
            "&:hover": { background: "#1572d3" },
            width: 159,
            height: 48,
          }}
        >
          Search
        </Button>
      </div>
    </LocalizationProvider>
  );
};

export default SearchContainer;
