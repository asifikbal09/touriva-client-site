import { Facebook, Instagram, MessageCircle, Pin, Twitter } from "lucide-react";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  const year = new Date()
  return (
    <footer className="bg-secondary/20 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company description and social media */}
          <div className="space-y-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisl venenatis
              hendrerit a id lectus. Suspendissendt molestie turpis nec lacinia
              vehicula.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us On:</h3>
              <div className="flex space-x-3 ">
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-full w-10 h-10"
                >
                  <Instagram className="w-4 h-4 " />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-full w-10 h-10"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-full w-10 h-10"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-full w-10 h-10"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 rounded-full w-10 h-10"
                >
                  <Pin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tour-package"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tour Package
                </Link>
              </li>
              <li>
                <Link
                  to="/destination"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Destination
                </Link>
              </li>
              <li>
                <Link
                  to="/tour-guide"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tour Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Booking Process
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Tour Type</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/wild-adventure"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Wild & Adventure Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/group-tour"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Group Tour
                </Link>
              </li>
              <li>
                <Link
                  to="/seasonal"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Seasonal Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/relaxation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Relaxation Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/family"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Family Friendly Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Adventure tour at sunset"
                className="w-16 h-16 object-cover rounded"
              />
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Mountain hiking scenic view"
                className="w-16 h-16 object-cover rounded"
              />
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Group travel city tour"
                className="w-16 h-16 object-cover rounded"
              />
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Woman in sunflower field"
                className="w-16 h-16 object-cover rounded"
              />
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Person fishing by lake"
                className="w-16 h-16 object-cover rounded"
              />
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Person celebrating freedom"
                className="w-16 h-16 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="border-t border-slate-600">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h3 className="text-xl font-semibold">Contact Us:</h3>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
              <div className="flex items-center gap-2">
                <span className="text-gray-300">📞</span>
                <span>+1763-227-5032</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-300">✉️</span>
                <span>info@example.com</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-300">📍</span>
                <span>2752 Willison Street Eagan, United State</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-slate-800 border-t border-slate-600">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-sm text-gray-400 flex justify-center items-center gap-2">
             <FaCopyright/> Copyright {year.getFullYear()} Touriva
            </div>

            <div className="flex items-center justify-center">
              <div className="text-xl font-bold">
                <span className="text-white">Tour</span>
                <span className="text-primary">iva</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Condition
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
