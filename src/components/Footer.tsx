import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Natural Wellness Store</h2>
          <p className="text-gray-200">
            Your go-to place for organic and natural products that support your wellness journey.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-300">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-green-300">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@wellness.com" className="hover:text-green-300">info@wellness.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-green-300">+1 234 567 890</a></p>
          <p>Address: 123 Wellness Street, Green City</p>

          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-green-300"><Facebook /></a>
            <a href="#" className="hover:text-green-300"><Twitter /></a>
            <a href="#" className="hover:text-green-300"><Instagram /></a>
            <a href="#" className="hover:text-green-300"><Linkedin /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 py-4 text-center text-gray-300 text-sm">
        © 2025 Natural Wellness Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
