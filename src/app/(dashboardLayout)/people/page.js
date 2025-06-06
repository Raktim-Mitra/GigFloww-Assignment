"use client";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const people = [
    {
        name: "Alicia Shankur",
        email: "Alicia Shankur@gmail.COM",
        jobTitle: "Software Engineer",
        department: "Engineering",
        salary: "$2,500",
        startDate: "Mar 16, 2023",
        lifeCycle: "Hired",
        status: "Active",
    },
    {
        name: "James Oyinkan",
        email: "abc@gmail.com",
        jobTitle: "Visual Designer",
        department: "Design",
        salary: "$2,000",
        startDate: "Jan 16, 2023",
        lifeCycle: "Hired",
        status: "Active",
    },
    {
        name: "Diti Shreyas",
        email: "abc@gmail.com",
        jobTitle: "Visual Designer",
        department: "Design",
        salary: "$2,000",
        startDate: "Dec 09, 2024",
        lifeCycle: "Employed",
        status: "Inactive",
    },
    {
        name: "Kito Ashuth",
        email: "abc@gmail.com",
        jobTitle: "UI/UX Designer",
        department: "Design",
        salary: "$1,000",
        startDate: "Dec 09, 2024",
        lifeCycle: "Employed",
        status: "Active",
    },
];

const Page = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="p-4 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">List of People</h1>
                <button className="bg-[linear-gradient(to_right,_#2784B8,_#113B52)] text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Add New Member
                </button>
            </div>

           
            <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-4 items-center">
                     
                        <div className="relative w-64 shadow-md rounded-md">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <FiSearch />
                            </span>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 w-full rounded-md outline-none border-none"
                            />
                        </div>

                        
                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-md shadow-md cursor-pointer w-40 bg-white">
                            <span>Type</span>
                            <FiChevronDown className="text-gray-500" />
                        </div>

                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-md shadow-md cursor-pointer w-40 bg-white">
                            <span>People</span>
                            <FiChevronDown className="text-gray-500" />
                        </div>

                        <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-md shadow-md cursor-pointer w-fit bg-white">
                            <img
                                src="/advancedOptions.png"
                                alt="Advanced Options"
                                className="w-6 h-6 object-contain"
                            />
                            <span>Advanced Options</span>
                            <FiChevronDown className="text-gray-500" />
                        </div>
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                    Export
                    <FaDownload />
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto shadow-md rounded-md">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[#F4F4F4] text-gray-600 uppercase tracking-wide text-xs">
                        <tr>
                            <th className="py-3 px-4"></th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Job Title</th>
                            <th className="py-3 px-4">Department</th>
                            <th className="py-3 px-4">Salary</th>
                            <th className="py-3 px-4">Start Date</th>
                            <th className="py-3 px-4">Life Cycle</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((person, index) => (
                            <tr
                                key={index}
                                className="border-b-2 border-gray-200 hover:bg-gray-50"
                            >
                                <td className="py-4 px-4">
                                    <input
                                        type="checkbox"
                                        className="rounded-sm"
                                    />
                                </td>
                                <td className="py-4 px-4">
                                    <div className="font-semibold text-base">
                                        {person.name}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {person.email}
                                    </div>
                                </td>
                                <td className="py-4 px-4">{person.jobTitle}</td>
                                <td className="py-4 px-4">
                                    {person.department}
                                </td>
                                <td className="py-4 px-4">{person.salary}</td>
                                <td className="py-4 px-4">
                                    {person.startDate}
                                </td>
                                <td className="py-4 px-4">
                                    {person.lifeCycle}
                                </td>
                                <td className="py-4 px-4">
                                    <span
                                        className={`px-2 py-1 text-sm rounded-md font-medium ${
                                            person.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {person.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center space-x-2 mt-4 justify-end">
                {[1, 2, 3, 4].map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded-md text-sm font-medium text-gray-700 ${page === 1 ? 'bg-[linear-gradient(to_right,_#2784B8,_#113B52)] text-white' : ''} hover:bg-blue-100 hover:text-blue-600 transition`}
                    >
                        {page}
                    </button>
                ))}

                <button className="p-2 rounded-md hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition
                  bg-[linear-gradient(to_right,_#2784B8,_#113B52)]
                ">
                    <FiChevronRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default Page;
