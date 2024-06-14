import { HTMLAttributes, HtmlHTMLAttributes, LinkHTMLAttributes } from 'react';

type NavbarBrandProps = LinkHTMLAttributes<HTMLAnchorElement> &
  HTMLAttributes<HTMLDivElement>;

interface NavbarTogglerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * Determines the horizontal position of the burger.
   *
   * - Available alignments: `left`, `right`, `center`
   *
   * @default `undefined`
   */
  alignment?: 'left' | 'right' | 'center';
}

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
   * @default `undefined`
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

export type {
  NavbarBrandProps,
  NavbarTogglerProps,
  NavbarNavProps,
  NavbarProps,
};
