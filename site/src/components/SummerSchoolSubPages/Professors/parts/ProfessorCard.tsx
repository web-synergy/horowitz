import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { t } from "i18next";

import SvgSpriteIcon from "@/components/Common/SvgSpriteIcon";
import { urlFor } from "@/config/sanity/imageUrl";
import { IProfessor } from "@/types/annualSummerSchoolTypes";
import { Buttons } from "@/types/translation.d";
import { WrapperImg } from "../styled";

interface ProfessorCardProps {
  professor: IProfessor;
}

const ProfessorCard: React.FC<ProfessorCardProps> = ({ professor }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Box>
      <WrapperImg>
        <img
          src={urlFor(professor.avatar.image).auto("format").url().toString()}
          alt={`Зображення ${professor.name}`}
        />
      </WrapperImg>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "8px", md: "16px" },
          paddingTop: { xs: "8px", md: "16px", lg: "24px" },
        }}
      >
        <Typography variant="subhead">{professor.name}</Typography>
        <Button
          component={RouterLink}
          to={`${pathname}/sa-professor/:${professor._key}`}
          endIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: "rotate(270deg)" }} />
          }
          variant="tertiary"
          sx={{ alignSelf: "flex-end" }}
        >
          {t(`buttons.${Buttons.READ_MORE}`)}
        </Button>
      </Box>
    </Box>
  );
};

export default ProfessorCard;
