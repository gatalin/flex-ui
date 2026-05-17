// src/components/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var sizeClasses = {
  sm: "h-[24px] px-[12px] gap-[8px] text-sm",
  md: "h-[32px] px-[16px] gap-[8px] text-sm",
  lg: "h-[40px] px-[16px] gap-[8px] text-base"
};
var sizeOnlyClasses = {
  sm: "size-[24px]",
  md: "size-[32px]",
  lg: "size-[40px]"
};
var iconSizeClasses = {
  sm: "size-[16px]",
  md: "size-[20px]",
  lg: "size-[24px]"
};
var hierarchyClasses = {
  primary: [
    "bg-brand text-content-inv-soft",
    "shadow-[0px_1px_2px_rgba(0,0,0,0.05)]",
    "hover:bg-brand-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#F4EBFF]",
    "disabled:opacity-30 disabled:pointer-events-none"
  ].join(" "),
  secondary: [
    "bg-brand-soft border border-brand-soft text-brand-strong",
    "shadow-[0px_1px_2px_rgba(0,0,0,0.05)]",
    "hover:bg-brand hover:border-brand hover:text-content-inv-soft",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#F4EBFF]",
    "disabled:opacity-30 disabled:pointer-events-none"
  ].join(" "),
  "secondary-neutral": [
    "bg-surface-3 text-brand-strong",
    "shadow-[0px_1px_2px_rgba(0,0,0,0.05)]",
    "hover:bg-surface-4",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#F4EBFF]",
    "disabled:opacity-30 disabled:pointer-events-none"
  ].join(" "),
  tertiary: [
    "text-brand underline underline-offset-2",
    "hover:bg-brand-soft",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:rounded-full",
    "disabled:opacity-30 disabled:pointer-events-none"
  ].join(" ")
};
function Button({
  size = "md",
  hierarchy = "primary",
  iconPosition = "none",
  icon,
  children,
  className = "",
  ...props
}) {
  const isOnly = iconPosition === "only";
  const baseClasses = [
    "inline-flex items-center justify-center shrink-0",
    "rounded-full",
    "font-body font-bold leading-[1.2] whitespace-nowrap",
    "transition-colors duration-150",
    "relative",
    isOnly ? sizeOnlyClasses[size] : sizeClasses[size],
    hierarchyClasses[hierarchy],
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("button", { className: baseClasses, ...props, children: [
    iconPosition === "leading" && icon && /* @__PURE__ */ jsx("span", { className: `flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`, children: icon }),
    !isOnly && children,
    iconPosition === "trailing" && icon && /* @__PURE__ */ jsx("span", { className: `flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`, children: icon }),
    isOnly && icon && /* @__PURE__ */ jsx("span", { className: `flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`, children: icon })
  ] });
}

// src/components/TextField.tsx
import { forwardRef } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: { wrapper: "h-[32px] px-[12px] gap-[8px]", text: "text-sm", icon: "size-[16px]" },
  md: { wrapper: "h-[40px] px-[16px] gap-[8px]", text: "text-sm", icon: "size-[18px]" },
  lg: { wrapper: "h-[48px] px-[16px] gap-[8px]", text: "text-base", icon: "size-[20px]" }
};
var TextField = forwardRef(
  ({ label, hint, error, size = "md", leadingIcon, trailingIcon, className = "", disabled, id, ...props }, ref) => {
    const hasError = !!error;
    const { wrapper, text, icon } = sizeClasses2[size];
    const wrapperClasses = [
      "flex items-center w-full rounded-xs border bg-white transition-colors duration-150",
      wrapper,
      hasError ? "border-error focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-error" : "border-border-soft focus-within:border-brand focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-brand",
      disabled ? "bg-surface-1 opacity-50 pointer-events-none" : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-[6px] w-full", children: [
      label && /* @__PURE__ */ jsx2("label", { htmlFor: id, className: "text-sm font-medium text-content-strong", children: label }),
      /* @__PURE__ */ jsxs2("div", { className: wrapperClasses, children: [
        leadingIcon && /* @__PURE__ */ jsx2("span", { className: `flex items-center justify-center shrink-0 text-content-medium ${icon}`, children: leadingIcon }),
        /* @__PURE__ */ jsx2(
          "input",
          {
            ref,
            id,
            disabled,
            className: [
              "flex-1 min-w-0 bg-transparent outline-none",
              "text-content-strong placeholder:text-content-soft",
              text,
              className
            ].filter(Boolean).join(" "),
            ...props
          }
        ),
        trailingIcon && /* @__PURE__ */ jsx2("span", { className: `flex items-center justify-center shrink-0 text-content-medium ${icon}`, children: trailingIcon })
      ] }),
      (hint || hasError) && /* @__PURE__ */ jsx2("p", { className: `text-xs ${hasError ? "text-error" : "text-content-medium"}`, children: error ?? hint })
    ] });
  }
);
TextField.displayName = "TextField";
export {
  Button,
  TextField
};
//# sourceMappingURL=index.js.map