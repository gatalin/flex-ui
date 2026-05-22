import { TextareaHTMLAttributes, forwardRef } from 'react'

export type TextareaSize = 'sm' | 'md' | 'lg'
export type TextareaResize = 'none' | 'vertical' | 'both'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  size?: TextareaSize
  resize?: TextareaResize
  rows?: number
}

const sizeClasses: Record<TextareaSize, { wrapper: string; text: string }> = {
  sm: { wrapper: 'px-[12px] py-[8px]',  text: 'text-sm'   },
  md: { wrapper: 'px-[16px] py-[10px]', text: 'text-sm'   },
  lg: { wrapper: 'px-[16px] py-[12px]', text: 'text-base' },
}

const resizeClasses: Record<TextareaResize, string> = {
  none:     'resize-none',
  vertical: 'resize-y',
  both:     'resize',
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      resize = 'vertical',
      rows = 4,
      className = '',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const hasError = !!error
    const { wrapper, text } = sizeClasses[size]

    const wrapperClasses = [
      'flex w-full rounded-xs border bg-white transition-colors duration-150',
      wrapper,
      hasError
        ? 'border-error focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-error'
        : 'border-border-soft focus-within:border-brand focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-brand',
      disabled ? 'opacity-50 pointer-events-none' : '',
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
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            rows={rows}
            className={[
              'flex-1 min-w-0 bg-transparent outline-none',
              'text-content-strong placeholder:text-content-soft',
              'leading-relaxed',
              resizeClasses[resize],
              text,
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />
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

Textarea.displayName = 'Textarea'
