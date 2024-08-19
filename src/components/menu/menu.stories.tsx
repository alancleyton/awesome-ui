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

// const BasicMenuTemplate: Story = {
//   render: () => {
//     return (
//       <Menu label="Open menu" onAction={action => alert(` action: ${action}`)}>
//         <Menu.Item id="myAccount">My Account</Menu.Item>
//         <Menu.Item id="updateAccount">Update Account</Menu.Item>
//         <Menu.Item id="logout">Logout</Menu.Item>
//       </Menu>
//     );
//   },
// };

// const MenuWithSectionsTemplate: Story = {
//   render() {
//     return (
//       <Menu label="Profile">
//         <Menu.Section title="profile">
//           <Menu.Item>Update Account</Menu.Item>
//           <Menu.Item>Account Dashboard</Menu.Item>
//           <Menu.Item>Appointments</Menu.Item>
//         </Menu.Section>
//         <Menu.Section title="actions">
//           <Menu.Item>Logout</Menu.Item>
//           <Menu.Item>Delete Account</Menu.Item>
//         </Menu.Section>
//       </Menu>
//     );
//   },
// };

// const MenuWithSeparatorTemplate: Story = {
//   render: () => {
//     return (
//       <Menu label="File">
//         <Menu.Item>New File</Menu.Item>
//         <Menu.Item>New Document</Menu.Item>
//         <Menu.Separator />
//         <Menu.Item>Open File</Menu.Item>
//         <Menu.Item>Rename File</Menu.Item>
//       </Menu>
//     );
//   },
// };

// const MenuWithDisabledItemsTemplate: Story = {
//   render: () => {
//     return (
//       <Menu
//         label="Fruits"
//         onAction={action => alert(` fruit: ${action}`)}
//         disabledKeys={['watermelon']}
//       >
//         <Menu.Item id="watermelon">Watermelon</Menu.Item>
//         <Menu.Item id="banana">Banana</Menu.Item>
//         <Menu.Item id="apple">Apple</Menu.Item>
//       </Menu>
//     );
//   },
// };

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
    onAction: action => alert(` action: ${action}`),
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
        id: 'apple',
        name: 'Apple',
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
