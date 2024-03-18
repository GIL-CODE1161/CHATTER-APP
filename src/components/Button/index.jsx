import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  outline: {
    deep_purple_500: "border-deep_purple-500 border border-solid text-black-900_01",
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-black-900_01",
  },
  fill: {
    deep_purple_500_7f: "bg-deep_purple-500_7f text-white-A700",
    deep_purple_100: "bg-deep_purple-100 text-gray-800",
    blue_gray_100_02: "bg-blue_gray-100_02 text-black-900_03",
    white_A700: "bg-white-A700 text-gray-800",
    deep_purple_A700: "bg-deep_purple-A700 text-white-A700",
    gray_400: "bg-gray-400 text-black-900_03",
    deep_purple_500: "bg-deep_purple-500 text-white-A700",
  },
};
const sizes = {
  sm: "h-[48px] px-3",
  "3xl": "h-[61px] px-[35px] text-[32px]",
  "5xl": "h-[76px] px-[35px] text-[32px]",
  md: "h-[51px] px-[35px] text-lg",
  xs: "h-[30px] px-0.5",
  "2xl": "h-[60px] px-2.5",
  lg: "h-[56px] px-[35px] text-2xl",
  "4xl": "h-[70px] px-[35px] text-2xl",
  xl: "h-[56px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "deep_purple_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-lg font-bold rounded-lg ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["sm", "3xl", "5xl", "md", "xs", "2xl", "lg", "4xl", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "deep_purple_500",
    "blue_gray_100_02",
    "deep_purple_500_7f",
    "deep_purple_100",
    "white_A700",
    "deep_purple_A700",
    "gray_400",
  ]),
};

export { Button };
