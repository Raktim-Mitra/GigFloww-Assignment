"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
const people = [
    {
        name: "Alicia Shankur",
        email: "Alicia Shankur@GMAIL.COM",
        jobTitle: "Software Engineer",
        department: "Engineering",
        salary: "$2,500",
        status: "Paid",
    },
    {
        name: "James Oyinkan",
        email: "jamesoyinkan@gmail.com",
        jobTitle: "Visual Designer",
        department: "Design",
        salary: "$2,100",
        status: "Paid",
    },
    {
        name: "Aresen Vlamadir",
        email: "darioberik@gmail.com",
        jobTitle: "Sales Manager",
        department: "Product",
        salary: "$4,700",
        status: "Pending",
    },
    {
        name: "Kito Ashuth",
        email: "asthutor@gmail.com",
        jobTitle: "Content Writer",
        department: "Content",
        salary: "$2,000",
        status: "Paid",
    }
];
const Page = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="p-4 space-y-6">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">
                        Salary Activities
                    </h1>
                    <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm w-fit">
                        <span>May 2025</span>
                        <HiChevronDown className="text-gray-500" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="relative w-64">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <FiSearch />
                            </span>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 border rounded-md w-full outline-none border-none shadow"
                            />
                        </div>
                        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm w-fit">
                            <Image
                                src={"/advancedOptions.png"}
                                alt="calendar"
                                width={20}
                                height={0}
                                style={{ height: "auto" }}
                            />
                            <span>May 2025</span>
                        </div>
                    </div>
                    <div className="flex justify-between gap-10 items-center border-[1px] border-[#13361C26] px-4 py-2 rounded-md">
                        <p className="text-[18px]">Monthly Salary-</p>
                        <p className="text-[18px]">$3500</p>
                    </div>
                </div>
                <div className="flex gap-4">
                
                    <div className="overflow-x-auto shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-md w-4/5">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#F4F4F4] text-gray-600 uppercase tracking-wide text-xs">
                                <tr>
                                    <th className="py-3 px-4"></th>
                                    <th className="py-3 px-4">Name</th>
                                    <th className="py-3 px-4">Job Title</th>
                                    <th className="py-3 px-4">Department</th>
                                    <th className="py-3 px-4">Salary</th>
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
                                        <td className="py-4 px-4">
                                            {person.jobTitle}
                                        </td>
                                        <td className="py-4 px-4">
                                            {person.department}
                                        </td>
                                        <td className="py-4 px-4">
                                            {person.salary}
                                        </td>

                                        <td className="py-4 px-4">
                                            <span
                                                className={`px-2 py-1 text-sm rounded-md font-medium ${
                                                    person.status === "Paid"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-100 text-gray-400"
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
                  
                    <div className="w-1/5">
                        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                          
                            <div className="bg-[linear-gradient(to_right,#2F99FA,#082DB0)] h-20 w-full relative">
                               
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-10">
                                    <img
                                        src="/profile.jpg"
                                        alt="Profile"
                                        className="w-20 h-20 rounded-full border-4 border-white object-cover"
                                    />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="pt-14 pb-4 px-4 text-center">
                                <p className="text-lg font-semibold">
                                    Elizabeth James
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    UI Designer
                                </p>

                                <div className="text-sm space-y-2">
                                    {[
                                        { label: "Position", value: "UI Lead" },
                                        {
                                            label: "Department",
                                            value: "Design",
                                        },
                                        { label: "Status", value: "Active" },
                                        {
                                            label: "Basic Salary",
                                            value: "$3500",
                                        },
                                        {
                                            label: "Bonus & Overtime",
                                            value: "$500",
                                        },
                                        { label: "Deduction", value: "$0.00" },
                                        {
                                            label: "Next Salary",
                                            value: "$3500",
                                        },
                                        { label: "Currency", value: "$USD" },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between"
                                        >
                                            <span className="text-gray-600">
                                                {item.label}:
                                            </span>
                                            <span className="font-semibold text-right">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}

                                   
                                    <div className="flex justify-between items-start">
                                        <span className="text-gray-600">
                                            Bank Details:
                                        </span>
                                        <div className="text-right font-semibold">
                                            <p>234567890</p>
                                            <p>Polaris Bank</p>
                                        </div>
                                    </div>
                                </div>

                                
                                <hr className="my-4" />

                                {/* Bottom Action */}
                                <div className="flex items-center justify-between text-[#21729F] font-medium cursor-pointer hover:underline">
                                    <p>View Payroll History</p>
                                    <FiChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
