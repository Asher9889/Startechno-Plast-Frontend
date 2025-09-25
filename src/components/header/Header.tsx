import { Phone, Mail, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ownerDetails } from "@/config/constants/data";

const Header = () => {

  const handleCall = () => {
    window.location.href = `tel:${ownerDetails.phoneNo}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${ownerDetails.email}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(ownerDetails.whatsaapWelcomeMessage);
    window.open(`https://wa.me/${ownerDetails.whatsaapNo}?text=${encodedMessage}`, '_blank');
  };



  const dropDownClasses = "flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm  hover:bg-white hover:text-black focus:outline-hidden focus:bg-gray-100";
  return (
    <header className="border-b border-border text-white bg-(--color-black-bg)">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            STAR TECHNOPLAST
          </div>
          <nav className="relative hidden md:flex items-center space-x-8 text-white">
            <a href="#" className=" transition-colors">Home</a>
            {/* <a href="#products" className="">Products</a> */}
            <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
            <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 font-medium" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              Products
              <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>

            <div className="z-100 bg-black hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60  shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
              <div className="p-1 space-y-0.5">
                <a className={`${dropDownClasses}`} href="#">
                  Power Banks
                </a>
                <a className={`${dropDownClasses}`} href="#">
                  Charger
                </a>
                <a className={`${dropDownClasses}`} href="#">
                  Bluetooth Speakers
                </a>
                <a className={`${dropDownClasses}`} href="#">
                  NeckBands
                </a>
                <a className={`${dropDownClasses}`} href="#">
                  Earbuds
                </a>
                <a className={`${dropDownClasses}`} href="#">
                  Electronic Lighters
                </a>
              </div>
            </div>
          </div>
            <a href="#about" className="">About</a>
            <a href="#contact" className="">Contact</a>
            <a href="#blogs" className="">Blogs</a>
          </nav>

          
          <div className="hidden lg:flex items-center space-x-4">
            <Button onClick={handleCall} variant="ghost" size="sm" className="hover:bg-white hover:text-black">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button  onClick={handleEmail} variant="ghost" size="sm" className="hover:bg-white hover:text-black">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button onClick={handleWhatsApp} variant="ghost" size="sm" className="hover:bg-white hover:text-black">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline" size="sm" className="text-white bg-black hover:text-white hover:bg-green-600 cursor-pointer hover:scale-[0.99]">
              <FileText className="w-4 h-4 mr-2" />
              Get Quotes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;