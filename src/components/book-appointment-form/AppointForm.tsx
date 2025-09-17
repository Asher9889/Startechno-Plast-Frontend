import { useState } from "react";
import DiseasesInput from "../diseases/DiseasesInput";
import { Checkbox, Input, Label, Spinner, Textarea } from "../ui";
import { toast } from "sonner";

const uri = import.meta.env.VITE_API_BASE_URL
const AppointForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        isWhatsaapConnect: false,
        email: "",
        healthConcern: "",
        condition: "",
    });
    const [isloading, setIsLoading] = useState(false);

    // ✅ Handle text & textarea inputs
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // ✅ Handle checkbox (shadcn version)
    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            isWhatsaapConnect: !!checked,
        }));
    };

    // ✅ Handle diseases dropdown
    const handleHealthConcern = (value: string) => {
        setFormData((prev) => ({ ...prev, healthConcern: value }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
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
            // ⬇️ Close modal on success
            const modal = document.querySelector("#hs-slide-down-animation-modal");
            if (modal) {
                // Preline API
                // @ts-ignore (since HSOverlay is not typed)
                window.HSOverlay?.close(modal);
            }
        } catch (err) {
            console.error("❌ API Error:", err);
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <>
            <div
                id="hs-slide-down-animation-modal"
                className="hs-overlay hidden size-full fixed top-[5%] start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
                role="dialog"
                aria-labelledby="hs-slide-down-animation-modal-label"
            >
                <div className="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white shadow-2xs rounded-xl pointer-events-auto dark:shadow-neutral-700/70">
                        {/* Header */}
                        <div className="flex justify-between items-center py-3 px-4 bg-(--primary-bg-color) rounded-t-lg">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h3
                                    id="hs-slide-down-animation-modal-label"
                                    className="font-semibold text-2xl"
                                >
                                    Book Your FREE Consultation
                                </h3>
                                <p className="text-sm">
                                    Get expert advice from experienced doctors. 100% confidential
                                    and secure.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="size-6 inline-flex utral-600"
                                aria-label="Close"
                                data-hs-overlay="#hs-slide-down-animation-modal"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="shrink-0 size-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="p-4 overflow-y-auto space-y-4 text-gray-600">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <Label htmlFor="fullName">
                                    Full Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="space-y-2">
                                <Label htmlFor="mobileNumber">
                                    Mobile Number <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="mobileNumber"
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* WhatsApp Checkbox */}
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="isWhatsaapConnect"
                                    checked={formData.isWhatsaapConnect}
                                    onCheckedChange={handleCheckboxChange}
                                    className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                />
                                <Label htmlFor="isWhatsaapConnect" className="text-sm">
                                    Yes, you can also contact me via WhatsApp
                                </Label>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Health Concern */}
                            <div className="space-y-2">
                                <Label>
                                    Select Your Health Concern{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <div className="relative">
                                    <DiseasesInput
                                        text="Select concern"
                                        onChange={handleHealthConcern}
                                    />
                                </div>
                            </div>

                            {/* Condition */}
                            <div className="space-y-2">
                                <Label htmlFor="condition">Treatment/Condition</Label>
                                <Textarea
                                    id="condition"
                                    placeholder="e.g. Piles, Hernia, Kidney Stones"
                                    className="resize-none"
                                    value={formData.condition}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end items-center py-4 border-t border-gray-200 dark:border-neutral-700">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="mx-auto px-8 py-3 rounded-md font-semibold inline-flex items-center gap-x-2 text-md bg-(--orange-button-color) text-white disabled:opacity-50 disabled:pointer-events-none transition-all duration-500"
                            >
                                {isloading ? <Spinner /> : "Book free appointment"}

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointForm;
