import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { components } from './parts/components';

interface PortableComponentProps {
  data: PortableTextBlock[];
}

const PortableComponent: FC<PortableComponentProps> = ({ data }) => {
  return <PortableText value={data} components={components} />;
};

export default PortableComponent;
