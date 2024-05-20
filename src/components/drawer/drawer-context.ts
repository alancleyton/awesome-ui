import { createContext } from 'react';

import type { DrawerContextProps } from './drawer.types';

export const DrawerContext = createContext<DrawerContextProps>({
  open: false,
  onClose: () => {},
  placement: 'left',
  size: 'md',
});
