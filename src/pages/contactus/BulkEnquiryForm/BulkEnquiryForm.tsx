import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const BulkEnquiryFormforContact = () => {
  return (
    <section className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border">
      {/* Header */}
      <div className="bg-green-600 text-white text-center py-4 font-semibold text-lg">
        BULK ENQUIRY NOW
      </div>

      <div className="p-6 space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Your Name</label>
          <Input
            placeholder="Enter your name"
            className="mt-1 text-black placeholder:text-gray-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Your Phone No.
          </label>
          <div className="flex gap-2 mt-1">
            <div className="min-w-[80px] bg-gray-100 flex items-center justify-center font-medium text-gray-700 rounded-md border px-2">
              IN +91
            </div>
            <Input
              placeholder="81234 56789"
              className="text-black placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Select Categories
          </label>
          <Select>
            <SelectTrigger className="mt-1 text-black placeholder:text-gray-500">
              <SelectValue placeholder="Choose a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="plastic">Plastic Components</SelectItem>
              <SelectItem value="molding">Injection Molding</SelectItem>
              <SelectItem value="tooling">Tooling Design</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div>
          <label className="text-sm font-medium text-gray-700">Your City</label>
          <Input
            placeholder="Enter your city"
            className="mt-1 text-black placeholder:text-gray-500"
          />
        </div>

        {/* CTA */}
        <Button className="w-full bg-[#062f63] hover:bg-[#041f40] text-white font-semibold py-6 rounded-lg">
          INQUIRE NOW
        </Button>

        {/* Footer Text */}
        <p className="text-xs text-center text-gray-500 mt-2">
          We typically respond within 24 working hours.
        </p>
      </div>
    </section>
  );
};

export default BulkEnquiryFormforContact;
