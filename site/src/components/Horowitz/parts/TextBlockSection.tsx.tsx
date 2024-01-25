import React from "react";
import { Box } from "@mui/material";
import { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { components } from "../portableComponents"; // Assuming you have a separate file for portable text components

interface TextBlockSectionProps {
  blocks: PortableTextBlock[];
}

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
