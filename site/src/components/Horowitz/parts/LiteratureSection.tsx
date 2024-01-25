import React from "react";
import { Box } from "@mui/material";

import { PortableText } from "@portabletext/react";
import { components } from "../portableComponents";
import { PortableTextBlock } from "@portabletext/types";

interface LiteratureSectionProps {
  literature: PortableTextBlock[];
  visibleItems: number;
}

const LiteratureSection: React.FC<LiteratureSectionProps> = ({
  literature,
  visibleItems,
}) => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "24px", md: "16px", lg: "24px" },
        "p:not(:last-child)": { marginBottom: "16px" },
      }}
    >
      <PortableText
        value={literature.slice(0, visibleItems)}
        components={components}
      />
    </Box>
  );
};

export default LiteratureSection;
