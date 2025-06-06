import React from "react";

const Page = () => {
    return (
        <div className="p-4 space-y-6 flex flex-col">
            <div className="flex flex-col justify-between ">
                <h1 className="text-2xl font-semibold">Job Posting</h1>
                <p>Post Job for free. Add details for your job post</p>
            </div>
            {/* main section*/}
            <div className="flex">
                <div className="w-9/12">
                    <h1 className="underline text-2xl font-semibold ">
                        Fill In Job Details
                    </h1>

                    <form className="w-full p-6 space-y-4 bg-white shadow rounded-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., UI/UX Designer"
                                className="mt-1 w-full px-4 py-2 border outline-none border-none shadow-sm rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Skill(s) Required
                            </label>
                            <input
                                type="text"
                                placeholder="Enter reired skill(s)"
                                className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Years of Experience/Experience Level
                            </label>
                            <input
                                type="number"
                                placeholder="e.g., 0-2 years"
                                className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Employment Type
                            </label>
                            <select className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm">
                                <option value="">Select</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="internship">Internship</option>
                                <option value="contract">Contract</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Workplace Type
                            </label>
                            <select className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm">
                                <option value="">Select</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">On-site</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>

                        {/* Stipend */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Stipend
                            </label>
                            <input
                                type="text"
                                placeholder="Enter the stipend per month"
                                className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Number of Openings
                            </label>
                            <input
                                type="number"
                                placeholder="e.g., 2"
                                className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Job Description
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Briefly describe the role and expectations..."
                                className="mt-1 w-full px-4 py-2 border rounded-md resize-y outline-none border-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Relevant Link
                            </label>
                            <input
                                type="url"
                                placeholder="Enter link"
                                className="mt-1 w-full px-4 py-2 border rounded-md outline-none border-none shadow-sm"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[linear-gradient(to_right,_#2784B8,_#113B52)] text-white rounded-md hover:bg-blue-700"
                            >
                                Post Job
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-3/12 pt-0 flex flex-col gap-4 p-4">
                    <div className="flex flex-col gap-6 shadow-md rounded-md p-4">
                        <div className="flex justify-between">
                            <p className="text-xl">Manage Posting</p>
                            <p>see all</p>
                        </div>
                        <div className="w-full max-w-3xl mx-auto border-2 border-gray-300/70 rounded-md shadow-md p-4 bg-white">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-[#050660] flex items-center justify-center rounded-md overflow-hidden">
                                    <img
                                        src="/post-logo.png"
                                        alt="Company Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-md font-semibold">
                                        UI Designer Intern (Remote)
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        Article studio
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Banglore, India
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Under applying (posted 12/02/24)
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="flex justify-evenly items-center mt-4 text-sm text-gray-600 border-t pt-2">
                                <div className="flex flex-col items-center">
                                    <p>24</p>
                                    <p>Views</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p>120</p>
                                    <p>Applicants</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-3xl mx-auto border-2 border-gray-300/70 rounded-md shadow-md p-4 bg-white">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-[#050660] flex items-center justify-center rounded-md overflow-hidden">
                                    <img
                                        src="/post-logo.png"
                                        alt="Company Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-md font-semibold">
                                        UI Designer Intern (Remote)
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        Article studio
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Banglore, India
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Under applying (posted 12/02/24)
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="flex justify-evenly items-center mt-4 text-sm text-gray-600 border-t pt-2">
                                <div className="flex flex-col items-center">
                                    <p>24</p>
                                    <p>Views</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p>120</p>
                                    <p>Applicants</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div>
                        <div className="flex flex-col p-4 border-2 border-gray-300/70  rounded-md shadow-md justify-start gap-4">
                            <img
                                src="/post-bg.png"
                                alt="post bg"
                                className="w-full  object-contain"
                            />
                            <h2 className="text-lg font-semibold">
                                Use AI to write
                            </h2>
                            <p className="text-sm ">
                                Write perfectly and flawless with Al. If you
                                want help with job description and other fields,
                                AI will suggest for you.
                            </p>
                            <button className="px-6 py-2 bg-[linear-gradient(to_right,_#2784B8,_#113B52)] text-white rounded-md hover:bg-blue-700">
                                Write with AI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
