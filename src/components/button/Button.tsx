import { classNames } from '@src/utils/classNames';
import { ReactComponent as LoaderGrey } from '../../assets/loader-grey.svg';
import { ReactComponent as Loader } from '../../assets/loader.svg';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'action';

export type Size = 'large' | 'medium' | 'small';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the Button.
   *
   * @default 'primary'
   */
  buttonType: ButtonType;
  /**   Show label present in the Button
   *
   * @default ''
   *
   */
  label?: string;
  /* Classname */
  classname?: string;
  /**  The size of the button
   *
   * @default 'medium'
   *
   */
  size?: Size;
  /**  Left icon in the button
   *
   * @default 'false'
   *
   */
  leftIcon?: JSX.Element;
  /**   Right icon in the button
   *
   * @default 'false'
   *
   */
  rightIcon?: JSX.Element;
  /**   Show disabled state of the button
   *
   * @default 'false'
   *
   */
  disabled?: boolean;
  /**   Show loading state of the button
   *
   * @default 'false'
   *
   */
  loading?: boolean;

  onClick: () => void;
  /**   Fill button width with the full width available
   *
   * @default 'false'
   *
   */
  fillWidth?: boolean;
  /**   show button selected state
   *
   * @default 'false'
   *
   */
  isSelected?: boolean;
  leftIconClassname?: string;
}

export const Button = ({
  buttonType,
  label,
  classname,
  size,
  disabled,
  leftIcon,
  rightIcon,
  loading,
  onClick,
  fillWidth,
  isSelected,
  leftIconClassname = '',
}: ButtonProps) => {
  const defaultClassname =
    'flex flex-row items-center gap-2 font-600 leading-5 rounded-md';

  const sizeClassname = () => {
    if (buttonType === 'ghost')
      switch (size) {
        case 'large':
          return 'py-[15px] px-[31px] text-4';
        case 'medium':
        default:
          return 'py-[11px] px-[15px] text-4';
        case 'small':
          return 'p-[7px] text-[14px]';
      }
    else
      switch (size) {
        case 'large':
          return 'py-4 px-8 text-4';
        case 'medium':
        default:
          return 'py-3 px-4 text-4';
        case 'small':
          return 'p-2 text-[14px]';
      }
  };

  const activeColorClassname = () => {
    switch (buttonType) {
      case 'primary':
      default:
        return 'bg-action-primary-default hover:bg-action-primary-hover text-action-primary-text focus:bg-action-primary-press dark:bg-dark-action-primary-default dark:hover:bg-dark-action-primary-hover dark:text-dark-action-primary-text dark:focus:bg-dark-action-primary-press';
      case 'secondary':
        return 'bg-action-secondary-default hover:bg-action-secondary-hover text-action-secondary-text focus:bg-action-secondary-press';
      case 'ghost':
        return 'bg-action-ghost-default hover:bg-action-ghost-hover text-action-ghost-text focus:bg-action-ghost-press border-action-ghost-border !dark:border-dark-action-ghost-border border dark:bg-dark-action-ghost-default dark:hover:bg-dark-action-ghost-hover dark:text-dark-action-ghost-text dark:focus:bg-dark-action-ghost-press';
      case 'neutral':
        return 'bg-other-clickable hover:bg-action-neutral-hover dark:hover:bg-dark-action-neutral-hover text-action-neutral-disable-text dark:text-dark-action-neutral-disable-text focus:bg-action-neutral-press dark:focus:bg-dark-action-neutral-press';
      case 'action':
        return 'bg-transparent hover:bg-action-ghost-hover dark:hover:bg-dark-action-ghost-hover text-action-ghost-text dark:text-dark-action-ghost-text';
      case 'success':
        return 'bg-action-success-default hover:bg-action-success-hover text-action-success-text focus:bg-action-success-press';
      case 'warning':
        return 'bg-action-warning-default hover:bg-action-warning-hover text-action-warning-text focus:bg-action-warning-press';
      case 'error':
        return 'bg-action-error-default hover:bg-action-error-hover text-action-error-text focus:bg-action-error-press';
    }
  };

  const disabledColorClassname = () => {
    switch (buttonType) {
      case 'primary':
      case 'secondary':
      case 'success':
      case 'warning':
      case 'error':
      default:
        return 'bg-action-primary-disable dark:bg-dark-action-primary-disable text-action-primary-text-disable dark:text-dark-action-primary-text-disable';
      case 'ghost':
        return 'bg-transparent bg-action-ghost-text-disable text-action-ghost-text-disable dark:text-dark-action-primary-text-disable border-action-ghost-text-disable border';
      case 'neutral':
        return 'bg-transparent text-action-neutral-disable-text dark:text-dark-action-primary-text-disable';
      case 'action':
        return 'bg-transparent text-action-ghost-disable-text dark:text-dark-action-ghost-text-disable';
    }
  };

  const selectedActionClassname = () => {
    if (buttonType === 'action' && isSelected) {
      return '!bg-action-ghost-press dark:!bg-dark-action-ghost-press';
    }
    return '';
  };

  const cursorClassname =
    loading || disabled ? 'cursor-not-allowed' : 'cursor-pointer';

  const colorClassname = disabled
    ? disabledColorClassname()
    : activeColorClassname();

  const fillButtonWidth = fillWidth ? 'w-full flex justify-center' : '';

  const finalClassname = classNames(
    defaultClassname,
    sizeClassname(),
    colorClassname,
    cursorClassname,
    fillButtonWidth,
    classname,
    selectedActionClassname(),
  );

  const iconClassname = `w-5 h-5 ${leftIconClassname}`;

  const spinLoader = () => {
    switch (buttonType) {
      case 'action':
      case 'ghost':
        return <LoaderGrey className="w-5 h-5 animate-spin" />;
      case 'neutral':
        return <Loader className="w-5 h-5 animate-spin" />;
      case 'primary':
      case 'secondary':
      case 'success':
      case 'warning':
      case 'error':
      default:
        return <Loader className="w-5 h-5 animate-spin" />;
    }
  };

  return (
    <button
      className={finalClassname}
      onClick={() => {
        if (!disabled && !loading) {
          onClick();
        }
      }}
    >
      {loading
        ? spinLoader()
        : leftIcon && <span className={iconClassname}>{leftIcon}</span>}
      {label}
      {rightIcon && <span className="w-5 h-5">{rightIcon}</span>}
    </button>
  );
};

Button.displayName = 'Button';
