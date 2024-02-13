import { urlFor } from "@/config/sanity/imageUrl";
import { Box } from "@mui/material";
import { FC } from "react";
import { AboutCompetitionImage } from "@/types/aboutCompetitionTypes";

interface LogotypesGalleryProps {
  image: AboutCompetitionImage;
}

const ImageSection: FC<LogotypesGalleryProps> = ({ image }) => {
  return (
    <Box>
      <Box
        component={"img"}
        src={urlFor(image).url().toString()}
        alt="Зображення історії"
        sx={{
          height: "auto",
          width: "100%",
          maxWidth: "100%",
          fontSize: 0,
        }}
      />
    </Box>
  );
};

export default ImageSection;
