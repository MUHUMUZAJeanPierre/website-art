import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#303030] text-[#FCFCFC] mt-10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Natural Wellness Store</h2>
          <p className="text-[#CACACA]">
            Your go-to place for organic and natural products that support your wellness journey.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-[#F7F7F7] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-[#F7F7F7] transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#F7F7F7] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#F7F7F7] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-[#CACACA]">
            Email:{" "}
            <a
              href="mailto:info@wellness.com"
              className="hover:text-[#F7F7F7] transition-colors"
            >
              info@wellness.com
            </a>
          </p>
          <p className="text-[#CACACA]">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-[#F7F7F7] transition-colors"
            >
              +1 234 567 890
            </a>
          </p>
          <p className="text-[#CACACA]">
            Address: 123 Wellness Street, Green City
          </p>

          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#5F5F5F] py-4 text-center text-[#A4A4A3] text-sm">
        © 2025 Natural Wellness Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
