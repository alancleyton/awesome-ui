import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

import { NavbarBrand } from './navbar-brand';
import {
  NavbarNav,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLink,
} from './navbar-nav';

import type { NavbarProps } from '.';

const navbarVariants = cva(
  cn('a-navbar a-flex a-items-center a-gap-5 a-w-full a-py-2 a-px-4 '),
  {
    variants: {
      variant: {
        primary: 'a-navbar-primary a-bg-blue-100',
        secondary: 'a-navbar-secondary a-bg-gray-90',
      },
      size: {
        sm: 'a-navbar-sm a-h-9',
        md: 'a-navbar-md a-h-10',
        lg: 'a-navbar-lg a-h-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

/**
 * Navbar.
 */
const Navbar = ({ children, variant, size, ...otherProps }: NavbarProps) => {
  const classNames = cn(
    navbarVariants({ variant, size }),
    otherProps.className,
  );
  return (
    <nav
      className={classNames}
      role="navigation"
      aria-label="menu navigation"
      {...otherProps}
    >
      {children}
    </nav>
  );
};

Navbar.displayName = 'Navbar';
Navbar.Brand = NavbarBrand;
Navbar.Nav = NavbarNav;
Navbar.NavItems = NavbarNavItems;
Navbar.NavItem = NavbarNavItem;
Navbar.NavLink = NavbarNavLink;

export default Navbar;
