import { FaPhoneAlt } from "react-icons/fa"

const CallNow = () => {
    return (
        <button className=" w-full md:w-fit">
            <span className="flex flex-col justify-center items-center">
                <a href="tel:9211930749" className="bg-orange-500  text-white font-semibold rounded-md px-8 py-2 flex items-center gap-2 hover:bg-orange-600 transition cursor-pointer">
                    Call Us <FaPhoneAlt /> 9211930749
                </a>
                {/* <p className="mt-2 text-sm text-gray-600 font-medium">
                    Book Your Doctor's Appointment Today – Fast & Easy
                </p> */}
            </span>
        </button>
    )
}

export default CallNow;