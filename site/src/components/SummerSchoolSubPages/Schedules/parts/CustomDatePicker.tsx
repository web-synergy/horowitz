import React from "react";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import updateLocale from "dayjs/plugin/updateLocale";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { ukUA } from "@mui/x-date-pickers/locales";
import { enUS } from "@mui/x-date-pickers/locales";
import { ISchedule } from "@/types/annualSummerSchoolTypes.ts";

interface CustomDatePickerProps {
  selectedDate: Dayjs | null;
  handleDateChange: (date: Dayjs | null) => void;
  isMobileScreen: boolean;
  isDatePickerOpen: boolean;
  handleDatePickerOpen: () => void;
  handleDatePickerClose: () => void;
  schedules: ISchedule[] | null;
  selectedProfessor: string;
  requestLang: string;
}

dayjs.extend(updateLocale);
dayjs.extend(isSameOrAfter);
dayjs.updateLocale("uk", {
  months: [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ],
});

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  handleDateChange,
  isMobileScreen,
  isDatePickerOpen,
  handleDatePickerOpen,
  handleDatePickerClose,
  schedules,
  selectedProfessor,
  requestLang,
}) => {
  const { t } = useTranslation();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        requestLang === "en"
          ? enUS.components.MuiLocalizationProvider.defaultProps.localeText
          : ukUA.components.MuiLocalizationProvider.defaultProps.localeText
      }
      adapterLocale={requestLang === "en" ? "en" : "uk"}
    >
      <DemoItem
        label={t("summerSchoolSchedules.inputDateLabel")}
        sx={{
          marginBottom: isMobileScreen && isDatePickerOpen ? "380px" : "0px",
          "& p": {
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: "22px", md: "24px" },
          },
        }}
      >
        <DesktopDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          onOpen={handleDatePickerOpen}
          onClose={handleDatePickerClose}
          shouldDisableDate={(date) =>
            schedules
              ? !schedules.some((schedule) =>
                  dayjs(schedule.date).isSame(date, "day")
                )
              : true
          }
          disablePast
          dayOfWeekFormatter={(date) => {
            const dayOfWeek = dayjs(date).format("dd");
            return dayOfWeek;
          }}
          format="DD/MM/YYYY"
          disabled={!selectedProfessor}
          sx={{
            width: "100%",
          }}
          slotProps={{
            field: { clearable: true },
            layout: {
              sx: {
                color: "rgb(8, 7, 8)",
                borderRadius: "4px",
                borderWidth: "4px",
                border: "1px solid rgb(153, 153, 153)",
                backgroundColor: "#EAE2D5",
                width: { xs: "272px", md: "304px", lg: "328px" },
                height: { xs: "332px", md: "362px", lg: "376px" },
                marginTop: "32px",
                boxShadow: "none",
                paddingX: { xs: "4px", lg: "6px" },
                "& .MuiDayCalendar-monthContainer": {
                  marginTop: { md: "6px", lg: "8px" },
                },
                "& .MuiPaper-root .MuiPickersArrowSwitcher-button": {
                  borderRadius: "4px",
                },
                "& .MuiYearCalendar-root": {
                  width: { xs: "270px", md: "296px", lg: "314px" },
                },
                "& .MuiDateCalendar-root": {
                  overflow: "visible",
                  maxHeight: "400px",
                  width: { xs: "270px", md: "296px", lg: "314px" },
                  margin: 0,
                },
                "& .MuiPickersCalendarHeader-root": {
                  width: { xs: "270px", md: "302px", lg: "326px" },
                },
                "& .MuiDayCalendar-weekDayLabel": {
                  borderRadius: "4px",
                  color: "rgb(153, 153, 153)",
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: { xs: "24px", md: "28px" },
                  margin: 0,
                  width: "40px",
                },
                "& .MuiPickersSlideTransition-root": {
                  height: "300px",
                  width: { xs: "270px", md: "302px", lg: "326px" },
                },
                "& .MuiDayCalendar-weekContainer": {
                  width: { xs: "262px", md: "294px", lg: "314px" },
                  marginTop: { xs: "4px", lg: "6px" },
                  justifyContent: "space-between",
                },
                "& .MuiDayCalendar-header": {
                  justifyContent: "space-between",
                  width: { xs: "260px", md: "292px", lg: "312px" },
                },
                "& .MuiPickersDay-root": {
                  height: { xs: "34px", md: "38px" },
                  width: { xs: "36px", md: "38px" },
                  borderRadius: "4px",
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: { xs: "24px", md: "28px" },
                  backgroundColor: "rgb(245, 245, 245)",
                  color: "rgb(8, 7, 8)",
                  "&:hover": {
                    backgroundColor: "#F9B33F",
                  },
                },
                "& .MuiButtonBase-root .MuiPickersDay-root .MuiPickersDay-dayWithMargin":
                  {
                    backgroundColor: "rgb(217, 161, 69)",
                  },
                "& .MuiPickersLayout-contentWrapper": {
                  width: { xs: "262px", md: "294px", lg: "318px" },
                },
              },
            },
          }}
        />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
