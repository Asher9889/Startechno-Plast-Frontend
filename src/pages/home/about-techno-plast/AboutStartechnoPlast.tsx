import {
  Battery,
  Zap,
  Speaker,
  Headphones,
  // Earbuds,
  Flame,
} from "lucide-react";

const products = [
  {
    name: "Power Banks",
    description:
      "Reliable, long-lasting, and compact solutions to keep your devices charged on the go.",
    icon: Battery,
  },
  {
    name: "Chargers",
    description:
      "Safe, efficient, and fast-charging adapters designed for universal compatibility.",
    icon: Zap,
  },
  {
    name: "Bluetooth Speakers",
    description:
      "Engineered for deep bass, clear vocals, and wireless convenience, perfect for both personal and professional use.",
    icon: Speaker,
  },
  {
    name: "Neckbands",
    description:
      "Lightweight, comfortable, and equipped with powerful sound for music and calls on the move.",
    icon: Headphones,
  },
  {
    name: "Earbuds",
    description:
      "Sleek and stylish with noise reduction features, ensuring crystal-clear sound anytime, anywhere.",
    icon: "Earbuds",
  },
  {
    name: "Electronic Lighters",
    description:
      "Modern, rechargeable, and eco-friendly alternatives to traditional lighters.",
    icon: Flame,
  },
];

const AboutStartechnoPlast = () => {
  return (
    <section className="w-full min-h-screen p-10 bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col gap-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-[var(--color-primary)]">
          About Startechno Plast
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Startechno Plast is a trusted name in the mobile accessories industry,
          recognized for delivering high-quality and innovative products that
          enhance everyday digital lifestyles. As a leading manufacturer and
          trader, we are committed to offering premium solutions that combine
          cutting-edge technology, durability, and modern design.
        </p>
      </div>

      {/* Expertise + Products */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col gap-5 text-[var(--color-text)] relative">
          <p>
            Our expertise lies in crafting mobile accessories that not only meet
            global quality standards but also reflect the evolving needs of
            today’s tech-savvy customers. Whether it’s seamless connectivity,
            fast charging, or immersive sound, our products are designed to
            deliver unmatched performance.
          </p>

          <p>
            At Startechno Plast, we specialize in a wide range of products,
            including:
          </p>

          {/* Decorative image at bottom-left */}
          {/* <img
            src="https://media.istockphoto.com/id/1269127423/photo/charged-mobile-phones-and-tablets.jpg?s=612x612&w=0&k=20&c=_okNSDtFuCfROiyFakT6ZbnFPg7pVT2YNnRHii6U5ck=" // 👉 replace with your own illustration/product
            alt="Decorative"
            className="absolute bottom-0 left-0 w-40 md:w-56 opacity-90 pointer-events-none select-none"
          /> */}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map(({ name, description, icon: Icon }) => (
            <div
              key={name}
              className="relative group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-full bg-[var(--color-primary-light)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-primary-dark)]">
                  {name}
                </h3>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {description}
              </p>
              {/* subtle accent line */}
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-[var(--color-secondary)] transition-all duration-300 rounded-b-2xl"></span>
            </div>
          ))}
        </div>
      </div>

      {/* OEM / Vision */}
      <div className="max-w-5xl mx-auto space-y-6 text-center md:text-left">
        <p>
          Every product undergoes strict quality checks to ensure performance,
          reliability, and long-term value. With an extensive catalog and a
          customer-first approach, we help brands and retailers scale faster by
          offering OEM/ODM services tailored to their business goals.
        </p>

        <p>
          By blending innovation with trust, Startechno Plast continues to
          empower brands and enrich customer experiences across India and
          beyond. Our vision is to remain at the forefront of the mobile
          accessories industry, creating products that people love and rely on
          every day.
        </p>
      </div>
    </section>
  );
};

export default AboutStartechnoPlast;
