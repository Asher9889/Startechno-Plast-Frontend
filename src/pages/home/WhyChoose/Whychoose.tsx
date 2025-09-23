import { AutoCarousel } from "@/components";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Layers,  ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-black via-[#0a0a1a] to-purple-900 text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-purple-400 underline">Startechno Plast</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* About Text */}
          <p className="flex-[1.5] text-gray-300 leading-relaxed text-justify mb-12">
            <strong>Startechno Plast</strong> is a trusted name in the mobile accessories industry, recognized for delivering high-quality and innovative products that enhance everyday digital lifestyles. As a leading manufacturer and trader, we are committed to offering premium solutions that combine cutting-edge technology, durability, and modern design. Our expertise lies in crafting mobile accessories that not only meet global quality standards but also reflect the evolving needs of today’s tech-savvy customers. Whether it’s seamless connectivity,fast charging, or immersive sound, our products are designed to deliver unmatched performance. Every product undergoes strict quality checks to ensure performance, reliability, and long-term value. With an extensive catalog and a customer-first approach , we help brands and retailers scale faster by offering OEM/ODM services tailored to their business goals. By blending innovation with trust, Startechno Plast continues to empower brands and enrich customer experiences across India and beyond. Our vision is to remain at the forefront of the mobile accessories industry, creating products that people love and rely on every day.
          </p>


         {/* Right Side Feature (Earbuds) */}
       

          <AutoCarousel />
         


        </div>
       
        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <Card className="bg-[#0d1220] border-none shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <Truck className="mx-auto mb-3 text-blue-400" size={28} />
              <h3 className="font-semibold text-white">Fast & Reliable Delivery</h3>
              <p className="text-gray-400 text-sm mt-2">
                Orders arrive safely and on time with real-time tracking support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220] border-none shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <Layers className="mx-auto mb-3 text-green-400" size={28} />
              <h3 className="font-semibold text-white">Wide Variety of Choices</h3>
              <p className="text-gray-400 text-sm mt-2">
                Explore an extensive collection of mobile accessories for every need.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220] border-none shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-3 text-yellow-400" size={28} />
              <h3 className="font-semibold text-white">Customer-Centric Service</h3>
              <p className="text-gray-400 text-sm mt-2">
                Your satisfaction is our priority—quality products with dependable support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220] border-none shadow-md rounded-2xl">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-3 text-purple-400" size={28} />
              <h3 className="font-semibold text-white">Assured Quality Standards</h3>
              <p className="text-gray-400 text-sm mt-2">
                Every product passes strict quality checks for lasting performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
