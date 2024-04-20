import { useCallback, useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Container,
  Box,
  Typography,
  Collapse,
  Select,
  useTheme,
  SelectChangeEvent,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { useAnnualSummerSchoolStore } from "@/store/annualSummerSchoolStore";
import { useTranslation } from "react-i18next";
import dayjs, { Dayjs } from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import updateLocale from "dayjs/plugin/updateLocale";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

import "dayjs/locale/uk";
import "dayjs/locale/en";
import TextBlockSection from "./parts/TextBlockSection.tsx";
import { Routes } from "@/types/routes.d";
import { useMediaQuery } from "@mui/material";
import Loader from "@/components/Common/Loader";
import { IProfessor, ISchedule } from "@/types/annualSummerSchoolTypes.ts";

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
};

const SchedulePage = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showAllLectures, setShowAllLectures] = useState(false);
  const [isShowSearchResults, setIsShowSearchResults] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState("");
  // const [selectedProfessorData, setSelectedProfessorData] =
  //   useState<IProfessor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedLectures, setSelectedLectures] = useState<ISchedule[]>([]);
  const [isProfessorSelectOpen, setIsProfessorSelectOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {
    i18n: { language },
    t,
  } = useTranslation();
  const { professors, schedules, isLoading, requestLang } =
    useAnnualSummerSchoolStore((state) => ({
      professors: state.professors,
      schedules: state.schedules,
      isLoading: state.isLoading,
      requestLang: state.requestLang,
    }));

  useEffect(() => {
    setShowLoader(true);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [selectedLectures]);

  // useEffect(() => {
  //   // Обновляем данные в инпуте селект
  //   setSelectedProfessorName(selectedProfessorName); // Сбрасываем выбранного профессора
  //   updateSchedule(selectedProfessorName, selectedDate); // Обновляем расписание с пустым выбранным профессором

  //   // Обновляем таблицу
  //   updateSchedule(selectedProfessorName, selectedDate);
  // }, [requestLang, selectedDate, selectedProfessorName]);

  // useEffect(() => {
  //   if (professors) {
  //     setSelectedProfessorName(professors[0].name);
  //   }
  // }, [professors]);
  // console.log(selectedProfessorData);
  const updateSchedule = useCallback(
    (selectedProfessorKey: string, selectedDate: dayjs.Dayjs | null) => {
      let updatedLectures: ISchedule[] = [];

      if (selectedProfessorKey === "Показати всіх") {
        // Если выбрано "Показать всех", отобразите все лекции
        if (selectedDate) {
          updatedLectures = schedules.filter((schedule) =>
            dayjs(schedule.date).isSame(selectedDate, "day")
          );
        } else {
          updatedLectures = schedules.filter((schedule) =>
            dayjs(schedule.date).isSameOrAfter(dayjs(), "day")
          );
        }
        setIsShowSearchResults(true);
      } else {
        if (schedules && professors) {
          const selectedProfessorObject = professors.find(
            (professor) => professor._key === selectedProfessorKey
          );

          if (selectedProfessorObject) {
            if (selectedDate) {
              updatedLectures = schedules.filter(
                (schedule) =>
                  schedule.lecture === selectedProfessorKey &&
                  dayjs(schedule.date).isSame(selectedDate, "day")
              );
            } else {
              updatedLectures = schedules.filter(
                (schedule) =>
                  schedule.lecture === selectedProfessorKey &&
                  dayjs(schedule.date).isSameOrAfter(dayjs(), "day")
              );
            }
            setIsShowSearchResults(true);
          }
        }
      }

      updatedLectures.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setSelectedLectures(updatedLectures);
    },
    [schedules, professors]
  );

  // useEffect(() => {
  //   // if (professors && selectedProfessorName === professors[0].name) {
  //   //   // Перевірка, чи selectedProfessorName не встановлено
  //   //   setSelectedProfessorName(professors[0].name);
  //   // }
  //   if (selectedProfessorName || selectedDate) {
  //     console.log(selectedProfessorName);
  //     console.log(selectedDate);
  //     updateSchedule(selectedProfessorName, selectedDate);
  //   }
  // }, [
  //   requestLang,
  //   selectedProfessorName,
  //   selectedDate,
  //   updateSchedule,
  //   professors,
  // ]);

  const handleProfessorChange = (event: SelectChangeEvent<string>) => {
    const selectedProfessorKey = event.target.value;
    setSelectedProfessor(selectedProfessorKey);
    setShowAllLectures(false);
    updateSchedule(selectedProfessorKey, selectedDate);
  };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    updateSchedule(selectedProfessor, date);
  };

  const formatDate = (date: Dayjs | string) => {
    return dayjs(date).format("DD.MM.YY");
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

  const getProfessorInfo = (lectureKey: string): string => {
    const professor = professors.find(
      (professor) => professor._key === lectureKey
    );
    if (professor) {
      return `${
        professor.role?.charAt(0).toUpperCase() + professor.role?.slice(1)
      } - ${professor.name}`;
    }
    return "";
  };

  if (isLoading) return <Loader />;
  if (!requestLang.length) return null;

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
            !isMobileScreen && (isProfessorSelectOpen || isDatePickerOpen)
              ? "380px"
              : "0",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          gap: { xs: "24px", md: "12px", lg: "32px" },
          justifyContent: "space-between",
          borderRadius: "4px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {professors && (
            <DemoItem
              label={t(`summerSchoolSchedules.inputNameLabel`)}
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
                }}
                id="professor-select"
                value={selectedProfessor}
                // defaultValue={professors[0].name}
                onChange={handleProfessorChange}
                onOpen={handleProfessorSelectOpen}
                onClose={handleProfessorSelectClose}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      marginTop: { xs: "16px", md: "32px" },
                      padding: "16px",
                      backgroundColor: "rgba(217, 161, 69, 0.1)",
                      height: { xs: "186px", md: "204px" },
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
                <MenuItem value="Показати всіх">
                  <em>Показати всіх</em>
                </MenuItem>
                {professors.map((professor) => (
                  <MenuItem key={professor._key} value={professor._key}>
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
            adapterLocale={requestLang === "en" ? "en" : "uk"}
          >
            <DemoItem
              label={t(`summerSchoolSchedules.inputDateLabel`)}
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
                      backgroundColor: "rgba(217, 161, 69, 0.1)",
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
        </Box>
      </Box>
      {!isShowSearchResults && (
        <Box
          sx={{
            marginTop: { xs: "412px", md: "468px", lg: "526px" },
          }}
        />
      )}
      {selectedLectures.length > 0 && !showLoader && (
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
      {selectedLectures.length === 0 && isShowSearchResults && !showLoader && (
        <Box
          sx={{
            textAlign: "center",
            paddingTop: { xs: "48px", md: "96px", lg: "136px" },
            paddingBottom: { xs: "268px", md: "292px", lg: "362px" },
          }}
        >
          <Typography variant="h3">
            {t(`summerSchoolSchedules.notFoundText`)}
          </Typography>
        </Box>
      )}
      {showLoader ? (
        <Loader />
      ) : (
        <Box
          sx={{
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom:
              selectedLectures.length > 0 ? "1px solid black" : "none",
            marginBottom: { xs: "72px", md: "96px", lg: "120px" },
          }}
        >
          {selectedLectures.map((lecture) => (
            <Box key={lecture._key}>
              {lecture.rehearsals.map((rehearsal, index) => (
                <Box
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
                      }}
                    >
                      <Typography variant="bodyRegular">
                        {formatDate(lecture.date)}
                      </Typography>
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
                      }}
                    ></Box>
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
                    }}
                  >
                    <Typography variant="bodyRegular">
                      {rehearsal.time}
                    </Typography>
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
                    }}
                  >
                    <Typography variant="bodyMedium">
                      {getProfessorInfo(lecture.lecture)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderTop: "1px solid black",
                      padding: {
                        xs: "8px 8px",
                        md: "40px 24px",
                        lg: "48px 48px",
                      },
                    }}
                  >
                    <TextBlockSection blocks={rehearsal.event} />
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
      {/* <Collapse in={showAllLectures} timeout={1000}>
        <Box
          sx={{
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            borderBottom:
              selectedLectures && selectedLectures.length > 0
                ? "1px solid black"
                : "none",
          }}
        >
          {selectedLectures.map((lecture) => (
            <Box key={lecture._key}>
              {lecture.rehearsals.map((rehearsal, index) => (
                <Box
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
                      }}
                    >
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
                      }}
                    ></Box>
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
                    }}
                  >
                    <Typography variant="bodyMedium">{`${
                      selectedProfessorData?.role
                        ? selectedProfessorData.role.charAt(0).toUpperCase() +
                          selectedProfessorData.role.slice(1)
                        : ""
                    } - ${selectedProfessorData?.name || ""}`}</Typography>
                  </Box>
                  <Box
                    sx={{
                      borderTop: "1px solid black",
                      padding: "48px",
                    }}
                  >
                    <TextBlockSection blocks={rehearsal.event} />
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Collapse> */}

      {/* {selectedLectures.length > 2 && (
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginTop: "48px",
            marginBottom: { xs: "72px", md: "96px", lg: "120px" },
          }}
        >
          <Button
            sx={{ width: "288px" }}
            variant="transparent"
            onClick={showAllLectures ? handleShowLess : handleShowMore}
          >
            {t(
              `buttons.${
                showAllLectures ? Buttons.SHOW_LESS : Buttons.SHOW_MORE
              }`
            )}
          </Button>
        </Box>
      )} */}
    </Container>
  );
};

export default SchedulePage;
