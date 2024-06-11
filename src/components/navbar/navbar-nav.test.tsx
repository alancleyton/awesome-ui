import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import {
  NavbarNav,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLink,
} from './navbar-nav';

describe('navbar nav', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<NavbarNav data-testid="navbar-nav">Nav</NavbarNav>);

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toBeInTheDocument();
  });

  it('should render with default class name', () => {
    render(<NavbarNav data-testid="navbar-nav">Nav</NavbarNav>);

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-navbar-nav');
  });

  it('should render navbar nav with items', () => {
    render(
      <NavbarNav data-testid="navbar-nav">
        <NavbarNavItems data-testid="navbar-nav-items">
          <NavbarNavItem data-testid="navbar-nav-item">
            <NavbarNavLink data-testid="navbar-nav-link">link</NavbarNavLink>
          </NavbarNavItem>
        </NavbarNavItems>
      </NavbarNav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');
    const navbarNavItems = screen.getByTestId('navbar-nav-items');
    const navbarNavItem = screen.getByTestId('navbar-nav-item');
    const navbarNavLink = screen.getByTestId('navbar-nav-link');

    expect(navbarNav).toBeInTheDocument();
    expect(navbarNavItems).toBeInTheDocument();
    expect(navbarNavItem).toBeInTheDocument();
    expect(navbarNavLink).toBeInTheDocument();
  });

  it('should render navbar nav with default alignment=left', () => {
    render(<NavbarNav data-testid="navbar-nav">nav left</NavbarNav>);

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-left a-mr-auto');
  });

  it('should render navbar nav with provided alignment=right', () => {
    render(
      <NavbarNav data-testid="navbar-nav" alignment="right">
        nav right
      </NavbarNav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-right a-ml-auto');
  });

  it('should render filled navbar nav', () => {
    render(
      <NavbarNav data-testid="navbar-nav" filled>
        filled
      </NavbarNav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-filled a-w-full');
  });

  it('should render collapsed navbar nav', () => {
    render(
      <NavbarNav data-testid="navbar-nav" collapse>
        collapsed
      </NavbarNav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-collapse');
  });
});
