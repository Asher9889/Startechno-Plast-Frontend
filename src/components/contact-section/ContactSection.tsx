import React from 'react';

const cities = [
  "Ahmedabad", "Indore", "Jaipur", "Bhopal", "Vadodara"
];

const diseases = [
  "Proctology",
  "Urology",
  "Laproscopy",
  "Gynaecology",
  "Aesthetics",
  "Patient",
];

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Text Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-gray-600">
              Tell us what you are facing. Our medical experts will help you choose the safest and most effective treatment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Purecheck services are accessible Pan India
            </h3>
            <p className="text-gray-600">
              PureCheckup brings advanced surgical care powered by the latest medical technologies to 10+ cities across India, including{" "}
              {cities.map((city, idx) => (
                <span key={city} className="text-blue-600">
                  {city}
                  {idx !== cities.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Disclaimer:</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Results and recovery experiences may vary for each patient. By submitting this form or calling us, you consent to receive important updates and promotional communications from PureCheckup.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-[#002D45] rounded-2xl p-8 text-white w-full">
          <h3 className="text-lg font-semibold text-center mb-6">Let's Schedule Your Surgery</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
            />
            <select className="w-full rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white">
              <option>Select City</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <select className="w-full rounded-md px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none">
              <option>Select Disease</option>
              {diseases.map((disease) => (
                <option key={disease}>{disease}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold py-3 rounded-md"
            >
              Book Free Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
