import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex sm:flex-col justify-between w-[71%] md:w-full mr-[120px] gap-5">
        <Input
          color="blue_gray_100_02"
          size="xs"
          variant="outline"
          shape="round"
          name="search"
          placeholder={`search chatter`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          prefix={<Img src="images/defaultNoData.png" alt="search" className="cursor-pointer" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={36} width={44} fillColor="#000000ff" />
            ) : null
          }
          className="w-[63%] sm:w-full gap-6 sm:pr-5 !text-gray-700"
        />
        <Img src="images/defaultNoData.png" alt="image" className="w-[11%] sm:w-full sm:h-auto object-cover" />
      </div>
    </header>
  );
}
