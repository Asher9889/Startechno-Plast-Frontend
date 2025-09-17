import { Heading } from "../index"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ScanLine,
  Stethoscope,
  Building2,
  Wallet,
  FileCheck2,
  HeartPulse,
} from "lucide-react";

const items = [
  {
    quote: "100% Laser-Assisted Treatments",
    name: "Modern, precise, and less painful procedures.",
    icon: ScanLine,
  },
  {
    quote: "Experienced Proctologists",
    name: "Average 20+ years in colorectal surgery.",
    icon: Stethoscope,
  },
  {
    quote: "NABH-Accredited Hospitals",
    name: "Trusted facilities and operating rooms.",
    icon: Building2,
  },
  {
    quote: "EMI Options Available",
    name: "Flexible payment plans to ease your journey.",
    icon: Wallet,
  },
  {
    quote: "Insurance Support",
    name: "End-to-end documentation and approvals.",
    icon: FileCheck2,
  },
  {
    quote: "Post-Surgery Recovery",
    name: "Personalized aftercare and follow-ups.",
    icon: HeartPulse,
  },
];

export default function WhyPureCheckup() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <Heading text1="Why Choose" text2="PureCheckup?"/>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 rounded-2xl"
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {item.quote}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-(--text-primary)">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
