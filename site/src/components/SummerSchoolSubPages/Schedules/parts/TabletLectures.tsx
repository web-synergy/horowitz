import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { TabletContentWrapper } from "../styles";
import TextBlockSection from "./TextBlockSection.tsx";
import { Dayjs } from "dayjs";
import { IRehearsal } from "@/types/annualSummerSchoolTypes.ts";

interface TabletLecturesProps {
  index: number;
  lecture: {
    date: string | Dayjs;
    lecture: string;
  };
  rehearsal: IRehearsal;
  formatDate: (date: string | Dayjs) => string;
  getProfessorInfo: (lectureKey: string) => string;
}

const TabletLectures: FC<TabletLecturesProps> = ({
  index,
  lecture,
  rehearsal,
  formatDate,
  getProfessorInfo,
}) => {
  return (
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
        <Typography variant="bodyRegular">{rehearsal.time}</Typography>
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
  );
};

export default TabletLectures;
