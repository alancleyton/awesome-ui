import { ReactNode, ComponentProps } from 'react';

interface NavbarBrandProps extends ComponentProps<'a'> {
  children?: ReactNode;
}

interface NavbarNavProps extends ComponentProps<'div'> {
  children?: ReactNode;

  alignment?: 'left' | 'right' | 'center';

  filled?: boolean;

  collapse?: boolean;
}

interface NavbarNavItemsProps extends ComponentProps<'ul'> {
  children?: ReactNode;
}

interface NavbarNavItemProps extends ComponentProps<'li'> {
  children?: ReactNode;
}

interface NavbarNavLinkProps extends ComponentProps<'a'> {
  children?: ReactNode;
}

interface NavbarProps extends ComponentProps<'nav'> {
  children?: ReactNode;

  variant?: 'primary' | 'secondary';

  size?: 'sm' | 'md' | 'lg';
}

export type {
  NavbarBrandProps,
  NavbarNavProps,
  NavbarNavItemsProps,
  NavbarNavItemProps,
  NavbarNavLinkProps,
  NavbarProps,
};
