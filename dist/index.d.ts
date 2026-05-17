import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonHierarchy = 'primary' | 'secondary' | 'secondary-neutral' | 'tertiary';
type ButtonIconPosition = 'none' | 'leading' | 'trailing' | 'only';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    hierarchy?: ButtonHierarchy;
    iconPosition?: ButtonIconPosition;
    icon?: ReactNode;
    children?: ReactNode;
}
declare function Button({ size, hierarchy, iconPosition, icon, children, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

type TextFieldSize = 'sm' | 'md' | 'lg';
interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    hint?: string;
    error?: string;
    size?: TextFieldSize;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}
declare const TextField: react.ForwardRefExoticComponent<TextFieldProps & react.RefAttributes<HTMLInputElement>>;

export { Button, type ButtonHierarchy, type ButtonIconPosition, type ButtonProps, type ButtonSize, TextField, type TextFieldProps, type TextFieldSize };
