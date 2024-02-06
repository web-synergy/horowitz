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
        alignItems: "center",
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
          gap: { xs: "8px", md: "16px" },
          // minWidth: "190px",
          maxWidth: "268px",
          hyphens: "none",
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          variant="bodyRegular"
          component={"p"}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: theme.palette.primary.main }}
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
