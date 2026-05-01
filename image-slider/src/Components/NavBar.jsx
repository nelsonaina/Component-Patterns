


function NavBar() {
    return (
        <>
            <nav className="flex items-center justify-between px-4 sm:px-6 py-2 bg-white shadow-sm border-b border-gray-200">
                <div className="logo flex items-center gap-2 select-none cursor-pointer">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-linear-to-br from-indigo-500 via-sky-400 to-emerald-400 shadow-md">
                        <svg
                            className="w-4 h-4 text-white"
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
                    <span className="text-lg font-bold tracking-tight text-gray-900">
                        Aina<span className="text-emerald-500">.Dev</span>
                    </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-sm">
                    <div className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium transition">
                        Home
                    </div>
                    <a
                        target="_blank"
                        href="https://github.com/nelsonaina/Component-Patterns/tree/main/"
                        rel="noopener noreferrer"
                        className="inline-block px-3.5 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Github
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;