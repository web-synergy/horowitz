import { Typography } from "@mui/material";
import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="bodyRegular"
        component={"p"}
        sx={{
          textAlign: "justify",
          flex: { lg: "1 1 calc(50% - 12px)" },
        }}
      >
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <Typography
        component={"ul"}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          gap: "16px",
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),

    number: ({ children }) => (
      <Typography
        component={"ol"}
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "18px",
          gap: "16px",
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),
  },
};
