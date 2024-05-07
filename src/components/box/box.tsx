import { ElementType, forwardRef } from 'react';
import type { BoxRef, BoxProps } from './box.types';

import { cn } from '@awesome-ui/utils';
import { boxVariants } from './box.styles';

const Box = forwardRef((props: BoxProps, ref: BoxRef) => {
  const {
    children,
    is = 'div',
    inline,
    block,
    inlineBlock,
    rounded,
    p,
    py,
    px,
    pt,
    pr,
    pb,
    pl,
    m,
    my,
    mx,
    mt,
    mr,
    mb,
    ml,
    w,
    maxW,
    h,
    maxH,
    bg,
    ...otherProps
  } = props;
  const classNames = cn(
    boxVariants({
      inline,
      block,
      inlineBlock,
      rounded,
      p,
      py,
      px,
      pt,
      pr,
      pb,
      pl,
      m,
      my,
      mx,
      mt,
      mr,
      mb,
      ml,
      w,
      maxW,
      h,
      maxH,
      bg,
    }),
    otherProps.className,
  );
  const Element = is as ElementType;
  return (
    <Element ref={ref} {...otherProps} className={classNames}>
      {children}
    </Element>
  );
});

Box.displayName = 'Box';

export default Box;
