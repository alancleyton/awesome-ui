import type { ReactNode, ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

type ButtonRef = ForwardedRef<HTMLButtonElement>;
type ColorVariants =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'danger'
  | 'success'
  | 'ghost'
  | 'card';

interface ButtonProps extends AriaButtonProps {
  children?: ReactNode;

  /**
   * Applies color variant to the button.
   *
   * - Available variants: `primary`, `secondary`, `info`, `danger`, `success`, `ghost`, `card`
   *
   * @default `primary`
   */
  variant?: ColorVariants;

  /**
   * Applies the size of the button.
   *
   * - Available sizes: `sm`, `md`, `lg`
   *
   * @default `md`
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Applies 100% to the button width.
   *
   * @default `false`
   */
  isFull?: boolean;
}

export type { ButtonRef, ButtonProps };
