import { HTMLAttributes, LinkHTMLAttributes } from 'react';

type NavbarBrandProps = LinkHTMLAttributes<HTMLAnchorElement> &
  HTMLAttributes<HTMLDivElement>;

interface NavbarNavProps extends HTMLAttributes<HTMLDivElement> {
  alignment?: 'left' | 'right' | 'center';

  filled?: boolean;

  collapse?: boolean;
}

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary';

  size?: 'sm' | 'md' | 'lg';
}

export type { NavbarBrandProps, NavbarNavProps, NavbarProps };
