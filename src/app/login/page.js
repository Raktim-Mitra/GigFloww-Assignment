"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
const Page = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/dashboard");
    }
    return (
        <div className="relative flex min-h-screen">
            <div className="w-5/12 relative">
                <Image
                    src="/login-image.jpg"
                    alt="login"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-7/12 flex flex-col justify-center items-center px-16">
                <div className="w-[60%] flex flex-col justify-center items-center">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        width={200}
                        height={0}
                        style={{ height: "auto" }}
                    />
                </div>
                <div className="w-[60%] flex flex-col justify-center items-center mt-6">
                    <p className="font-medium text-[24px]">
                        Welcome to Gigfloww
                    </p>
                    <p className=" text-[16px]">
                        Seamless HR operations start now!
                    </p>
                    <p className="text-[16px]">Sign up</p>
                </div>
                <form className="space-y-[8px] w-[60%] pt-4" onSubmit={handleSubmit}>
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
                            placeholder="Your Full Name"
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                  
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Work Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Work Email Address"
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                   
                    <div className="flex flex-col relative">
                        <label
                            htmlFor="password"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Your Password"
                            className="w-full px-4 py-2 border rounded-lg pr-10"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-500 text-lg"
                        >
                            {showPassword ? <HiEyeOff /> : <HiEye />}
                        </span>
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-[linear-gradient(to_right,_#2784B8,_#113B52)] text-white py-2 mt-2 rounded-md hover:bg-blue-700"
                       
                    >
                        Sign up for free
                    </button>
                </form>
                <div className="mt-2">
                    <p className="text-[14px]">
                        By clicking on Sign up, you agree to our{" "}
                        <span className="text-blue-900 underline cursor-pointer">
                            Terms and Conditions
                        </span>
                    </p>
                </div>
                <div className="absolute bottom-8 right-8 text-sm">
                    <p>
                        Already on Gigfloww?{" "}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => router.push("/signup")}
                        >
                            Log in
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
