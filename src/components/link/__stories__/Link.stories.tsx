import { ReactComponent as ArrowRightIcon } from '@src/assets/arrow-right-1.svg';
import { ReactComponent as ConnectedIcon } from '@src/assets/connected.svg';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '..';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const PrimaryDefault: Story = {
  args: {
    text: 'This is a link',
    size: 'default',
    onClick: action('clicked'),
    type: 'primary',
    isBold: false,
  },
};

export const SecondaryDefault: Story = {
  args: {
    text: 'This is a link',
    size: 'default',
    onClick: action('clicked'),
    type: 'secondary',
    isBold: false,
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    text: 'This is a link',
    size: 'default',
    leftIcon: <ConnectedIcon className="w-5 h-5" />,
    rightIcon: <ArrowRightIcon className="w-5 h-5" />,
    onClick: action('clicked'),
    type: 'primary',
    isBold: false,
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    text: 'This is a link',
    size: 'default',
    leftIcon: <ConnectedIcon className="w-5 h-5" />,
    rightIcon: <ArrowRightIcon className="w-5 h-5" />,
    onClick: action('clicked'),
    type: 'secondary',
    isBold: false,
  },
};

export const PrimarySmall: Story = {
  args: {
    text: 'This is a link',
    size: 'small',
    leftIcon: <ConnectedIcon className="w-3 h-3" />,
    rightIcon: <ArrowRightIcon className="w-3 h-3" />,
    onClick: action('clicked'),
    type: 'primary',
    isBold: false,
  },
};

export const SecondarySmall: Story = {
  args: {
    text: 'This is a link',
    size: 'small',
    leftIcon: <ConnectedIcon className="w-3 h-3" />,
    rightIcon: <ArrowRightIcon className="w-3 h-3" />,
    onClick: action('clicked'),
    type: 'secondary',
    isBold: false,
  },
};

export const PrimaryBold: Story = {
  args: {
    text: 'This is a link',
    size: 'default',
    leftIcon: <ConnectedIcon className="w-5 h-5" />,
    rightIcon: <ArrowRightIcon className="w-5 h-5" />,
    onClick: action('clicked'),
    type: 'primary',
    isBold: true,
  },
};

export const SecondaryBold: Story = {
  args: {
    text: 'This is a link',
    size: 'default',
    leftIcon: <ConnectedIcon className="w-5 h-5" />,
    rightIcon: <ArrowRightIcon className="w-5 h-5" />,
    onClick: action('clicked'),
    type: 'secondary',
    isBold: true,
  },
};
