import { FC } from 'react';
import {
  Select,
  MenuItem,
  useTheme,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';

import { ProfessorType } from '@/types/annualSummerSchoolTypes';

interface CustomSelectInputProps {
  professors: ProfessorType[];
  selectedProfessor: string;
  handleProfessorChange: (event: SelectChangeEvent<string>) => void;
  handleProfessorSelectOpen: () => void;
  handleProfessorSelectClose: () => void;
  isMobileScreen: boolean;
  isProfessorSelectOpen: boolean;
  t: (key: string) => string;
}

const CustomSelectInput: FC<CustomSelectInputProps> = ({
  professors,
  selectedProfessor,
  handleProfessorChange,
  handleProfessorSelectOpen,
  handleProfessorSelectClose,
  isMobileScreen,
  isProfessorSelectOpen,
  t,
}) => {
  const theme = useTheme();

  return (
    <DemoItem
      label={t(`summerSchoolSchedules.inputNameLabel`)}
      sx={{
        marginBottom: isMobileScreen && isProfessorSelectOpen ? '206px' : '0px',
        '& p': {
          fontSize: { xs: '14px', md: '16px' },
          lineHeight: { xs: '22px', md: '24px' },
        },
      }}
    >
      <Select
        variant="outlined"
        sx={{
          width: '100%',
          '&:hover': {
            '&& fieldset': {
              borderColor: theme.palette.primary.main,
            },
          },
        }}
        id="professor-select"
        value={selectedProfessor}
        onChange={handleProfessorChange}
        onOpen={handleProfessorSelectOpen}
        onClose={handleProfessorSelectClose}
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: { xs: '16px', md: '32px' },
              padding: '16px',
              backgroundColor: '#EAE2D5',
              height: { xs: '186px', md: '204px' },
              overflowY: 'auto',
              fontSize: '40px',
              border: '1px solid',
              borderColor: theme.palette.neutral[40],
              boxShadow: 'none',

              '& .MuiMenuItem-root': {
                paddingX: 0,
                paddingY: '4px',
                gap: '20px',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: { xs: '24px', md: '28px' },
              },
            },
          },
        }}
        displayEmpty
        renderValue={
          selectedProfessor !== ''
            ? undefined
            : () => (
                <Typography variant="bodyRegular">
                  {t(`summerSchoolSchedules.inputNamePlaceholder`)}
                </Typography>
              )
        }
      >
        <MenuItem value="All">
          <em>{t(`summerSchoolSchedules.showAllSpeaker`)}</em>
        </MenuItem>
        {professors.map((professor) => (
          <MenuItem key={professor._key} value={professor._key}>
            {professor.name}
          </MenuItem>
        ))}
      </Select>
    </DemoItem>
  );
};

export default CustomSelectInput;
