import { Send } from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "../ui";

export function InquiryFormPanel() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 h-full flex flex-col"
    >
      <h2 className="text-xl font-semibold">Send an Inquiry</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
        <Input
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
        <Input
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="+91—"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <Textarea
        placeholder="Briefly describe your requirements, materials, quantities, tolerances."
        className="h-28"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="How did you hear about us?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="google">Google</SelectItem>
          <SelectItem value="linkedin">LinkedIn</SelectItem>
          <SelectItem value="reference">Reference</SelectItem>
        </SelectContent>
      </Select>

      <p className="px-4 py-3 bg-green-600 text-white rounded-md text-sm w-fit">
        ✔ Real-time validation active
      </p>

      <Button className="bg-[#0A3D62] hover:bg-[#082F4D] text-white px-6 py-6 rounded-xl text-sm flex items-center gap-2">
        <Send size={16} /> Send Inquiry
      </Button>

      <div className="flex-1"></div>
    </motion.div>
  );
}
