import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '.';
import { Button } from '../button';
import type { NavbarProps } from '.';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta<NavbarProps>;

type Story = StoryObj<NavbarProps>;

const NavbarTemplate: Story = {
  render: ({ variant, size }) => {
    return (
      <Navbar variant={variant} size={size}>
        <Navbar.Brand href="/logo">
          <span className="a-text-white a-font-semibold a-text-base">LOGO</span>
        </Navbar.Brand>
        <Navbar.Nav alignment="left" collapse>
          <Navbar.NavItems>
            <Navbar.NavItem>
              <Navbar.NavLink href="#">Home</Navbar.NavLink>
            </Navbar.NavItem>
            <Navbar.NavItem>
              <Navbar.NavLink href="#">Features</Navbar.NavLink>
            </Navbar.NavItem>
            <Navbar.NavItem>
              <Navbar.NavLink href="#">Pricing</Navbar.NavLink>
            </Navbar.NavItem>
            <Navbar.NavItem>
              <Navbar.NavLink href="#">Disabled</Navbar.NavLink>
            </Navbar.NavItem>
          </Navbar.NavItems>
        </Navbar.Nav>
        <Navbar.Nav alignment="right" collapse>
          <Button variant="card">Sign In</Button>
        </Navbar.Nav>
      </Navbar>
    );
  },
};

export const DefaultNavbar: Story = {
  ...NavbarTemplate,
  args: {
    variant: 'primary',
    size: 'md',
  },
};
