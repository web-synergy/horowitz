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
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

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

const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiPickersLayout-root": {
    backgroundColor: "#007bff", // Цвет фона дней недели
  },
  "& .MuiPickersLayout-root.MuiPickersCalendar-week": {
    backgroundColor: "#007bff", // Цвет фона дней недели
  },
  "& .MuiPickersCalendarHeader-daysHeader": {
    backgroundColor: "#007bff", // Цвет фона месяца
    color: "#007bff", // Цвет текста месяца
  },
  "& .MuiTypography-root MuiTypography-caption MuiDayCalendar-weekDayLabel": {
    backgroundColor: "#007bff", // Цвет фона чисел
    color: "#007bff", // Цвет текста чисел
    "&:hover": {
      backgroundColor: "#007bff", // Цвет фона чисел при наведении
    },
  },
}));

const SchedulePage = () => {
  const [professor, setProfessor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const { t } = useTranslation();

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
          marginBottom: "40px",
          display: "flex",
          alignItems: "flex-end",
          gap: "30px",
          justifyContent: "space-between",
          // "& > *": { flexGrow: 1 },
        }}
      >
        <Box>
          <InputLabel sx={{ color: "black" }} htmlFor="professor-select">
            Выберите профессора
          </InputLabel>
          <CustomTextField
            sx={{ width: "328px" }}
            id="professor-select"
            select
            value={professor}
            onChange={handleProfessorChange}
          >
            {/* <MenuItem disabled value="">
            <em>Выберите профессора</em>
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
          </CustomTextField>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ padding: 0 }} components={["CustomDatePicker"]}>
            <DemoItem label="Дата репетиції">
              <CustomDatePicker
                slotProps={{
                  layout: {
                    sx: {
                      color: "rgb(8, 7, 8)",
                      borderRadius: "4px",
                      borderWidth: "4px",
                      borderColor: "#e91e63",
                      border: "0px solid",
                      backgroundColor: "rgba(217, 161, 69)",
                      "& .MuiPickersArrowSwitcher-button": {
                        borderRadius: "4px",
                        backgroundColor: "#007bff", // Цвет фона чисел
                        color: "#007bff", // Цвет текста чисел
                        "&:hover": {
                          backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                        },
                      },
                      "& .MuiDayCalendar-weekDayLabel": {
                        borderRadius: "4px",
                        backgroundColor: "#007bff", // Цвет фона чисел
                        color: "#007bff", // Цвет текста чисел
                        "&:hover": {
                          backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                        },
                      },
                      "& .MuiPickersDay-root": {
                        borderRadius: "4px",
                        backgroundColor: "#007bff", // Цвет фона чисел
                        color: "#007bff", // Цвет текста чисел
                        "&:hover": {
                          backgroundColor: "#e91e63", // Цвет фона чисел при наведении
                        },
                      },
                    },
                  },
                }}
                sx={{ width: "328px", padding: 0 }}
                // defaultValue={dayjs("2022-04-17")}
              />
            </DemoItem>
          </DemoContainer>
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
