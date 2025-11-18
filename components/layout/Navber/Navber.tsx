
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DextopMenu";

export type TNavItem = {
  name: string;
  href?: string;
  submenu?: { name: string; des: string; href: string }[];
};



const NAV_ITEMS: TNavItem[] = [
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
    
        <MobileMenu NAV_ITEMS={NAV_ITEMS}/>

        {/* Desktop Menu  */}
        <DesktopMenu NAV_ITEMS={NAV_ITEMS} />
      </div>
    </header>
  );
}
