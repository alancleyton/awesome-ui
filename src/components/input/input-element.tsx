import type { HTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

import { useInput } from './input-context';

const RIGHT_SIDE_SIZES = {
  sm: 'a-right-4',
  md: 'a-right-5',
  lg: 'a-right-6',
};

const LEFT_SIDE_SIZES = {
  sm: 'a-left-4',
  md: 'a-left-5',
  lg: 'a-left-6',
};

export const InputRightElement = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  const { size } = useInput();
  const SIZE_INDEX = size ? size : 'md';

  return (
    <div
      className={cn(
        'a-input-right-element a-absolute a-w-fit a-top-1/2 -a-translate-y-1/2',
        RIGHT_SIDE_SIZES[SIZE_INDEX],
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export const InputLeftElement = ({
  children,
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
  const { size } = useInput();
  const SIZE_INDEX = size ? size : 'md';

  return (
    <div
      className={cn(
        'a-input-left-element a-absolute a-w-fit a-top-1/2 -a-translate-y-1/2',
        LEFT_SIDE_SIZES[SIZE_INDEX],
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
