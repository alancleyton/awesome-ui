import type { ForwardedRef } from 'react';
import type { InputProps as AriaInputProps } from 'react-aria-components';

type RemovedProps = 'size';

type InputRef = ForwardedRef<HTMLInputElement>;
interface InputProps extends Omit<AriaInputProps, RemovedProps> {
  /**
   * Applies the size of the input.
   *
   * - Available sizes: `sm`, `md`, `lg`
   *
   * @default `md`
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Applies 100% to the input width.
   *
   * @default `false`
   */
  isFull?: boolean;
  /**
   * Applies color variant to the input.
   *
   * - Available variants: `primary`, `secondary`, `info`, `danger`, `success`
   *
   * @default `secondary`
   */
  variant?: 'primary' | 'secondary' | 'info' | 'danger' | 'success';
}

export type { InputRef, InputProps };
