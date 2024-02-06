import { CiSearch } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { GoStack } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { RiUploadCloudLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

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

function MainLayout() {
  return (
    <div>
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
                  <rect
                    x="22"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="white"
                  />
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
                <li className="mx-1 rounded-md text-xl font-sans">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-100" : "text-gray-600 "} flex justify-start items-center cursor-pointer px-3 `
                    }
                    to={"/"}
                  >
                    <span className="mx-1">
                      <GoHomeFill />
                    </span>{" "}
                    <span className="mx-4 py-2">Home</span>
                  </NavLink>
                </li>

                <li className="mx-1 rounded-md text-xl font-sans">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-100" : "text-gray-600 "} flex justify-start items-center cursor-pointer px-3 `
                    }
                    to={"/category"}
                  >
                    <span className="mx-1">
                      <GoStack />
                    </span>
                    <span className="mx-4 py-2">Category</span>
                  </NavLink>
                </li>

                <li className="mx-1 rounded-md text-xl font-sans">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-100" : "text-gray-600 "} flex justify-start items-center cursor-pointer px-3 `
                    }
                    to={"/news"}
                  >
                    <span className="mx-1">
                      <ImNewspaper />
                    </span>{" "}
                    <span className="mx-4 py-2">News</span>
                  </NavLink>
                </li>

                <li className="mx-1 rounded-md text-xl font-sans">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-100" : "text-gray-600 "} flex justify-start items-center cursor-pointer px-3 `
                    }
                    to={"/ads"}
                  >
                    <span className="mx-1">
                      <PiCurrencyCircleDollar />
                    </span>{" "}
                    <span className="mx-4 py-2">Ads</span>
                  </NavLink>
                </li>

                <li className="mx-1 rounded-md text-xl font-sans">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-100" : "text-gray-600 "} flex justify-start items-center cursor-pointer px-3 `
                    }
                    to={"/uploads"}
                  >
                    <span className="mx-1">
                      <RiUploadCloudLine />
                    </span>{" "}
                    <span className="mx-4 py-2">Uploads</span>
                  </NavLink>
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
                    
                <NavLink to={'/create'} className="self-center bg-blue-500 px-6 py-1  rounded-md  text-white mr-3 font-thin hover:bg-blue-400">
                
                    + Create{" "}
                 
                </NavLink>

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
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
