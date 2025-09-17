// import { Calendar } from "lucide-react"
import {  Card, CardContent } from "../ui"
import { AppointForm, CallNow, WhatsaapButton } from "..";
import { SelectCityInput } from "../../components";
import { useState } from "react";

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  button1Text: string
  button2Text: string
  city: string
  phone: string
  imageUrl?: string
}

export default function DynamicHeroSection({ heroContent }: { heroContent: HeroProps }) {
    const [appointmentOpen, _] = useState(false) // Appointment modal open/close
  
  return (
    <div className="bg-[#D6E4EF] py-6 px-4 flex justify-center">
      <Card className="w-full max-w-7xl rounded-3xl shadow-md flex flex-col md:flex-row overflow-hidden px-4">

        {/* Left Side Content */}
        <CardContent className="p-6 md:p-8 flex flex-col justify-center flex-2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
            {heroContent.title}
          </h1>

          {heroContent.description && (
            <h2 className="text-gray-600 text-center md:text-left">
              {heroContent.description}
            </h2>
          )}

          {/* Book Consultation  */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center md:items-start">
            <WhatsaapButton className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-md text-white flex flex-row justify-center items-center"
              aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"

            >
              {heroContent.button1Text}
            </WhatsaapButton>
            {appointmentOpen && (
            <AppointForm />
          )}
            {/* <Button className="w-full h-10 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
             
            </Whatsapp Expert Button> */}
            <WhatsaapButton className="w-full sm:w-auto bg-green-500 hover:bg-green-600 rounded-md text-white"
              onClick={() => window.open("https://wa.me/919211930749", "_blank")}
            >
              {heroContent.button2Text}
            </WhatsaapButton>
          </div>

          {/* City + Phone */}
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-center gap-3 mt-4">
            <span className="w-full h-fit md:w-40 mb-3">

              <SelectCityInput />
            </span>
            <CallNow />
          </div>
           {/* <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 mt-4 ">
          <WhatsaapButton className="w-full sm:w-auto bg-(--primary-bg-color) rounded-md text-white">Call Now</WhatsaapButton>
          </div> */}

        </CardContent>

        {/* Right Side Image */}
        <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
          <img
            src={heroContent.imageUrl}
            alt="Doctor Consultation"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl"
          />
        </div>
      </Card>
    </div>
  )
}
