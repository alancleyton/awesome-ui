import { createRef } from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { axe } from 'vitest-axe';
import { render, screen, cleanup } from '@testing-library/react';

import { Button } from '.';

describe('button', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toBeInTheDocument();
  });

  it('should render with ref', () => {
    const buttonRef = createRef<HTMLButtonElement>();
    render(<Button ref={buttonRef}>Button</Button>);

    expect(buttonRef.current).not.toBeNull();
  });

  it('should be accessible', async () => {
    window.HTMLCanvasElement.prototype.getContext = () => null;
    render(<Button>button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(await axe(button)).toHaveNoViolations();
  });

  it('should render with default type="button"', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render with provided type', () => {
    render(<Button type="submit">button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render with default size="md"', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveClass('a-py-3 a-px-6 a-text-md');
  });

  it('should render with provided size', () => {
    render(<Button size="lg">button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveClass('a-py-4 a-px-9 a-text-lg');
  });

  it('should render with default variant="primary"', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveClass('a-text-gray-90 a-bg-blue a-border-blue');
  });

  it('should render with provided variant', () => {
    render(<Button variant="info">button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveClass('a-text-gray-90 a-bg-yellow a-border-yellow');
  });

  it('should render with full width', () => {
    render(<Button isFull>button</Button>);

    const button = screen.getByRole('button', { name: /button/ });
    expect(button).toHaveClass('a-w-full');
  });
});
