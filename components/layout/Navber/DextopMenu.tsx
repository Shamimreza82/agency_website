/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/sheared/Button";
import { usePathname } from "next/navigation";
import BouncingArrow from "@/components/sheared/BouncingArrow";
import UserProfile from "@/components/sheared/UserProfile";

export default function DesktopMenu({ NAV_ITEMS }: any) {

    const pathname = usePathname();

  const isActive = (href?: string) =>
    href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  return (
    <nav
      className="hidden lg:flex items-center gap-10 text-[17px]"
      aria-label="Primary Navigation"
    >
      {NAV_ITEMS.map((item: any) =>
        item.submenu ? (
          <div key={item.name} className="relative group cursor-pointer">
            <summary
              className={`flex items-center gap-1 transition ${
                item.submenu.some((sub: any) => isActive(sub.href))
                  ? "text-primary font-bold"
                  : "hover:text-primary scale-95 duration-100"
              }`}
            >
              {item.name}
              <BouncingArrow/>
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
                    {NAV_ITEMS[1]?.submenu?.map((service: any, i: number) => (
                      <Link
                        href={service.href}
                        key={i}
                        className="border-b border-white/10 pb-4 mt-3 hover:text-primary"
                      >
                        <h3 className="font-semibold mt-2 text-lg">
                          {service.name}
                        </h3>
                        <p className="text-[13px] text-white/60 mt-1">
                          {service.des}
                        </p>
                      </Link>
                    ))}

                    {/* CTA Button */}
                    <Link
                      href={"book-a-call"}
                      className="mt-3 w-full flex items-center justify-between px-5 py-3 
                        border border-white rounded-full group/button hover:bg-white hover:text-black 
                        transition-all duration-300"
                    >
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
                        <br /> is Here for You
                      </h3>
                      <div className="bg-black text-white p-2 rounded-full rotate-45">↗</div>
                    </div>

                    <p className="text-sm text-black/70 leading-relaxed">
                      We deliver innovative solutions with expertise, creativity, and precision.
                      Explore our case studies to see the impact of our work.
                    </p>

                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/images/team-preview.jpg"
                        alt="promo"
                        className="w-full h-40 object-cover"
                        width={300}
                        height={300}
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
            className={`
              relative px-1 transition-all duration-300 
              ${
                isActive(item.href)
                  ? "text-primary "
                  : "text-slate-300 hover:text-primary"
              }
              group
            `}
          >
            {item.name}

            {/* Underline animation */}
            <span
              className={`
                absolute left-0 -bottom-1 h-[2px] w-full 
                origin-left scale-x-0 transition-transform duration-300 
                bg-gradient-to-r from-primary/70 to-primary 
                ${isActive(item.href) ? "scale-x-100" : "group-hover:scale-x-100"}
              `}
            />
          </Link>
        )
      )}

      {/* Desktop CTA */}
      <Button href="/book-a-call" />
      <UserProfile/>
    </nav>
  );
}
