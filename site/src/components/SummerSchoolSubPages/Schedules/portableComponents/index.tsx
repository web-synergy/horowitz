import { PortableTextComponents } from "@portabletext/react";
import { Typography } from "@mui/material";

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="bodyRegular"
        component={"p"}
        sx={{
          textAlign: "start",
        }}
      >
        {children}
      </Typography>
    ),
  },
};
