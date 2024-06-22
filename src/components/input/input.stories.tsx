import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<InputProps>;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    size: 'sm',
    placeholder: 'Type something',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary input',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Secondary input',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    placeholder: 'Info input',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    placeholder: 'Danger input',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    placeholder: 'Success input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input field',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium size',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large size',
  },
};
