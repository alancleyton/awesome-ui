import { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

export interface NavbarRootProps extends HTMLAttributes<HTMLElement> {
  /**
   * Applies background color to the navbar.
   *
   * - Available variants: `primary`, `secondary`
   *
   * @default `primary`
   */
  variant?: 'primary' | 'secondary';
  /**
   * Applies the size of the navbar.
   *
   * - Available sizes: `sm`, `md`, `lg`
   *
   * @default `md`
   */
  size?: 'sm' | 'md' | 'lg';
}

const navbarRootVariants = cva(
  cn('a-root-navbar a-flex a-items-center a-gap-5 a-w-full a-py-2 a-px-4 '),
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

export const NavbarRoot = ({
  children,
  className,
  variant,
  size,
  ...otherProps
}: NavbarRootProps) => {
  const classNames = cn(navbarRootVariants({ variant, size }), className);
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
