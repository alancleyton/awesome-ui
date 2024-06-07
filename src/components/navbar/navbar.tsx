import type {
  NavbarNavProps,
  NavbarNavItemsProps,
  NavbarNavItemProps,
  NavbarNavLinkProps,
  NavbarProps,
} from '.';
import { navbarVariants, navbarNavVariants } from './navbar.variants';

import { cn } from '@awesome-ui/utils';

import { NavbarBrand } from './navbar-brand';

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
    <div {...otherProps} className={classNames}>
      {children}
    </div>
  );
};

/**
 * Navbar Nav Items.
 */
const NavbarNavItems = ({ children, ...otherProps }: NavbarNavItemsProps) => (
  <ul
    {...otherProps}
    className="a-navbar-nav-items a-flex a-items-center a-gap-5"
  >
    {children}
  </ul>
);

/**
 * Navbar Nav Item.
 */
const NavbarNavItem = ({ children, ...otherProps }: NavbarNavItemProps) => (
  <li {...otherProps} className="a-navbar-nav-item a-list-item">
    {children}
  </li>
);

/**
 * Navbar Nav Link.
 */
const NavbarNavLink = ({ children, ...otherProps }: NavbarNavLinkProps) => (
  <a
    {...otherProps}
    className={cn(
      'a-navbar-brand a-inline-block a-py-2 a-px-4',
      'a-font-sans a-font-normal a-text-gray-20 hover:a-text-white',
      'a-duration-300 a-ease-in-out a-cursor-pointer',
    )}
  >
    {children}
  </a>
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
