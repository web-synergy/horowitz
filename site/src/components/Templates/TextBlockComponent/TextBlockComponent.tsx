import { FC } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { WithImage, WithoutImage } from './styled';
import TextBlock from './parts/TextBlock';
import { IImageReference } from '@/types/commonTypes';
import { urlFor } from '@/config/sanity/imageUrl';
import { transformText } from '@/utils/transfromText';
import { getImageData } from '@/utils/getImageData';
import Image from '@/components/Common/Image';

interface TextBlockProps {
  text: string;
  img?: IImageReference;
  column?: 1 | 2;
  gap?: 8 | 16;
  inline?: boolean;
}

const TextBlockComponent: FC<TextBlockProps> = ({
  text,
  img,
  column = 2,
  gap,
  inline,
}) => {
  const { containerRef, containerSize } = useWidthBlokSize();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));

  const textArray = transformText(text);
  if (!img) {
    return (
      <WithoutImage column={column} inline={inline}>
        {textArray.map((item, indx) => (
          <TextBlock key={indx} text={item} gap={gap} />
        ))}
      </WithoutImage>
    );
  }

  const {
    dimensions: { height, width },
  } = getImageData(img.asset._ref);

  const aspectRatio = width / height;
  const imageWidth = isDesktop
    ? 548
    : isTablet
    ? containerSize * 0.5
    : containerSize;

  const imageHeight = Math.floor(imageWidth / aspectRatio);

  const imageUrl = urlFor(img).url().toString();

  return (
    <WithImage
      ref={containerRef}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      column={column}
    >
      <Image
        src={imageUrl}
        alt={`photo of ${name}`}
        height={imageHeight}
        width={imageWidth}
        isLazyLoading={false}
      />
      <Box>
        {textArray.map((item, indx) => (
          <TextBlock key={indx} text={item} gap={gap} />
        ))}
      </Box>
    </WithImage>
  );
};

export default TextBlockComponent;
