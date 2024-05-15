import { forwardRef } from 'react';
import { Button as AriaButton } from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

import type { ButtonRef, ButtonProps } from './button.types';
import { buttonVariants } from './button.variants';

/**
 * Button component is used to take actions in forms, dialogs and navigation.
 * @see Docs https://alancleyton.github.io/awesome-ui/?path=/docs/components-button--docs
 */
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

export default Button;
