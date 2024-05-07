import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@awesome-ui/components/button';

import { Box, BoxProps } from '.';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    block: {
      name: 'block',
      type: 'string',
      description: 'Applies the box display block',
    },
    inline: {
      name: 'inline',
      type: 'string',
      description: 'Applies the box display inline',
    },
    inlineBlock: {
      name: 'inlineBlock',
      type: 'string',
      description: 'Applies the box display inline block',
    },
    rounded: {
      name: 'rounded',
      type: 'string',
      description: 'Applies the box border radius',
    },
    p: {
      name: 'p',
      type: 'number',
      description: 'Applies the box padding',
    },
    px: {
      name: 'px',
      type: 'number',
      description: 'Applies the box horizontal padding',
    },
    py: {
      name: 'py',
      type: 'number',
      description: 'Applies the box vertical padding',
    },
    pt: {
      name: 'pt',
      type: 'number',
      description: 'Applies the box padding top',
    },
    pr: {
      name: 'pr',
      type: 'number',
      description: 'Applies the box padding right',
    },
    pb: {
      name: 'pb',
      type: 'number',
      description: 'Applies the box padding bottom',
    },
    pl: {
      name: 'pl',
      type: 'number',
      description: 'Applies the box padding left',
    },
    m: {
      name: 'm',
      type: 'number',
      description: 'Applies the box margin',
    },
    mx: {
      name: 'mx',
      type: 'number',
      description: 'Applies the box horizontal margin',
    },
    my: {
      name: 'my',
      type: 'number',
      description: 'Applies the box vertical margin',
    },
    mt: {
      name: 'mt',
      type: 'number',
      description: 'Applies the box margin top',
    },
    mr: {
      name: 'mr',
      type: 'number',
      description: 'Applies the box margin right',
    },
    mb: {
      name: 'mb',
      type: 'number',
      description: 'Applies the box margin bottom',
    },
    ml: {
      name: 'ml',
      type: 'number',
      description: 'Applies the box margin left',
    },
    w: {
      name: 'w',
      type: 'string',
      description: 'Applies the box width',
    },
    maxW: {
      name: 'maxW',
      type: 'string',
      description: 'Applies the box max width',
    },
    h: {
      name: 'h',
      type: 'string',
      description: 'Applies the box height',
    },
    maxH: {
      name: 'maxH',
      type: 'string',
      description: 'Applies the box max height',
    },
    bg: {
      name: 'bg',
      type: 'string',
      description: 'Applies the box background color',
    },
  },
} as Meta<BoxProps>;

type Story = StoryObj<BoxProps>;

export const Default: Story = {
  args: {
    children: 'This is a box',
    p: 5,
    bg: 'yellow40',
  },
};

export const Span: Story = {
  args: {
    children: <Button>button</Button>,
    block: true,
    is: 'span',
    p: 4,
    bg: 'blue40',
  },
};
