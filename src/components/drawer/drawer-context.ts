import { createContext } from 'react';

import { DrawerRootProps } from './drawer-root';

export const DrawerContext = createContext<DrawerRootProps>({
  open: false,
  onClose: () => null,
  placement: 'left',
  size: 'md',
});
