import { createContext, useContext, ReactNode } from 'react';

export interface InputRootProps {
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

export const InputContext = createContext<InputRootProps>({
  size: 'md',
  isFull: false,
  variant: 'secondary',
});

// eslint-disable-next-line
export const useInputContext = () => useContext(InputContext);

export const InputRoot = ({
  children,
  size,
  isFull,
  variant,
  ...otherProps
}: InputRootProps & { children?: ReactNode }) => {
  return (
    <InputContext.Provider value={{ size, isFull, variant }}>
      <div className="a-input" {...otherProps}>
        {children}
      </div>
    </InputContext.Provider>
  );
};
