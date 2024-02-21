import { ReactComponent as PlusIcon } from '@src/assets/plus.svg';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    size: 'medium',
    onClick: action('clicked'),
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    size: 'large',
    onClick: action('clicked'),
    label: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    buttonType: 'ghost',
    size: 'large',
    onClick: action('clicked'),
    label: 'Ghost Button',
  },
};

export const Neutral: Story = {
  args: {
    buttonType: 'neutral',
    size: 'large',
    onClick: action('clicked'),
    label: 'Neutral Button',
  },
};

export const Success: Story = {
  args: {
    buttonType: 'success',
    size: 'large',
    onClick: action('clicked'),
    label: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    buttonType: 'warning',
    size: 'large',
    onClick: action('clicked'),
    label: 'Warning Button',
  },
};
export const Error: Story = {
  args: {
    buttonType: 'error',
    size: 'large',
    onClick: action('clicked'),
    label: 'Error Button',
  },
};
export const Action: Story = {
  args: {
    buttonType: 'action',
    size: 'large',
    onClick: action('clicked'),
    label: 'Error Button',
  },
};
export const IconButton: Story = {
  args: {
    buttonType: 'action',
    size: 'medium',
    onClick: action('clicked'),
    label: '',
    leftIcon: <PlusIcon className="w-5 h-5" />,
    isSelected: true,
  },
};
