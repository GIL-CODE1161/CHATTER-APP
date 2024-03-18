import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";

export default function LandingpagePage() {
  return (
    <>
      <Helmet>
        <title>chatter-app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <header className="p-4 border-blue_gray-100_02 border border-solid">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1258px]">
            <Heading as="h1" className="!text-deep_purple-500">
              CHATTER
            </Heading>
            <div className="flex md:flex-col justify-between items-center w-[64%] md:w-full gap-5 md:p-5">
              <ul className="flex justify-center gap-6 py-px">
                <li>
                  <a href="#" className="self-start">
                    <Heading size="xs" as="h6">
                      Home
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading size="xs" as="h6">
                      About us
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading size="xs" as="h6">
                      Contact
                    </Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Heading size="xs" as="h6">
                      Blogs
                    </Heading>
                  </a>
                </li>
              </ul>
              <div className="flex justify-center w-[42%] md:w-full gap-6">
                <Button variant="outline" shape="round" className="w-full sm:px-5">
                  Log in
                </Button>
                <Button shape="round" className="w-full sm:px-5">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
          <div className="h-[765px] relative">
            <Img
              src="images/img_unsplash_2vd8lihdnw.png"
              alt="unsplash_one"
              className="justify-center h-[765px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="w-full h-full left-0 bottom-0 right-0 top-0 px-14 py-[212px] m-auto md:p-5 bg-black-900_8c absolute">
              <div className="w-full mt-2 max-w-[984px]">
                <div className="flex flex-col items-start gap-9">
                  <div className="flex flex-col self-stretch gap-6">
                    <Heading as="h1" className="!text-white-A700 !leading-[72px]">
                      Welcome to Chatter: A Haven for Text-Based Content
                    </Heading>
                    <Text size="md" as="p" className="w-[75%] md:w-full !text-white-A700 !leading-9">
                      Unleash the Power of Words, Connect with Like-minded Readers and Writers
                    </Text>
                  </div>
                  <Button shape="round" className="sm:px-5 min-w-[157px]">
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1270px]">
            <div className="flex justify-center w-[54%] md:w-full">
              <div className="flex flex-col w-full pt-[3px] gap-[39px]">
                <Heading as="h2">About Chatter</Heading>
                <Text as="p" className="!text-black-900_03 !leading-[27px]">
                  Chatter is a multi-functional platform where authors and readers can have access to their own content.
                  It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our
                  vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage
                  open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By
                  promoting dialogue and understanding, we strive{" "}
                </Text>
              </div>
            </div>
            <Img
              src="images/img_unsplash_87glifoj79c.png"
              alt="unsplash_three"
              className="w-[39%] md:w-full md:h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full pt-2 gap-[54px] mx-auto md:p-5 sm:gap-[27px] max-w-[1040px]">
            <div className="flex flex-col items-center gap-6">
              <Heading as="h2">Why you should join chatter</Heading>
              <Text as="p" className="!text-black-900_03 !leading-[27px]">
                Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring
                ease in interactions, connecting with like-minded peers, have access to favorite content based on
                interests and able to communicate your great ideas with people
              </Text>
            </div>
            <div className="flex md:flex-col gap-12">
              <div className="flex flex-col items-start w-full gap-3.5 p-[15px] border-blue_gray-100_02 border border-solid rounded-lg">
                <Img src="images/img_group_1.svg" alt="analytics_one" className="h-[88px] ml-[3px] md:ml-0" />
                <Text size="md" as="p" className="ml-[3px] md:ml-0 !text-black-900_03">
                  Analytics
                </Text>
                <Text as="p" className="w-[93%] md:w-full mb-[11px] ml-[3px] md:ml-0 !leading-[27px]">
                  Analytics to track the number of views, likes and comment and also analyze the performance of your
                  articles over a period of time
                </Text>
              </div>
              <div className="flex flex-col items-start w-full gap-3.5 p-[18px] border-blue_gray-100_02 border border-solid rounded-lg">
                <Img src="images/img_group_2.svg" alt="image" className="h-[88px] mt-[3px]" />
                <Text size="md" as="p" className="!text-black-900_03">
                  Social interactions
                </Text>
                <Text as="p" className="w-[94%] md:w-full mb-[29px] !leading-[27px]">
                  Users on the platform can interact with posts they like, comment and engage in discussions
                </Text>
              </div>
              <div className="flex flex-col items-start w-full gap-3.5 p-3.5 border-blue_gray-100_02 border border-solid rounded-lg">
                <Img src="images/img_group_3.svg" alt="image" className="h-[88px] ml-[5px] md:ml-0" />
                <Text size="md" as="p" className="ml-[5px] md:ml-0 !text-black-900_03">
                  Content creation
                </Text>
                <Text as="p" className="w-[93%] md:w-full mb-[67px] ml-[5px] md:ml-0 !leading-[27px]">
                  Write nice and appealing with our in-built markdown, a rich text editor
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-start gap-5 p-[76px] md:p-5 bg-yellow-100_7f">
            <Img
              src="images/img_unsplash_zhvm3xiohoe.png"
              alt="unsplash_five"
              className="h-[292px] w-[23%] mt-[23px] mb-[25px] ml-2 md:ml-0 rounded-[50%]"
            />
            <div className="flex flex-col items-start w-[72%] md:w-full mt-[17px] gap-6">
              <div className="flex flex-col self-stretch pb-[3px] gap-[61px] sm:gap-[30px]">
                <Text as="p" className="!text-black-900_03 !leading-[27px]">
                  &quot;Chatter has become an integral part of my online experience. As a user of this incredible
                  blogging platform, I have discovered a vibrant community of individuals who are passionate about
                  sharing their ideas and engaging in thoughtful discussions.”
                </Text>
                <Text size="md" as="p" className="!text-black-900_03">
                  <span className="text-black-900_03">Adebobola Muhydeen</span>
                  <span className="text-black-900_03 text-[32px]">, </span>
                  <span className="text-black-900_03 text-lg font-normal">Software developer at Apple </span>
                </Text>
              </div>
              <Button shape="round" className="sm:px-5 min-w-[157px]">
                Join chatter
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1127px]">
            <div className="flex justify-between items-center w-[31%] md:w-full gap-5">
              <div className="flex flex-col w-[44%] gap-24 md:gap-[72px] sm:gap-12">
                <div>
                  <Img
                    src="images/img_unsplash_jzz_3jwmzha.png"
                    alt="unsplashjzz_one"
                    className="h-[158px] w-full md:h-auto object-cover rounded-[50%]"
                  />
                </div>
                <div>
                  <Img
                    src="images/img_unsplash_ieebwgy_6la.png"
                    alt="unsplash_seven"
                    className="h-[158px] w-full md:h-auto object-cover rounded-[50%]"
                  />
                </div>
              </div>
              <div className="w-[44%]">
                <Img
                  src="images/img_unsplash_fhxpgmd_xhe.png"
                  alt="unsplash_nine"
                  className="h-[158px] w-full md:h-auto object-cover rounded-[50%]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start w-[58%] md:w-full gap-8">
              <div className="flex flex-col self-stretch gap-6">
                <Heading as="h2" className="!leading-[72px]">
                  Write, read and connect with great minds on chatter
                </Heading>
                <Text as="p" className="w-[91%] md:w-full !text-black-900_03 !leading-[27px]">
                  Share people your great ideas, and also read write-ups based on your interests. connect with people of
                  same interests and goals{" "}
                </Text>
              </div>
              <Button shape="round" className="sm:px-5 min-w-[157px]">
                Get started
              </Button>
            </div>
          </div>
        </div>
        <Footer className="mt-24 pl-16 pr-14 py-16 md:p-5 bg-yellow-100_7f" />
      </div>
    </>
  );
}
