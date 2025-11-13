// ContactInfoPanel.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/config/constants/data";

export function ContactInfoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 h-full flex flex-col"
    >
      <h2 className="text-xl font-semibold">Contact Information</h2>

      <Card className="bg-[#E5F2ED] border-none py-1">
        <CardContent className="p-4 py-1 space-y-2">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 text-gray-700" />
            <div>
              <p className="font-semibold">{contactInfo.officeTitle}</p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#E5F2ED] border-none py-1">
        <CardContent className="p-4 py-2 flex items-start gap-2">
          <Phone className="w-5 h-5 mt-1 text-gray-700" />
          <div>
            <p className="font-semibold">{contactInfo.phoneLabel}</p>
            <p className="text-sm text-gray-600">{contactInfo.phone}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#E5F2ED] border-none py-1">
        <CardContent className="p-4 py-1 flex items-start gap-3">
          <Mail className="w-5 h-5 mt-1 text-gray-700" />
          <div>
            <p className="font-semibold">{contactInfo.emailLabel}</p>
            <p className="text-sm text-gray-600">{contactInfo.email}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#E5F2ED] border-none py-1">
        <CardContent className="p-4 py-1 flex items-start gap-3">
          <Globe className="w-5 h-5 mt-1 text-gray-700" />
          <div>
            <p className="font-semibold">{contactInfo.websiteLabel}</p>
            <p className="text-sm text-gray-600">{contactInfo.website}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#E5F2ED] border-none py-1">
        <CardContent className="p-4 py-1 flex items-start gap-3">
          <Clock className="w-5 h-5 mt-1 text-gray-700" />
          <div>
            <p className="font-semibold">{contactInfo.timingsLabel}</p>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {contactInfo.timings}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex-1"></div>
    </motion.div>
  );
}
