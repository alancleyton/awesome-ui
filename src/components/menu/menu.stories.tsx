import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuProps } from '.';
import { Button } from '@awesome-ui/components/button';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta<MenuProps>;

type Story = StoryObj<MenuProps>;

const MenuTemplate: Story = {
  render: () => {
    return (
      <Menu>
        <Button variant="secondary">Actions</Button>
        <Menu.List>
          <Menu.Item>My account</Menu.Item>
          <Menu.Item>Update my account</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

export const BasicMenu: Story = {
  ...MenuTemplate,
};
