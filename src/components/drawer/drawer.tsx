import { useMemo } from 'react';

import { DrawerProps } from './drawer.types';

import { cn } from '@awesome-ui/utils';

import { DrawerContext } from './drawer-context';
import { DrawerContent } from './drawer-content';

/**
 * Drawer component are panels that sits off-screen until triggered by the user.
 *
 * Is used to provide navigation to other pages, can contain different kinds of content or small interactions.
 *
 * @see Docs https://alancleyton.github.io/awesome-ui/?path=/docs/components-drawer--docs
 */
const Drawer = ({
  children,
  open = false,
  placement = 'left',
  size = 'md',
  onClose,
}: DrawerProps) => {
  const drawerContextValue = useMemo(
    () => ({ open, onClose, placement, size }),
    [open, onClose, placement, size],
  );

  return (
    <DrawerContext.Provider value={drawerContextValue}>
      <div
        className="a-drawer a-relative a-z-10"
        role="dialog"
        onClick={onClose}
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

Drawer.displayName = 'Drawer';
Drawer.Content = DrawerContent;

export default Drawer;
