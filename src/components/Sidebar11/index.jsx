import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar11({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar {...props} width="268px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <Text size="lg" as="p" className="mt-[7px] mr-[51px] md:mr-0 !text-deep_purple-500">
        CHATTER
      </Text>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: { color: "#101010", fontWeight: "400 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "41.00px" } }}
        className="flex flex-col items-start w-full mb-[5px] pb-2.5"
      >
        <div className="flex w-[60%] md:w-full px-px">
          <Text as="p" className="!text-black-900_03">
            Overview
          </Text>
        </div>
        <div className="flex self-center justify-center items-center gap-3">
          <Img src="images/defaultNoData.png" alt="iconsaxlinear" className="h-[24px] w-[24px]" />
          <Text size="xs" as="p" className="!text-deep_purple-500">
            Feed
          </Text>
        </div>
        <div className="flex self-end justify-end items-center gap-3">
          <Img src="images/defaultNoData.png" alt="materialsymbol" className="h-[24px] w-[24px]" />
          <Text size="xs" as="p">
            Bookmarks
          </Text>
        </div>
        <div className="flex self-end justify-end items-center gap-3">
          <Img src="images/defaultNoData.png" alt="antdesignteam" className="h-[24px] w-[24px]" />
          <Text size="xs" as="p">
            Team blogs
          </Text>
        </div>
        <div className="flex justify-evenly items-center w-[60%] md:w-full gap-3">
          <Img src="images/defaultNoData.png" alt="materialsymbol" className="h-[24px] w-[24px]" />
          <Text size="xs" as="p">
            Drafts
          </Text>
        </div>
        <div className="flex self-end justify-end items-center gap-3">
          <Img src="images/defaultNoData.png" alt="icoutline_one" className="h-[24px] w-[24px]" />
          <Text size="xs" as="p">
            Analytics
          </Text>
        </div>
        <div className="flex w-[60%] md:w-full">
          <Text as="p" className="!text-black-900_03">
            Trending Tags
          </Text>
        </div>
        <div className="flex justify-end w-[60%] md:w-full">
          <Text as="p">Programming</Text>
        </div>
        <div className="flex justify-end w-[60%] md:w-full">
          <Text as="p">Data science</Text>
        </div>
        <div className="flex justify-end w-[60%] md:w-full px-px">
          <Text as="p">Technology</Text>
        </div>
        <div className="flex justify-end w-[60%] md:w-full">
          <Text as="p">Machine learning</Text>
        </div>
        <div className="flex w-[60%] md:w-full px-[18px]">
          <Text as="p">Politics</Text>
        </div>
        <div className="flex w-[60%] md:w-full px-[17px]">
          <Text as="p" className="!text-black-900_03">
            See all
          </Text>
        </div>
        <div className="flex w-[60%] md:w-full px-px">
          <Text as="p" className="!text-black-900_03">
            Personal
          </Text>
        </div>
        <div className="flex self-end justify-end gap-3">
          <Img src="images/defaultNoData.png" alt="mdiaccount_one" className="h-[24px] w-[24px]" />
          <Text as="p">Account</Text>
        </div>
        <div className="flex self-end justify-end gap-3">
          <Img src="images/defaultNoData.png" alt="basil_one" className="h-[24px] w-[24px]" />
          <Text as="p">Notifications</Text>
        </div>
        <div className="flex w-[60%] md:w-full px-5">
          <Text as="p" className="!text-deep_orange-A400">
            Log out
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}
