import { type ReactNode } from 'react';
import {
  MenuTrigger as AriaMenuTrigger,
  type MenuTriggerProps as AriaMenuTriggerProps,
} from 'react-aria-components';

import { MenuList } from './menu-list';
import { MenuItem } from './menu-item';
import { MenuSeparator } from './menu-separator';
import { MenuGroup } from './menu-group';

export interface MenuProps extends Omit<AriaMenuTriggerProps, 'children'> {
  children: ReactNode;
}

export const Menu = ({ children, ...menuProps }: MenuProps) => {
  return <AriaMenuTrigger {...menuProps}>{children}</AriaMenuTrigger>;
};

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;
Menu.Group = MenuGroup;
