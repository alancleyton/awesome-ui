import { createContext } from 'react';

import { DrawerProps } from '.';

export const DrawerContext = createContext<DrawerProps>({
  open: false,
  onClose: () => null,
  placement: 'left',
  size: 'md',
});
