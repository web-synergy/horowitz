import { PortableTextComponents } from "@portabletext/react";
import { Typography } from "@mui/material";

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="bodyRegular"
        component={"p"}
        sx={{
          textAlign: "justify",
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
