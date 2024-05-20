import { ReactNode } from 'react';

interface DrawerProps {
  children?: ReactNode;

  open: boolean;

  onClose: () => void;

  placement?: 'top' | 'right' | 'bottom' | 'left';

  size?: 'sm' | 'md' | 'lg' | 'full';
}

interface DrawerContentProps extends Pick<DrawerProps, 'children'> {}
interface DrawerContextProps
  extends Pick<DrawerProps, 'open' | 'onClose' | 'placement' | 'size'> {}

export type { DrawerProps, DrawerContentProps, DrawerContextProps };
