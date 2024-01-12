import {
  Box,
  Link,
  Stack,
  StackProps,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FC } from 'react';

import { phoneNumberFormatting } from '../../../utils/helpers';
import { DescBox, InfoDivider } from '../styled';

interface ContactsDetailsProps {
  location?: string;
  phone?: string;
  email?: string;
  pressCenterPhone?: string;
  pressCenterEmail?: string;
}

const StyledStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    rowGap: '8px',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    columnGap: '24px',
  },
}));

const ContentStack = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '18px',
  },
}));

const ContactsDetails: FC<ContactsDetailsProps> = ({
  location,
  phone,
  email,
  pressCenterPhone,
  pressCenterEmail,
}) => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  return (
    <Box>
      <ContentStack>
        {location && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">Адреса:</Typography>
            </DescBox>
            <Typography variant="bodyRegular" component={'p'}>
              {location}
            </Typography>
          </StyledStack>
        )}
        {phone && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">Телефон:</Typography>
            </DescBox>
            <Link
              onClick={(e) => !isMobile && e.preventDefault()} // щоб запобігти перезавантаженню сторінки
              href={isMobile ? `tel:${phone}` : ''}
              sx={{ color: 'inherit' }}
            >
              <Typography variant="bodyRegular" component={'p'}>
                {phoneNumberFormatting(phone)}
              </Typography>
            </Link>
          </StyledStack>
        )}
        {email && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">E-mail:</Typography>
            </DescBox>
            <Link href={`mailto:${email}`} sx={{ color: 'inherit' }}>
              <Typography variant="bodyRegular" component={'p'}>
                {email}
              </Typography>
            </Link>
          </StyledStack>
        )}
        {pressCenterPhone && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">Прес-центр:</Typography>
            </DescBox>
            <Link
              onClick={(e) => !isMobile && e.preventDefault()}
              href={isMobile ? `tel:${pressCenterPhone}` : ''}
              sx={{ color: 'inherit' }}
            >
              <Typography variant="bodyRegular" component={'p'}>
                {phoneNumberFormatting(pressCenterPhone)}
              </Typography>
            </Link>
          </StyledStack>
        )}
        {pressCenterEmail && (
          <StyledStack>
            <DescBox>
              <Typography variant="bodyMedium">E-mail:</Typography>
            </DescBox>
            <Link href={`mailto:${pressCenterEmail}`} sx={{ color: 'inherit' }}>
              <Typography variant="bodyRegular" component={'p'}>
                {pressCenterEmail}
              </Typography>
            </Link>
          </StyledStack>
        )}
      </ContentStack>
      <InfoDivider variant="light" />
    </Box>
  );
};

export default ContactsDetails;
