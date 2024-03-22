import type { ReactNode, ForwardedRef } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { ButtonVariantProps } from '@awesome-ui/components/button';

type ButtonRef = ForwardedRef<HTMLButtonElement>;

interface ButtonProps extends AriaButtonProps, ButtonVariantProps {
  children?: ReactNode;
}

export type { ButtonRef, ButtonProps };
