import { ReactComponent as LinkIcon } from '@src/assets/arrow-right-1.svg';
import { ReactComponent as ShareIcon } from '@src/assets/share.svg';
import { ReactComponent as UserIcon } from '@src/assets/user.svg';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@src/components/button';
import { Checkbox } from '@src/components/checkbox';
import { ConfirmationModal, Modal } from '..';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const WrapperDiv = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex justify-center items-center">
    <div className="w-[512px]">{children}</div>
  </div>
);
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Lorem ipsum dolor sit amet</span>,
    modalContent: (
      <span className="h-[300px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    ),
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};

export const RequiredMessageModal: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Lorem ipsum dolor sit amet</span>,
    modalContent: (
      <span className="h-[300px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    ),
    requiredMessage: true,
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
    requiredMessageContent: (
      <span>
        Lorem ipsum dolor sit amet <span className="text-form-error">*</span>
      </span>
    ),
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};

export const CheckboxModal: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Lorem ipsum dolor sit amet</span>,
    modalContent: (
      <span className="h-[300px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    ),
    checkboxFooter: true,
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
    checkboxContent: (
      <Checkbox
        id="checkbox-label"
        label="Lorem ipsum dolor sit amet"
        checked={false}
        onClick={() => {
          console.log('checkbox clicked');
        }}
      />
    ),
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};

export const UpdatesModal: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Lorem ipsum dolor sit amet</span>,
    modalContent: (
      <span className="h-[300px]">
        <span>Lorem ipsum dolor sit amet:</span>
        <ul className="my-4 list-disc pl-4">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li>Excepteur sint occaecat cupidatat non proident sunt in culpa.</li>
          <li>Nisi ut aliquip ex ea commodo consequat duis aute irure.</li>
          <li>Mollit anim id est laborum sed ut perspiciatis unde omnis.</li>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus.</li>
        </ul>
        <Button
          buttonType="primary"
          label="Lorem ipsum"
          size="small"
          onClick={action('primary clicked')}
        />
      </span>
    ),
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
    updateModal: true,
    subtitle: 'January 25, 2024',
    updateFooterIcons: [
      {
        id: 1,
        icon: (
          <ShareIcon className="w-5 h-5 text-base-icon dark:text-dark-base-icon" />
        ),
        handleClick: action('Github Icon'),
      },
      {
        id: 2,
        icon: (
          <UserIcon className="w-5 h-5 text-base-icon dark:text-dark-base-icon" />
        ),
        handleClick: action('Twitter Icon'),
      },
      {
        id: 3,
        icon: (
          <LinkIcon className="w-5 h-5 text-base-icon dark:text-dark-base-icon" />
        ),
        handleClick: action('Discord Icon'),
      },
    ],
    updateFooterText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};

export const InfoModal: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Info</span>,
    modalContent: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </span>
    ),
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
    confirmationStatus: ConfirmationModal.INFO,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};

export const WarningModal: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Warning</span>,
    modalContent: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </span>
    ),
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
    confirmationStatus: ConfirmationModal.WARNING,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};

export const ErrorModal: Story = {
  args: {
    onPrimaryButtonClick: action('primary clicked'),
    onSecondaryButtonClick: action('secondary clicked'),
    onCrossIconClick: action('cross icon clicked'),
    header: true,
    footer: true,
    crossIcon: true,
    headerContent: <span>Error / Delete </span>,
    modalContent: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </span>
    ),
    primaryButton: true,
    primaryButtonContent: 'Connect',
    secondaryButton: true,
    secondaryButtonContent: 'Cancel',
    confirmationStatus: ConfirmationModal.ERROR,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <WrapperDiv>
        <Story />
      </WrapperDiv>
    ),
  ],
};
