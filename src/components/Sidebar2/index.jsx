import React from "react";
import { Text, Img, Heading } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar {...props} width="271px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <Heading as="h1" className="mt-6 !text-gray-800">
        CHATTER
      </Heading>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "10px" } }}
        className="flex flex-col w-full mb-[1380px]"
      >
        <div className="flex self-start items-center gap-[17px] p-[7px] bg-blue_gray-100 rounded-[20px]">
          <Img src="images/defaultNoData.png" alt="vector_one" className="h-[40px] ml-6 my-1" />
          <Text size="md" as="p" className="self-end !text-gray-900">
            Feed
          </Text>
        </div>
        <div className="flex self-end justify-end items-center gap-[17px] p-1.5 bg-blue_gray-100 rounded-[20px]">
          <Img src="images/defaultNoData.png" alt="mditableof_one" className="h-[40px] w-[40px] my-[3px]" />
          <Text size="md" as="p" className="self-end mr-[9px] !text-gray-900">
            My Content
          </Text>
        </div>
        <div className="flex self-end justify-end items-center gap-[17px] p-[7px] bg-blue_gray-100 rounded-[20px]">
          <Img src="images/defaultNoData.png" alt="fluentmdl2add" className="h-[40px] w-[40px] my-0.5" />
          <Text size="md" as="p" className="self-end mr-4 !text-gray-900">
            Bookmarks
          </Text>
        </div>
        <div className="flex self-start items-center gap-[17px] p-1 bg-blue_gray-100 rounded-[20px]">
          <Img src="images/defaultNoData.png" alt="iconamoon_one" className="h-[40px] w-[40px] ml-[27px] my-[5px]" />
          <Text size="md" as="p" className="self-end !text-gray-900">
            Category
          </Text>
        </div>
        <div className="flex self-start items-center gap-[17px] p-[7px] bg-blue_gray-100">
          <Img src="images/defaultNoData.png" alt="iconamoon_three" className="h-[40px] w-[40px] ml-6 my-0.5" />
          <Text size="md" as="p" className="self-end !text-gray-900">
            Profile
          </Text>
        </div>
        <div className="flex self-start items-center gap-[19px] p-1 bg-blue_gray-100">
          <Img src="images/defaultNoData.png" alt="iconcog_one" className="h-[37px] ml-[27px] my-[5px]" />
          <Text size="md" as="p" className="self-end !text-gray-900">
            Settings
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}
