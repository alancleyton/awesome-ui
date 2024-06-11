import { ReactNode, ComponentProps, HTMLAttributes } from 'react';

interface NavbarBrandProps
  extends HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  children?: ReactNode;

  href?: string;
}

interface NavbarNavProps extends HTMLAttributes<HTMLDivElement> {
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
