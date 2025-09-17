import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle, X } from "lucide-react"
import { wtsp } from "@/assets"
// import { AppointForm } from "../index"

export default function ContactUsFloating() {
  const [open, setOpen] = useState(false) // FAB open/close
  const [appointmentOpen, setAppointmentOpen] = useState(false) // Appointment modal open/close

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative flex items-center justify-center">
          {/* WhatsApp */}
          <Button
            size="icon"
            className={`absolute bg-transparent rounded-full w-12 h-12 border-none shadow-none transform transition-all duration-300 hover:bg-green-400
              ${open ? "translate-y-[-70px] scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
            onClick={() => window.open("https://wa.me/9034484988", "_blank")}
          >
            <img className="h-10 w-10" src={wtsp} />
          </Button>

          {/* Call */}
          <Button
            size="icon"
            className={`absolute bg-blue-500 text-white rounded-full w-12 h-12 shadow-lg transform transition-all duration-300
              ${open ? "translate-x-[-50px] translate-y-[-50px] scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
            onClick={() => (window.location.href = "tel:+9034484988")}
          >
            <Phone className="w-6 h-6" />
          </Button>

          {/* Appointment */}
          <Button
            size="icon"
            className={`absolute bg-purple-500 text-white rounded-full w-12 h-12 shadow-lg transform transition-all duration-300
              ${open ? "translate-x-[-80px] scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
            onClick={() => setAppointmentOpen(true)}
          >
            <Calendar className="w-6 h-6" />
          </Button>

          {/* Main FAB */}
          <Button
            size="icon"
            onClick={() => setOpen(!open)}
            className="bg-(--color-primary) text-white rounded-full w-14 h-14 shadow-xl "
          >
            {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Appointment Modal (React-only, no Preline overlay) */}
      {appointmentOpen && (
        // <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60">
         

            
           <div>
                {/* <AppointForm /> */}
           </div> 
          
        // </div>
      )}
    </>
  )
}
