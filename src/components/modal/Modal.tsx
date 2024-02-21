import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as Error } from '../../assets/exclamation-circle.svg';
import { ReactComponent as InfoFiller } from '../../assets/info-circle.svg';
import { ReactComponent as Warning } from '../../assets/warning.svg';
import { Button } from '../button';

export enum ConfirmationModal {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface FooterIconsProps {
  id: number;
  icon: JSX.Element;
  handleClick: () => void;
}

export interface ModalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**   Show if header present in the modal
   *
   * @default 'false'
   *
   */
  header?: boolean;
  /**   Show if footer present in the modal
   *
   * @default 'false'
   *
   */
  footer?: boolean;
  /**  Cross icon in the Modal
   *
   * @default 'false'
   *
   */
  crossIcon?: boolean;
  /**  header content in the Modal
   *
   * @default ''
   *
   */
  headerContent?: JSX.Element;
  /**  header content in the Modal
   *
   * @default ''
   *
   */
  modalContent?: JSX.Element;
  /**  Required message in the Modal
   *
   * @default 'false'
   *
   */
  requiredMessage?: boolean;
  /**  on Save Click in the Modal
   *
   * @default 'false'
   *
   */
  onPrimaryButtonClick?: () => void;
  /** on cancel click in the Modal
   *
   * @default 'false'
   *
   */
  onSecondaryButtonClick?: () => void;
  /** on cross click in the Modal
   *
   * @default 'false'
   *
   */
  onCrossIconClick?: () => void;
  /**  primary button in footer in the Modal
   *
   * @default 'false'
   *
   */
  primaryButton?: boolean;
  /**  Secondary button in footer in the Modal
   *
   * @default 'false'
   *
   */
  secondaryButton?: boolean;
  /**  Primary button content in footer in the Modal
   *
   * @default ''
   *
   */
  primaryButtonContent: string;
  /**  Secondary button in footer in the Modal
   *
   * @default ''
   *
   */
  secondaryButtonContent: string;
  /**  Required message content in the Modal
   *
   * @default false
   *
   */
  requiredMessageContent?: JSX.Element;
  subtitle: string;
  /**  Primary button loading in the Modal
   *
   * @default false
   *
   */
  primaryButtonLoading?: boolean;
  /**  Secondary button loading in the Modal
   *
   * @default false
   *
   */
  secondaryButtonLoading?: boolean;
  /**  Primary button disabled in the Modal
   *
   * @default false
   *
   */
  primaryButtonDisabled?: boolean;
  /**  Secondary button disabled in the Modal
   *
   * @default false
   *
   */
  secondaryButtonDisabled?: boolean;
  /**  Updated modal in the Modal
   *
   * @default false
   *
   */
  updateModal?: boolean;
  confirmationStatus?: ConfirmationModal;
  /**  Updated Footer text in the Modal
   *
   * @default []
   *
   */
  updateFooterIcons?: FooterIconsProps[];
  /**  Updated Footer text in the Modal
   *
   * @default ''
   *
   */
  updateFooterText?: string;
  /**  Checkbox footer in the Modal
   *
   * @default false
   *
   */
  checkboxFooter?: boolean;
  /**  Checkbox Content in the Modal
   *
   * @default false
   *
   */
  checkboxContent?: JSX.Element;
}

