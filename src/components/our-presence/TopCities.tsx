import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "../index"
const cities = [
    "Jaipur",
    "Ahmedabad",
    "Bhopal",
    "Vadodara",
    "Indore",
    "Kanpur",
    "Noida",
    "Gurgaon",
    "Delhi",
    "Lucknow",
];

export default function TopCities() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <Heading text1="Top Cities Where We Provide" text2="Proctology Treatment" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
                {cities.map((city, index) => (
                    <Card
                        key={index}
                        className="flex flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl"
                    >
                        <CardContent className="flex flex-col items-center gap-3 p-0">
                            <MapPin className="w-8 h-8 text-blue-600" />
                            <h3 className="text-lg font-semibold">{city}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
