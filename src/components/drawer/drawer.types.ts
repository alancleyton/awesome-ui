import { ReactNode } from 'react';

interface DrawerProps {
  children?: ReactNode;

  /**
   * If true, the drawer is shown.
   *
   * @default `false`
   */
  open: boolean;

  /**
   * Callback used to close the drawer.
   */
  onClose: () => void;

  /**
   * Determines from which side the drawer will appears.
   *
   * - Available placements: `top`, `right`, `bottom`, `left`
   *
   * @default `left`
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Applies the size of the drawer panel.
   *
   * - Available sizes: `sm`, `md`, `lg`, `full`
   *
   * @default `md`
   */
  size?: 'sm' | 'md' | 'lg' | 'full';
}

interface DrawerContentProps extends Pick<DrawerProps, 'children'> {}
interface DrawerContextProps
  extends Pick<DrawerProps, 'open' | 'onClose' | 'placement' | 'size'> {}

export type { DrawerProps, DrawerContentProps, DrawerContextProps };
