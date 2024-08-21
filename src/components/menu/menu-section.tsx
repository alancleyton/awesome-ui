import { type ReactNode } from 'react';
import {
  Header,
  Section as AriaSection,
  SectionProps as AriaSectionProps,
} from 'react-aria-components';

import { cn } from '@awesome-ui/utils';

export interface MenuSectionProps
  extends Omit<AriaSectionProps<object>, 'children'> {
  /**
   * The title for the group name.
   */
  title?: string;
  children: ReactNode;
}

export const MenuSection = ({
  children,
  className,
  title,
  ...menuGroupProps
}: MenuSectionProps) => {
  const classNames = cn(
    'a-menu-section a-px-4 a-py-2 a-text-gray-60 a-font-semi-bold',
    className,
  );

  return (
    <AriaSection {...menuGroupProps}>
      <Header className={classNames}>{title}</Header>
      {children}
    </AriaSection>
  );
};
