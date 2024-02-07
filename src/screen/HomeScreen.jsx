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
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

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

function HomeScreen() {
  return (
      <div className="h-[90vh] bg-[#F4F4F4]  max-sm:w-screen overflow-y-auto">
        <h1 className="py-8 pl-8 text-2xl text-black font-bold">Dashboard</h1>
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
                          <span className="font-thin p-1 text-sm">Posts</span>
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
                <h4 className="font-thin">Your Last post was on 12-03-2024</h4>
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
                    <h3 className="font-bold text-sm">sample heading qwerty</h3>
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
                    <h3 className="font-bold text-sm">sample heading qwerty</h3>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
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

          <div className="sm:col-span-4 h-[90vh] w-full">
            <div className="w-full grid grid-rows-12 bg-white">
              <div className="mt-8 mx-4 flex justify-start items-center">
                <div>
                  <span className="bg-blue-100 px-1 text-xl rounded-md mx-3"></span>
                  <span className="text-xl font-medium">Popular News</span>
                </div>
              </div>

              <div className=" border-2 border-t-indigo-100 mx-6 border-b-0 border-x-0 h-full ">
                no news found
              </div>

              <button class="w-full row-span-1  bg-blue-white hover:bg-gray-300 text-black border-2 font-bold py-1 px-1  rounded-full">
                All News
              </button>

            </div>

          </div>
        </div>
      </div>
  );
}

export default HomeScreen;
