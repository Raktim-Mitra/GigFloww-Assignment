import GradientAreaChart from "@/components/chart";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

const actions = [
    {
        startTime: "3:30pm",
        endTime: "4:30pm",
        title: "Internal Meeting",
        description: "Internal Meeting with Jade Sapphire- UI designer",
    },
    {
        startTime: "3:30pm",
        endTime: "4:30pm",
        title: "Internal Meeting",
        description: "Internal Meeting with Jade Sapphire- UI designer",
    },
    {
        startTime: "3:30pm",
        endTime: "4:30pm",
        title: "Internal Meeting",
        description: "Internal Meeting with Jade Sapphire- UI designer",
    },
    {
        startTime: "3:30pm",
        endTime: "4:30pm",
        title: "Internal Meeting",
        description: "Internal Meeting with Jade Sapphire- UI designer",
    },
    {
        startTime: "3:30pm",
        endTime: "4:30pm",
        title: "Internal Meeting",
        description: "Internal Meeting with Jade Sapphire- UI designer",
    },
];
const applicants = [
    {
        photo: "/user1.jpg",
        name: "Elizabeth Filade",
        experience: "3 Years in software Development",
        companyLogo: "/comp1.png",
        companyName: "Tucker Inc",
        year: "12 Dec 2024 - 10 May 2025 ",
    },
    {
        photo: "/user2.jpg",
        name: "Andre Suares",
        experience: "3 Years in software Development",
        companyLogo: "/comp1.png",
        companyName: "Tucker Inc",
        year: "12 Dec 2024 - 10 May 2025 ",
    },
    {
        photo: "/user3.jpg",
        name: "Ashita Ashuth",
        experience: "3 Years in software Development",
        companyLogo: "/comp2.png",
        companyName: "Tucker Inc",
        year: "12 Dec 2024 - 10 May 2025 ",
    },
    {
        photo: "/user3.jpg",
        name: "Ishita Ashuth",
        experience: "3 Years in software Development",
        companyLogo: "/comp2.png",
        companyName: "Tucker Inc",
        year: "12 Dec 2024 - 10 May 2025 ",
    },
];
const Page = () => {
    return (
        <div className="p-4 space-y-6">
            {/* Top section*/}
            <div className="flex p-2 items-center gap-2 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-lg">
                <div className="flex items-center rounded-full bg-[#1163C1] p-2">
                    <img
                        src="/top-logo.png"
                        alt="logo"
                        width={25}
                        height={25}
                        style={{ height: "auto" }}
                    />
                </div>
                <p>
                    Optimize your experience on Gigfloww- track your job post,
                    manage teams and streamline hr operations effortlessly today
                </p>
            </div>
            {/* heading section*/}
            <div className="flex items-center justify-between">
                <p className="text-[28px] font-semibold">
                    Welcome Back, Nuraj group
                </p>
                <div className="flex items-center gap-2 p-3 rounded-md shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
                    <FaCalendarAlt />
                    <p>Wed 23, May 2025</p>
                </div>
            </div>
            {/* main section*/}
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[90vh]">
                <CartCard
                    name="Employees"
                    number="24"
                    logoImg="/employee-logo.png"
                    logoBgColor="#EED3EF"
                />

                <CartCard
                    name="Hiring"
                    number="5"
                    logoImg="/hiring-logo.png"
                    logoBgColor="#D3E3EF"
                />
                <CartCard
                    name="Projects"
                    number="1"
                    logoImg="/project-logo.png"
                    logoBgColor="#E3EFD3"
                />

                <div className="bg-white shadow row-span-3 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-lg">Upcoming Actions</p>
                        <div className="flex items-center border border-black rounded-full p-2">
                            <img
                                src="/dash-cal.png"
                                alt="upcoming-action"
                                height={"25"}
                                width={"25"}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        {actions.map((action, index) => (
                            <div key={index} className="my-2">
                                <div className="flex items-start gap-4">
                                    <div className="text-right min-w-[70px]">
                                        <p className="font-semibold">
                                            {action.startTime}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {action.endTime}
                                        </p>
                                    </div>

                                    <div className="w-[2px] bg-gray-200 h-[50px] mt-1 rounded" />

                                    <div>
                                        <p className="font-sm">
                                            {action.title}
                                        </p>
                                        <p className="text-medium">
                                            {action.description}
                                        </p>
                                    </div>
                                </div>

                                {index !== actions.length - 1 && (
                                    <div className="h-[2px] bg-gray-200 mt-2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-100 col-span-3 row-span-2 rounded-md p-4">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xl text-[#242831] font-medium">
                            Performance Report
                        </p>
                        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm ">
                            <p>Weekly</p>
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <GradientAreaChart />
                </div>
            </div>
            {/* bottom section*/}
            <div className="flex flex-col  shadow rounded-lg">
                {/* Top section*/}
                <div className="flex items-center justify-between">
                    <div className="p-4">
                        <p className="font-semibold text-2xl">
                            Incoming Application
                        </p>
                        <p>Manage application for your job posting </p>
                    </div>
                    <div className="flex items-center gap-4 justify-between p-4">
                        <div className="flex items-center gap-2 p-2 shadow rounded-lg">
                            <img
                                src="/advancedOptions.png"
                                alt="filter"
                                h="20"
                                w="20"
                            />
                            <p>Filter</p>
                        </div>
                        <div className="flex items-center gap-2 p-2 px-6 shadow rounded-lg bg-[linear-gradient(to_right,_#2784B8,_#113B52)]">
                            See all
                        </div>
                    </div>
                </div>
                {/* cardsection*/}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
                    {applicants.map((app, index) => (
                        <ApplicationCard key={index} {...app} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CartCard = ({ name, number, logoImg, logoBgColor }) => {
    return (
        <div className="bg-white rounded-md shadow p-4 w-full max-w-xs">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-2xl">{name}</p>
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center`}
                    style={{ backgroundColor: logoBgColor }}
                >
                    <img
                        src={logoImg}
                        alt="logo"
                        className="w-6 h-6 object-contain"
                    />
                </div>
            </div>

            <p className="text-2xl font-semibold mt-4">{number}</p>

            <hr className="my-4 text-gray-300 " />

            <div className="flex items-center justify-between text-[#21729F] font-medium cursor-pointer">
                <span>View Details</span>
                <HiOutlineArrowNarrowRight size={20} />
            </div>
        </div>
    );
};
const ApplicationCard = ({
    photo,
    name,
    experience,
    companyLogo,
    companyName,
    year,
}) => {
    return (
        <div className="p-4 shadow rounded-lg bg-white w-full">
            {/* Top section */}
            <div className="flex items-center gap-4">
                <img
                    src={photo}
                    alt="applicant"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <p className="text-sm text-gray-500">{experience}</p>
                </div>
            </div>

            
            <p className="mt-4 text-sm text-gray-700 font-medium">
                Latest Experience
            </p>
            <div className="flex items-center gap-3 mt-2">
                <img
                    src={companyLogo}
                    alt="company"
                    className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                    <p className="font-semibold">{companyName}</p>
                    <p className="text-sm text-gray-500">{year}</p>
                </div>
            </div>

            <hr className="my-4 border-t" />

           
            <div className="flex items-center justify-between text-blue-600 cursor-pointer">
                <p className="font-medium">View Resume</p>
                <FiArrowRight />
            </div>
        </div>
    );
};
export default Page;
