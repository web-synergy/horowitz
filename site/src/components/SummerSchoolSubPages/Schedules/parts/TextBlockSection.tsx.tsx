import React from "react";
import { Box } from "@mui/material";

import { PortableText } from "@portabletext/react";
import { components } from "../portableComponents";
import { TextBlockSectionProps } from "@/types/horowitzTypes";

const TextBlockSection: React.FC<TextBlockSectionProps> = ({ blocks }) => {
  return (
    <Box
      sx={{
        // columnCount: { xs: 1, lg: 2 },
        // columnGap: '24px',

        "& p:not(:last-child)": {
          marginBottom: 2,
        },
      }}
    >
      <PortableText value={blocks} components={components} />
    </Box>
  );
};

export default TextBlockSection;
