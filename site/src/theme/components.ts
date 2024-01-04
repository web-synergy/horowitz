import { Components } from '@mui/material';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiButton } from './themed-components/button.modifier';
import { MuiSvgIcon } from './themed-components/svgIcon.modifier';
import { MuiIconButton } from './themed-components/iconButton.modifier';

import { Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiContainer,
  MuiButton,
  MuiSvgIcon,
  MuiIconButton,
};
