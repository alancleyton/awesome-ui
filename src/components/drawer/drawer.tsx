import { memo } from 'react';

import { DrawerRoot } from './drawer-root';
import { DrawerContent } from './drawer-content';

export default {
  Root: memo(DrawerRoot),
  Content: memo(DrawerContent),
};
