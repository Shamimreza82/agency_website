import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-11/12 mx-auto px-6 flex justify-between lg:px-10 py-4 sticky top-0 z-50 text-white backdrop-blur-xl">
            {/* Left Logo */}
            <div className="flex items-center gap-2">
                <Link href="/">
                    <h2 className="text-2xl font-bold"><span className="text-2xl font-bold text-primary">SM </span>Agency</h2>
                </Link>

                {/* Mobile Menu Button */}
                <div className="dropdown lg:hidden">
                    <button tabIndex={0} className="btn btn-ghost" aria-label="Open Menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#02121A] rounded-xl border border-white/10 w-56"
                    >
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>Case Studies</summary>
                                <ul className="p-2 bg-[#02121A] rounded-lg">
                                    <li><Link href="/case1">Case 1</Link></li>
                                    <li><Link href="/case2">Case 2</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/about">About us</Link></li>
                        <li>
                            <Link
                                href="/book-call"
                                className="bg-[#00FF85] text-black font-semibold rounded-full px-4 py-2 mt-2 block text-center hover:bg-[#00e676]"
                            >
                                Book a call
                            </Link>
                        </li>
                    </ul>
                </div>
             
            </div>

            {/* Desktop Center Menu */}
            <nav className="hidden lg:flex">
                <ul className="flex items-center gap-10 text-[17px]">
                    <li>
                        <Link
                            href="/"
                            className="text-primary font-medium border-b-2 border-primary pb-1 transition"
                        >
                            Home
                        </Link>
                    </li>

                    <li className="relative group cursor-pointer">
                        <summary className="hover:text-[#00FF85] transition flex items-center gap-1">
                            Case Studies
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        </summary>
                        <ul className="absolute left-0 mt-3 p-3 bg-[#02121A] shadow-xl rounded-xl border border-white/10 w-44 hidden group-hover:block">
                            <li className="py-1"><Link href="/case1" className="hover:text-[#00FF85] transition">Case 1</Link></li>
                            <li className="py-1"><Link href="/case2" className="hover:text-[#00FF85] transition">Case 2</Link></li>
                        </ul>
                    </li>

                    <li><Link href="/blog" className="hover:text-[#00FF85] transition">Blog</Link></li>
                    <li><Link href="/about" className="hover:text-[#00FF85] transition">About us</Link></li>
                    {/* Desktop CTA */}
                    <div className="hidden lg:flex">
                        <Link
                            href="/book-call"
                            className="bg-[#00FF85] text-secondary font-semibold rounded-full px-6 py-2 transition-all shadow-md"
                        >
                            Book a call
                        </Link>
                    </div>
                </ul>

            </nav>


        </header>
    );
}