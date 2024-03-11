import '../tailwind.css';
import { Meta, StoryObj } from '@storybook/react';

export const Button = () => {
  return (
    <button className="a-p-4 a-inline-block a-bg-yellow-400 hover:a-bg-yellow-900 a-font-roboto a-font-medium a-leading-body a-text-white a-rounded-sm">
      awesome button
    </button>
  );
};

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => <Button />,
};
