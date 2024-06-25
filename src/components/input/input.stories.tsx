import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputRootProps, InputFieldProps } from '.';

export default {
  title: 'Components/Input',
  component: Input.Root,
} as Meta<InputRootProps>;

type Story = StoryObj<InputRootProps & InputFieldProps>;

const InputTemplate: Story = {
  render: ({ size, isFull, variant, placeholder, disabled }) => {
    return (
      <Input.Root size={size} variant={variant} isFull={isFull}>
        <Input.Field placeholder={placeholder} disabled={disabled} />
      </Input.Root>
    );
  },
};

export const DefaultInput: Story = {
  ...InputTemplate,
  args: {
    placeholder: 'Basic input',
  },
};

export const SmallInput: Story = {
  ...InputTemplate,
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

export const MediumInput: Story = {
  ...InputTemplate,
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
};

export const LargeInput: Story = {
  ...InputTemplate,
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};

export const PrimaryInput: Story = {
  ...InputTemplate,
  args: {
    variant: 'primary',
    placeholder: 'Primary input',
  },
};

export const SecondaryInput: Story = {
  ...InputTemplate,
  args: {
    variant: 'secondary',
    placeholder: 'Secondary input',
  },
};

export const InfoInput: Story = {
  ...InputTemplate,
  args: {
    variant: 'info',
    placeholder: 'Info input',
  },
};

export const DangerInput: Story = {
  ...InputTemplate,
  args: {
    variant: 'danger',
    placeholder: 'Danger input',
  },
};

export const SuccessInput: Story = {
  ...InputTemplate,
  args: {
    variant: 'success',
    placeholder: 'Success input',
  },
};

export const FullWidthInput: Story = {
  ...InputTemplate,
  args: {
    isFull: true,
    placeholder: 'Full input',
  },
};

export const DisabledInput: Story = {
  ...InputTemplate,
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};
