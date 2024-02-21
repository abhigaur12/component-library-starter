import { ReactComponent as Connected } from '@src/assets/connected.svg';
import { ReactComponent as InfoCircle } from '@src/assets/info-circle.svg';
import { ReactComponent as TickIcon } from '@src/assets/tick.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '..';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
type Story = StoryObj<typeof TextInput>;

export const InputField: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Enter text',
  },
};

export const InputFieldLabel: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Label',
    helpText: 'Help Text',
  },
};

export const InputFieldHelpText: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    helpText: 'Help Text',
  },
};

export const InputFieldDisabled: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Label',
    value: 'Disabled text',
    helpText: 'Help text',
    disabled: true,
    leftIcon: (
      <Connected className="h-6 w-6 dark:text-dark-form-border text-form-border" />
    ),
  },
};

export const InputFieldError: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Label',
    helpText: 'Help text',
    error: true,
    required: true,
    rightIcon: (
      <InfoCircle className="h-6 w-6 dark:text-dark-form-error text-form-error" />
    ),
  },
};

export const InputFieldSuccess: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Label',
    helpText: 'Help text',
    success: true,
    leftIcon: (
      <Connected className="h-6 w-6 dark:text-dark-form-text text-form-text" />
    ),
    rightIcon: (
      <TickIcon className="h-6 w-6 dark:text-dark-form-success text-form-success" />
    ),
  },
};

export const InputFieldIcon: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[345px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Label',
    helpText: 'Help text',
    value: 'This one has icon!',
    leftIcon: (
      <Connected className="h-6 w-6 dark:text-dark-form-text text-form-text" />
    ),
  },
};
