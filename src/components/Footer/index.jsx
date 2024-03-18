import React from "react";
import { Text, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex md:flex-col justify-center items-center w-full mb-[102px] mx-auto md:p-5 max-w-[1241px]">
        <Heading as="h1" className="mt-[11px] !text-deep_purple-500">
          CHATTER
        </Heading>
        <div className="flex flex-col items-start ml-[218px] md:ml-0">
          <Text size="md" as="p" className="!text-black-900_01">
            Explore
          </Text>
          <a href="#" className="mt-[31px]">
            <Text as="p" className="!text-black-900_01">
              community
            </Text>
          </a>
          <a href="#" className="mt-[19px]">
            <Text as="p" className="!text-black-900_01">
              Trending blogs
            </Text>
          </a>
          <a href="#" className="mt-[17px]">
            <Text as="p" className="!text-black-900_01">
              Chatter for teams
            </Text>
          </a>
        </div>
        <div className="flex flex-col items-start ml-[183px] md:ml-0">
          <Text size="md" as="p" className="!text-black-900_01">
            Support
          </Text>
          <a href="#" className="mt-[31px]">
            <Text as="p" className="!text-black-900_01">
              Support docs
            </Text>
          </a>
          <a href="#" className="mt-[17px]">
            <Text as="p" className="!text-black-900_01">
              Join slack
            </Text>
          </a>
          <a href="#" className="mt-[19px]">
            <Text as="p" className="!text-black-900_01">
              Contact
            </Text>
          </a>
        </div>
        <div className="flex ml-[227px] md:ml-0 flex-1">
          <div className="flex flex-col items-start">
            <Text size="md" as="p" className="!text-black-900_01">
              Official blog
            </Text>
            <a href="#" className="mt-[31px]">
              <Text as="p" className="!text-black-900_01">
                Official blog
              </Text>
            </a>
            <a href="#" className="mt-[19px]">
              <Text as="p" className="!text-black-900_01">
                Engineering blog
              </Text>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
