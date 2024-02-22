import React from "react";
import { Box, Collapse } from "@mui/material";

import { PortableText } from "@portabletext/react";
import { components } from "../portableComponents";
// import { collapsComponents } from "../portableComponents/CollapsComponents";
import { LiteratureSectionProps } from "@/types/horowitzTypes";

const LiteratureSection: React.FC<LiteratureSectionProps> = ({
  literature,
  isAllLiteratureVisible,
}) => {
  return (
    <Box
      sx={{
        paddingTop: { xs: "24px", md: "16px", lg: "24px" },
        "p:not(:last-child)": { marginBottom: "16px" },
      }}
    >
      <PortableText value={literature.slice(0, 4)} components={components} />
      <Collapse in={isAllLiteratureVisible} timeout={1000}>
        <PortableText value={literature.slice(4)} components={components} />
      </Collapse>
    </Box>
  );
};

export default LiteratureSection;
