import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

import { NavbarBrand } from './navbar-brand';
import { NavbarToggler, NavbarTogglerBurger } from './navbar-toggler';
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
 * Navbar component is used to help users navigate to other pages.
 *
 * Can contain links to easily access to the pages or sections.
 *
 * @see Docs https://alancleyton.github.io/awesome-ui/?path=/docs/components-navbar--docs
 */
const Navbar = ({
  children,
  className,
  variant,
  size,
  ...otherProps
}: NavbarProps) => {
  const classNames = cn(navbarVariants({ variant, size }), className);
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
Navbar.Toggler = NavbarToggler;
Navbar.TogglerBurger = NavbarTogglerBurger;
Navbar.Nav = NavbarNav;
Navbar.NavItems = NavbarNavItems;
Navbar.NavItem = NavbarNavItem;
Navbar.NavLink = NavbarNavLink;

export default Navbar;
