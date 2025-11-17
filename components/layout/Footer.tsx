import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#02121A] text-white mt-20">
      <div className="footer lg:w-9/12 mx-auto sm:footer-horizontal text-base-content p-10">

        <aside>
          <Link href="/">
            <h2 className="text-2xl font-bold">
              <span className="text-2xl font-bold text-primary">SM </span>Agency
            </h2>
          </Link>
          <p>Where Creativity Meets Code.</p>

          <div className="flex gap-4 mt-4">
              <Link href="https://www.facebook.com/" aria-label="Facebook">
                  <FaFacebook className="text-2xl" />
              </Link>
              <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
                  <FaLinkedin className="text-2xl" />
              </Link>
              <Link href="https://www.instagram.com/" aria-label="Instagram">
                  <FaInstagram className="text-2xl" />
              </Link>
              <Link href="https://www.youtube.com/" aria-label="YouTube">
                  <FaYoutube className="text-2xl" />
              </Link>
          </div>
        </aside>

        {/* Vertical Line */}
        <div className="w-px bg-gray-700 h-60 mx-6 hidden sm:block"></div>

        <nav>
          <h6 className="footer-title text-primary text-lg">Services</h6>
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

        <nav>
          <h6 className="footer-title text-primary text-lg">Company</h6>
          <Link href="/about" className="link link-hover">About</Link>
          <a className="link link-hover">Contact</a>
        </nav>

        {/* Vertical Line */}
        <div className="w-px bg-gray-700 h-60 mx-6 hidden sm:block"></div>

        <nav>
          <h6 className="footer-title text-primary text-lg">Legal</h6>
          <Link href="/terms-and-conditions" className="link link-hover">Terms of use</Link>
          <Link href="/privacy-policy" className="link link-hover">Privacy policy</Link>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
