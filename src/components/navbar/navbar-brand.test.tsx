import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import { NavbarBrand } from './navbar-brand';

describe('navbar brand', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<NavbarBrand data-testid="navbar-brand">Logo</NavbarBrand>);

    const navbarBrand = screen.getByTestId('navbar-brand');

    expect(navbarBrand).toBeInTheDocument();
  });

  it('should render with default classname', () => {
    render(<NavbarBrand data-testid="navbar-brand">Logo</NavbarBrand>);

    const navbarBrand = screen.getByTestId('navbar-brand');

    expect(navbarBrand).toHaveClass('a-navbar-brand');
  });

  it('should render with default and provided classnames', () => {
    render(
      <NavbarBrand data-testid="navbar-brand" className="a-block">
        Logo
      </NavbarBrand>,
    );

    const navbarBrand = screen.getByTestId('navbar-brand');

    expect(navbarBrand).toHaveClass('a-navbar-brand a-block');
  });

  it('should renders a div by default', () => {
    const { container } = render(
      <NavbarBrand data-testid="navbar-brand">Logo</NavbarBrand>,
    );

    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('should renders a anchor with provided href', () => {
    const { container } = render(
      <NavbarBrand data-testid="navbar-brand" href="/home">
        Logo
      </NavbarBrand>,
    );

    expect(container.querySelector('a')).toBeInTheDocument();
  });
});
