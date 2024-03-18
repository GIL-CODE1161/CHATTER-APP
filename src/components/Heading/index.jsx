import React from "react";

const sizes = {
  s: "text-5xl font-bold leading-[63px] md:text-[44px] sm:text-[38px]",
  xs: "text-base font-bold leading-[21px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_03 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
