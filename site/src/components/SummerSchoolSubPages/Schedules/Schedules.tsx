import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Stack,
  Container,
  Box,
  InputLabel,
  styled,
  Typography,
  Grid,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, Day } from "@mui/x-date-pickers";
import { useAnnualSummerSchoolStore } from "@/store/annualSummerSchoolStore";
import Loader from "@/components/Common/Loader";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import updateLocale from "dayjs/plugin/updateLocale";
import { PortableText } from "@portabletext/react";

import "dayjs/locale/uk";
import { components } from "./portableComponents";
import TextBlockSection from "./parts/TextBlockSection.tsx";
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
  const [showFullTable, setShowFullTable] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLectures, setSelectedLectures] = useState([]);

  const { t } = useTranslation();

  const { professors, schedules, isLoading, requestLang } =
    useAnnualSummerSchoolStore((state) => ({
      professors: state.professors,
      schedules: state.schedules,
      isLoading: state.isLoading,
      requestLang: state.requestLang,
    }));

  useEffect(() => {
    if (professors) {
      setSelectedProfessor(professors[0].name);
    }
  }, [professors]);

  console.log(`selectedProfessor:${selectedProfessor}`);

  console.log(professors);

  console.log(selectedLectures);

  // if (isLoading) return <Loader />;
  // if (!requestLang.length) return null;

  const handleProfessorChange = (event) => {
    setSelectedProfessor(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleShowSchedule = () => {
    let selectedProfessorObject = {};
    let selectedLectures = [];
    if (professors) {
      selectedProfessorObject = professors.find(
        (professor) => professor.name === selectedProfessor
      );
    }

    if (schedules && selectedProfessorObject) {
      if (selectedDate) {
        // Фильтрация лекций только по выбранной дате
        selectedLectures = schedules.filter(
          (schedule) =>
            schedule.lecture === selectedProfessorObject._key &&
            dayjs(schedule.date).isSame(selectedDate, "day")
        );
      } else {
        // Если дата не выбрана, показываем все лекции для выбранного профессора
        selectedLectures = schedules.filter(
          (schedule) => schedule.lecture === selectedProfessorObject._key
        );
      }
    }
    setSelectedLectures(selectedLectures);
  };

  const handleShowMore = () => {
    setShowFullTable(true);
  };

  const handleShowLess = () => {
    setShowFullTable(false);
  };

  let previousDate = null;

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          padding: "16px 36px",
          backgroundColor: "rgba(176, 115, 15, 0.1);",
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "flex-end",
          gap: "30px",
          justifyContent: "space-between",
          // "& > *": { flexGrow: 1 },
        }}
      >
        <Box>
          {professors && (
            <DemoItem label="Ім’я професора / диригента">
              <TextField
                sx={{ width: "328px" }}
                id="professor-select"
                select
                // defaultValue={professors[0].name}
                value={selectedProfessor || professors[0].name}
                onChange={handleProfessorChange}
              >
                {professors.map((professor) => (
                  <MenuItem key={professor._key} value={professor.name}>
                    {professor.name}
                  </MenuItem>
                ))}
              </TextField>
            </DemoItem>
          )}
        </Box>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={ukLocaleText}
        >
          {/* <DemoContainer sx={{ padding: 0 }} components={["CustomDatePicker"]}> */}
          <DemoItem label="Дата репетиції">
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              defaultValue={dayjs("2022-04-17")}
              // showDaysOutsideCurrentMonth
              shouldDisableDate={(date) =>
                schedules
                  ? !schedules.some((schedule) =>
                      dayjs(schedule.date).isSame(date, "day")
                    )
                  : true
              }
              disablePast
              // openTo="month"
              // views={["year", "month", "day"]}
              dayOfWeekFormatter={(date) => {
                const dayOfWeek = dayjs(date).format("dd");
                return dayOfWeek;
              }}
              // format="dd-MM-yy"
              slotProps={{
                field: { clearable: true },
                layout: {
                  sx: {
                    color: "rgb(8, 7, 8)",
                    borderRadius: "4px",
                    borderWidth: "4px",
                    border: "1px solid rgb(153, 153, 153)",
                    backgroundColor: "rgba(217, 161, 69, 0.1)",
                    width: "328px",
                    height: "360px",
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
                      fontSize: "18px",
                      lineHeight: "28px",
                      margin: 0,
                      width: "40px",
                      // backgroundColor: "rgba(217, 161, 69, 0.1)", // Цвет фона чисел
                      // // Цвет текста чисел
                      // "&:hover": {
                      //   backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                      // },
                    },
                    "& .MuiPickersSlideTransition-root": {
                      height: "290px",
                    },
                    "& .MuiDayCalendar-weekContainer": {
                      marginTop: "6px",
                      justifyContent: "space-between",
                    },
                    "& .MuiDayCalendar-header": {
                      justifyContent: "space-between",
                    },
                    // "& .MuiDayCalendar-weekDayLabel": {
                    //   fontSize: "18px",
                    //   lineHeight: "28px",
                    // },
                    "& .MuiPickersDay-root": {
                      height: "40px",
                      width: "40px",
                      borderRadius: "4px",
                      fontSize: "18px",
                      lineHeight: "28px",
                      backgroundColor: "rgb(245, 245, 245)", // Цвет фона чисел
                      color: "rgb(8, 7, 8)", // Цвет текста чисел
                      "&:hover": {
                        backgroundColor: "#F9B33F", // Цвет фона чисел при наведении
                      },
                    },
                    "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
                      backgroundColor: "rgb(217, 161, 69)",
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
      <Box
        sx={
          {
            // columnCount: { xs: 1, lg: 2 },
            // columnGap: "24px",
            // "& p:not(:last-child)": {
            //   marginBottom: 2,
            // },
          }
        }
      >
        {/* {selectedLectures && (
          <TextBlockSection blocks={selectedLectures[0].rehearsals[0].event} />
        )} */}
      </Box>
      <Box
        sx={{
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          borderBottom:
            selectedLectures && selectedLectures.length > 0
              ? "1px solid black"
              : "none",
          marginBottom: "20px",
          // gridRow: "1/2",
          // borderBottom: "1px solid black",
        }}
      >
        {selectedLectures.map((lecture) => (
          <Box
            key={lecture._key}
            sx={
              {
                // border: "1px solid black",
                // padding: "10px",
                // marginBottom: "10px",
              }
            }
          >
            {/* <Typography>{`Диригент: ${lecture.conductor}`}</Typography> */}
            {lecture.rehearsals.map((rehearsal, index) => (
              <Grid
                container
                // spacing={2}
                key={index}
                // sx={{ border: "1px solid black" }}
              >
                {index === 0 && (
                  <Grid
                    item
                    xs={3}
                    sx={{
                      borderRight: "1px solid black",
                      borderTop: "1px solid black",
                      // gridRow: "1/2",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    {/* Выводим дату только один раз */}
                    <Typography>{lecture.date}</Typography>
                  </Grid>
                )}
                {index > 0 && (
                  <Grid
                    item
                    xs={3}
                    sx={{
                      borderRight: "1px solid black",
                      // borderTop: "1px solid black",
                    }}
                  >
                    {/* Пустой контейнер */}
                  </Grid>
                )}
                <Grid
                  item
                  xs={3}
                  sx={{
                    borderRight: "1px solid black",
                    borderTop: "1px solid black",
                    // borderBottom: "1px solid black",
                  }}
                >
                  <Typography>{rehearsal.time} </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    borderRight: "1px solid black",
                    borderTop: "1px solid black",
                    // borderBottom: "1px solid black",
                  }}
                >
                  <Typography>Диригент – Юрій Літун</Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    borderTop: "1px solid black",
                    // borderRight: "1px solid black",
                    // borderBottom: "1px solid black",
                  }}
                >
                  <TextBlockSection blocks={rehearsal.event} />
                </Grid>
              </Grid>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default SchedulePage;
