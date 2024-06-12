import type { HTMLAttributes, LinkHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

import { NavbarNavProps } from '.';

const navbarNavVariants = cva('a-navbar-nav a-inline-flex', {
  variants: {
    alignment: {
      left: 'a-nav-left a-mr-auto',
      right: 'a-nav-right a-ml-auto',
      center: 'a-nav-center a-mr-auto a-ml-auto',
    },
    filled: {
      true: 'a-nav-filled a-w-full',
    },
    collapse: {
      true: 'a-nav-collapse tablet-sm:a-flex a-hidden',
    },
  },
  defaultVariants: {
    filled: false,
    collapse: false,
  },
});

/**
 * Navbar Nav.
 */
const NavbarNav = ({
  children,
  alignment,
  filled,
  collapse,
  ...otherProps
}: NavbarNavProps) => {
  const classNames = cn(
    navbarNavVariants({ alignment, filled, collapse }),
    otherProps.className,
  );
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

const NavbarNavItems = ({
  children,
  ...otherProps
}: HTMLAttributes<HTMLUListElement>) => {
  const classNames = cn(
    'a-navbar-nav-items a-flex a-items-center a-gap-5',
    otherProps.className,
  );
  return (
    <ul className={classNames} {...otherProps}>
      {children}
    </ul>
  );
};

const NavbarNavItem = ({
  children,
  ...otherProps
}: HTMLAttributes<HTMLLIElement>) => {
  const classNames = cn('a-navbar-nav-item a-list-item', otherProps.className);
  return (
    <li className={classNames} {...otherProps}>
      {children}
    </li>
  );
};

const NavbarNavLink = ({
  children,
  ...otherProps
}: LinkHTMLAttributes<HTMLAnchorElement>) => {
  const classNames = cn(
    'a-navbar-brand a-inline-block a-py-2 a-px-4',
    'a-font-sans a-font-normal a-text-gray-20 hover:a-text-white',
    'a-duration-300 a-ease-in-out a-cursor-pointer',
    otherProps.className,
  );

  return (
    <a className={classNames} {...otherProps}>
      {children}
    </a>
  );
};

export { NavbarNav, NavbarNavItems, NavbarNavItem, NavbarNavLink };
