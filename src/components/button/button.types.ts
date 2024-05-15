import type { ReactNode, ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

type ButtonRef = ForwardedRef<HTMLButtonElement>;

interface ButtonProps extends AriaButtonProps {
  children?: ReactNode;

  /**
   * Applies color variants to the button.
   * The default variant color is `primary`.
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'danger'
    | 'success'
    | 'ghost'
    | 'card';

  /**
   * Applies the size of the button.
   * The default size is `md`.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Applies 100% to the button width.
   * The default size is `false`.
   */
  isFull?: boolean;
}

export type { ButtonRef, ButtonProps };
