"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../sheared/Button";

type NavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; des: string; href: string }[];
};



const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Our Services",
    href: "/services",
    submenu: [
      { name: "Development Services", des: "Scalable full-stack development, APIs, dashboards, SaaS apps, and enterprise-grade systems built using modern frameworks.", href: "/services/development" },
      { name: "Design Services", des: "Crafting intuitive UI/UX, brand identities, wireframes, and high-fidelity interactive prototypes for world-class digital products.", href: "/case2" },
      { name: "AI Services", des: "Next-gen AI integrations including chatbots, automation tools, predictive analytics, and intelligent user experiences.", href: "/case2" },
      { name: "Other Services", des: "Get custom digital solutions, maintenance, optimization, consultancy and any specialized service tailored to your business.", href: "/case2" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About us", href: "/about" },
];


//  //services/development




export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  return (
    <header className="px-6 lg:px-10 py-4 sticky top-0 z-50 backdrop-blur-xl">
      <div className="w-11/12 mx-auto flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">
            <span className="text-primary">SM </span>Agency
          </h2>
        </Link>

        {/* Mobile Menu */}
        <nav className="lg:hidden" aria-label="Mobile Navigation">
          <div className="dropdown">
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

            <ul className="menu menu-sm dropdown-content right-0  mt-3 p-4 shadow bg-[#02121A] rounded-xl border border-white/10 w-56">
              {NAV_ITEMS.map((item) =>
                item.submenu ? (
                  <li key={item.name}>
                    <details open={item.submenu.some((sub) => isActive(sub.href))}>
                      <summary className={item.submenu.some((sub) => isActive(sub.href)) ? "text-[#00FF85] font-bold" : ""}>
                        {item.name}
                      </summary>
                      <ul className="-mt-2 rounded-lg">
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
        </nav>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-[17px]" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative group cursor-pointer">
                <summary
                  className={`flex items-center gap-1 transition ${item.submenu.some((sub) => isActive(sub.href)) ? "text-[#00FF85] font-bold" : "hover:text-[#00FF85]"
                    }`}
                >
                  {item.name}
                  <span className="transition-transform duration-300 group-hover:rotate-180">⬇</span>
                </summary>
                <div className="relative group">
                  {/* Mega Menu */}
                  <div
                    className="
                              absolute left-1/2 -translate-x-1/2 top-full mt-4
                              w-[700px] rounded-3xl 
                              bg-slate-900 text-white shadow-2xl 
                              border border-white/10
                              p-6 
                              opacity-0 invisible
                              group-hover:opacity-100 group-hover:visible
                              transition-all duration-300 ease-out
                              backdrop-blur-xl
                              drop-shadow-[0_0_5px_#02FF95]
                            "
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {/* LEFT SIDE */}
                      <div className="space-y-5">
                        {
                          NAV_ITEMS[1]?.submenu?.map((service, i) => (
                            <Link href={service.href} key={i} className="border-b border-white/10 pb-4 mt-3 hover:text-primary">
                              <h3 className="font-semibold mt-2 text-lg">{service.name}</h3>
                              <p className="text-[13px] text-white/60 mt-1">{service.des}</p>

                            </Link>
                          ))
                        }

                        {/* CTA Button */}
                        <Link href={'book-a-call'} className="mt-3 w-full flex items-center justify-between px-5 py-3 
                      border border-white rounded-full group/button hover:bg-white hover:text-black 
                      transition-all duration-300">
                          Book an appointment
                          <span className="bg-lime-400 text-black p-2 rounded-full group-hover/button:rotate-45 transition-all">
                            ↗
                          </span>
                        </Link>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="bg-white text-black p-5 rounded-2xl flex flex-col gap-4">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-xl leading-tight">
                            Our Expert Team
                            <br />is Here for You
                          </h3>
                          <div className="bg-black text-white p-2 rounded-full rotate-45">
                            ↗
                          </div>
                        </div>

                        <p className="text-sm text-black/70 leading-relaxed">
                          We deliver innovative solutions with expertise, creativity, and precision.
                          Explore our case studies to see the impact of our work.
                        </p>

                        <div className="rounded-xl overflow-hidden">
                          <img
                            src="/images/team-preview.jpg"
                            alt="promo"
                            className="w-full h-40 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`transition ${isActive(item.href) ? "text-[#00FF85] font-bold border-b-2 border-[#00FF85] pb-1 " : "hover:text-[#00FF85]"
                  }`}
              >
                {item.name}
              </Link>
            )
          )}

          {/* Desktop CTA */}
          <Button href="/book-a-call" />
        </nav>
      </div>
    </header>
  );
}
