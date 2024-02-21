import React from 'react';

export type LinkType = 'primary' | 'secondary';

export type LinkSize = 'default' | 'small';

export interface LinkProps {
  type: LinkType;
  size: LinkSize;
  text: string;
  isBold: boolean;
  onClick: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  classname?: string;
}

export const Link: React.FC<LinkProps> = ({
  type,
  size,
  text,
  isBold,
  onClick,
  leftIcon,
  rightIcon,
  classname = '',
}) => {
  const getTextStyle = (type: LinkType) => {
    switch (type) {
      default:
      case 'primary':
        return 'text-base-link dark:text-dark-base-link';
      case 'secondary':
        return 'text-base-para-text-color dark:text-dark-base-para-text-color';
    }
  };

  const getSizeStyle = (size: LinkSize) => {
    switch (size) {
      default:
      case 'default':
        return 'text-sm';
      case 'small':
        return 'text-[11px]';
    }
  };

  return (
    <span
      onClick={(e) => onClick(e)}
      role="presentation"
      className={`${getTextStyle(type)} ${
        isBold ? 'font-semibold' : 'font-normal'
      } flex items-center justify-start gap-x-1 w-min whitespace-nowrap
      ${getSizeStyle(size)} cursor-pointer hover:underline ${
        classname ? classname : ''
      }`}
    >
      {leftIcon && (
        <div className="flex items-center justify-center">{leftIcon}</div>
      )}
      <span>{text}</span>
      {rightIcon && (
        <div className="flex items-center justify-center">{rightIcon}</div>
      )}
    </span>
  );
};
