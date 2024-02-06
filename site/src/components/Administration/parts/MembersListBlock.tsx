import { Box } from "@mui/material";
import MemberCardItem from "./MemberCardItem";
import { Member } from "@/types/administrationTypes";

const MembersListBlock = ({ members }: { members: Member[] }) => {
  return (
    <Box
      component={"ul"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        gap: "48px",
        maxWidth: { md: "548px" },
        margin: 0,
        padding: 0,
      }}
    >
      {members.map((member, index) => (
        <MemberCardItem key={index} member={member} />
      ))}
    </Box>
  );
};

export default MembersListBlock;
