import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Input } from "./..";

export default function Header1({ ...props }) {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <header {...props}>
      <Input
        color="black_900_03"
        size="lg"
        variant="outline"
        name="search"
        placeholder={`Search Chatter`}
        value={searchBarValue2}
        onChange={(e) => setSearchBarValue2(e)}
        prefix={<Img src="images/defaultNoData.png" alt="search" className="cursor-pointer" />}
        suffix={
          searchBarValue2?.length > 0 ? (
            <CloseSVG onClick={() => setSearchBarValue2("")} height={34} width={34} fillColor="#000000ff" />
          ) : null
        }
        className="gap-2.5 sm:pr-5 text-black-900_03 flex-1 rounded-[43px]"
      />
      <div className="flex flex-col items-end mt-1.5 ml-9 gap-[11px]">
        <Img src="images/defaultNoData.png" alt="streamlineinte" className="h-[50px] w-[50px]" />
        <Text size="md" as="p" className="!text-gray-800">
          Write
        </Text>
      </div>
      <Img src="images/defaultNoData.png" alt="unsplash_one" className="h-[100px] w-[100px] ml-[46px] rounded-[50%]" />
    </header>
  );
}
