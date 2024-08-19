import {
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

export const MenuSeparator = ({
  className,
  ...separatorProps
}: AriaSeparatorProps) => (
  <AriaSeparator
    className={cn(
      'a-menu-separator a-block a-w-full a-h-hr a-bg-gray-10',
      className,
    )}
    {...separatorProps}
  />
);
