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
  Select,
  useTheme,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker,
  Day,
  DesktopDatePicker,
} from "@mui/x-date-pickers";
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
import { Buttons } from "@/types/translation.d";
import { Routes } from "@/types/routes.d";
import { useMediaQuery } from "@mui/material";

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
  const [isProfessorSelectOpen, setIsProfessorSelectOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
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

  const handleShowMore = () => {
    setShowAllLectures(true);
  };

  const handleShowLess = () => {
    setShowAllLectures(false);
  };

  const formatDate = (date) => {
    return dayjs(date).format("DD.MM.YY"); // Форматируем дату в нужном формате
  };

  const handleProfessorSelectOpen = () => {
    setIsProfessorSelectOpen(true);
  };

  const handleProfessorSelectClose = () => {
    setIsProfessorSelectOpen(false);
  };

  const handleDatePickerOpen = () => {
    setIsDatePickerOpen(true);
  };

  const handleDatePickerClose = () => {
    setIsDatePickerOpen(false);
  };

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          marginTop: { xs: 3, md: 5, lg: 6 },
          textAlign: "start",
        }}
      >
        {t(`navigation.${Routes.SUMMER_SCHOOL_SCHEDULES}`)}
      </Typography>
      <Box
        sx={{
          padding: { xs: "24px 8px", md: "16px 8px", lg: "16px 36px" },
          backgroundColor: "rgba(176, 115, 15, 0.1);",
          marginTop: { xs: 3, md: 5, lg: 6 },
          marginBottom:
            (!isMobileScreen && isProfessorSelectOpen) || isDatePickerOpen
              ? "380px"
              : "0",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          // justifyItems: "center",
          gap: { xs: "24px", md: "12px", lg: "32px" },
          justifyContent: "space-between",
          borderRadius: "4px",
          // "& > *": { flexGrow: 1 },
        }}
      >
        <Box sx={{ width: "100%" }}>
          {professors && (
            <DemoItem
              label="Ім’я професора / диригента"
              sx={{
                marginBottom:
                  isMobileScreen && isProfessorSelectOpen ? "206px" : "0px",
                "& p": {
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: "22px", md: "24px" },
                },
              }}
            >
              <Select
                variant="outlined"
                sx={{
                  width: "100%",
                  "&:hover": {
                    "&& fieldset": {
                      borderColor: "#D9A145",
                    },
                  },
                  // "&:focus": {
                  //   "&& fieldset": {
                  //     border: "1px solid #D9A145",
                  //   },
                  // },
                }}
                id="professor-select"
                // multiple
                // select
                // defaultValue={professors[0].name}
                value={selectedProfessorName}
                onChange={handleProfessorChange}
                // onFocus={handleProfessorSelectOpen} // Добавляем обработчик onFocus для отслеживания открытия списка
                // onBlur={handleProfessorSelectClose}
                onOpen={handleProfessorSelectOpen}
                onClose={handleProfessorSelectClose}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      marginTop: { xs: "16px", md: "32px" },
                      padding: "16px",
                      backgroundColor: "rgba(217, 161, 69, 0.1)",
                      // height: "198px",
                      overflowY: "auto",
                      fontSize: "40px",
                      border: "1px solid #999999",
                      boxShadow: "none",

                      "& .MuiMenuItem-root": {
                        paddingX: 0,
                        paddingY: "4px",
                        gap: "20px",
                        fontSize: { xs: "16px", md: "18px" },
                        lineHeight: { xs: "24px", md: "28px" },
                      },
                    },
                  },
                }}
              >
                {professors.map((professor) => (
                  <MenuItem key={professor._key} value={professor.name}>
                    {professor.name}
                  </MenuItem>
                ))}
              </Select>
            </DemoItem>
          )}
        </Box>
        <Box sx={{ width: "100%" }}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={ukLocaleText}
          >
            {/* <DemoContainer sx={{ padding: 0 }} components={["CustomDatePicker"]}> */}
            <DemoItem
              label="Дата репетиції"
              sx={{
                marginBottom:
                  isMobileScreen && isDatePickerOpen ? "380px" : "0px",

                "& p": {
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: "22px", md: "24px" },
                },
              }}
            >
              <DesktopDatePicker
                value={selectedDate}
                onChange={handleDateChange}
                defaultValue={dayjs("2022-04-17")}
                onOpen={handleDatePickerOpen}
                onClose={handleDatePickerClose}
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
                sx={{
                  width: "100%",
                  // padding: 0,
                  // "& .css-1ftars7-MuiPaper-root-MuiPickersPopper-paper": {
                  //   boxShadow: " none",
                  //   backgroundColor: "red",
                  // },
                }}
                slotProps={{
                  field: { clearable: true },
                  layout: {
                    sx: {
                      color: "rgb(8, 7, 8)",
                      borderRadius: "4px",
                      borderWidth: "4px",
                      border: "1px solid rgb(153, 153, 153)",
                      backgroundColor: "rgba(217, 161, 69, 0.1)",
                      width: { xs: "276px" },
                      // height: "360px",
                      marginTop: "32px",
                      boxShadow: "none",
                      "& .MuiDayCalendar-monthContainer": {
                        marginTop: "12px",
                        width: { xs: "270px" },
                      },
                      "& .MuiPaper-root .MuiPickersArrowSwitcher-button": {
                        borderRadius: "4px",
                        // backgroundColor: "#007bff", // Цвет фона чисел
                        // color: "#007bff", // Цвет текста чисел
                        // "&:hover": {
                        //   backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                        // },
                      },

                      "& .MuiYearCalendar-root": {
                        width: { xs: "270px" },
                      },
                      "& .MuiDateCalendar-root": {
                        width: { xs: "270px" },
                        margin: 0,
                      },
                      "& .MuiPickersCalendarHeader-root": {
                        marginTop: "12px",
                        width: { xs: "270px" },
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
                        width: { xs: "270px" },
                      },
                      "& .MuiDayCalendar-weekContainer": {
                        marginTop: "6px",
                        justifyContent: "space-between",
                      },
                      "& .MuiDayCalendar-header": {
                        justifyContent: "space-between",
                        width: { xs: "270px" },
                      },
                      // "& .MuiDayCalendar-weekDayLabel": {
                      //   fontSize: "18px",
                      //   lineHeight: "28px",
                      // },
                      "& .MuiPickersDay-root": {
                        height: { xs: "36px", md: "40px" },
                        width: { xs: "36px", md: "40px" },
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
              />
            </DemoItem>
            {/* </DemoContainer> */}
          </LocalizationProvider>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "180px", lg: "100%" } }}>
          <Button
            sx={{
              // paddingLeft: { md: "16px" },
              minWidth: "180px",
              width: "100%",

              "&.MuiButton-root": {
                padding: { md: "14px 14px" },

                // [theme.breakpoints.up("md")]: {
                //   padding: "14px 32px",
                // },
              },
            }}
            variant="primary"
            // color="primary"
            onClick={handleShowSchedule}
          >
            Показати графік
          </Button>
        </Box>
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
      {selectedLectures.length > 0 && (
        <Typography
          variant="h3"
          sx={{
            marginTop: { xs: "48px", md: "40px", lg: "48px" },
            marginBottom: { xs: "20px", md: "40px", lg: "48px" },
          }}
        >
          Результати пошуку
        </Typography>
      )}
      {selectedLectures.length === 0 && isShowSearchResults && (
        <Box
          sx={{
            textAlign: "center",
            paddingTop: { xs: "48px", md: "96px", lg: "136px" },
            paddingBottom: { xs: "268px", md: "292px", lg: "362px" },
          }}
        >
          <Typography variant="h3">
            Нажаль за вашим запитом нічого не знайдено
          </Typography>
        </Box>
      )}
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
                        borderRight: { md: "1px solid black" },
                        borderTop: "1px solid black",
                        padding: {
                          xs: "8px 8px",
                          md: "40px 8px",
                          lg: "48px 28px",
                        },
                        textAlign: "start",
                        backgroundColor: {
                          xs: "rgba(217, 161, 69, 0.2)",
                          md: "transparent",
                        },
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
                        borderRight: { md: "1px solid black" },
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
                      borderRight: { md: "1px solid black" },
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
                      borderRight: { md: "1px solid black" },
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
                        borderRight: { md: "1px solid black" },
                        borderTop: "1px solid black",
                        padding: {
                          xs: "8px 8px",
                          md: "40px 8px",
                          lg: "48px 28px",
                        },
                        textAlign: "start",
                        backgroundColor: {
                          xs: "rgba(217, 161, 69, 0.2)",
                          md: "transparent",
                        },
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
                        borderRight: { md: "1px solid black" },
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
                      borderRight: { md: "1px solid black" },
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
                      borderRight: { md: "1px solid black" },
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
                      // borderRight: { md: "1px solid black" },
                      borderTop: "1px solid black",
                      padding: "48px",
                      // textAlign: "start",
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
          marginBottom: { xs: "72px", md: "96px", lg: "120px" },
        }}
      >
        {selectedLectures.length > 2 && (
          <Button
            sx={{ width: "288px" }}
            variant="transparent"
            onClick={showAllLectures ? handleShowLess : handleShowMore}
          >
            {/* {showAllLectures ? t("buttons.SHOW_LESS") : t("buttons.SHOW_MORE")} */}
            {t(
              `buttons.${
                showAllLectures ? Buttons.SHOW_LESS : Buttons.SHOW_MORE
              }`
            )}
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default SchedulePage;