export const Modal = ({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  onCrossIconClick,
  header,
  footer,
  crossIcon,
  headerContent,
  requiredMessage,
  primaryButton,
  primaryButtonContent,
  secondaryButton,
  secondaryButtonContent,
  requiredMessageContent,
  modalContent,
  subtitle,
  primaryButtonLoading,
  secondaryButtonLoading,
  primaryButtonDisabled,
  secondaryButtonDisabled,
  confirmationStatus,
  updateModal,
  updateFooterIcons,
  updateFooterText,
  checkboxFooter,
  checkboxContent,
}: ModalProps) => {
  const confirmationIcon = () => {
    switch (confirmationStatus) {
      case ConfirmationModal.INFO:
        return (
          <InfoFiller className="w-6 h-6 text-base-link dark:text-dark-base-link" />
        );
      case ConfirmationModal.WARNING:
        return (
          <Warning className="w-6 h-6 text-action-warning-default dark:text-dark-action-warning-default" />
        );
      case ConfirmationModal.ERROR:
        return (
          <Error className="w-6 h-6 text-action-error-default dark:text-dark-action-error-default" />
        );
      default:
        break;
    }
  };
  const confirmationButton = () => {
    switch (confirmationStatus) {
      case ConfirmationModal.INFO:
        return 'primary';
      case ConfirmationModal.WARNING:
        return 'warning';
      case ConfirmationModal.ERROR:
        return 'error';
      default:
        return 'primary';
    }
  };
  return (
    <div className="border border-base-border rounded-xl w-full h-full relative flex space-between flex-col dark:bg-dark-base-bg bg-white dark:border-dark-base-fg">
      {crossIcon && (
        <CloseIcon
          onClick={onCrossIconClick}
          className="text-base-icon absolute mt-2 right-2 cursor-pointer w-6 h-6"
        />
      )}
      {header && (
        <div className="mt-5">
          <div className="flex flex-col pl-5">
            <div className="flex items-center">
              {confirmationStatus && (
                <span className="mr-2">{confirmationIcon()}</span>
              )}

              <span className="text-base-text text-xl font-medium dark:text-base-border">
                {headerContent}
              </span>
            </div>
            {subtitle && (
              <span className="text-[11px] text-base-sub-text-color dark:text-dark-base-sub-text-color">
                {subtitle}
              </span>
            )}
          </div>
          {!subtitle && !confirmationStatus && (
            <div className="mt-4 h-px bg-base-border dark:bg-dark-base-border" />
          )}
        </div>
      )}
      <div className="flex grow m-5 dark:text-base-border">{modalContent}</div>
      {footer && (
        <>
          {updateModal ? (
            <div className="bg-base-fg dark:bg-dark-base-fg p-5 rounded-bl-xl rounded-br-xl">
              <div className="flex flex-row">
                <div className="flex items-center gap-x-1 flex-row">
                  {updateFooterIcons?.map((button) => (
                    <span
                      role="presentation"
                      onClick={button.handleClick}
                      key={button.id}
                    >
                      {button.icon}
                    </span>
                  ))}
                  <span className="text-sm font-normal text-base-heading-text-color ml-2 dark:text-dark-base-heading-text-color">
                    {updateFooterText}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {!confirmationStatus && (
                <div className="mb-4 h-px bg-base-border dark:bg-dark-base-border" />
              )}
              <div
                className={`flex m-5 ${
                  requiredMessage || checkboxFooter
                    ? 'items-center'
                    : 'justify-end'
                }`}
              >
                {requiredMessage && (
                  <span className="text-base-text dark:text-base-border text-3.5 flex grow w-full">
                    {requiredMessageContent}{' '}
                  </span>
                )}
                {checkboxFooter && (
                  <span className="text-base-text dark:text-base-border text-3.5 flex grow w-full">
                    {checkboxContent}
                  </span>
                )}
                {(secondaryButton || primaryButton) && (
                  <div className="flex justify-end gap-x-2 w-full">
                    <div>
                      {secondaryButton && (
                        <Button
                          buttonType="ghost"
                          label={secondaryButtonContent}
                          size="small"
                          onClick={() =>
                            onSecondaryButtonClick && onSecondaryButtonClick()
                          }
                          loading={secondaryButtonLoading}
                          disabled={secondaryButtonDisabled}
                        />
                      )}
                    </div>
                    <div>
                      {primaryButton && (
                        <Button
                          buttonType={
                            confirmationStatus
                              ? confirmationButton()
                              : 'primary'
                          }
                          label={primaryButtonContent}
                          size="small"
                          onClick={() =>
                            onPrimaryButtonClick && onPrimaryButtonClick()
                          }
                          loading={primaryButtonLoading}
                          disabled={primaryButtonDisabled}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Modal.displayName = 'Modal';
