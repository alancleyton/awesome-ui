import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      name: 'type',
      type: 'string',
      description: 'Applies the button type',
      defaultValue: 'primary',
    },
    variant: {
      name: 'variant',
      type: 'string',
      description: 'Applies color variants to the button',
      defaultValue: 'primary',
    },
    size: {
      name: 'size',
      type: 'string',
      description: 'Applies the size of the button',
      defaultValue: 'md',
    },
    isDisabled: {
      name: 'isDisabled',
      type: 'boolean',
      description: 'Change the state of the button to disabled',
      defaultValue: false,
    },
    isFull: {
      name: 'isFull',
      type: 'boolean',
      description: 'Applies 100% to the button width',
      defaultValue: false,
    },
  },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'secondary',
    variant: 'secondary',
  },
};

export const Info: Story = {
  args: {
    children: 'info',
    variant: 'info',
  },
};

export const Danger: Story = {
  args: {
    children: 'danger',
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    children: 'success',
    variant: 'success',
  },
};

export const Ghost: Story = {
  args: {
    children: 'ghost',
    variant: 'ghost',
  },
};

export const Card: Story = {
  args: {
    children: 'card',
    variant: 'card',
  },
};

export const Small: Story = {
  args: {
    children: 'small',
    variant: 'primary',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'medium',
    variant: 'primary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'large',
    variant: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'disabled',
    variant: 'primary',
    isDisabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'full button',
    variant: 'primary',
    isFull: true,
  },
};
