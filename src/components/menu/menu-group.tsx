import { forwardRef, type ForwardedRef, ReactNode } from 'react';
import {
  Section as AriaSection,
  Header as AriaHeader,
  SectionProps as AriaSectionProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

type MenuGroupRef = ForwardedRef<HTMLDivElement>;

export interface MenuGroupProps
  extends Omit<AriaSectionProps<object>, 'children'> {
  children: ReactNode;
  label: string;
}

const MenuGroup = forwardRef(
  (
    { children, className, label, ...menuGroupProps }: MenuGroupProps,
    ref: MenuGroupRef,
  ) => {
    const classNames = cn(
      'a-menu-group a-px-4 a-py-2 a-text-gray-60 a-font-semi-bold',
      className,
    );

    return (
      <AriaSection ref={ref} {...menuGroupProps}>
        <AriaHeader className={classNames}>{label}</AriaHeader>
        {children}
      </AriaSection>
    );
  },
);

MenuGroup.displayName = 'MenuGroup';

export { MenuGroup };
