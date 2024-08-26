import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { Navbar } from '.';

describe('Navbar Root', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<Navbar data-testid="navbar-root">navbar</Navbar>);

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(navbarRoot).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    window.HTMLCanvasElement.prototype.getContext = () => null;
    render(<Navbar data-testid="navbar-root">navbar</Navbar>);

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(await axe(navbarRoot)).toHaveNoViolations();
  });

  it('should render with class name', () => {
    render(
      <Navbar data-testid="navbar-root" className="custom-navbar">
        navbar
      </Navbar>,
    );

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(navbarRoot).toHaveClass('custom-navbar');
  });

  it('should render with default variant=primary', () => {
    render(<Navbar data-testid="navbar-root">navbar</Navbar>);

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(navbarRoot).toHaveClass('a-navbar-primary');
  });

  it('should render with provided variant=secondary', () => {
    render(
      <Navbar data-testid="navbar-root" variant="secondary">
        navbar
      </Navbar>,
    );

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(navbarRoot).toHaveClass('a-navbar-secondary');
  });

  it('should render with default size=md', () => {
    render(<Navbar data-testid="navbar-root">navbar</Navbar>);

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(navbarRoot).toHaveClass('a-navbar-md');
  });

  it('should render with provided size=lg', () => {
    render(
      <Navbar data-testid="navbar-root" size="lg">
        navbar
      </Navbar>,
    );

    const navbarRoot = screen.getByTestId('navbar-root');

    expect(navbarRoot).toHaveClass('a-navbar-lg');
  });
});

describe('Navbar Brand', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<Navbar.Brand data-testid="navbar-brand">Logo</Navbar.Brand>);

    const navbarBrand = screen.getByTestId('navbar-brand');

    expect(navbarBrand).toBeInTheDocument();
  });

  it('should render with class name', () => {
    render(
      <Navbar.Brand data-testid="navbar-brand" className="a-block">
        Logo
      </Navbar.Brand>,
    );

    const navbarBrand = screen.getByTestId('navbar-brand');

    expect(navbarBrand).toHaveClass('a-block');
  });

  it('should renders a div by default', () => {
    const { container } = render(
      <Navbar.Brand data-testid="navbar-brand">Logo</Navbar.Brand>,
    );

    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('should renders a anchor with provided href', () => {
    const { container } = render(
      <Navbar.Brand data-testid="navbar-brand" href="/home">
        Logo
      </Navbar.Brand>,
    );

    expect(container.querySelector('a')).toBeInTheDocument();
  });
});

describe('Navbar Nav', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<Navbar.Nav data-testid="navbar-nav">Nav</Navbar.Nav>);

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toBeInTheDocument();
  });

  it('should render with class name', () => {
    render(
      <Navbar.Nav data-testid="navbar-nav" className="a-block">
        Nav
      </Navbar.Nav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-navbar-nav a-block');
  });

  it('should render with items', () => {
    render(
      <Navbar.Nav data-testid="navbar-nav">
        <Navbar.NavItems data-testid="navbar-nav-items">
          <Navbar.NavItem data-testid="navbar-nav-item">
            <Navbar.NavLink data-testid="navbar-nav-link">link</Navbar.NavLink>
          </Navbar.NavItem>
        </Navbar.NavItems>
      </Navbar.Nav>,
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

  it('should render with provided alignment=right', () => {
    render(
      <Navbar.Nav data-testid="navbar-nav" alignment="right">
        nav right
      </Navbar.Nav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-right a-ml-auto');
  });

  it('should render filled navbar nav', () => {
    render(
      <Navbar.Nav data-testid="navbar-nav" filled>
        filled
      </Navbar.Nav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-filled a-w-full');
  });

  it('should render collapsed navbar nav', () => {
    render(
      <Navbar.Nav data-testid="navbar-nav" collapse>
        collapsed
      </Navbar.Nav>,
    );

    const navbarNav = screen.getByTestId('navbar-nav');

    expect(navbarNav).toHaveClass('a-nav-collapse');
  });
});

describe('Navbar Toggler', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<Navbar.Toggler data-testid="navbar-toggler" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toBeInTheDocument();
  });

  it('should render with burger icon correctly', () => {
    render(
      <Navbar.Toggler data-testid="navbar-toggler">
        <Navbar.TogglerBurger data-testid="navbar-toggler-burger" />
      </Navbar.Toggler>,
    );

    const navbarToggler = screen.getByTestId('navbar-toggler');
    const navbarTogglerBurger = screen.getByTestId('navbar-toggler-burger');

    expect(navbarToggler).toBeInTheDocument();
    expect(navbarTogglerBurger).toBeInTheDocument();
  });

  it('should render with children', () => {
    render(
      <Navbar.Toggler data-testid="navbar-toggler">
        <span>Menu</span>
      </Navbar.Toggler>,
    );

    const navbarToggler = screen.getByTestId('navbar-toggler');

    const children = screen.getByText(/menu/i);

    expect(navbarToggler).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('should render with class name', () => {
    render(<Navbar.Toggler className="a-block" data-testid="navbar-toggler" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toHaveClass('a-navbar-toggler a-block');
  });

  it('should render with provided alignment=right', () => {
    render(<Navbar.Toggler data-testid="navbar-toggler" alignment="right" />);

    const navbarToggler = screen.getByTestId('navbar-toggler');

    expect(navbarToggler).toHaveClass('a-toggler-right a-ml-auto');
  });
});
