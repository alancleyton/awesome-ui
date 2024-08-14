import { forwardRef, type ForwardedRef, ReactNode } from 'react';
import {
  MenuTrigger as AriaMenuTrigger,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  Popover,
} from 'react-aria-components';
import type {
  MenuTriggerProps as AriaMenuTriggerProps,
  MenuProps as AriaMenuProps,
  MenuItemProps as AriaMenuItemProps,
} from 'react-aria-components';

export interface MenuProps extends Omit<AriaMenuTriggerProps, 'children'> {
  children: ReactNode;
}

export const Menu = ({ children, ...otherProps }: MenuProps) => {
  return <AriaMenuTrigger {...otherProps}>{children}</AriaMenuTrigger>;
};

Menu.List = forwardRef(
  <T extends object>(
    { children, ...otherProps }: AriaMenuProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Popover>
        <AriaMenu
          ref={ref}
          {...otherProps}
          className="a-menu-list a-block a-rounded-sm a-outline-none a-bg-white a-border a-border-solid a-border-gray-10 a-shadow-md"
        >
          {children}
        </AriaMenu>
      </Popover>
    );
  },
);

Menu.Item = forwardRef(
  <T extends object>(
    { children, ...otherProps }: AriaMenuItemProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <AriaMenuItem
        ref={ref}
        {...otherProps}
        className="a-menu-item a-py-3 a-px-4 a-font-sans a-font-normal a-text-gray-90 a-outline-none a-cursor-pointer hover:a-bg-gray-10 a-transition a-duration-150 a-ease-in-out"
      >
        {children}
      </AriaMenuItem>
    );
  },
);
