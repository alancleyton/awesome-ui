import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuProps } from '.';
import { Button } from '@awesome-ui/components/button';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta<MenuProps>;

type Story = StoryObj<MenuProps>;

const BasicMenuTemplate: Story = {
  render: () => {
    return (
      <Menu>
        <Button variant="secondary">Actions</Button>
        <Menu.List>
          <Menu.Item>My Account</Menu.Item>
          <Menu.Item>Update Account</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

const MenuWithSeparatorTemplate: Story = {
  render: () => {
    return (
      <Menu>
        <Button variant="secondary">Options</Button>
        <Menu.List>
          <Menu.Item>New File</Menu.Item>
          <Menu.Item>New Document</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Open File</Menu.Item>
          <Menu.Item>Rename File</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },
};

const MenuGroupTemplate: Story = {
  render: () => {
    return (
      <Menu>
        <Button variant="secondary">Actions</Button>
        <Menu.List>
          <Menu.Group label="profile">
            <Menu.Item>Update Payments</Menu.Item>
            <Menu.Item>Dashboard</Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group label="help">
            <Menu.Item>FAQ</Menu.Item>
            <Menu.Item>Help Center</Menu.Item>
          </Menu.Group>
        </Menu.List>
      </Menu>
    );
  },
};

export const BasicMenu: Story = {
  ...BasicMenuTemplate,
};

export const MenuWithSeparator: Story = {
  ...MenuWithSeparatorTemplate,
};

export const MenuGroup: Story = {
  ...MenuGroupTemplate,
};
