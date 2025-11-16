import Link from "next/link";

export default function Navbar() {

    
  return (
    <header className="navbar px-6 py-4 bg-neutral text-white backdrop-blur-md/30 sticky top-0 z-50">
      {/* Left - Mobile */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-neutral rounded-xl w-56 space-y-2"
          >
            <li><Link href="/">Home</Link></li>
            <li>
              <details>
                <summary>Case Studies</summary>
                <ul className="p-2 bg-neutral rounded-lg">
                  <li><Link href="/case1">Case 1</Link></li>
                  <li><Link href="/case2">Case 2</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About us</Link></li>
          </ul>
        </div>
      </div>

      {/* Center - Desktop */}
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 text-lg items-center">
          <li>
            <Link
              href="/"
              className="text-green-400 border-b-2 border-green-400 pb-1 hover:text-green-300 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <details className="group cursor-pointer">
              <summary className="hover:text-green-300 transition">Case Studies</summary>
              <ul className="p-2 bg-neutral rounded-xl shadow-lg mt-2">
                <li><Link href="/case1">Case 1</Link></li>
                <li><Link href="/case2">Case 2</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/blog" className="hover:text-green-300 transition">Blog</Link></li>
          <li><Link href="/about" className="hover:text-green-300 transition">About us</Link></li>
        </ul>
      </nav>

      {/* Right - CTA */}
      <div className="navbar-end">
        <Link
          href="/book-call"
          className="btn bg-green-500 text-black rounded-full px-6 hover:bg-green-400 transition shadow-md"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}