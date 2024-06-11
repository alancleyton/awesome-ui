import type { NavbarProps } from '.';

import { navbarVariants } from './navbar.variants';

import { cn } from '@awesome-ui/utils';

import { NavbarBrand } from './navbar-brand';
import {
  NavbarNav,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLink,
} from './navbar-nav';

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
      {...otherProps}
      className={classNames}
      role="navigation"
      aria-label="menu navigation"
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
