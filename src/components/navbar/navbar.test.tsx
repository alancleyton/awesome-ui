import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { Navbar } from '.';

describe('navbar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<Navbar data-testid="navbar">navbar</Navbar>);

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    window.HTMLCanvasElement.prototype.getContext = () => null;
    render(<Navbar data-testid="navbar">navbar</Navbar>);

    const navbar = screen.getByTestId('navbar');

    expect(await axe(navbar)).toHaveNoViolations();
  });

  it('should render with default class name', () => {
    render(<Navbar data-testid="navbar">navbar</Navbar>);

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveClass('a-navbar');
  });

  it('should render with default variant=primary', () => {
    render(<Navbar data-testid="navbar">navbar</Navbar>);

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveClass('a-navbar-primary');
  });

  it('should render with provided variant=secondary', () => {
    render(
      <Navbar data-testid="navbar" variant="secondary">
        navbar
      </Navbar>,
    );

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveClass('a-navbar-secondary');
  });

  it('should render with default size=md', () => {
    render(<Navbar data-testid="navbar">navbar</Navbar>);

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveClass('a-navbar-md');
  });

  it('should render with provided size=lg', () => {
    render(
      <Navbar data-testid="navbar" size="lg">
        navbar
      </Navbar>,
    );

    const navbar = screen.getByTestId('navbar');

    expect(navbar).toHaveClass('a-navbar-lg');
  });
});
