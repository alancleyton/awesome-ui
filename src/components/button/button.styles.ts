import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

const buttonVariants = cva(
  cn(
    'a-inline-flex a-items-center a-justify-center a-gap-3',
    'a-font-sans a-font-medium a-leading-body a-text-center a-whitespace-nowrap',
    'a-transition a-duration-300 a-ease-in-out',
    'a-border a-border-solid a-border-transparent',
    'a-overflow-hidden focus:a-outline-none a-rounded-sm',
    'disabled:a-text-gray-30 disabled:a-bg-gray-10 disabled:a-border-gray-10 disabled:a-cursor-not-allowed',
  ),
  {
    variants: {
      size: {
        sm: 'a-py-2 a-px-4 a-text-sm',
        md: 'a-py-3 a-px-6 a-text-md',
        lg: 'a-py-4 a-px-9 a-text-lg',
      },
      variant: {
        primary: cn(
          'a-text-gray-90 a-bg-blue a-border-blue',
          'hover:a-bg-blue-100 hover:a-border-blue-100',
          'focus:a-bg-blue-100 focus:a-border-blue-100',
          'active:a-bg-blue-130 active:a-border-blue-130',
        ),
        secondary: cn(
          'a-text-white a-bg-gray-90 a-border-gray-90',
          'hover:a-bg-gray-80 hover:a-border-gray-80',
          'focus:a-bg-gray-80 focus:a-border-gray-80',
          'active:a-bg-gray-100 active:a-border-gray-100',
        ),
        info: cn(
          'a-text-gray-90 a-bg-yellow a-border-yellow',
          'hover:a-bg-yellow-100 hover:a-border-yellow-100',
          'focus:a-bg-yellow-100 focus:a-border-yellow-100',
          'active:a-bg-yellow-130 active:a-border-yellow-130',
        ),
        danger: cn(
          'a-text-gray-90 a-bg-red a-border-red',
          'hover:a-bg-red-100 hover:a-border-red-100',
          'focus:a-bg-red-100 focus:a-border-red-100',
          'active:a-bg-red-130 active:a-border-red-130',
        ),
        success: cn(
          'a-text-gray-90 a-bg-green a-border-green',
          'hover:a-bg-green-100 hover:a-border-green-100',
          'focus:a-bg-green-100 focus:a-border-green-100',
          'active:a-bg-green-130 active:a-border-green-130',
        ),
        ghost: cn(
          'a-text-blue a-bg-gray-10 a-border-gray-10',
          'hover:a-bg-gray-20 hover:a-border-gray-20',
          'focus:a-bg-gray-20 focus:a-border-gray-20',
          'active:a-bg-gray-30 active:a-border-gray-30',
        ),
        card: cn(
          'a-text-gray-90 a-bg-white a-border-gray-10',
          'hover:a-bg-gray-10 hover:a-border-gray-10',
          'focus:a-bg-gray-10 focus:a-border-gray-10',
          'active:a-bg-gray-30 active:a-border-gray-30',
        ),
      },
      isFull: {
        true: 'a-w-full',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      isFull: false,
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export { buttonVariants, type ButtonVariantProps };
