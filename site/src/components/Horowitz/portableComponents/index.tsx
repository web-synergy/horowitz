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
          paddingLeft: "28px",
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
          paddingLeft: "28px",
          gap: "16px",
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),
  },
};

export const collapsComponents: PortableTextComponents = {
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
          paddingTop: "16px",
          paddingLeft: "28px",
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
        start={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "28px",
          gap: "16px",
          paddingTop: "16px",
        }}
        variant="bodyRegular"
      >
        {children}
      </Typography>
    ),
  },
};
