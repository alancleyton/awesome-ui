import { useContext, MouseEvent, HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

import { DrawerContext } from './drawer-context';

const PLACEMENT_CLASSES = {
  right: 'a-inset-y-0 a-right-0',
  left: 'a-inset-y-0 a-left-0',
  top: 'a-inset-x-0 a-top-0',
  bottom: 'a-inset-x-0 a-bottom-0',
};

const PLACEMENT_OPEN_CLASSES = {
  right: 'a-translate-x-0 a-shadow-xl',
  left: 'a-translate-x-0 a-shadow-xl',
  top: 'a-translate-y-0 a-shadow-xl',
  bottom: 'a-translate-y-0 a-shadow-xl',
};

const PLACEMENT_CLOSE_CLASSES = {
  right: 'a-translate-x-full',
  left: '-a-translate-x-full',
  top: '-a-translate-y-full',
  bottom: 'a-translate-y-full',
};

const PLACEMENT_Y_SIZE = {
  sm: 'a-max-h-15',
  md: 'a-max-h-17',
  lg: 'a-max-h-19',
  full: '',
};

const PLACEMENT_X_SIZE = {
  sm: 'a-max-w-15',
  md: 'a-max-w-17',
  lg: 'a-max-w-19',
  full: '',
};

export const DrawerContent = ({
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  const { open, placement, size } = useContext(DrawerContext);

  const PLACEMENT = placement ? placement : 'left';
  const SIZE = size ? size : 'md';

  const PLACEMENT_POSITION_CLASS =
    PLACEMENT == 'top' || PLACEMENT == 'bottom' ? 'a-h-full' : 'a-w-full';
  const PLACEMENT_POSITION_SIZE_CLASS =
    PLACEMENT == 'top' || PLACEMENT == 'bottom'
      ? PLACEMENT_Y_SIZE[SIZE]
      : PLACEMENT_X_SIZE[SIZE];

  // function to prevent drawer close at click
  const preventDrawerClose = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={cn(
        'a-absolute a-inset-0 a-overflow-hidden',
        open ? 'a-drawer-content-open' : 'a-drawer-content-close',
      )}
      {...otherProps}
    >
      <div
        className={cn(
          'a-pointer-events-none a-fixed',
          PLACEMENT_CLASSES[PLACEMENT],
          PLACEMENT_POSITION_CLASS,
          PLACEMENT_POSITION_SIZE_CLASS,
        )}
      >
        <div
          className={cn(
            'a-pointer-events-auto a-relative a-w-full a-h-full a-transform a-transition a-ease-in-out a-duration-300 a-z-50',
            open
              ? PLACEMENT_OPEN_CLASSES[PLACEMENT]
              : PLACEMENT_CLOSE_CLASSES[PLACEMENT],
          )}
          onClick={preventDrawerClose}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
