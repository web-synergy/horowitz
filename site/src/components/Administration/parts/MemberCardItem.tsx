import { urlFor } from '@/config/sanity/imageUrl';
import { Box, useTheme } from '@mui/material';

import { WrapperImg, TextBlock } from '../styled';
import { Member } from '@/types/administrationTypes';
import GrowView from '@/components/Common/GrowView';

const MemberCardItem = ({ member }: { member: Member }) => {
  const theme = useTheme();
  return (
    <GrowView>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '16px', md: '8px', lg: '16px' },
          height: { md: '144px', lg: '262px' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <WrapperImg className={member.img ? '' : 'no-image'}>
          {member.img ? (
            <img
              src={urlFor(member.img)
                .auto('format')
                .height(262)
                .width(262)
                .url()
                .toString()}
              alt={`Зображення ${member.role}`}
            />
          ) : (
            <Box
              sx={{
                width: { md: '144px', lg: '262px' },
                height: { md: '144px', lg: '262px' },
                backgroundColor: '#A4A2A2',
              }}
            ></Box>
          )}
        </WrapperImg>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: '8px', lg: '16px' },
            paddingTop: { md: '34px', lg: '94px' },
          }}
        >
          <TextBlock>{member.name}</TextBlock>
          <TextBlock sx={{ color: theme.palette.primary.main }}>
            {member.role}
          </TextBlock>
        </Box>
      </Box>
    </GrowView>
  );
};

export default MemberCardItem;
