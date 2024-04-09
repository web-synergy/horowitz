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
  Collapse,
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
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

import "dayjs/locale/uk";
import { components } from "./portableComponents";
import TextBlockSection from "./parts/TextBlockSection.tsx";
dayjs.locale("uk");

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

const SchedulePage = () => {
  const [showAllLectures, setShowAllLectures] = useState(false);
  const [isShowSearchResults, setIsShowSearchResults] = useState(false);
  const [selectedProfessorName, setSelectedProfessorName] = useState("");
  const [selectedProfessorData, setSelectedProfessorData] = useState({});
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
      setSelectedProfessorName(professors[0].name);
      // setSelectedProfessorData(professors[0].name);
    }
  }, [professors]);

  console.log(`selectedProfessorData:${selectedProfessorData}`);

  console.log(selectedProfessorData);

  console.log(selectedLectures);

  // if (isLoading) return <Loader />;
  // if (!requestLang.length) return null;

  // const handleShowSchedule = () => {
  //   let selectedProfessorObject = {};
  //   let selectedLectures = [];
  //   if (professors) {
  //     selectedProfessorObject = professors.find(
  //       (professor) => professor.name === selectedProfessorName
  //     );
  //   }

  //   if (schedules && selectedProfessorObject) {
  //     if (selectedDate) {
  //       // Фильтрация лекций только по выбранной дате
  //       selectedLectures = schedules.filter(
  //         (schedule) =>
  //           schedule.lecture === selectedProfessorObject._key &&
  //           dayjs(schedule.date).isSame(selectedDate, "day")
  //       );
  //     } else {
  //       // Если дата не выбрана, показываем все лекции для выбранного профессора
  //       selectedLectures = schedules.filter(
  //         (schedule) =>
  //           schedule.lecture === selectedProfessorObject._key &&
  //           dayjs(schedule.date).isSameOrAfter(dayjs(), "day") // Исключаем прошедшие даты
  //       );
  //     }
  //   }
  //   selectedLectures.sort((a, b) => {
  //     return new Date(a.date) - new Date(b.date);
  //   });

  //   setSelectedProfessorData(selectedProfessorObject);
  //   setSelectedLectures(selectedLectures);
  //   setIsShowSearchResults(true);
  // };

  // const handleProfessorChange = (event) => {
  //   const selectedProfessorName = event.target.value;

  //   let selectedProfessorObject = {};
  //   let selectedLectures = [];
  //   if (professors) {
  //     selectedProfessorObject = professors.find(
  //       (professor) => professor.name === selectedProfessorName
  //     );
  //   }

  //   if (schedules && selectedProfessorObject) {
  //     if (selectedDate) {
  //       // Фильтрация лекций только по выбранной дате
  //       selectedLectures = schedules.filter(
  //         (schedule) =>
  //           schedule.lecture === selectedProfessorObject._key &&
  //           dayjs(schedule.date).isSame(selectedDate, "day")
  //       );
  //     } else {
  //       // Если дата не выбрана, показываем все лекции для выбранного профессора
  //       selectedLectures = schedules.filter(
  //         (schedule) =>
  //           schedule.lecture === selectedProfessorObject._key &&
  //           dayjs(schedule.date).isSameOrAfter(dayjs(), "day") // Исключаем прошедшие даты
  //       );
  //     }
  //   }
  //   selectedLectures.sort((a, b) => {
  //     return new Date(a.date) - new Date(b.date);
  //   });
  //   setSelectedProfessorName(selectedProfessorName);
  //   setSelectedProfessorData(selectedProfessorObject || {});
  //   setSelectedLectures(selectedLectures);
  //   setShowAllLectures(false);
  // };

  const updateSchedule = (selectedProfessorName, selectedDate) => {
    let updatedLectures = [];
    let selectedProfessorObject = null; // Объявляем переменную здесь

    if (schedules && professors) {
      selectedProfessorObject = professors.find(
        (professor) => professor.name === selectedProfessorName
      );

      if (selectedProfessorObject) {
        if (selectedDate) {
          updatedLectures = schedules.filter(
            (schedule) =>
              schedule.lecture === selectedProfessorObject._key &&
              dayjs(schedule.date).isSame(selectedDate, "day")
          );
        } else {
          updatedLectures = schedules.filter(
            (schedule) =>
              schedule.lecture === selectedProfessorObject._key &&
              dayjs(schedule.date).isSameOrAfter(dayjs(), "day")
          );
        }
      }
    }

    updatedLectures.sort((a, b) => new Date(a.date) - new Date(b.date));
    setSelectedProfessorData(selectedProfessorObject || {});
    setSelectedLectures(updatedLectures);
    setIsShowSearchResults(true);
  };

  const handleProfessorChange = (event) => {
    const selectedProfessorName = event.target.value;
    setSelectedProfessorName(selectedProfessorName);
    setShowAllLectures(false);
    updateSchedule(selectedProfessorName, selectedDate);
  };

  const handleShowSchedule = () => {
    updateSchedule(selectedProfessorName, selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateSchedule(selectedProfessorName, date);
  };

  let previousDate = null;

  const handleShowMore = () => {
    setShowAllLectures(true);
  };

  const handleShowLess = () => {
    setShowAllLectures(false);
  };

  const formatDate = (date) => {
    return dayjs(date).format("DD.MM.YY"); // Форматируем дату в нужном формате
  };

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          padding: "16px 36px",
          backgroundColor: "rgba(176, 115, 15, 0.1);",
          marginTop: "40px",
          marginBottom: "40px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
                defaultValue={professors[0].name}
                value={selectedProfessorName}
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
      <Typography>Результати пошуку</Typography>
      <Collapse in={isShowSearchResults} timeout={1000}>
        <Box
          sx={{
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom:
              !showAllLectures &&
              selectedLectures &&
              selectedLectures.length > 0
                ? "1px solid black"
                : "none",
            // marginBottom: "20px",
            // gridRow: "1/2",
            // borderBottom: "1px solid black",
          }}
        >
          {selectedLectures.slice(0, 2).map((lecture) => (
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
                <Box
                  // container
                  // spacing={2}
                  key={index}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: " 1fr",
                      md: "repeat(3, 140px) 1fr",
                      lg: "repeat(3, 182px) 1fr",
                    },
                  }}
                >
                  {index === 0 && (
                    <Box
                      // item
                      // xs={2}

                      sx={{
                        borderRight: "1px solid black",
                        borderTop: "1px solid black",
                        padding: {
                          xs: "8px 8px",
                          md: "40px 8px",
                          lg: "48px 28px",
                        },
                        textAlign: "start",
                        // paddingTop: "48px",
                        // paddingLeft: "28px",
                        // paddingRight: "28px",
                        // gridRow: "1/2",
                        // borderBottom: "1px solid black",
                      }}
                    >
                      {/* Выводим дату только один раз */}
                      <Typography>{formatDate(lecture.date)}</Typography>
                    </Box>
                  )}
                  {index > 0 && (
                    <Box
                      sx={{
                        borderRight: "1px solid black",
                        padding: {
                          xs: "8px 8px",
                          md: "40px 8px",
                          lg: "48px 28px",
                        },
                        textAlign: "start",
                        // borderTop: "1px solid black",
                      }}
                    >
                      {/* Пустой контейнер */}
                    </Box>
                  )}
                  <Box
                    sx={{
                      borderRight: "1px solid black",
                      borderTop: "1px solid black",
                      padding: {
                        xs: "8px 8px",
                        md: "40px 8px",
                        lg: "48px 28px",
                      },
                      textAlign: "start",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    <Typography>{rehearsal.time} </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRight: "1px solid black",
                      borderTop: "1px solid black",
                      padding: {
                        xs: "8px 8px",
                        md: "40px 8px",
                        lg: "48px 28px",
                      },
                      textAlign: "start",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    <Typography>{`${
                      selectedProfessorData?.role
                        ? selectedProfessorData.role.charAt(0).toUpperCase() +
                          selectedProfessorData.role.slice(1)
                        : ""
                    } - ${selectedProfessorData?.name || ""}`}</Typography>
                    {/* <Typography>
                    {selectedProfessor &&
                      `${selectedProfessor.role} - ${selectedProfessor.name}`}
                  </Typography> */}
                  </Box>
                  <Box
                    sx={{
                      borderTop: "1px solid black",
                      padding: "48px",
                      // borderRight: "1px solid black",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    <TextBlockSection blocks={rehearsal.event} />
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Collapse>
      <Collapse in={showAllLectures} timeout={1000}>
        <Box
          sx={{
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom:
              selectedLectures && selectedLectures.length > 0
                ? "1px solid black"
                : "none",
            // marginBottom: "20px",
            // gridRow: "1/2",
            // borderBottom: "1px solid black",
          }}
        >
          {selectedLectures.slice(2).map((lecture) => (
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
                <Box
                  // container
                  // spacing={2}
                  key={index}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: " 1fr",
                      md: "repeat(3, 140px) 1fr",
                      lg: "repeat(3, 182px) 1fr",
                    },
                  }}
                >
                  {index === 0 && (
                    <Box
                      // item
                      // xs={2}

                      sx={{
                        borderRight: "1px solid black",
                        borderTop: "1px solid black",
                        padding: {
                          xs: "8px 8px",
                          md: "40px 8px",
                          lg: "48px 28px",
                        },
                        textAlign: "start",
                        // paddingTop: "48px",
                        // paddingLeft: "28px",
                        // paddingRight: "28px",
                        // gridRow: "1/2",
                        // borderBottom: "1px solid black",
                      }}
                    >
                      {/* Выводим дату только один раз */}
                      <Typography>{formatDate(lecture.date)}</Typography>
                    </Box>
                  )}
                  {index > 0 && (
                    <Box
                      sx={{
                        borderRight: "1px solid black",
                        padding: {
                          xs: "8px 8px",
                          md: "40px 8px",
                          lg: "48px 28px",
                        },
                        textAlign: "start",
                        // borderTop: "1px solid black",
                      }}
                    >
                      {/* Пустой контейнер */}
                    </Box>
                  )}
                  <Box
                    sx={{
                      borderRight: "1px solid black",
                      borderTop: "1px solid black",
                      padding: {
                        xs: "8px 8px",
                        md: "40px 8px",
                        lg: "48px 28px",
                      },
                      textAlign: "start",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    <Typography>{rehearsal.time} </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRight: "1px solid black",
                      borderTop: "1px solid black",
                      padding: {
                        xs: "8px 8px",
                        md: "40px 8px",
                        lg: "48px 28px",
                      },
                      textAlign: "start",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    <Typography>{`${
                      selectedProfessorData?.role
                        ? selectedProfessorData.role.charAt(0).toUpperCase() +
                          selectedProfessorData.role.slice(1)
                        : ""
                    } - ${selectedProfessorData?.name || ""}`}</Typography>
                    {/* <Typography>
                    {selectedProfessor &&
                      `${selectedProfessor.role} - ${selectedProfessor.name}`}
                  </Typography> */}
                  </Box>
                  <Box
                    sx={{
                      borderTop: "1px solid black",
                      padding: "48px",
                      // borderRight: "1px solid black",
                      // borderBottom: "1px solid black",
                    }}
                  >
                    <TextBlockSection blocks={rehearsal.event} />
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Collapse>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "48px",
        }}
      >
        {" "}
        {selectedLectures.length > 2 && (
          <Button
            sx={{ width: "288px" }}
            variant="transparent"
            onClick={showAllLectures ? handleShowLess : handleShowMore}
          >
            {showAllLectures ? t("buttons.SHOW_LESS") : t("buttons.SHOW_MORE")}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default SchedulePage;
