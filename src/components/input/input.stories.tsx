import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputControlProps } from '.';

export default {
  title: 'Components/Input',
  component: Input.Control,
} as Meta<InputControlProps>;

type Story = StoryObj<InputControlProps>;

export const DefaultInputControl: Story = {
  args: {
    placeholder: 'Basic input control',
  },
};

export const SmallInputControl: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input control',
  },
};

export const MediumInputControl: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input control',
  },
};

export const LargeInputControl: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input control',
  },
};

export const PrimaryInputControl: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Primary input control',
  },
};

export const SecondaryInputControl: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Secondary input control',
  },
};

export const InfoInputControl: Story = {
  args: {
    variant: 'info',
    placeholder: 'Info input control',
  },
};

export const DangerInputControl: Story = {
  args: {
    variant: 'danger',
    placeholder: 'Danger input control',
  },
};

export const SuccessInputControl: Story = {
  args: {
    variant: 'success',
    placeholder: 'Success input control',
  },
};

export const FullWidthInputControl: Story = {
  args: {
    isFull: true,
    placeholder: 'Full input control',
  },
};

export const DisabledInputControl: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input control',
  },
};
