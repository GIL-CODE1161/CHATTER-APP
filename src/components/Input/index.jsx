import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  outline: {
    black_900_03: "border-black-900_03 border border-solid",
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-blue_gray-400",
  },
  fill: {
    white_A700: "bg-white-A700 shadow-xs text-gray-900_02",
  },
};
const sizes = {
  lg: "h-[86px] pl-2.5 pr-[35px] text-lg",
  xs: "h-[48px] pr-[35px] text-lg",
  md: "h-[70px] pl-[27px] pr-[35px] text-2xl",
  sm: "h-[56px] pl-4 pr-[35px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-lg border border-solid  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "xs", "md", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900_03", "blue_gray_100_02", "white_A700"]),
};

export { Input };
