import React from 'react';

export type BadgeType = 'error' | 'info' | 'success' | 'default' | 'warning';

export type BadgeSize = 'large' | 'medium' | 'small';

export interface BadgeProps extends React.DOMAttributes<HTMLDivElement> {
  /**
   * The type of the Button.
   *
   * @default 'info'
   */
  badgeType: BadgeType;
  /**
   * The type of the Button.
   *
   * @default 'false'
   */
  solid: boolean;
  /**
   * The type of the Button.
   *
   * @default 'large'
   */
  size: BadgeSize;
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  /**
   * Text Style
   *
   * @default 'false'
   */
  isBold?: boolean;
  /**
   * Add Border Hover Style
   *
   * @default 'false'
   */
  borderHover?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  size,
  badgeType,
  solid,
  text,
  leftIcon,
  rightIcon,
  isBold = false,
  borderHover = false,
  ...props
}) => {
  const getSizeStyle = (size: BadgeSize) => {
    switch (size) {
      case 'large':
        return 'px-2 py-1 text-sm';
      case 'medium':
        return 'p-1 text-[10px] leading-3';
      case 'small':
      default:
        return 'p-0.5 text-[10px] leading-3';
    }
  };

  const getColorStyle = (badgeType: BadgeType) => {
    switch (badgeType) {
      case 'default':
        return solid
          ? `${
              borderHover ? 'hover:border-feedback-default-text' : ''
            } bg-feedback-default-text text-feedback-default-bg dark:bg-dark-feedback-default-text dark:text-dark-feedback-default-bg`
          : `${
              borderHover
                ? 'hover:border-feedback-default-text dark:hover:border-dark-feeback-default-text'
                : ''
            } bg-feedback-default-bg text-feedback-default-text dark:bg-dark-feedback-default-bg dark:text-dark-feedback-default-text`;
      case 'error':
        return solid
          ? `${
              borderHover ? 'hover:border-feedback-error-bg' : ''
            } bg-feedback-error-text text-feedback-error-bg`
          : `${
              borderHover
                ? 'hover:border-feedback-error-text dark:hover:border-dark-feedback-error-text'
                : ''
            } bg-feedback-error-bg text-feedback-error-text dark:bg-dark-feedback-error-bg dark:text-dark-feedback-error-text`;
      case 'success':
        return solid
          ? `bg-feedback-success-text text-feedback-success-bg dark:text-dark-feedback-success-bg dark:text-dark-feedback-success-text ${
              borderHover
                ? 'hover:border-feedback-success-bg dark:hover:border-dark-feedback-success-text'
                : ''
            }`
          : `bg-feedback-success-bg text-feedback-success-text dark:bg-dark-feedback-success-bg dark:text-dark-feedback-success-text ${
              borderHover
                ? 'dark:hover:border-dark-feedback-success-text hover:border-feedback-success-text'
                : ''
            }`;
      case 'info':
        return solid
          ? `bg-feedback-info-text text-feedback-info-bg ${
              borderHover ? 'hover:border-feedback-info-text' : ''
            }`
          : `bg-feedback-info-bg text-feedback-info-text dark:bg-dark-feedback-info-bg dark:text-dark-feedback-info-text ${
              borderHover
                ? 'hover:border-feedback-info-text dark:hover:border-dark-feedback-info-text'
                : ''
            }`;
      case 'warning':
        return solid
          ? `bg-feedback-warning-text text-feedback-warning-bg dark:bg-dark-feedback-warning-text dark:text-dark-feedback-warning-bg ${
              borderHover
                ? 'hover:border-feedback-warning-bg dark:hover:border-dark-feedback-warning-bg'
                : ''
            }`
          : `bg-feedback-warning-bg text-feedback-warning-text dark:text-dark-feedback-warning-text dark:bg-dark-feedback-warning-bg ${
              borderHover
                ? 'hover:border-feedback-warning-text dark:hover:border-dark-feedback-warning-text'
                : ''
            }`;
    }
  };
  return (
    <div
      className={`w-min whitespace-nowrap flex items-center justify-start rounded ${getColorStyle(
        badgeType,
      )} ${getSizeStyle(size)} gap-x-1 ${
        isBold ? 'font-semibold' : 'font-normal'
      }`}
      {...props}
    >
      {leftIcon && leftIcon}
      <span>{text}</span>
      {rightIcon && rightIcon}
    </div>
  );
};

Badge.displayName = 'Badge';
