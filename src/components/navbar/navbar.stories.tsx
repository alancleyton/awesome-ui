import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '.';
import { Button } from '../button';
import type { NavbarProps, NavbarNavProps } from '.';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta<NavbarProps>;

type Story = StoryObj<NavbarProps & NavbarNavProps>;

const NavbarTemplate: Story = {
  render: ({ variant, size, alignment, filled, collapse }) => {
    return (
      <Navbar variant={variant} size={size}>
        <Navbar.Brand className="a-text-white a-font-semibold a-text-lg">
          NavBar
        </Navbar.Brand>
        <Navbar.Nav alignment={alignment} filled={filled} collapse={collapse}>
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
          </Navbar.NavItems>
        </Navbar.Nav>
        <Navbar.Nav collapse={collapse}>
          <Button variant="card">Sign In</Button>
        </Navbar.Nav>
      </Navbar>
    );
  },
};

export const PrimaryNavbar: Story = {
  ...NavbarTemplate,
  args: {
    variant: 'primary',
  },
};

export const SecondaryNavbar: Story = {
  ...NavbarTemplate,
  args: {
    variant: 'secondary',
  },
};

export const NavbarRight: Story = {
  ...NavbarTemplate,
  args: {
    alignment: 'right',
  },
};

export const NavbarCenter: Story = {
  ...NavbarTemplate,
  args: {
    alignment: 'center',
  },
};

export const NavbarLeft: Story = {
  ...NavbarTemplate,
  args: {
    alignment: 'left',
  },
};

export const NavbarCollapse: Story = {
  ...NavbarTemplate,
  args: {
    alignment: 'left',
    collapse: true,
  },
};
