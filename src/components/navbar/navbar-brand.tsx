import { NavbarBrandProps } from '.';

import { cn } from '@awesome-ui/utils';

const NavbarBrand = ({ children, href, ...otherProps }: NavbarBrandProps) => {
  const classNames = cn('a-navbar-brand a-block ', otherProps.className);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag className={classNames} href={href && href} {...otherProps}>
      {children}
    </Tag>
  );
};

export { NavbarBrand };
