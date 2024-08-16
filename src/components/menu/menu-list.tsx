import { forwardRef, type ForwardedRef } from 'react';
import {
  Popover,
  Menu as AriaMenu,
  type MenuProps as AriaMenuProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

type MenuListRef = ForwardedRef<HTMLDivElement>;

const MenuList = forwardRef(
  <T extends object>(
    { children, className, ...menuListProps }: AriaMenuProps<T>,
    ref: MenuListRef,
  ) => {
    const classNames = cn(
      'a-menu-list a-block a-rounded-sm a-outline-none a-bg-white a-border a-border-solid a-border-gray-10 a-shadow-md',
      className,
    );

    return (
      <Popover>
        <AriaMenu ref={ref} {...menuListProps} className={classNames}>
          {children}
        </AriaMenu>
      </Popover>
    );
  },
);

MenuList.displayName = 'MenuList';

export { MenuList };
