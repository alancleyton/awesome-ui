import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { NavbarToggler, NavbarTogglerBurger } from './navbar-toggler';

describe('navbar toggler', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<NavbarToggler data-testid="navbar-toggler" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toBeInTheDocument();
  });

  it('should render toggler burger icon correctly', () => {
    render(
      <NavbarToggler data-testid="navbar-toggler">
        <NavbarTogglerBurger data-testid="navbar-toggler-burger" />
      </NavbarToggler>,
    );

    const navbarToggler = screen.getByTestId('navbar-toggler');
    const navbarTogglerBurger = screen.getByTestId('navbar-toggler-burger');

    expect(navbarToggler).toBeInTheDocument();
    expect(navbarTogglerBurger).toBeInTheDocument();
  });

  it('should render with children', () => {
    render(
      <NavbarToggler data-testid="navbar-toggler">
        <span>Menu</span>
      </NavbarToggler>,
    );

    const navbarToggler = screen.getByTestId('navbar-toggler');

    const children = screen.getByText(/menu/i);

    expect(navbarToggler).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('should render with default classname', () => {
    render(<NavbarToggler data-testid="navbar-toggler" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toHaveClass('a-navbar-toggler');
  });

  it('should render with default and provided classnames', () => {
    render(<NavbarToggler className="a-block" data-testid="navbar-toggler" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toHaveClass('a-navbar-toggler a-block');
  });

  it('should render navbar toggler with provided alignment=right', () => {
    render(<NavbarToggler data-testid="navbar-toggler" alignment="right" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toHaveClass('a-toggler-right a-ml-auto');
  });
});
