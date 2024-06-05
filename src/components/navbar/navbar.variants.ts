import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

const navbarNavVariants = cva('a-navbar-nav a-inline-flex', {
  variants: {
    alignment: {
      left: 'a-mr-auto',
      right: 'a-ml-auto',
      center: 'a-mr-auto a-ml-auto',
    },
    filled: {
      true: 'a-w-full',
    },
    collapse: {
      true: 'tablet-sm:a-flex a-hidden',
    },
  },
  defaultVariants: {
    filled: false,
    collapse: false,
  },
});

const navbarVariants = cva(
  cn('a-navbar a-flex a-items-center a-gap-5 a-w-full a-py-2 a-px-4 '),
  {
    variants: {
      variant: {
        primary: 'a-bg-blue-100',
        secondary: 'a-bg-gray-90',
      },
      size: {
        sm: 'a-h-9',
        md: 'a-h-10',
        lg: 'a-h-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export { navbarVariants, navbarNavVariants };
