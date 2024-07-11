import { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

export interface NavbarTogglerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determines the horizontal position of the burger.
   *
   * - Available alignments: `left`, `right`, `center`
   *
   * @default `undefined`
   */
  alignment?: 'left' | 'right' | 'center';
}

const navbarTogglerVariants = cva('a-navbar-toggler tablet-sm:a-hidden', {
  variants: {
    alignment: {
      left: 'a-toggler-left a-mr-auto',
      right: 'a-toggler-right a-ml-auto',
      center: 'a-toggler-center a-mr-auto a-ml-auto',
    },
  },
});

const NavbarTogglerBurger = ({
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('a-navbar-burger a-space-y-2', className)}
      {...otherProps}
    >
      <span className="a-block a-h-0.5 a-w-6 a-animate-pulse a-rounded-b-md a-rounded-t-md a-bg-white"></span>
      <span className="a-block a-h-0.5 a-w-6 a-animate-pulse a-rounded-b-md a-rounded-t-md a-bg-white"></span>
      <span className="a-block a-h-0.5 a-w-6 a-animate-pulse a-rounded-b-md a-rounded-t-md a-bg-white"></span>
    </div>
  );
};

const NavbarToggler = ({
  children,
  className,
  alignment,
  ...otherProps
}: NavbarTogglerProps) => {
  const classNames = cn(navbarTogglerVariants({ alignment }), className);
  return (
    <div className={classNames} {...otherProps}>
      <button
        className="a-navbar-toggler-button a-flex a-items-center a-text-white a-p-4"
        role="button"
      >
        {children ? children : <NavbarTogglerBurger />}
      </button>
    </div>
  );
};

export { NavbarToggler, NavbarTogglerBurger };
