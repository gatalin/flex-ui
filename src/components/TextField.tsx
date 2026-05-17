import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

export type TextFieldSize = 'sm' | 'md' | 'lg'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  size?: TextFieldSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

const sizeClasses: Record<TextFieldSize, { wrapper: string; text: string; icon: string }> = {
  sm: { wrapper: 'h-[32px] px-[12px] gap-[8px]', text: 'text-sm',  icon: 'size-[16px]' },
  md: { wrapper: 'h-[40px] px-[16px] gap-[8px]', text: 'text-sm',  icon: 'size-[18px]' },
  lg: { wrapper: 'h-[48px] px-[16px] gap-[8px]', text: 'text-base', icon: 'size-[20px]' },
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, hint, error, size = 'md', leadingIcon, trailingIcon, className = '', disabled, id, ...props },
    ref
  ) => {
    const hasError = !!error
    const { wrapper, text, icon } = sizeClasses[size]

    const wrapperClasses = [
      'flex items-center w-full rounded-xs border bg-white transition-colors duration-150',
      wrapper,
      hasError
        ? 'border-error focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-error'
        : 'border-border-soft focus-within:border-brand focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-brand',
      disabled ? 'bg-surface-1 opacity-50 pointer-events-none' : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className="flex flex-col gap-[6px] w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-content-strong">
            {label}
          </label>
        )}

        <div className={wrapperClasses}>
          {leadingIcon && (
            <span className={`flex items-center justify-center shrink-0 text-content-medium ${icon}`}>
              {leadingIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={[
              'flex-1 min-w-0 bg-transparent outline-none',
              'text-content-strong placeholder:text-content-soft',
              text,
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />

          {trailingIcon && (
            <span className={`flex items-center justify-center shrink-0 text-content-medium ${icon}`}>
              {trailingIcon}
            </span>
          )}
        </div>

        {(hint || hasError) && (
          <p className={`text-xs ${hasError ? 'text-error' : 'text-content-medium'}`}>
            {error ?? hint}
          </p>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
