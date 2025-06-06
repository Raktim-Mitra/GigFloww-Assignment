"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FiSettings, FiBell } from "react-icons/fi";

const NAV_ITEMS = [
    {
        label: "Dashboard",
        path: "/dashboard",
        color: "bg-[linear-gradient(to_right,_#9CBCF8,_#FFFFFF)]",
    },
    {
        label: "People",
        path: "/people",
        color: "bg-[linear-gradient(to_right,_#2376A4,_#9CBCF8)]",
    },
    {
        label: "Hiring",
        path: "/hiring",
        color: "bg-[linear-gradient(to_right,_#2784B8,_#113B52)]",
    },
    {
        label: "Salary",
        path: "/salary",
        color: "bg-[linear-gradient(to_right,_#2784B8,_#113B52)]",
    },
    {
        label: "Reviews",
        path: "/reviews",
        color: "bg-[linear-gradient(to_right,_#2784B8,_#113B52)]",
    },
];

const Navbar = () => {
    const pathname = usePathname();

    const activeItem = NAV_ITEMS.find((item) => pathname.startsWith(item.path));
    const bgColor = activeItem?.color || "bg-gray-100";

    const router = useRouter();
    return (
        <nav
            className={`w-full h-16 flex items-center justify-between px-6 ${bgColor}`}
        >
            <div
                className="flex items-center"
                onClick={() => {
                    router.push("/dashboard");
                }}
            >
                <Image src="/logo2.png" alt="Logo" width={180} height={120} />
            </div>
            <ul className="flex space-x-4 text-md font-medium">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.path);
                    return (
                        <li key={item.label}>
                            <Link
                                href={item.path}
                                className={`px-4 py-1 rounded-md transition duration-200 ${
                                    isActive
                                        ? "text-[#31AEF3] bg-white bg-opacity-10"
                                        : "text-white hover:text-blue-300"
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="flex items-center space-x-6">
                <div className="relative">
                    <FiBell className="text-xl text-white hover:text-blue-200 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                        4
                    </span>
                </div>
                <FiSettings className="text-xl text-white hover:text-blue-200 cursor-pointer" />
                <div className="w-px h-15 bg-black" />
                <div>
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-top border-2 border-white"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
