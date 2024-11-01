import type { HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

import { InputGroupContext, useInput } from './input-context';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies the right addon to the input field.
   *
   * Removes the end radius from the input field.
   *
   * @default `false`
   */
  addonRight?: boolean;
  /**
   * Applies the left addon to the input field.
   *
   * Removes the start radius from the input field.
   *
   * @default `false`
   */
  addonLeft?: boolean;
  /**
   * Applies the right element to the input field.
   *
   * Add end padding spacing to the input field.
   *
   * @default `false`
   */
  elementRight?: boolean;
  /**
   * Applies the left element to the input field.
   *
   * Add start padding spacing to the input field.
   *
   * @default `false`
   */
  elementLeft?: boolean;
}

export const InputGroup = ({
  children,
  className,
  addonRight,
  addonLeft,
  elementRight,
  elementLeft,
  ...otherProps
}: InputGroupProps) => {
  const { isFull } = useInput();
  return (
    <InputGroupContext.Provider
      value={{ addonRight, addonLeft, elementRight, elementLeft }}
    >
      <div
        className={cn(
          'a-input-group a-flex a-relative a-h-fit',
          isFull ? 'a-w-full' : 'a-w-fit',
          addonRight && 'a-input-group-addon-right',
          addonLeft && 'a-input-group-addon-left',
          elementRight && 'a-input-group-element-right',
          elementLeft && 'a-input-group-element-left',
          className,
        )}
        {...otherProps}
      >
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};
