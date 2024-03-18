import React from "react";

const sizes = {
  xs: "text-base font-normal leading-[21px]",
  lg: "text-[32px] font-medium leading-[42px] md:text-3xl sm:text-[28px]",
  s: "text-lg font-normal leading-6",
  md: "text-2xl font-medium leading-8 md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
