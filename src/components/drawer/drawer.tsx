import { useMemo, HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

import { DrawerContext } from './drawer-context';
import { DrawerContent } from './drawer-content';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
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

const Drawer = ({
  children,
  open = false,
  placement = 'left',
  size = 'md',
  onClose,
  ...otherProps
}: DrawerProps) => {
  const drawerContextValue = useMemo(
    () => ({ open, onClose, placement, size }),
    [open, onClose, placement, size],
  );

  return (
    <DrawerContext.Provider value={drawerContextValue}>
      <div
        className={cn(
          'a-drawer a-relative a-z-10',
          open ? 'a-drawer-open' : 'a-drawer-close',
          `a-drawer-${placement}`,
          `a-drawer-${size}`,
        )}
        role="dialog"
        onClick={onClose}
        {...otherProps}
      >
        <div
          className={cn(
            'a-fixed a-inset-0 a-bg-black a-bg-opacity-40 a-transition-all',
            open
              ? 'a-opacity-100 a-duration-500 a-ease-in-out a-visible'
              : 'a-opacity-0 a-duration-500 a-ease-in-out a-invisible',
          )}
        />
        <div
          className={cn(
            open &&
              'a-drawer-content a-fixed a-inset-0 a-overflow-hidden a-transform a-ease-in-out',
          )}
        >
          {children}
        </div>
      </div>
    </DrawerContext.Provider>
  );
};

Drawer.Content = DrawerContent;

export default Drawer;
