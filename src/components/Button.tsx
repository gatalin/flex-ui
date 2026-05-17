import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonHierarchy = 'primary' | 'secondary' | 'secondary-neutral' | 'tertiary'
export type ButtonIconPosition = 'none' | 'leading' | 'trailing' | 'only'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  hierarchy?: ButtonHierarchy
  iconPosition?: ButtonIconPosition
  icon?: ReactNode
  children?: ReactNode
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-[24px] px-[12px] gap-[8px] text-sm',
  md: 'h-[32px] px-[16px] gap-[8px] text-sm',
  lg: 'h-[40px] px-[16px] gap-[8px] text-base',
}

const sizeOnlyClasses: Record<ButtonSize, string> = {
  sm: 'size-[24px]',
  md: 'size-[32px]',
  lg: 'size-[40px]',
}

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: 'size-[16px]',
  md: 'size-[20px]',
  lg: 'size-[24px]',
}

const hierarchyClasses: Record<ButtonHierarchy, string> = {
  primary: [
    'bg-brand text-content-inv-soft',
    'shadow-[0px_1px_2px_rgba(0,0,0,0.05)]',
    'hover:bg-brand-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#F4EBFF]',
    'disabled:opacity-30 disabled:pointer-events-none',
  ].join(' '),
  secondary: [
    'bg-brand-soft border border-brand-soft text-brand-strong',
    'shadow-[0px_1px_2px_rgba(0,0,0,0.05)]',
    'hover:bg-brand hover:border-brand hover:text-content-inv-soft',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#F4EBFF]',
    'disabled:opacity-30 disabled:pointer-events-none',
  ].join(' '),
  'secondary-neutral': [
    'bg-surface-3 text-brand-strong',
    'shadow-[0px_1px_2px_rgba(0,0,0,0.05)]',
    'hover:bg-surface-4',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#F4EBFF]',
    'disabled:opacity-30 disabled:pointer-events-none',
  ].join(' '),
  tertiary: [
    'text-brand underline underline-offset-2',
    'hover:bg-brand-soft',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:rounded-full',
    'disabled:opacity-30 disabled:pointer-events-none',
  ].join(' '),
}

export function Button({
  size = 'md',
  hierarchy = 'primary',
  iconPosition = 'none',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isOnly = iconPosition === 'only'

  const baseClasses = [
    'inline-flex items-center justify-center shrink-0',
    'rounded-full',
    'font-body font-bold leading-[1.2] whitespace-nowrap',
    'transition-colors duration-150',
    'relative',
    isOnly ? sizeOnlyClasses[size] : sizeClasses[size],
    hierarchyClasses[hierarchy],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={baseClasses} {...props}>
      {iconPosition === 'leading' && icon && (
        <span className={`flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`}>
          {icon}
        </span>
      )}
      {!isOnly && children}
      {iconPosition === 'trailing' && icon && (
        <span className={`flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`}>
          {icon}
        </span>
      )}
      {isOnly && icon && (
        <span className={`flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`}>
          {icon}
        </span>
      )}
    </button>
  )
}
