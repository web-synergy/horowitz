import { Suspense, LazyExoticComponent, FC, ComponentType } from 'react';
import Loader from './Loader';

interface SuspenseComponentProps {
  component: LazyExoticComponent<ComponentType>;
}

const SuspenseComponent: FC<SuspenseComponentProps> = ({
  component: Component,
}) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default SuspenseComponent;
