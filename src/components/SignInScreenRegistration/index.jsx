import React from "react";
import { Img, Heading } from "./..";

export default function SignInScreenRegistration({
  register = "REGISTER",
  login = "LOG IN",
  image = "images/defaultNoData.png",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex self-stretch justify-between pr-px gap-5 py-px">
        <a href="#" className="self-start">
          <Heading size="xs" as="h1" className="!text-black-900_01">
            {register}
          </Heading>
        </a>
        <a href="#" className="self-start">
          <Heading size="xs" as="h2" className="!text-black-900_01">
            {login}
          </Heading>
        </a>
      </div>
      <Img src={image} alt="image" className="self-stretch h-[6px] md:h-auto" />
    </div>
  );
}
