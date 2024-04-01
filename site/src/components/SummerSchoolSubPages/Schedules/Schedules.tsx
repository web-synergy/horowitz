import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Stack,
  Container,
  Box,
  InputLabel,
  styled,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useAnnualSummerSchoolStore } from "@/store/annualSummerSchoolStore";
import Loader from "@/components/Common/Loader";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/uk";
dayjs.locale("uk");

dayjs.extend(updateLocale);

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
const ukLocaleText = {
  previousMonth: "Попередній місяць",
  nextMonth: "Наступний місяць",
  openPreviousView: "Відкрити попередній місяць",
  openNextView: "Відкрити наступний місяць",
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === "year" ? "Перегляд календаря, рік" : "Перегляд календаря, місяць",
  calendarViewSwitchingHint: (view) =>
    view === "year" ? "Перегляд календаря, рік" : "Перегляд календаря, місяць",
  openViewSwitchingMenu: "Відкрити меню перегляду",
  closeViewSwitchingMenu: "Закрити меню перегляду",
  dayViewButton: "День",
  monthViewButton: "Місяць",
  yearViewButton: "Рік",
  // Translate the days of the week and months
  daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
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
};

const CustomTextField = styled(TextField)(({ theme, value }) => ({
  "& .MuiInputBase-root": {
    height: "60px",
    width: "100%",
    color: theme.palette.text.primary,
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("lg")]: {
      width: (value as string).length > 0 ? 262 : 132,
      "&.Mui-focused": { width: 262 },
    },
  },

  "& .MuiOutlinedInput-root": {
    padding: "8px",
    "& fieldset": {
      borderColor: theme.palette.common.black,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.dark,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SchedulePage = () => {
  const [professor, setProfessor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const { t } = useTranslation();
  // const [locale, setLocale] = React.useState<LocaleKey>("en");

  // const { professors, isLoading, requestLang } = useAnnualSummerSchoolStore(
  //   (state) => ({
  //     professors: state.professors,
  //     isLoading: state.isLoading,
  //     requestLang: state.requestLang,
  //   })
  // );

  // console.log(professors);

  // if (isLoading) return <Loader />;
  // if (!requestLang.length) return null;

  const handleProfessorChange = (event) => {
    setProfessor(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleShowSchedule = () => {
    // Ваша логика по отображению графика
  };

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          padding: "16px 36px",
          backgroundColor: "rgba(176, 115, 15, 0.1);",
          marginTop: "40px",
          marginBottom: "526px",
          display: "flex",
          alignItems: "flex-end",
          gap: "30px",
          justifyContent: "space-between",
          // "& > *": { flexGrow: 1 },
        }}
      >
        <Box>
          {/* <InputLabel sx={{ color: "black" }} htmlFor="professor-select">
            Выберите профессора
          </InputLabel> */}
          <DemoItem label="Ім’я професора">
            <CustomTextField
              sx={{ width: "328px" }}
              id="professor-select"
              select
              value={professor}
              onChange={handleProfessorChange}
            >
              {/* <MenuItem disabled value="">
          </MenuItem> */}
              {/* Пример элементов меню */}
              <MenuItem value="Профессор 1">Профессор 1</MenuItem>
              <MenuItem value="Профессор 2">Профессор 2</MenuItem>
              <MenuItem value="Профессор 3">Профессор 3</MenuItem>
              {/* {professors.map((professor) => (
            <MenuItem key={professor.id} value={professor.name}>
              {professor.name}
            </MenuItem>
          ))} */}
            </CustomTextField>{" "}
          </DemoItem>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer sx={{ padding: 0 }} components={["CustomDatePicker"]}> */}
          <DemoItem label="Дата репетиції">
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              showDaysOutsideCurrentMonth
              localeText={ukLocaleText}
              // localeText={ukLocaleText}
              dayOfWeekFormatter={(date) => {
                const dayOfWeek = dayjs(date).format("dd");
                return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
              }}
              slotProps={{
                layout: {
                  sx: {
                    color: "rgb(8, 7, 8)",
                    borderRadius: "4px",
                    borderWidth: "4px",
                    border: "1px solid rgb(153, 153, 153)",
                    backgroundColor: "rgba(217, 161, 69, 0.1)",
                    width: "328px",
                    marginTop: "32px",
                    "& .MuiPickersArrowSwitcher-button": {
                      borderRadius: "4px",
                      // backgroundColor: "#007bff", // Цвет фона чисел
                      // color: "#007bff", // Цвет текста чисел
                      // "&:hover": {
                      //   backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                      // },
                    },
                    "& .MuiDayCalendar-monthContainer": {
                      marginTop: "12px",
                    },
                    "& .MuiDayCalendar-weekDayLabel": {
                      borderRadius: "4px",
                      color: "rgb(153, 153, 153)",
                      // backgroundColor: "rgba(217, 161, 69, 0.1)", // Цвет фона чисел
                      // // Цвет текста чисел
                      "&:hover": {
                        backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                      },
                    },
                    "& .MuiPickersDay-root": {
                      borderRadius: "4px",
                      backgroundColor: "rgb(245, 245, 245)", // Цвет фона чисел
                      color: "#007bff", // Цвет текста чисел
                      "&:hover": {
                        backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                      },
                    },
                  },
                },
              }}
              sx={{ width: "328px", padding: 0 }}
            />
          </DemoItem>
          {/* </DemoContainer> */}
        </LocalizationProvider>
        <Button
          sx={{ width: "328px" }}
          variant="primary"
          // color="primary"
          onClick={handleShowSchedule}
        >
          Показати графік
        </Button>
      </Box>
    </Container>
  );
};

export default SchedulePage;
