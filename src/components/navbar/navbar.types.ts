import { HTMLAttributes, LinkHTMLAttributes } from 'react';

type NavbarBrandProps = LinkHTMLAttributes<HTMLAnchorElement> &
  HTMLAttributes<HTMLDivElement>;

interface NavbarNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determines the horizontal position of the navigation items.
   *
   * - Available alignments: `left`, `right`, `center`
   *
   * @default `left`
   */
  alignment?: 'left' | 'right' | 'center';
  /**
   * Applies 100% to the navbar width.
   *
   * @default `false`
   */
  filled?: boolean;
  /**
   * Hide items for small screens and show them on the desktop screen.
   *
   * @default `false`
   */
  collapse?: boolean;
}

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Applies background color to the navbar.
   *
   * - Available variants: `primary`, `secondary`
   *
   * @default `primary`
   */
  variant?: 'primary' | 'secondary';
  /**
   * Applies the size of the navbar.
   *
   * - Available sizes: `sm`, `md`, `lg`
   *
   * @default `md`
   */
  size?: 'sm' | 'md' | 'lg';
}

export type { NavbarBrandProps, NavbarNavProps, NavbarProps };
