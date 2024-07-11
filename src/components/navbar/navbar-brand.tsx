import { HTMLAttributes, LinkHTMLAttributes } from 'react';

import { cn } from '@awesome-ui/utils';

export type NavbarBrandProps = LinkHTMLAttributes<HTMLAnchorElement> &
  HTMLAttributes<HTMLDivElement>;

const NavbarBrand = ({
  children,
  className,
  href,
  ...otherProps
}: NavbarBrandProps) => {
  const classNames = cn('a-navbar-brand a-block ', className);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag className={classNames} href={href && href} {...otherProps}>
      {children}
    </Tag>
  );
};

export { NavbarBrand };
