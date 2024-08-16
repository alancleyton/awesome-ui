import { forwardRef, type ForwardedRef } from 'react';
import {
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

type MenuItemRef = ForwardedRef<HTMLDivElement>;

const MenuItem = forwardRef(
  <T extends object>(
    { children, className, ...menuItemProps }: AriaMenuItemProps<T>,
    ref: MenuItemRef,
  ) => {
    const classNames = cn(
      'a-menu-item a-py-3 a-px-4 a-font-sans a-font-normal a-text-gray-90 a-outline-none a-cursor-pointer hover:a-bg-gray-10 a-transition a-duration-150 a-ease-in-out',
      className,
    );
    return (
      <AriaMenuItem ref={ref} {...menuItemProps} className={classNames}>
        {children}
      </AriaMenuItem>
    );
  },
);

MenuItem.displayName = 'MenuItem';

export { MenuItem };
