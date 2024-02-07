import { urlFor } from "@/config/sanity/imageUrl";
import { Box, useTheme } from "@mui/material";

import { WrapperImg, TextBlock } from "../styled";
import { Member } from "@/types/administrationTypes";

const MemberCardItem = ({ member }: { member: Member }) => {
  const theme = useTheme();
  return (
    <Box
      component={"li"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "8px", md: "8px", lg: "16px" },
        height: { md: "144px", lg: "262px" },
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <WrapperImg className={member.img ? "" : "no-image"}>
        {member.img ? (
          <img
            src={urlFor(member.img).url().toString()}
            alt={`Зображення ${member.role}`}
          />
        ) : (
          <Box
            sx={{
              width: { md: "144px", lg: "262px" },
              height: { md: "144px", lg: "262px" },
              backgroundColor: "#A4A2A2",
            }}
          ></Box>
        )}
      </WrapperImg>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "8px", lg: "16px" },
          paddingTop: { md: "34px", lg: "94px" },
        }}
      >
        <TextBlock>{member.name}</TextBlock>
        <TextBlock sx={{ color: theme.palette.primary.main }}>
          {member.role}
        </TextBlock>
      </Box>
    </Box>
  );
};

export default MemberCardItem;
