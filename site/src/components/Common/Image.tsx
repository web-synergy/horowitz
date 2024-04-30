import { FC, CSSProperties } from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  isLazyLoading: boolean;
  styles?: CSSProperties;
}

const Image: FC<ImageProps> = ({
  alt,
  src,
  styles,
  height,
  isLazyLoading,
  width,
}) => {
  return (
    <img
      src={src}
      alt={alt || 'image for block'}
      width={width}
      height={height}
      loading={isLazyLoading ? 'lazy' : 'eager'}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        lineHeight: 1,
        ...styles,
      }}
    />
  );
};

export default Image;
