import { forwardRef, type ForwardedRef, ReactNode } from 'react';
import {
  Popover,
  MenuTrigger as AriaMenuTrigger,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  Separator as AriaSeparator,
  Section as AriaSection,
  Header as AriaHeader,
  type MenuTriggerProps as AriaMenuTriggerProps,
  MenuProps as AriaMenuProps,
  MenuItemProps as AriaMenuItemProps,
  SeparatorProps as AriaSeparatorProps,
  SectionProps as AriaSectionProps,
} from 'react-aria-components';

export interface MenuProps extends Omit<AriaMenuTriggerProps, 'children'> {
  children: ReactNode;
}

export const Menu = ({ children, ...menuProps }: MenuProps) => {
  return <AriaMenuTrigger {...menuProps}>{children}</AriaMenuTrigger>;
};

Menu.List = forwardRef(
  <T extends object>(
    { children, ...menuListProps }: AriaMenuProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Popover>
        <AriaMenu
          ref={ref}
          {...menuListProps}
          className="a-menu-list a-block a-rounded-sm a-outline-none a-bg-white a-border a-border-solid a-border-gray-10 a-shadow-md"
        >
          {children}
        </AriaMenu>
      </Popover>
    );
  },
);

Menu.List.displayName = 'MenuList';

Menu.Item = forwardRef(
  <T extends object>(
    { children, ...menuItemProps }: AriaMenuItemProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <AriaMenuItem
        ref={ref}
        {...menuItemProps}
        className="a-menu-item a-py-3 a-px-4 a-font-sans a-font-normal a-text-gray-90 a-outline-none a-cursor-pointer hover:a-bg-gray-10 a-transition a-duration-150 a-ease-in-out"
      >
        {children}
      </AriaMenuItem>
    );
  },
);

Menu.Item.displayName = 'MenuItem';

Menu.Separator = forwardRef(
  (
    { ...separatorProps }: AriaSeparatorProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <AriaSeparator
      ref={ref}
      className="a-menu-separator a-block a-w-full a-h-hr a-bg-gray-10"
      {...separatorProps}
    />
  ),
);

Menu.Separator.displayName = 'MenuSeparator';

interface MenuGroupProps extends Omit<AriaSectionProps<object>, 'children'> {
  children: ReactNode;
  label: string;
}

Menu.Group = forwardRef(
  (
    { children, label, ...menuGroupProps }: MenuGroupProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <AriaSection ref={ref} {...menuGroupProps}>
        <AriaHeader className="a-px-4 a-py-2 a-text-gray-60 a-font-semi-bold">
          {label}
        </AriaHeader>
        {children}
      </AriaSection>
    );
  },
);

Menu.Group.displayName = 'MenuGroup';
