import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

function SideBar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col shadow-lg">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Tech Solutions
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded transition-all"
            >
              <FaHome className="mr-3" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded transition-all">
              <FaInfoCircle className="mr-3" />
              <span>About</span>
            </Link>
          </li>

          {/* Dropdown Menu: Services */}
          <li>
            <div className="group">
              <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 rounded cursor-pointer">
                <div className="flex items-center">
                  <FaChevronDown className="mr-3 group-hover:rotate-180 transition-transform" />
                  <span>Services</span>
                </div>
              </div>
              
              <ul className="hidden group-hover:block bg-gray-800 rounded mt-2 space-y-2 pl-6">
                <li>
                  <Link
                    to="/webservice"
                    className="block px-4 py-2 hover:bg-gray-700 rounded transition-all"
                  >
                    Web Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appservice"
                    className="block px-4 py-2 hover:bg-gray-700 rounded transition-all"
                  >
                    App Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/softwareservice"
                    className="block px-4 py-2 hover:bg-gray-700 rounded transition-all"
                  >
                    Software Service
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/contact"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded transition-all"
            >
              <FaPhoneAlt className="mr-3" />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">© 2024 CompanyName</p>
      </div>
    </div>
  );
}

export default SideBar;
