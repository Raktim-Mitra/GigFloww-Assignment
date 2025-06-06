"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/dashboard");
    };
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 relative">
                <Image
                    src="/signup-image.jpg"
                    alt="signup"
                    objectFit="cover"
                    layout="fill"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center px-16 bg-[linear-gradient(to_bottom_right,_#FBFBFB,_#185170)]">
                <div>
                    <Image
                        src="/logo1.png"
                        alt="logo"
                        width={200}
                        height={0}
                        style={{ height: "auto" }}
                    />
                    <p className="font-medium text-[24px]">
                        Welcome to Gigfloww
                    </p>
                </div>
                <div className="w-[60%] flex flex-col justify-center items-center mt-4">
                    <h3 className="font-medium text-[24px]">Register</h3>
                    <p className=" text-[16px]">
                        Seamless HR operations start now!
                    </p>
                    <p className="text-[16px]">Sign up</p>
                </div>
                <form
                    className="space-y-[8px] w-[60%] "
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="name"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-2 border rounded-4xl"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 border  rounded-4xl"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Your password"
                            className="w-full px-4 py-2 border  rounded-4xl"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="confirmPassword"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Re-confirm your password"
                            className="w-full px-4 py-2 border rounded-4xl"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[linear-gradient(to_right,_#2784B8,_#2784B8)] mt-2 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                    >
                        Register
                    </button>
                </form>

                <p className="text-mg pt-1.5">
                    Already on Gigfloww?{" "}
                    <span className="text-blue-950 cursor-pointer">
                        <Link href="/login"> Log in </Link>
                    </span>
                </p>
                <div className="flex gap-4 mt-6 w-[60%]">
                    <button className="w-1/2 border p-2 text-sm rounded-4xl flex justify-center items-center gap-2 hover:bg-gray-100">
                        <Image
                            src="/google.png"
                            alt="Google"
                            width={20}
                            height={20}
                        />
                        Register with<span>Google</span>
                    </button>
                    <button className="w-1/2 border py-2 text-sm rounded-4xl flex justify-center items-center gap-2 hover:bg-gray-100">
                        <Image
                            src="/apple.png"
                            alt="Apple"
                            width={20}
                            height={20}
                        />
                        Register with<span>Apple</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
