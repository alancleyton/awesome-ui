import { ReactNode } from 'react';

import { InputContext } from './input-context';
import { InputLeftAddon, InputRightAddon } from './input-addon';
import { InputLeftElement, InputRightElement } from './input-element';
import { InputField } from './input-field';
import { InputGroup } from './input-group';

export interface InputProps {
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
  variant?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'danger'
    | 'success'
    | 'unstyled';
}

const Input = ({
  children,
  size,
  isFull,
  variant,
  ...otherProps
}: InputProps & { children?: ReactNode }) => {
  return (
    <InputContext.Provider value={{ size, isFull, variant }}>
      <div className="a-input" {...otherProps}>
        {children}
      </div>
    </InputContext.Provider>
  );
};

Input.LeftAddon = InputLeftAddon;
Input.RightAddon = InputRightAddon;
Input.LeftElement = InputLeftElement;
Input.RightElement = InputRightElement;
Input.Group = InputGroup;
Input.Field = InputField;

export default Input;
