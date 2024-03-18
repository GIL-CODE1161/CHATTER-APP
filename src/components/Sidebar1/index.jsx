import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
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
            [`&:hover, &.ps-active`]: { color: "#ff1300", fontWeight: "400 !important" },
          },
        }}
        className="flex flex-col items-start w-full mb-[5px] pb-[19px] px-[19px]"
      >
        <div className="w-[41%] md:w-full mb-[287px]">
          <div className="flex flex-col gap-[0.40px]">
            <div className="flex justify-center">
              <Text as="p" className="!text-black-900_01">
                Overview
              </Text>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Img src="images/defaultNoData.png" alt="iconsaxlinear" className="h-[24px] w-[24px]" />
              <Text size="xs" as="p" className="!text-deep_purple-500">
                Feed
              </Text>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Img src="images/defaultNoData.png" alt="materialsymbol" className="h-[24px] w-[24px]" />
              <Text size="xs" as="p">
                Bookmarks
              </Text>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Img src="images/defaultNoData.png" alt="antdesignteam" className="h-[24px] w-[24px]" />
              <Text size="xs" as="p">
                Team blogs
              </Text>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Img src="images/defaultNoData.png" alt="materialsymbol" className="h-[24px] w-[24px]" />
              <Text size="xs" as="p">
                Drafts
              </Text>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Img src="images/defaultNoData.png" alt="icoutline_one" className="h-[24px] w-[24px]" />
              <Text size="xs" as="p">
                Analytics
              </Text>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end justify-center pt-[259px] md:pt-5">
              <Img src="images/defaultNoData.png" alt="evatrendingup" className="h-[24px] w-[24px]" />
              <div className="flex flex-col self-stretch gap-[0.40px]">
                <div className="flex justify-center">
                  <Text as="p" className="!text-black-900_01">
                    Trending Tags
                  </Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p">Programming</Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p">Data science</Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p">Technology</Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p">Machine learning</Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p">Politics</Text>
                </div>
                <div className="flex">
                  <Text as="p" className="!text-black-900_01">
                    See all
                  </Text>
                </div>
                <div className="flex">
                  <Text as="p" className="!text-black-900_01">
                    Personal
                  </Text>
                </div>
                <div className="flex justify-center gap-3">
                  <Img src="images/defaultNoData.png" alt="mdiaccount_one" className="h-[24px] w-[24px]" />
                  <Text as="p">Account</Text>
                </div>
                <div className="flex justify-center gap-3">
                  <Img src="images/defaultNoData.png" alt="basil_one" className="h-[24px] w-[24px]" />
                  <Text as="p">Notifications</Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p" className="!text-black-900_01">
                    Log out
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
