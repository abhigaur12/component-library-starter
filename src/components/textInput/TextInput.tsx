import { ReactComponent as SlashIcon } from '../../assets/slash.svg';
import { classNames } from '../../utils/classNames';

export type Type = 'default' | 'compact';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the Input Field
   *
   * @default 'default'
   */
  inputSize: Type;

  label?: string;

  helpText?: string;

  leftIcon?: JSX.Element;

  rightIcon?: JSX.Element;

  /**
   * The Placeholder text
   *
   * @default 'Enter text'
   */

  placeholder?: string;

  onChange: (value: unknown) => void;

  onKeyDown?: (e: unknown) => void;

  value: string;

  disabled?: boolean;

  max?: number;

  min?: number;

  type?: string;

  id?: string;

  error?: boolean;

  success?: boolean;

  required?: boolean;
}

export const TextInput = ({
  inputSize,
  className,
  value,
  onChange,
  onKeyDown,
  label,
  helpText,
  leftIcon,
  rightIcon,
  id,
  disabled,
  error,
  success,
  required,
  ...props
}: TextInputProps) => {
  enum SizeStyles {
    default = 'h-12 p-3',
    compact = 'h-10 py-2 px-3',
  }

  const getInputClassName = () => {
    if (error) {
      return 'dark:border-dark-form-error border-form-error';
    }
    if (success) {
      return 'dark:border-dark-form-success border-form-success';
    }
    return 'focus:border-form-hover dark:focus:border-dark-form-hover dark:focus-within:border-dark-form-hover focus-within:border-form-hover dark:hover:border-dark-form-hover hover:border-form-hover transition-all';
  };

  const finalClassName = disabled
    ? 'cursor-not-allowed hover:cursor-not-allowd'
    : getInputClassName();

  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-2">
        {label && (
          <label
            htmlFor={id}
            className="uppercase text-xs leading-3 font-semibold
             text-form-text tracking-[1px] dark:text-dark-form-text"
          >
            {label}
            {required && (
              <span className="text-form-error dark:text-dark-form-error">
                *
              </span>
            )}
          </label>
        )}
        <div
          className={`rounded-lg border-[1.5px] bg-base-bg dark:bg-dark-base-bg
          dark:border-dark-form-border border-form-border w-full flex items-center justify-start space-x-2
        ${classNames(finalClassName)} ${
            SizeStyles[inputSize as keyof SizeStyles]
          }`}
        >
          {!!leftIcon && leftIcon}
          <input
            disabled={disabled}
            id={id}
            {...props}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            className={`${
              className ?? className
            } placeholder:text-form-border dark:placeholder:text-dark-form-border disabled:cursor-not-allowed disabled:placeholder:text-form-placeholder dark:disabled:placeholder:text-dark-form-placeholder font-normal leading-5 text-sm border-none outline-none w-full text-form-text dark:disabled:text-dark-form-placeholder disabled:text-form-placeholder flex-1 disabled:bg-transparent dark:disabled:bg-dark-base-bg dark:text-dark-form-text dark:bg-dark-base-bg`}
          />
          {disabled ? (
            <SlashIcon className="h-6 w-6 dark:text-dark-form-border text-form-border" />
          ) : (
            <>{!!rightIcon && rightIcon}</>
          )}
        </div>
        {helpText && (
          <span
            className={`${
              disabled
                ? 'text-form-placeholder dark:text-dark-form-placeholder'
                : `${
                    error
                      ? 'text-form-error dark:text-dark-form-error'
                      : 'dark:text-dark-form-text text-form-text'
                  }`
            } text-[11px] leading-3 capitalize`}
          >
            {helpText}
          </span>
        )}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  inputSize: 'default',
};
