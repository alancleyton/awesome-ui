import type { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@awesome-ui/utils';

import { useInputContext } from './input-root';

const inputAddonVariants = cva('', {
  variants: {
    variant: {
      primary: 'a-ring-blue-20',
      secondary: 'a-ring-gray-20',
      info: 'a-ring-yellow-20',
      danger: 'a-ring-red-20',
      success: 'a-ring-green-20',
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
});

export const InputRightAddon = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  const { variant } = useInputContext();
  const classes = cn(
    'a-input-right-addon a-inline-flex a-items-center a-px-4 a-ml-hr a-rounded-sm a-rounded-s-none a-outline-none a-ring-1',
    inputAddonVariants({ variant }),
    className,
  );
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export const InputLeftAddon = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  const { variant } = useInputContext();
  const classes = cn(
    'a-input-left-addon a-inline-flex a-items-center a-px-4 a-ml-hr a-rounded-sm a-rounded-e-none a-outline-none a-ring-1',
    inputAddonVariants({ variant }),
    className,
  );
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};
