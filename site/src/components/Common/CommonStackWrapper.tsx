import { FC, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@mui/material';

const CommonStackWrapper: FC<PropsWithChildren<StackProps>> = ({
  children,
  ...props
}) => {
  return (
    <Stack rowGap={{ xs: 3, md: 5, lg: 6 }} {...props}>
      {children}
    </Stack>
  );
};

export default CommonStackWrapper;
