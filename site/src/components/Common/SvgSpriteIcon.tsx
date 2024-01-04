import { SvgIcon, SvgIconProps } from '@mui/material';
import { FC } from 'react';
import sprite from '../../../public/sprite.svg';

interface SvgSpriteIconProps extends SvgIconProps {
  icon: string;
  size?: 'small' | 'medium' | 'large';
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({
  icon,
  size = 'small',
  ...props
}) => {
  return (
    <SvgIcon fontSize={size} {...props}>
      <use href={`${sprite}#${icon}`}></use>
    </SvgIcon>
  );
};

export default SvgSpriteIcon;
