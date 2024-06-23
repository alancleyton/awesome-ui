import { forwardRef, ForwardedRef } from 'react';
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from 'react-aria-components';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

export type RemovedProps = 'size';
export type InputControlRef = ForwardedRef<HTMLInputElement>;
export interface InputControlProps extends Omit<AriaInputProps, RemovedProps> {
  /**
   * Applies the size of the input.
   *
   * - Available sizes: `sm`, `md`, `lg`
   *
   * @default `md`
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Applies 100% to the input width.
   *
   * @default `false`
   */
  isFull?: boolean;
  /**
   * Applies color variant to the input.
   *
   * - Available variants: `primary`, `secondary`, `info`, `danger`, `success`
   *
   * @default `secondary`
   */
  variant?: 'primary' | 'secondary' | 'info' | 'danger' | 'success';
}

const inputControlVariants = cva(
  cn(
    'a-input-control a-inline-flex a-font-sans a-font-normal a-text-gray-90 placeholder:text-gray-60 a-text-ellipsis a-leading-body',
    'a-transition a-duration-300 a-ease-in-out a-outline-none a-rounded-sm a-ring-1 enabled:hover:a-ring-2',
    'disabled:a-text-gray-30 disabled:a-ring-gray-10 disabled:a-cursor-not-allowed',
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'a-input-control-primary a-ring-blue-20 enabled:hover:a-ring-blue enabled:focus:a-ring-2 enabled:focus:a-ring-blue',
        ),
        secondary: cn(
          'a-input-secondary a-ring-gray-20 enabled:hover:a-ring-gray enabled:focus:a-ring-2 enabled:focus:a-ring-gray',
        ),
        info: cn(
          'a-input-control-info a-ring-yellow-20 enabled:hover:a-ring-yellow enabled:focus:a-ring-2 enabled:focus:a-ring-yellow',
        ),
        danger: cn(
          'a-input-control-danger a-ring-red-20 enabled:hover:a-ring-red enabled:focus:a-ring-2 enabled:focus:a-ring-red',
        ),
        success: cn(
          'a-input-control-success a-ring-green-20 enabled:hover:a-ring-green enabled:focus:a-ring-2 enabled:focus:a-ring-green',
        ),
      },
      size: {
        sm: 'a-input-control-sm a-h-7 a-py-2 a-px-4 a-text-sm',
        md: 'a-input-control-md a-h-8 a-py-3 a-px-5 a-text-md',
        lg: 'a-input-control-lg a-h-9 a-py-4 a-px-6 a-text-lg',
      },
      isFull: {
        true: 'a-input-control-full a-w-full',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
      isFull: false,
    },
  },
);

export const InputControl = forwardRef(
  (props: InputControlProps, ref: InputControlRef) => {
    const { type, size, isFull, variant, className, ...otherProps } = props;
    const classNames = cn(
      inputControlVariants({ size, isFull, variant }),
      className,
    );
    return (
      <AriaInput ref={ref} type={type} className={classNames} {...otherProps} />
    );
  },
);

InputControl.displayName = 'InputControl';
