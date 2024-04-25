import type { Meta, StoryObj } from '@storybook/react';

import { Box, BoxProps } from '.';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta<BoxProps>;

type Story = StoryObj<BoxProps>;

export const Default: Story = {
  args: {
    children: <p>Hello world</p>,
    is: 'div',
    p: 5,
    bg: 'yellow40',
  },
};
