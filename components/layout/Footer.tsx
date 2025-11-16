import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#02121A] text-white mt-20">
      <footer className="footer w-9/12 mx-auto sm:footer-horizontal text-base-content p-10">

  {/* Column 1 */}
  <aside>
    <Link href="/">
      <h2 className="text-2xl font-bold">
        <span className="text-2xl font-bold text-primary">SM </span>Agency
      </h2>
    </Link>
    <p>Where Creativity Meets Code.</p>
  </aside>

  {/* Vertical Line */}
  <div className="w-px bg-gray-700 h-60 mx-6 hidden sm:block"></div>

  {/* Column 2 */}
  <nav>
    <h6 className="footer-title text-accent text-lg border-b-2">Services</h6>
    <a className="link link-hover">UI/UX Design</a>
    <a className="link link-hover">Frontend Development</a>
    <a className="link link-hover">Backend Development</a>
    <a className="link link-hover">Full-Stack Development</a>
    <a className="link link-hover">SaaS Product Development</a>
    <a className="link link-hover">DevOps & Deployment</a>
    <a className="link link-hover">QA & Testing</a>
  </nav>

  {/* Vertical Line */}
  <div className="w-px bg-gray-700 h-60 mx-6 hidden sm:block"></div>

  {/* Column 3 */}
  <nav>
    <h6 className="footer-title text-accent text-lg border-b-2">Company</h6>
    <Link href="/about">
      <p className="link link-hover">About</p>
    </Link>
    <a className="link link-hover">Contact</a>
  </nav>

  {/* Vertical Line */}
  <div className="w-px bg-gray-700 h-60 mx-6 hidden sm:block"></div>

  {/* Column 4 */}
  <nav>
    <h6 className="footer-title text-accent text-lg border-b-2">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>

</footer>

    </div>
  );
};

export default Footer;
