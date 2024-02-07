import { urlFor } from "@/config/sanity/imageUrl";
import { Typography, Box, useTheme } from "@mui/material";

import { WrapperImg } from "../styled";
import { Member } from "@/types/administrationTypes";

const MemberCardItem = ({ member }: { member: Member }) => {
  const theme = useTheme();
  return (
    <Box
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

          // alignItems: { xs: "center", md: "flex-start" },
          alignItems: { xs: "center" },
          gap: { xs: "8px", md: "16px" },
          // width: "194px",
          paddingTop: { md: "34px", lg: "94px" },
          maxWidth: "268px",
        }}
      >
        <Typography
          // sx={{ textAlign: { xs: "center", md: "left" } }}
          sx={{ textAlign: { xs: "center" } }}
          variant="bodyRegular"
          component={"p"}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            // textAlign: { xs: "center", md: "left" },
            textAlign: { xs: "center" },
            color: theme.palette.primary.main,
          }}
          variant="bodyRegular"
          component={"p"}
        >
          {member.role}
        </Typography>
      </Box>
    </Box>
  );
};

export default MemberCardItem;
