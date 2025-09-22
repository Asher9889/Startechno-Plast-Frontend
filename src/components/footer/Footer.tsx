import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0a0a1a] to-purple-900 text-white pt-12">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Logo and App download */}
          {/* <div className="flex flex-col items-start gap-4">
            <img src="/logo.svg" alt="PureCheckup" className="h-10" />
            <h3 className="text-white text-lg font-semibold">Check out our app!</h3>
            <div className="flex gap-3">
              <img src="/google-play.png" alt="Google Play" className="h-10" />
              <img src="/app-store.png" alt="App Store" className="h-10" />
            </div>
          </div> */}

          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Power Banks</li>
                <li>Chargers</li>
                <li>Bluetooth Speakers</li>
                <li>NeckBanks</li>
                <li>Earbugs</li>
                <li>Electronic Lighters</li>
              </ul>
            </div>

            {/* Column 2 */}
            {/* <div>
              <h4 className="font-semibold text-white mb-4">For Patients</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>FAQs</li>
                <li>Patient Help</li>
                <li>No Cost EMI</li>
                <li>Health Insurance</li>
                <li>Doctors Section</li>
              </ul>
            </div> */}

            {/* Column 3 */}


            
            {/* <div>
              <h4 className="font-semibold text-white mb-4">Surgery</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Laser Surgery</li>
                <li>Laparoscopy Surgery</li>
                <li>Plastic Surgery</li>
              </ul>
             
            </div> */}


            {/* Column 4 */}
            <div>
              {/* Social Icons */}
              <h4 className="font-semibold text-white mt-6 mb-2">Social Media</h4>
              <div className="flex gap-3 text-white text-xl">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 px-6 md:px-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright Startechno Plast 2025. All Right Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          {/* <span>Refund Policy</span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
