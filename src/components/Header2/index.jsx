import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input, Heading } from "./..";

export default function Header2({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props}>
      <div className="self-start w-full mb-0.5 mx-auto md:p-5 max-w-[1285px]">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="flex md:flex-col justify-between items-center w-[70%] md:w-full gap-5">
            <Heading as="h1" className="!text-deep_purple-A700">
              BLOGGERS
            </Heading>
            <Input
              color="blue_gray_100_02"
              size="xs"
              variant="outline"
              shape="round"
              name="search"
              placeholder={`search bloggers`}
              value={searchBarValue1}
              onChange={(e) => setSearchBarValue1(e)}
              prefix={<Img src="images/defaultNoData.png" alt="search" className="cursor-pointer" />}
              suffix={
                searchBarValue1?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={45} fillColor="#000000ff" />
                ) : null
              }
              className="w-[57%] md:w-full gap-3 sm:pr-5 !text-gray-700"
            />
          </div>
          <Img src="images/defaultNoData.png" alt="image" className="w-[7%] md:w-full md:h-auto object-cover" />
        </div>
      </div>
    </header>
  );
}
