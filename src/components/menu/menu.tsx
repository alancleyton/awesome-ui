import { ReactNode } from 'react';
import {
  Popover,
  MenuTrigger as AriaMenuTrigger,
  Menu as AriaMenu,
  type MenuTriggerProps as AriaMenuTriggerProps,
  MenuProps as AriaMenuProps,
} from 'react-aria-components';

import { Button, ButtonProps } from '@awesome-ui/components/button';
import { cn } from '@awesome-ui/utils';

import { MenuItem } from './menu-item';
import { MenuSection } from './menu-section';
import { MenuSeparator } from './menu-separator';

export interface MenuProps
  extends Omit<AriaMenuTriggerProps, 'isOpen' | 'children'>,
    Omit<AriaMenuProps<object>, 'isOpen'> {
  /**
   * Label for menu trigger button. It can be a string or JSX element.
   */
  label?: string | ReactNode;
  /**
   * If true, the menu is shown.
   *
   * @default `false`
   */
  isOpen?: boolean;
  /**
   * Applies color variant to the trigger button.
   *
   * - Available variants: `primary`, `secondary`, `info`, `danger`, `success`, `ghost`, `card`
   *
   * @default `primary`
   */
  variant?: ButtonProps['variant'];
  /**
   * Applies the size of the trigger button.
   *
   * - Available sizes: `sm`, `md`, `lg`
   *
   * @default `md`
   */
  size?: ButtonProps['size'];
}

export const Menu = ({
  children,
  className,
  label,
  variant = 'primary',
  size = 'md',
  ...menuProps
}: MenuProps) => {
  const classNames = cn(
    'a-menu-list a-block a-rounded-sm a-outline-none a-bg-white a-border a-border-solid a-border-gray-10 a-shadow-md',
    className,
  );

  return (
    <AriaMenuTrigger {...menuProps}>
      {typeof label !== 'string' ? (
        label
      ) : (
        <Button variant={variant} size={size}>
          {label}
        </Button>
      )}
      <Popover>
        <AriaMenu {...menuProps} className={classNames}>
          {children}
        </AriaMenu>
      </Popover>
    </AriaMenuTrigger>
  );
};

Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;
Menu.Section = MenuSection;
