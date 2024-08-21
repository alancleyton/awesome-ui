import { Key } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuProps } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta<MenuProps>;

type MenuItem = {
  id: string;
  name: string;
  separator?: boolean;
};

type MenuSection = {
  title?: string;
  items?: MenuItem[];
};

type Story = StoryObj<
  MenuProps & {
    label?: string;
    items?: MenuItem[];
    sections?: MenuSection[];
    disabledKeys?: string[];
    onAction?: (key: Key) => void;
  }
>;

const MenuTemplate: Story = {
  render({ label, items, sections, disabledKeys, onAction }) {
    return (
      <Menu label={label} disabledKeys={disabledKeys} onAction={onAction}>
        {items?.map(item =>
          item.separator ? (
            <Menu.Separator />
          ) : (
            <Menu.Item id={item.id}>{item.name}</Menu.Item>
          ),
        )}
        {sections?.map(section => (
          <Menu.Section title={section.title}>
            {section?.items?.map(item => (
              <Menu.Item id={item.id}>{item.name}</Menu.Item>
            ))}
          </Menu.Section>
        ))}
      </Menu>
    );
  },
};

export const BasicMenu: Story = {
  ...MenuTemplate,
  args: {
    label: 'Open menu',
    items: [
      {
        id: 'myAccount',
        name: 'My Account',
      },
      {
        id: 'updateAccount',
        name: 'Update Account',
      },
      {
        id: 'logout',
        name: 'Logout',
      },
    ],
    onAction: action => alert('selected action: ' + action),
  },
};

export const MenuWithSections: Story = {
  ...MenuTemplate,
  args: {
    label: 'Profile',
    sections: [
      {
        title: 'profile',
        items: [
          {
            id: 'updateAccount',
            name: 'Update Account',
          },
          {
            id: 'accountDashboard',
            name: 'Account Dashboard',
          },
          {
            id: 'appointments',
            name: 'Appointments',
          },
        ],
      },
      {
        title: 'actons',
        items: [
          {
            id: 'logout',
            name: 'Logout',
          },
          {
            id: 'delete',
            name: 'Delete',
          },
        ],
      },
    ],
  },
};

export const MenuWithSeparator: Story = {
  ...MenuTemplate,
  args: {
    label: 'File',
    items: [
      {
        id: 'newFile',
        name: 'New File',
      },
      {
        id: 'newDocument',
        name: 'New Document',
      },
      { id: '', name: '', separator: true },
      {
        id: 'openFile',
        name: 'Open File',
      },
    ],
  },
};

export const MenuWithDisabledItems: Story = {
  ...MenuTemplate,
  args: {
    label: 'Fuits',
    items: [
      {
        id: 'passionFruit',
        name: 'Passion fruit',
      },
      {
        id: 'banana',
        name: 'Banana',
      },
      {
        id: 'cranberry',
        name: 'Cranberry',
      },
    ],
    disabledKeys: ['cranberry'],
    onAction: action => alert(` fruit: ${action}`),
  },
};
