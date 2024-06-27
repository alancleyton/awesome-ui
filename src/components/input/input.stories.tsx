import { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputRootProps, InputFieldProps, InputGroupProps } from '.';

export default {
  title: 'Components/Input',
  component: Input.Root,
} as Meta<InputRootProps>;

type InputTemplateProps = {
  addonLeftContent?: string | ReactNode;
  addonRightContent?: string | ReactNode;
  elementRightContent?: string | ReactNode;
  elementLeftContent?: string | ReactNode;
};
type Story = StoryObj<
  InputRootProps & InputFieldProps & InputGroupProps & InputTemplateProps
>;

const InputTemplate: Story = {
  render: ({
    size,
    isFull,
    variant,
    placeholder,
    disabled,
    addonLeft,
    addonLeftContent,
    addonRight,
    addonRightContent,
    elementLeft,
    elementLeftContent,
    elementRight,
    elementRightContent,
  }) => {
    return (
      <Input.Root size={size} variant={variant} isFull={isFull}>
        <Input.Group
          addonLeft={addonLeft}
          addonRight={addonRight}
          elementLeft={elementLeft}
          elementRight={elementRight}
        >
          {elementLeft && (
            <Input.LeftElement>{elementLeftContent}</Input.LeftElement>
          )}
          {addonLeft && <Input.LeftAddon>{addonLeftContent}</Input.LeftAddon>}
          <Input.Field placeholder={placeholder} disabled={disabled} />
          {addonRight && (
            <Input.RightAddon>{addonRightContent}</Input.RightAddon>
          )}
          {elementRight && (
            <Input.RightElement>{elementRightContent}</Input.RightElement>
          )}
        </Input.Group>
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

export const LeftAddonInput: Story = {
  ...InputTemplate,
  args: {
    addonLeft: true,
    addonLeftContent: '@',
    placeholder: 'Addon left input',
  },
};

export const RightAddonInput: Story = {
  ...InputTemplate,
  args: {
    addonRight: true,
    addonRightContent: '@',
    placeholder: 'Addon right input',
  },
};

export const LeftElementInput: Story = {
  ...InputTemplate,
  args: {
    elementLeft: true,
    elementLeftContent: '@',
    placeholder: 'Element left input',
  },
};

export const RightElementInput: Story = {
  ...InputTemplate,
  args: {
    elementRight: true,
    elementRightContent: '@',
    placeholder: 'Element right input',
  },
};
