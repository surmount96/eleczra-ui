import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Alert',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Alert',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Alert',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Alert',
  },
};
