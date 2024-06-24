import type { HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

const InputGroup = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'a-input-group a-flex a-relative a-h-fit a-w-fit',
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export { InputGroup };