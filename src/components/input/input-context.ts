import { createContext, useContext } from 'react';

import { InputProps, InputGroupProps } from '.';

export const InputContext = createContext<InputProps>({
  size: 'md',
  isFull: false,
  variant: 'secondary',
});

export const InputGroupContext = createContext<InputGroupProps>({
  addonRight: false,
  addonLeft: false,
  elementRight: false,
  elementLeft: false,
});

export const useInput = () => useContext(InputContext);
export const useInputGroup = () => useContext(InputGroupContext);
