import { FC } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { components } from '@/components/Templates/PortableComponent/parts/components';
import { WithImage, WithoutImage } from './styled';
import { TextBlockImageType } from '@/types/commonTypes';
import { urlFor } from '@/config/sanity/imageUrl';

const ASPECT_RATIO = [
  { title: '3/4', value: 0.75 },
  { title: '1/1', value: 1 },
  { title: '16/9', value: 1.777 },
];
interface TextBlockProps {
  textArray: PortableTextBlock[];
  img?: TextBlockImageType;
}

const TextBlockComponent: FC<TextBlockProps> = ({ textArray, img }) => {
  const { containerRef, containerSize } = useWidthBlokSize();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));

  if (!img || !img.image) {
    return (
      <WithoutImage>
        {textArray.map((text, index) => (
          <PortableText key={index} value={text} components={components} />
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
        {textArray.map((text, index) => (
          <PortableText key={index} value={text} components={components} />
        ))}
      </Box>
    </WithImage>
  );
};

export default TextBlockComponent;
