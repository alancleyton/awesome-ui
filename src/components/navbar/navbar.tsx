import { memo } from 'react';

import { NavbarRoot } from './navbar-root';
import { NavbarBrand } from './navbar-brand';
import { NavbarToggler, NavbarTogglerBurger } from './navbar-toggler';
import {
  NavbarNav,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLink,
} from './navbar-nav';

export default {
  Root: memo(NavbarRoot),
  Brand: memo(NavbarBrand),
  Toggler: memo(NavbarToggler),
  TogglerBurger: memo(NavbarTogglerBurger),
  Nav: memo(NavbarNav),
  NavItems: memo(NavbarNavItems),
  NavItem: memo(NavbarNavItem),
  NavLink: memo(NavbarNavLink),
};
