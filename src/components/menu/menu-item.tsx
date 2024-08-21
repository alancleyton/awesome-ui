import {
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

export const MenuItem = ({
  children,
  className,
  ...menuItemProps
}: AriaMenuItemProps) => {
  const classNames = cn(
    'a-menu-item a-py-3 a-px-4 a-font-sans a-font-normal a-text-gray-90 a-outline-none a-cursor-pointer hover:a-bg-gray-10 a-transition a-duration-150 a-ease-in-out aria-disabled:a-text-gray-20 aria-disabled:a-cursor-not-allowed aria-disabled:hover:a-bg-transparent',
    className,
  );
  return (
    <AriaMenuItem {...menuItemProps} className={classNames}>
      {children}
    </AriaMenuItem>
  );
};
