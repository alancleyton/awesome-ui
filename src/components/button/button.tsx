import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import { cn } from '@awesome-ui/utils';
import {
  ButtonRef,
  ButtonProps,
  buttonVariants,
} from '@awesome-ui/components/button';

const Button = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const { children, type, size, variant, isFull, ...rest } = props;
  const classNames = cn(
    buttonVariants({ size, variant, isFull }),
    rest.className,
  );
  return (
    <AriaButton ref={ref} type={type} {...rest} className={classNames}>
      {children}
    </AriaButton>
  );
});

export { Button };
