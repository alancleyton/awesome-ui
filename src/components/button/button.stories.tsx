import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Ui components/Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export default meta;

export const Primary: Story = {
  args: {
    children: 'Primary',
    type: 'button',
    size: 'md',
    variant: 'primary',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    type: 'button',
    size: 'md',
    variant: 'secondary',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Info: Story = {
  args: {
    children: 'info',
    type: 'button',
    size: 'md',
    variant: 'info',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    type: 'button',
    size: 'md',
    variant: 'danger',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Success: Story = {
  args: {
    children: 'Success',
    type: 'button',
    size: 'md',
    variant: 'success',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    type: 'button',
    size: 'md',
    variant: 'ghost',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Card: Story = {
  args: {
    children: 'Card',
    type: 'button',
    size: 'md',
    variant: 'card',
  },
  render: ({ children, type, size, variant }) => (
    <Button type={type} size={size} variant={variant}>
      {children}
    </Button>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    type: 'button',
    size: 'md',
    variant: 'primary',
    isDisabled: true,
  },
  render: ({ children, type, size, variant, isDisabled }) => (
    <Button type={type} size={size} variant={variant} isDisabled={isDisabled}>
      {children}
    </Button>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Disabled',
    type: 'button',
    size: 'md',
    variant: 'primary',
    isFull: true,
  },
  render: ({ children, type, size, variant, isFull }) => (
    <Button type={type} size={size} variant={variant} isFull={isFull}>
      {children}
    </Button>
  ),
};
