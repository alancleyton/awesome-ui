import { forwardRef, type ForwardedRef } from 'react';
import {
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

type MenuSeparatorRef = ForwardedRef<HTMLDivElement>;

const MenuSeparator = forwardRef(
  (
    { className, ...separatorProps }: AriaSeparatorProps,
    ref: MenuSeparatorRef,
  ) => (
    <AriaSeparator
      ref={ref}
      className={cn(
        'a-menu-separator a-block a-w-full a-h-hr a-bg-gray-10',
        className,
      )}
      {...separatorProps}
    />
  ),
);

MenuSeparator.displayName = 'MenuSeparator';

export { MenuSeparator };
