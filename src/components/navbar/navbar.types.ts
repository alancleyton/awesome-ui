import { HTMLAttributes } from 'react';

interface NavbarBrandProps
  extends HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  href?: string;
}

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
