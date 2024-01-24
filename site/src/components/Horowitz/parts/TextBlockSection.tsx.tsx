import React from "react";
import { Box } from "@mui/material";
import { PortableText } from "@portabletext/react";
import { components } from "../horowitzPortableComponents";
import { TextBlockSectionProps } from "@/types/horowitzTypes";

const TextBlockSection: React.FC<TextBlockSectionProps> = ({ blocks }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "24px",
        rowGap: "16px",
      }}
    >
      <PortableText value={blocks} components={components} />
    </Box>
  );
};

export default TextBlockSection;
