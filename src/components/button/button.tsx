import { forwardRef } from 'react';
import type { ReactNode, ForwardedRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

type ButtonRef = ForwardedRef<HTMLButtonElement>;
type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export interface ButtonProps extends AriaButtonProps, ButtonVariantProps {
  children?: ReactNode;
}

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-3',
    'font-sans font-medium leading-body text-center whitespace-nowrap',
    'transition duration-300 ease-in-out',
    'border border-solid border-transparent',
    'overflow-hidden focus:outline-none rounded-sm',
    'disabled:text-gray-30 disabled:bg-gray-10 disabled:border-gray-10 disabled:cursor-not-allowed',
  ),
  {
    variants: {
      size: {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-md',
        lg: 'py-4 px-9 text-lg',
      },
      variant: {
        primary: cn(
          'text-gray-90 bg-blue border-blue',
          'hover:bg-blue-100 hover:border-blue-100',
          'focus:bg-blue-100 focus:border-blue-100',
          'active:bg-blue-130 active:border-blue-130',
        ),
        secondary: cn(
          'text-white bg-gray-90 border-gray-90',
          'hover:bg-gray-80 hover:border-gray-80',
          'focus:bg-gray-80 focus:border-gray-80',
          'active:bg-gray-100 active:border-gray-100',
        ),
        info: cn(
          'text-gray-90 bg-yellow border-yellow',
          'hover:bg-yellow-100 hover:border-yellow-100',
          'focus:bg-yellow-100 focus:border-yellow-100',
          'active:bg-yellow-130 active:border-yellow-130',
        ),
        danger: cn(
          'text-gray-90 bg-red border-red',
          'hover:bg-red-100 hover:border-red-100',
          'focus:bg-red-100 focus:border-red-100',
          'active:bg-red-130 active:border-red-130',
        ),
        success: cn(
          'text-gray-90 bg-green border-green',
          'hover:bg-green-100 hover:border-green-100',
          'focus:bg-green-100 focus:border-green-100',
          'active:bg-green-130 active:border-green-130',
        ),
        ghost: cn(
          'text-blue bg-gray-10 border-gray-10',
          'hover:bg-gray-20 hover:border-gray-20',
          'focus:bg-gray-20 focus:border-gray-20',
          'active:bg-gray-30 active:border-gray-30',
        ),
        card: cn(
          'text-gray-90 bg-white border-gray-10',
          'hover:bg-gray-10 hover:border-gray-10',
          'focus:bg-gray-10 focus:border-gray-10',
          'active:bg-gray-30 active:border-gray-30',
        ),
      },
      isFull: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      isFull: false,
    },
  },
);

export const Button = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const { children, type, size, variant, isFull, ...rest } = props;
  const classNames = cn(
    buttonVariants({ size, variant, isFull }),
    rest.className,
  );
  return (
    <AriaButton ref={ref} type={type} {...rest} className={classNames}>
      {children}
    </AriaButton>
  );
});
