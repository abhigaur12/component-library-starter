import { ReactComponent as TickIcon } from '@src/assets/tick.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '..';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'Default',
    size: 'large',
    solid: false,
    badgeType: 'default',
  },
};

export const Error: Story = {
  args: {
    text: 'Error',
    size: 'large',
    solid: false,
    badgeType: 'error',
  },
};

export const Info: Story = {
  args: {
    text: 'Info',
    size: 'large',
    solid: false,
    badgeType: 'info',
  },
};

export const Success: Story = {
  args: {
    text: 'Success',
    size: 'large',
    solid: false,
    badgeType: 'success',
  },
};

export const Warning: Story = {
  args: {
    text: 'Warning',
    size: 'large',
    solid: false,
    badgeType: 'warning',
  },
};

export const BadgeWithIcon: Story = {
  args: {
    text: 'Success',
    size: 'large',
    solid: false,
    leftIcon: <TickIcon className="w-6 h-6 text-inherit" />,
    rightIcon: <TickIcon className="w-6 h-6 text-inherit" />,
    badgeType: 'success',
  },
};

export const SmallBadge: Story = {
  args: {
    text: 'Success',
    size: 'small',
    solid: false,
    badgeType: 'success',
  },
};

export const SolidBadge: Story = {
  args: {
    text: 'Default',
    size: 'medium',
    solid: true,
    badgeType: 'default',
  },
};
