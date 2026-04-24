import Button from "./Button";

function NavBar() {
    return (
        <>
            <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md border-b border-gray-200">
                <div className="logo flex items-center space-x-3 select-none cursor-pointer">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-linear-to-br from-indigo-500 via-sky-400 to-emerald-400 shadow-lg">
                        <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </span>
                    <span className="text-2xl font-black tracking-tight text-gray-900">
                        Aina<span className="text-emerald-500">Dev</span>
                    </span>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition">
                        Home
                    </div>
                    <div className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition">
                        About
                    </div>
                    <Button />
                </div>
            </nav>
        </>
    );
}

export default NavBar;
