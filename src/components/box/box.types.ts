import type { ReactNode, ForwardedRef, HTMLAttributes } from 'react';

import type { BoxVariantProps } from './box.styles';

type BoxRef = ForwardedRef<HTMLDivElement | HTMLSpanElement>;

interface BoxProps
  extends HTMLAttributes<HTMLDivElement | HTMLSpanElement>,
    BoxVariantProps {
  children?: ReactNode;
  is?: 'div' | 'span';
}

export type { BoxRef, BoxProps };
