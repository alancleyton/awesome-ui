/* eslint react-hooks/rules-of-hooks: off */
import { useArgs } from '@storybook/store';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@awesome-ui/components/button';
import { Drawer, DrawerProps } from '.';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta<DrawerProps>;

type Story = StoryObj<DrawerProps & { label?: string }>;

const DrawerTemplate: Story = {
  render: ({ open, placement, size, label }) => {
    const [, setArgs] = useArgs();
    const handleOpenDrawer = () => setArgs({ open: true });
    const handleCloseDrawer = () => setArgs({ open: false });

    return (
      <div>
        <Button onPress={handleOpenDrawer}>{label}</Button>
        <Drawer
          open={open}
          placement={placement}
          size={size}
          onClose={handleCloseDrawer}
        >
          <Drawer.Content>
            <div className="a-p-5 a-h-full a-bg-white">
              <p>drawer content</p>
              <Button onPress={handleCloseDrawer}>close drawer</Button>
            </div>
          </Drawer.Content>
        </Drawer>
      </div>
    );
  },
};

export const DrawerTop: Story = {
  ...DrawerTemplate,
  args: {
    label: 'top drawer',
    placement: 'top',
  },
};

export const DrawerRight: Story = {
  ...DrawerTemplate,
  args: {
    label: 'right drawer',
    placement: 'right',
  },
};

export const DrawerBottom: Story = {
  ...DrawerTemplate,
  args: {
    label: 'bottom drawer',
    placement: 'bottom',
  },
};

export const DrawerLeft: Story = {
  ...DrawerTemplate,
  args: {
    label: 'left drawer',
    placement: 'left',
  },
};

export const DrawerSM: Story = {
  ...DrawerTemplate,
  args: {
    label: 'small drawer',
    placement: 'left',
    size: 'sm',
  },
};

export const DrawerMD: Story = {
  ...DrawerTemplate,
  args: {
    label: 'medium drawer',
    placement: 'left',
    size: 'md',
  },
};

export const DrawerLG: Story = {
  ...DrawerTemplate,
  args: {
    label: 'large drawer',
    placement: 'left',
    size: 'lg',
  },
};

export const DrawerFull: Story = {
  ...DrawerTemplate,
  args: {
    label: 'full drawer',
    placement: 'left',
    size: 'full',
  },
};
