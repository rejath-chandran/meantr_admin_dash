import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { MdPostAdd } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { TbWaveSine } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { GoStack } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { RiUploadCloudLine } from "react-icons/ri";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "bar",
  height: 300,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616160",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },

      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    colors: ["#53E0BC", "#F5BCBA", "#25CCF7"],
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

function Home() {
  return (
    <div className=" w-[100vw] h-[100vh]  border-none">
      <div className="w-full h-full grid grid-cols-12  bg-[#F4F4F4]">
        {/* siderbar */}

        <div className="max-sm:hidden col-span-2 bg-white">
          <div className="mt-8 ml-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_2077)">
                <g filter="url(#filter0_ii_9_2077)">
                  <path
                    d="M20 2.3094C22.4752 0.880339 25.5248 0.880339 28 2.3094L40.7846 9.6906C43.2598 11.1197 44.7846 13.7607 44.7846 16.6188V31.3812C44.7846 34.2393 43.2598 36.8803 40.7846 38.3094L28 45.6906C25.5248 47.1197 22.4752 47.1197 20 45.6906L7.21539 38.3094C4.74018 36.8803 3.21539 34.2393 3.21539 31.3812V16.6188C3.21539 13.7607 4.74018 11.1197 7.21539 9.6906L20 2.3094Z"
                    fill="#272B30"
                  />
                </g>
                <rect x="22" y="18" width="4" height="12" rx="2" fill="white" />
                <rect
                  x="14"
                  y="20"
                  width="4"
                  height="8"
                  rx="2"
                  fill="url(#paint0_linear_9_2077)"
                />
                <rect
                  x="30"
                  y="20"
                  width="4"
                  height="8"
                  rx="2"
                  fill="url(#paint1_linear_9_2077)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ii_9_2077"
                  x="3.21539"
                  y="0.237549"
                  width="41.5692"
                  height="47.5249"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"
                  />
                  <feBlend
                    mode="multiply"
                    in2="shape"
                    result="effect1_innerShadow_9_2077"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.838444 0 0 0 0 0.838444 0 0 0 0 0.838444 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_9_2077"
                    result="effect2_innerShadow_9_2077"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_9_2077"
                  x1="16"
                  y1="20"
                  x2="16"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#D0D0D0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_2077"
                  x1="32"
                  y1="20"
                  x2="32"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#D0D0D0" />
                </linearGradient>
                <clipPath id="clip0_9_2077">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="mt-8 w-full">
            <ul>
              <li className="bg-gray-100  mx-1 rounded-md text-xl font-sans">
                <div className="flex justify-start items-center cursor-pointer px-3">
                  <span className="mx-1">
                    <GoHomeFill />
                  </span>{" "}
                  <span className="mx-4 py-2">Home</span>
                </div>
              </li>

              <li className="  mx-1 rounded-md text-xl text-gray-500 font-sans my-1">
                <div className="flex justify-start items-center cursor-pointer px-3">
                  <span className="mx-1">
                    <GoStack />
                  </span>{" "}
                  <span className="mx-4 py-2">Category</span>
                </div>
              </li>

              <li className="  mx-1 rounded-md text-xl text-gray-500 font-sans my-1">
                <div className="flex justify-start items-center cursor-pointer px-3">
                  <span className="mx-1">
                    <ImNewspaper />
                  </span>{" "}
                  <span className="mx-4 py-2">News</span>
                </div>
              </li>

              <li className="  mx-1 rounded-md text-xl text-gray-500 font-sans my-1">
                <div className="flex justify-start items-center cursor-pointer px-3">
                  <span className="mx-1">
                    <PiCurrencyCircleDollar />
                  </span>{" "}
                  <span className="mx-4 py-2">Ads</span>
                </div>
              </li>

              <li className="  mx-1 rounded-md text-xl text-gray-500 font-sans my-1">
                <div className="flex justify-start items-center cursor-pointer px-3">
                  <span className="mx-1">
                    <RiUploadCloudLine />
                  </span>{" "}
                  <span className="mx-4 py-2">Uploads</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-10 ">
          {/* navbar */}
          <div className="bg-white h-[10vh]  max-sm:w-screen">
            {/* large screen */}
            <div className="max-sm:hidden flex justify-between  h-full">
              <div className="p-1 mx-4 bg-[#F4F4F4] rounded-md self-center">
                <span className="inline-block pr-1">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search or type commmand"
                  className="bg-transparent w-56 max-w-xs focus:outline-none"
                />
                <span className="p-1 bg-white cursor-pointer shadow-lg rounded-md">
                  ⌘F
                </span>
              </div>

              <div className=" flex justify-between cursor-pointer">
                <div className="self-center bg-blue-500 px-6 py-1  rounded-md  text-white mr-3 font-thin hover:bg-blue-400">
                  + Create{" "}
                </div>

                <BiMessageDetail className="self-center h-6 w-6 mx-4 hover:bg-gray-200 rounded-md" />
                <FaBell className="self-center h-6 w-6 mx-4" />
                <img
                  className="self-center h-8 w-8 mx-4 rounded-full"
                  src={"http://placekitten.com/g/300/300"}
                />
              </div>
            </div>
            {/* mobile screen */}
            <div className="sm:hidden  w-full h-full flex justify-around items-center text-2xl  cursor-pointer">
              <TbMenu className=" hover:bg-slate-100 rounded-full" />
              <CiSearch />
              <BiMessageDetail />
              <BiBell />
            </div>
          </div>
          {/* content */}
          <div className="h-[90vh] bg-[#F4F4F4]  max-sm:w-screen overflow-y-auto">
            <h1 className="py-8 pl-8 text-2xl text-black font-bold">
              Dashboard
            </h1>
            <div className="grid  grid-cols-1 gap-2  sm:grid-cols-12">
              <div className="h-full px-4 sm:col-span-8  ">
                {/* overviw */}
                <div className="grid grid-cols-1 w-full my-1">
                  <div className="flex justify-between items-center bg-white  ">
                    <div>
                      <span className="bg-orange-400 w-3 p-1 mx-2 rounded h-full"></span>
                      <span className="font-bold">Overview</span>
                    </div>
                    <div className="h-full mx-5">
                      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-4 p-2">
                        <option selected>All Time</option>
                        <option value="">1</option>
                        <option value="">2</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full bg-white">
                    <div className="grid grid-cols-12 bg-[#F4F4F4] mx-3 rounded-xl">
                      <div className="col-span-6 ml-1">
                        <div className="grid grid-cols-12 gap-2 bg-white shadow-lg w-full my-2 mx-1 py-4 rounded-lg">
                          <div className="col-span-2">
                            <div className="ml-2 flex justify-center items-center bg-blue-200 rounded-full w-8 h-8">
                              <MdPostAdd className="self-center" />
                            </div>
                          </div>
                          <div className="mx-1 col-span-10">
                            <div>
                              <span className="font-thin p-1 text-sm">
                                Posts
                              </span>
                              <CiCircleInfo className="inline-block text-sm" />
                            </div>

                            <strong className="font-bold text-4xl">540</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="grid grid-cols-12 gap-2  w-full my-2 mx-1 py-4 rounded-lg">
                          <div className="col-span-2">
                            <div className="ml-2 flex justify-center items-center bg-blue-200 rounded-full w-8 h-8">
                              <TbWaveSine className="self-center" />
                            </div>
                          </div>
                          <div className="mx-1 col-span-10">
                            <div>
                              <span className="font-thin p-1 text-sm">Ads</span>
                              <CiCircleInfo className="inline-block text-sm" />
                            </div>

                            <strong className="font-bold text-4xl">540</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-6 px-2 bg-white">
                    <h4 className="font-thin">
                      Your Last post was on 12-03-2024
                    </h4>
                    <div className=" mx-6 font-bold text-sm p-2 bg-gray-100 hover:bg-gray-200  rounded-md cursor-pointer">
                      View
                    </div>
                  </div>

                  <div className="grid grid-cols-12 bg-white sm:pb-6 max-sm:pb-12">
                    <div className="col-span-5 grid  grid-cols-12 py-1 ">
                      <div className="col-span-4 h-16">
                        <img
                          className="mx-2 h-full rounded-lg"
                          src="http://placekitten.com/g/300/300"
                          alt=""
                        />
                      </div>
                      <div className="max-sm:mx-4  h-16  col-span-8">
                        <h3 className="font-bold text-sm">
                          sample heading qwerty
                        </h3>
                        <span className="font-thin text-sm">simple head</span>
                      </div>
                    </div>

                    <div className="col-span-5 grid  grid-cols-12 py-1 ">
                      <div className="col-span-4 h-16">
                        <img
                          className="mx-2 h-full rounded-lg"
                          src="http://placekitten.com/g/300/300"
                          alt=""
                        />
                      </div>
                      <div className="max-sm:mx-4 h-16  col-span-8">
                        <h3 className="font-bold text-sm">
                          sample heading qwerty
                        </h3>
                        <span className="font-thin text-sm">simple head</span>
                      </div>
                    </div>

                    <div className="col-span-2 h-16 p-2  w-16">
                      <div className="flex h-full justify-center items-center bg-slate-300 rounded-full">
                        <IoIosArrowRoundForward className="text-3xl" />
                      </div>
                      <label className="font-thin text-sm">View all</label>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className="bg-slate-100 py-1 w-full">
                  <Card className="w-full grid grid-rows-6 transition-all">
                    <CardHeader className="row-span-1 flex justify-between items-center  px-5 mx-1">
                      <div>
                        <span className="bg-purple-200 p-1 mr-2 rounded-md"></span>
                        News Views
                      </div>
                      <div>
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-4 p-2">
                          <option selected>Last 7 days</option>
                          <option value="">1</option>
                          <option value="">2</option>
                        </select>
                      </div>
                    </CardHeader>
                    <CardBody className="row-span-5  px-2  w-full">
                      <Chart {...chartConfig} />
                    </CardBody>
                  </Card>
                </div>

                <div className="grid grid-rows-12 bg-white p-5 rounded-lg mt-5">
                  <div className="row-span-4 text-lg  font-bold">
                    <span className="bg-blue-200  px-2 mx-2 rounded-md"></span>
                    Get more customers!
                  </div>

                  <div className="row-span-4 px-5 pr-12 font-thin max-sm:text-sm">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>

                  <div className="row-span-4 flex justify-between px-8 py-2 w-full cursor-pointer">
                    <div className="mx-3 text-black w-full  bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none border-black  border-2 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
                      <span>
                        <SlSocialFacebook className="inline-block mx-1" />
                        Facebook
                      </span>
                    </div>

                    <div className="mx-3 text-black w-full  bg-white hover:bg-gray-200  focus:ring-4 focus:outline-none border-2 border-black focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
                      <span>
                        <FaInstagram className="inline-block mx-1" />
                        Instagram
                      </span>
                    </div>

                    <div className="text-black w-full  bg-white hover:bg-gray-200 border-2 border-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
                      <span>
                        <SlSocialTwitter className="inline-block mx-1" />
                        Twitter
                      </span>
                    </div>
                  </div>
                </div>

                <div className="max-sm:hidden">share news</div>
              </div>
              <div className="sm:col-span-4 h-[90vh] w-full ml-3">
                <div className="w-full grid grid-rows-12 bg-white">
                  <div className="mt-8 mx-4 flex justify-start items-center">
                    <div>
                      <span className="bg-blue-100 px-1 text-xl rounded-md mx-3"></span>
                      <span className="text-xl font-medium">Popular News</span>
                    </div>
                  </div>

                  <div className="border-2 border-y-indigo-100 mx-6 border-x-0 h-full ">
                    //from here
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
