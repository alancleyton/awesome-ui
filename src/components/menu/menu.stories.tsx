import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuProps } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta<MenuProps>;

type Story = StoryObj<MenuProps>;

const BasicMenuTemplate: Story = {
  render: () => {
    return (
      <Menu label="Open menu" onAction={action => alert(` action: ${action}`)}>
        <Menu.Item id="myAccount">My Account</Menu.Item>
        <Menu.Item id="updateAccount">Update Account</Menu.Item>
        <Menu.Item id="logout">Logout</Menu.Item>
      </Menu>
    );
  },
};

const MenuWithSectionsTemplate: Story = {
  render() {
    return (
      <Menu label="Profile">
        <Menu.Section title="profile">
          <Menu.Item>Update Account</Menu.Item>
          <Menu.Item>Account Dashboard</Menu.Item>
          <Menu.Item>Appointments</Menu.Item>
        </Menu.Section>
        <Menu.Section title="actions">
          <Menu.Item>Logout</Menu.Item>
          <Menu.Item>Delete Account</Menu.Item>
        </Menu.Section>
      </Menu>
    );
  },
};

const MenuWithSeparatorTemplate: Story = {
  render: () => {
    return (
      <Menu label="File">
        <Menu.Item>New File</Menu.Item>
        <Menu.Item>New Document</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Open File</Menu.Item>
        <Menu.Item>Rename File</Menu.Item>
      </Menu>
    );
  },
};

const MenuWithDisabledItemsTemplate: Story = {
  render: () => {
    return (
      <Menu
        label="Fruits"
        onAction={action => alert(` fruit: ${action}`)}
        disabledKeys={['watermelon']}
      >
        <Menu.Item id="watermelon">Watermelon</Menu.Item>
        <Menu.Item id="banana">Banana</Menu.Item>
        <Menu.Item id="apple">Apple</Menu.Item>
      </Menu>
    );
  },
};

export const BasicMenu: Story = {
  ...BasicMenuTemplate,
};

export const MenuWithSections: Story = {
  ...MenuWithSectionsTemplate,
};

export const MenuWithSeparator: Story = {
  ...MenuWithSeparatorTemplate,
};

export const MenuWithDisabledItems: Story = {
  ...MenuWithDisabledItemsTemplate,
};
