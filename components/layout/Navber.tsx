"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../sheared/Button";



type NavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
};




const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Case Studies",
    submenu: [
      { name: "Case 1", href: "/case1" },
      { name: "Case 2", href: "/case2" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "About us", href: "/about" },
];





export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  return (
    <header className="w-11/12 mx-auto px-6 lg:px-10 py-4 flex justify-between items-center sticky top-0 z-50 text-white backdrop-blur-xl">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">
          <span className="text-primary">SM </span>Agency
        </h2>
      </Link>

      {/* Mobile Menu */}
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

        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#02121A] rounded-xl border border-white/10 w-56">
          {NAV_ITEMS.map((item) =>
            item.submenu ? (
              <li key={item.name}>
                <details open={item.submenu.some((sub) => isActive(sub.href))}>
                  <summary className={item.submenu.some((sub) => isActive(sub.href)) ? "text-[#00FF85] font-bold" : ""}>
                    {item.name}
                  </summary>
                  <ul className="p-2 bg-[#02121A] rounded-lg">
                    {item.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={isActive(sub.href) ? "text-[#00FF85] font-bold" : ""}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href!} className={isActive(item.href) ? "text-[#00FF85] font-bold" : ""}>
                  {item.name}
                </Link>
              </li>
            )
          )}

          {/* CTA Button */}
          <li>
            <Link
              href="/book-a-call"
              className="bg-[#00FF85] text-black font-semibold rounded-full px-4 py-2 mt-2 block text-center hover:bg-[#00e676]"
            >
              Book a call
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-10 text-[17px]">
        {NAV_ITEMS.map((item) =>
          item.submenu ? (
            <div key={item.name} className="relative group cursor-pointer">
              <summary
                className={`flex items-center gap-1 transition ${
                  item.submenu.some((sub) => isActive(sub.href)) ? "text-[#00FF85] font-bold" : "hover:text-[#00FF85]"
                }`}
              >
                {item.name}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </summary>
              <ul className="absolute left-0 mt-3 p-3 bg-[#02121A] shadow-xl rounded-xl border border-white/10 w-44 hidden group-hover:block">
                {item.submenu.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className={isActive(sub.href) ? "text-[#00FF85] font-bold" : "hover:text-[#00FF85]"}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href!}
              className={`transition ${
                isActive(item.href) ? "text-[#00FF85] font-bold border-b-2 border-[#00FF85] pb-1" : "hover:text-[#00FF85]"
              }`}
            >
              {item.name}
            </Link>
          )
        )}

        {/* Desktop CTA */}
        <Button href="/book-a-call" />
      </nav>
    </header>
  );
}
