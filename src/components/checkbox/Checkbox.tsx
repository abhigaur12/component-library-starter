import React from 'react';
import { ReactComponent as CheckIconSmall } from '../../assets/check-small.svg';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';
import { ReactComponent as ErrorIcon } from '../../assets/exclamation-circle.svg';
import { ReactComponent as IndeterminateIcon } from '../../assets/indeterminate.svg';
import { ReactComponent as IndeterminateIconSmall } from '../../assets/indeterminate.svg';

export type SizeType = 'small' | 'medium';
export interface CheckboxProps {
  checked: boolean;
  label?: string;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  onClick: () => void;
  size?: SizeType;
  id: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  error = false,
  errorText,
  disabled = false,
  indeterminate = false,
  onClick,
  size = 'medium',
  id,
}) => {
  const getBackgroundStyle = () => {
    if (disabled) {
      if (checked)
        return 'bg-form-disable dark:bg-dark-form-disable border-form-disable rounded appearance-none';
      return 'border-form-disable rounded appearance-none';
    } else {
      if (error)
        return 'border-form-error dark:border-dark-form-error rounded appearance-none';
      else {
        if (checked)
          return 'bg-form-selected dark:bg-dark-form-selected border-form-selected dark:border-dark-form-selected rounded appearance-none';
        return 'border-form-border dark:border-dark-form-border rounded appearance-none';
      }
    }
  };

  const iconColorClassname = () => {
    let tempClassname = '';
    if (error && !disabled)
      tempClassname = 'text-form-error dark:text-dark-form-error';
    else {
      if (disabled) tempClassname = 'text-white';
      else
        tempClassname =
          'text-form-selected-color dark:text-dark-action-neutral-default';
    }
    return `absolute ${tempClassname}`;
  };

  const getInnerIcon = () => {
    if (indeterminate) {
      if (size === 'medium')
        return <IndeterminateIcon className={iconColorClassname()} />;
      return <IndeterminateIconSmall className={iconColorClassname()} />;
    } else {
      if (size === 'medium')
        return <CheckIcon className={`${iconColorClassname()} w-4 h-4`} />;
      return <CheckIconSmall className={iconColorClassname()} />;
    }
  };

  const outerContainerClassname = 'flex flex-col gap-[10px]';

  const checkboxLabelWrapperClassname =
    'flex flex-row gap-2 items-center justify-start text rounded';

  const cursorClassname = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

  const finalCheckboxClassname = `${cursorClassname} flex items-center justify-center gap-2`;

  const checkboxLabelClassname = `${
    disabled
      ? 'text-form-disable !dark:text-dark-form-disable text-sm'
      : 'text-form-text dark:text-dark-form-text text-sm'
  }`;

  const sizeClassname = size === 'medium' ? 'w-5 h-5' : 'w-4 h-4';

  const finalInputClassname = `${sizeClassname} border-[1.5px] ${cursorClassname} ${getBackgroundStyle()}`;

  const errorContainerClassname =
    'flex flex-row items-center gap-2 text-[11px] leading-3 text-form-error dark:text-dark-form-error';

  const errorIconClassname =
    'text-form-error dark:text-dark-form-error w-5 h-5';
  return (
    <div className={outerContainerClassname}>
      <div className={checkboxLabelWrapperClassname}>
        <label htmlFor={id} className={finalCheckboxClassname}>
          <input
            type="checkbox"
            checked={checked}
            className={finalInputClassname}
            disabled={false}
            id={id}
            onChange={() => {
              if (!disabled) {
                onClick();
              }
            }}
          />
          {checked && getInnerIcon()}
        </label>
        {label && <div className={checkboxLabelClassname}>{label}</div>}
      </div>
      {error && errorText && !disabled && (
        <div className={errorContainerClassname}>
          <ErrorIcon className={errorIconClassname} />
          {errorText}
        </div>
      )}
    </div>
  );
};
