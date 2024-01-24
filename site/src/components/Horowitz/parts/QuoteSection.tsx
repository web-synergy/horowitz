import React from "react";
import { Section } from "@/components/Contacts/styled";
import { Typography, useTheme } from "@mui/material";
import { QuoteSectionProps } from "@/types/horowitzTypes";

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
  const theme = useTheme();

  return (
    <Section
      component={"section"}
      sx={{
        textAlign: "center",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: { xs: "24px 20px", md: "72px 54px", lg: "148px 172px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: {
            xs: "16px",
            md: "32px",
            lg: "24px",
          },
        }}
      >
        {quote.quote}
      </Typography>
      <Typography
        variant="subhead"
        sx={{
          color: theme.palette.text.quote,
        }}
      >
        — {quote.author}
      </Typography>
    </Section>
  );
};

export default QuoteSection;
