"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  TextField: () => TextField
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: baseClasses, ...props, children: [
    iconPosition === "leading" && icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`, children: icon }),
    !isOnly && children,
    iconPosition === "trailing" && icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`, children: icon }),
    isOnly && icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `flex items-center justify-center shrink-0 ${iconSizeClasses[size]}`, children: icon })
  ] });
}

// src/components/TextField.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var sizeClasses2 = {
  sm: { wrapper: "h-[32px] px-[12px] gap-[8px]", text: "text-sm", icon: "size-[16px]" },
  md: { wrapper: "h-[40px] px-[16px] gap-[8px]", text: "text-sm", icon: "size-[18px]" },
  lg: { wrapper: "h-[48px] px-[16px] gap-[8px]", text: "text-base", icon: "size-[20px]" }
};
var TextField = (0, import_react.forwardRef)(
  ({ label, hint, error, size = "md", leadingIcon, trailingIcon, className = "", disabled, id, ...props }, ref) => {
    const hasError = !!error;
    const { wrapper, text, icon } = sizeClasses2[size];
    const wrapperClasses = [
      "flex items-center w-full rounded-xs border bg-white transition-colors duration-150",
      wrapper,
      hasError ? "border-error focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-error" : "border-border-soft focus-within:border-brand focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-surface-1 focus-within:ring-brand",
      disabled ? "bg-surface-1 opacity-50 pointer-events-none" : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col gap-[6px] w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: id, className: "text-sm font-medium text-content-strong", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: wrapperClasses, children: [
        leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `flex items-center justify-center shrink-0 text-content-medium ${icon}`, children: leadingIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        trailingIcon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `flex items-center justify-center shrink-0 text-content-medium ${icon}`, children: trailingIcon })
      ] }),
      (hint || hasError) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: `text-xs ${hasError ? "text-error" : "text-content-medium"}`, children: error ?? hint })
    ] });
  }
);
TextField.displayName = "TextField";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  TextField
});
//# sourceMappingURL=index.cjs.map