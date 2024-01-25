import React from "react";
import { Typography } from "@mui/material";
import { Section } from "@/components/Contacts/styled";

interface QuoteSectionProps {
  quote: {
    author: string[];
    quote: string[];
  };
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
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
          color: "#E19C2A",
        }}
      >
        — {quote.author}
      </Typography>
    </Section>
  );
};

export default QuoteSection;
