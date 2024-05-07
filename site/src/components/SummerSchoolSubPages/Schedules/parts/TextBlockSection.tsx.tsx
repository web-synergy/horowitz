import React from "react";
import { Box } from "@mui/material";

import { PortableText } from "@portabletext/react";
import { components } from "../portableComponents";
import { PortableTextBlock } from "@portabletext/types";

export interface TextBlockProps {
  blocks: PortableTextBlock[];
}

const TextBlockSection: React.FC<TextBlockProps> = ({ blocks }) => {
  return (
    <Box
      sx={{
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
