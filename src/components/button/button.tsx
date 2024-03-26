import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import { cn } from '@awesome-ui/utils';
import {
  ButtonRef,
  ButtonProps,
} from '@awesome-ui/components/button/button-types';
import { buttonVariants } from '@awesome-ui/components/button/button-styles';

const Button = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const { children, type, size, variant, isFull, ...otherProps } = props;
  const classNames = cn(
    buttonVariants({ size, variant, isFull }),
    otherProps.className,
  );

  return (
    <AriaButton ref={ref} type={type} {...otherProps} className={classNames}>
      {children}
    </AriaButton>
  );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
