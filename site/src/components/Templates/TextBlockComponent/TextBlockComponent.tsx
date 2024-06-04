import { FC } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { WithImage, TextBlock, WithoutImage } from './styled';
import { TextBlockImageType } from '@/types/commonTypes';
import { urlFor } from '@/config/sanity/imageUrl';
import { transformText } from '@/utils/transfromText';

const ASPECT_RATIO = [
  { title: '3/4', value: 0.75 },
  { title: '1/1', value: 1 },
  { title: '16/9', value: 1.777 },
];
interface TextBlockProps {
  text: string;
  img?: TextBlockImageType;
}

const TextBlockComponent: FC<TextBlockProps> = ({ text, img }) => {
  const { containerRef, containerSize } = useWidthBlokSize();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));

  const textArray = transformText(text);
  if (!img || !img.image) {
    return (
      <WithoutImage>
        {textArray.map((item, indx) => (
          <TextBlock key={indx}>{item}</TextBlock>
        ))}
      </WithoutImage>
    );
  }

  const { aspectRatio, image } = img;
  const imageWidth = isDesktop
    ? 548
    : isTablet
    ? containerSize * 0.5
    : containerSize;

  const aspectValue =
    ASPECT_RATIO.find((item) => item.title === aspectRatio)?.value || 1;
  const imageHeight = Math.floor(imageWidth / aspectValue);
  const imageUrl = urlFor(image).url().toString();

  return (
    <WithImage
      ref={containerRef}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
    >
      <img src={imageUrl} alt={`photo of ${name}`} />
      <Box>
        {textArray.map((item, indx) => (
          <TextBlock key={indx} >{item}</TextBlock>
        ))}
      </Box>
    </WithImage>
  );
};

export default TextBlockComponent;
