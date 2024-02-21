import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { id: 'test-5', checked: true },
};

export const DefaultSmall: Story = {
  args: { size: 'small', label: 'Checkbox Label', id: 'test-4' },
};

export const Unchecked: Story = {
  args: {},
};

export const CheckboxWithLabel: Story = {
  args: {
    label: 'Checkbox label',
    id: 'test-1',
  },
};

export const CheckboxWithError: Story = {
  args: {
    label: 'Checkbox label',
    error: true,
    errorText: 'Error Label',
    id: 'test-2',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    label: 'Checkbox label',
    disabled: true,
    id: 'test-3',
    checked: true,
  },
};
