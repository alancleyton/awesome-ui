import { createContext, useContext, HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

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
}

export const InputGroupContext = createContext<InputGroupProps>({
  addonRight: false,
  addonLeft: false,
});

// eslint-disable-next-line
export const useInputGroupContext = () => useContext(InputGroupContext);

const InputGroup = ({
  children,
  className,
  addonRight,
  addonLeft,
  ...otherProps
}: InputGroupProps) => {
  return (
    <InputGroupContext.Provider value={{ addonRight, addonLeft }}>
      <div
        className={cn(
          'a-input-group a-flex a-relative a-h-fit a-w-full',
          addonRight && 'a-input-group-addon-right',
          addonLeft && 'a-input-group-addon-left',
          className,
        )}
        {...otherProps}
      >
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};

export { InputGroup };
