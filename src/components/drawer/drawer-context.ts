import { createContext, useContext } from 'react';

import { DrawerProps } from '.';

export const DrawerContext = createContext<DrawerProps>({
  open: false,
  onClose: () => null,
  placement: 'left',
  size: 'md',
});

export const useDrawer = () => useContext(DrawerContext);
