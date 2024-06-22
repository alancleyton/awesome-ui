import { forwardRef } from 'react';
import { Input as AriaInput } from 'react-aria-components';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

import type { InputRef, InputProps } from '.';

const inputVariants = cva(
  cn(
    'a-input a-inline-flex a-font-sans a-font-normal a-text-gray-90 placeholder:text-gray-60 a-text-ellipsis a-leading-body',
    'a-transition a-duration-300 a-ease-in-out a-outline-none a-rounded-sm a-ring-1 enabled:hover:a-ring-2',
    'disabled:a-text-gray-30 disabled:a-ring-gray-10 disabled:a-cursor-not-allowed',
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'a-input-primary a-ring-blue-20 enabled:hover:a-ring-blue enabled:focus:a-ring-2 enabled:focus:a-ring-blue',
        ),
        secondary: cn(
          'a-input-secondary a-ring-gray-20 enabled:hover:a-ring-gray enabled:focus:a-ring-2 enabled:focus:a-ring-gray',
        ),
        info: cn(
          'a-input-info a-ring-yellow-20 enabled:hover:a-ring-yellow enabled:focus:a-ring-2 enabled:focus:a-ring-yellow',
        ),
        danger: cn(
          'a-input-danger a-ring-red-20 enabled:hover:a-ring-red enabled:focus:a-ring-2 enabled:focus:a-ring-red',
        ),
        success: cn(
          'a-input-success a-ring-green-20 enabled:hover:a-ring-green enabled:focus:a-ring-2 enabled:focus:a-ring-green',
        ),
      },
      size: {
        sm: 'a-input-sm a-h-7 a-py-2 a-px-4 a-text-sm',
        md: 'a-input-md a-h-8 a-py-3 a-px-5 a-text-md',
        lg: 'a-input-lg a-h-9 a-py-4 a-px-6 a-text-lg',
      },
      isFull: {
        true: 'a-input-full a-w-full',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
      isFull: false,
    },
  },
);

/**
 * Input form field is used to take data from the user and create interactive forms.
 * @see Docs https://alancleyton.github.io/awesome-ui/?path=/docs/
 */
const Input = forwardRef((props: InputProps, ref: InputRef) => {
  const { type, size, isFull, variant, className, ...otherProps } = props;

  const classNames = cn(inputVariants({ size, isFull, variant }), className);

  return (
    <AriaInput ref={ref} type={type} className={classNames} {...otherProps} />
  );
});

Input.displayName = 'Input';

export default Input;
