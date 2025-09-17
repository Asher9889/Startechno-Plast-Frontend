
import { CardBody, CardContainer, CardItem } from "../ui";
import { Button } from "@/components/ui/button";
import { tanmay } from "@/assets";
import { useState } from "react";
import AppointForm from "../book-appointment-form/AppointForm";
// import StickyScroll from "../ui/sticky-scroll-reveal";
// import { title } from "process";

const doctors = [
  {
    name: "Dr. Tanmay Jain",
    designation: "Specialist- Piles",
    experience: "20+ yrs",
    phone: "9211930749",
    clients: "1,00,000+",
    image: tanmay,
  },
  // {
  //   name: "Dr. Ritu Patel",
  //   designation: "Colorectal Surgeon",
  //   experience: "18+ yrs",
  //   image: "https://randomuser.me/api/portraits/women/44.jpg",
  // },
  // {
  //   name: "Dr. Mohit Singh",
  //   designation: "Laser Proctology Expert",
  //   experience: "16+ yrs",
  //   image: "https://randomuser.me/api/portraits/men/41.jpg",
  // },
  // {
  //   name: "Dr. Kavita Rao",
  //   designation: "Gastrointestinal Surgeon",
  //   experience: "20+ yrs",
  //   image: "https://randomuser.me/api/portraits/women/50.jpg",
  // },
  // {
  //   name: "Dr. Rajeev Malhotra",
  //   designation: "Proctology Specialist",
  //   experience: "15+ yrs",
  //   image: "https://randomuser.me/api/portraits/men/65.jpg",
  // },
  // {
  //   name: "Dr. Neha Verma",
  //   designation: "Minimally Invasive Surgeon",
  //   experience: "12+ yrs",
  //   image: "https://randomuser.me/api/portraits/women/36.jpg",
  // },
];



export default function Doctors3DGrid() {
      const [appointmentOpen, setAppointmentOpen] = useState(false) // Appointment modal open/close
  
  return (
    <section className="">
      <div>
        {/* Left side */}
        <div className="">   {/* grid sm:grid-cols-2 lg:grid-cols-4 */}
          {doctors.map((doc, index) => (
            <CardContainer key={index} className="inter-var w-80">
              <CardBody className="bg-white relative group/card w-full   shadow-sm hover:shadow-2xl transition-all duration-300">
                {/* Doctor Image */}
                <CardItem  className="w-full">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-48 rounded-xl hover:shadow-2xl  mx-auto object-contain group-hover/card:shadow-xl"
                  />
                </CardItem>

                {/* Name + Role */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold  text-gray-800 mt-4 px-6"
                >
                  {doc.name}
                </CardItem>
                <CardItem
                  translateZ="40"
                  as="p"
                  className="font-medium text-md text-gray-600 px-6"
                >
                  {doc.designation} • {doc.experience}
                </CardItem>
                { doc.phone && <CardItem
                  translateZ="40"
                  as="p"
                  className="font-medium text-md text-gray-600 px-6"
                >
                  Phone: {doc.phone}
                </CardItem>}
                
                {doc.clients && <CardItem
                  translateZ="40"
                  as="p"
                  className="font-medium text-md text-gray-600 px-6"
                >
                 Happy Patients: {doc.clients}
                </CardItem>}
                

                {/* CTA Button */}
                <div className="flex justify-center py-6">
                  <CardItem translateZ="60" translateY={10}>
                    <Button className="px-6 py-2 rounded-lg text-md font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                      aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
                      onClick={() => setAppointmentOpen(true)}

                    >
                      Book Appointment
                    </Button>
                     {appointmentOpen && (
                        <AppointForm />
                      )}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
         
         {/* Right Side */}
      </div>

    </section>
  );
}
