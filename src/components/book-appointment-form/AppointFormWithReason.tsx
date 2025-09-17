import { useState } from "react";
import DiseasesInput from "../diseases/DiseasesInput";
import SelectCityInput from "../select-city/SelectCityInput";
import { toast } from "sonner";
import { Spinner } from "../ui";
        
const uri = import.meta.env.VITE_API_BASE_URL

const AppointFormWithNoReason = () => {
    const [isloading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        healthConcern: "",
        city: "",
    });

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
            setIsLoading(true);
        if (isloading) return;

        
        try {
            const res = await fetch(`${uri}/user/book-appointment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (!result.status) {
                return toast.error("Failed to book your appoint. Please try again after 1 minute.")
            }
            toast.success(result.message);
            // // ⬇️ Close modal on success
            // const modal = document.querySelector("#hs-slide-down-animation-modal");
            // if (modal) {
            //     // Preline API
            //     // @ts-ignore (since HSOverlay is not typed)
            //     window.HSOverlay?.close(modal);
            // }
        } catch (err) {
            console.error("❌ API Error:", err);
        } finally {
            setIsLoading(false);
        }
    // here call your API with formData
  }

  return (
    <div className="mx-auto flex-1 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="font-bold text-xl mb-4 text-center">
          Book Free Consultation
        </h2>

        <input
          type="text"
          required
          placeholder="Patient Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          required
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <DiseasesInput
          text="Select Disease"
          value={formData.healthConcern}
          onChange={(healthConcern) => setFormData({ ...formData, healthConcern })}
        />

        <SelectCityInput
          value={formData.city}
          onChange={(city) => setFormData({ ...formData, city })}
        />

        <button
          type="submit"
          className="bg-[#2874F0] text-white font-semibold w-full py-2 my-4 rounded-md hover:opacity-90"
        >
          {isloading ? <Spinner className="mx-auto" /> : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default AppointFormWithNoReason;
