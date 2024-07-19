import { forwardRef, ForwardedRef } from 'react';
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from 'react-aria-components';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

import { useInputContext } from './input-root';
import { useInputGroupContext } from './input-group';

export type RemovedProps = 'size';
export type InputFieldRef = ForwardedRef<HTMLInputElement>;
export interface InputFieldProps extends Omit<AriaInputProps, RemovedProps> {}

const inputFieldVariants = cva(
  cn(
    'a-input-field a-inline-flex a-font-sans a-font-normal a-text-gray-90 placeholder:text-gray-60 a-text-ellipsis a-leading-body',
    'a-transition a-duration-300 a-ease-in-out a-outline-none a-rounded-sm a-ring-1 enabled:hover:a-ring-2',
    'disabled:a-text-gray-30 disabled:a-ring-gray-10 disabled:a-cursor-not-allowed',
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'a-input-field-primary a-ring-blue-20 enabled:hover:a-ring-blue enabled:focus:a-ring-2 enabled:focus:a-ring-blue',
        ),
        secondary: cn(
          'a-input-field-secondary a-ring-gray-20 enabled:hover:a-ring-gray enabled:focus:a-ring-2 enabled:focus:a-ring-gray',
        ),
        info: cn(
          'a-input-field-info a-ring-yellow-20 enabled:hover:a-ring-yellow enabled:focus:a-ring-2 enabled:focus:a-ring-yellow',
        ),
        danger: cn(
          'a-input-field-danger a-ring-red-20 enabled:hover:a-ring-red enabled:focus:a-ring-2 enabled:focus:a-ring-red',
        ),
        success: cn(
          'a-input-field-success a-ring-green-20 enabled:hover:a-ring-green enabled:focus:a-ring-2 enabled:focus:a-ring-green',
        ),
        unstyled: cn(
          'a-input-field-unstyled a-ring-transparent enabled:hover:a-ring-transparent enabled:focus:a-ring-0 enabled:focus:a-ring-transparent',
        ),
      },
      size: {
        sm: 'a-input-field-sm a-h-7 a-py-2 a-px-4 a-text-sm',
        md: 'a-input-field-md a-h-8 a-py-3 a-px-5 a-text-md',
        lg: 'a-input-field-lg a-h-9 a-py-4 a-px-6 a-text-lg',
      },
      isFull: {
        true: 'a-input-field-full a-w-full',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
      isFull: false,
    },
  },
);

const ELEMENT_LEFT_SIZES = {
  sm: 'a-pl-7',
  md: 'a-pl-8',
  lg: 'a-pl-9',
};

const ELEMENT_RIGHT_SIZES = {
  sm: 'a-pr-7',
  md: 'a-pr-8',
  lg: 'a-pr-9',
};

export const InputField = forwardRef(
  (props: InputFieldProps, ref: InputFieldRef) => {
    const { type, className, ...otherProps } = props;
    const { size, isFull, variant } = useInputContext();
    const { addonRight, addonLeft, elementRight, elementLeft } =
      useInputGroupContext();

    const ELEMENT_SIZE_INDEX = size ? size : 'md';

    const classes = cn(
      inputFieldVariants({ size, isFull, variant }),
      addonRight && 'a-rounded-e-none',
      addonLeft && 'a-rounded-s-none',
      elementRight && ELEMENT_RIGHT_SIZES[ELEMENT_SIZE_INDEX],
      elementLeft && ELEMENT_LEFT_SIZES[ELEMENT_SIZE_INDEX],
      className,
    );

    return (
      <AriaInput ref={ref} type={type} className={classes} {...otherProps} />
    );
  },
);

InputField.displayName = 'InputField';
