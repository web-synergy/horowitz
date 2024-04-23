import { useCallback, useEffect, useState } from "react";
import {
  MenuItem,
  Container,
  Box,
  Typography,
  Select,
  useTheme,
  SelectChangeEvent,
} from "@mui/material";
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
import { ISchedule } from "@/types/annualSummerSchoolTypes.ts";
import picture from "../../../assets/images/schedules_screensaver.webp";
import { TabletContentWrapper, WrapperImg } from "./styles.ts";
import CustomDatePicker from "./CustomDatePicker.tsx";

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

const SchedulePage = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [isShowSearchResults, setIsShowSearchResults] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedLectures, setSelectedLectures] = useState<ISchedule[]>([]);
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
    setShowLoader(true);
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [selectedLectures]);

  const updateSchedule = useCallback(
    (selectedProfessorKey: string | null, selectedDate: Dayjs | null) => {
      let updatedLectures: ISchedule[] = [];
      console.log(selectedProfessorKey);

      if (selectedProfessorKey === "All") {
        updatedLectures = schedules!.filter((schedule) =>
          selectedDate
            ? dayjs(schedule.date).isSame(selectedDate, "day")
            : dayjs(schedule.date).isSameOrAfter(dayjs(), "day")
        );
        setIsShowSearchResults(true);
      } else if (selectedProfessorKey) {
        const selectedProfessorObject = professors!.find(
          (professor) => professor._key === selectedProfessorKey
        );

        if (selectedProfessorObject) {
          updatedLectures = schedules!.filter(
            (schedule) =>
              schedule.lecture === selectedProfessorKey &&
              (selectedDate
                ? dayjs(schedule.date).isSame(selectedDate, "day")
                : dayjs(schedule.date).isSameOrAfter(dayjs(), "day"))
          );
          setIsShowSearchResults(true);
        }
      }

      updatedLectures.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setSelectedLectures(updatedLectures);
    },
    [schedules, professors]
  );

  useEffect(() => {
    updateSchedule(selectedProfessor, selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestLang]);

  const handleProfessorChange = (event: SelectChangeEvent<string>) => {
    const selectedProfessorKey = event.target.value;
    setSelectedProfessor(selectedProfessorKey);
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
    const professor = professors!.find(
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
          backgroundColor: "#EAE2D5",
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
                onChange={handleProfessorChange}
                onOpen={handleProfessorSelectOpen}
                onClose={handleProfessorSelectClose}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      marginTop: { xs: "16px", md: "32px" },
                      padding: "16px",
                      backgroundColor: "#EAE2D5",
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
                <MenuItem value="All">
                  <em>{t(`summerSchoolSchedules.showAllSpeaker`)}</em>
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
          <CustomDatePicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            isMobileScreen={isMobileScreen}
            isDatePickerOpen={isDatePickerOpen}
            handleDatePickerOpen={handleDatePickerOpen}
            handleDatePickerClose={handleDatePickerClose}
            schedules={schedules}
            selectedProfessor={selectedProfessor}
            requestLang={requestLang}
          />
        </Box>
      </Box>
      <Box></Box>
      {!isShowSearchResults && (
        <WrapperImg>
          <img
            src={picture}
            alt="Описание изображения"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </WrapperImg>
      )}
      {selectedLectures.length > 0 && !showLoader && (
        <Typography
          variant="h3"
          sx={{
            marginTop: { xs: "48px", md: "40px", lg: "48px" },
            marginBottom: { xs: "20px", md: "40px", lg: "48px" },
          }}
        >
          {t(`summerSchoolSchedules.searchResults`)}
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
            marginBottom: isShowSearchResults
              ? { xs: "72px", md: "96px", lg: "120px" }
              : undefined,
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
                    <TabletContentWrapper
                      sx={{
                        borderRight: { md: "1px solid black" },
                        borderTop: "1px solid black",
                        backgroundColor: {
                          xs: "rgba(217, 161, 69, 0.2)",
                          md: "transparent",
                        },
                      }}
                    >
                      <Typography variant="bodyRegular">
                        {formatDate(lecture.date)}
                      </Typography>
                    </TabletContentWrapper>
                  )}
                  {index > 0 && (
                    <TabletContentWrapper
                      sx={{
                        borderRight: { md: "1px solid black" },
                      }}
                    ></TabletContentWrapper>
                  )}
                  <TabletContentWrapper
                    sx={{
                      borderRight: { md: "1px solid black" },
                      borderTop: "1px solid black",
                    }}
                  >
                    <Typography variant="bodyRegular">
                      {rehearsal.time}
                    </Typography>
                  </TabletContentWrapper>
                  <TabletContentWrapper
                    sx={{
                      borderRight: { md: "1px solid black" },
                      borderTop: "1px solid black",
                    }}
                  >
                    <Typography variant="bodyMedium">
                      {getProfessorInfo(lecture.lecture)}
                    </Typography>
                  </TabletContentWrapper>
                  <TabletContentWrapper
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
                  </TabletContentWrapper>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default SchedulePage;
