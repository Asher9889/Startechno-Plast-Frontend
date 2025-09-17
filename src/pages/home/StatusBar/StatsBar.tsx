const StatsBar = () => {
  const stats = [
    { number: "10k+", label: "Happy Patients" },
    { number: "50+", label: "Doctors" },
    { number: "50+", label: "Cities" },
    { number: "50+", label: "Clinics" },
  ];

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="bg-(--primary-bg-color) text-white rounded-2xl flex flex-col md:flex-row items-center justify-between text-center divide-y divide-[#1d63b4] md:divide-y-0 md:divide-x">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 px-6 py-6 flex flex-col items-center justify-center"
          >
            <h2 className="font-bold text-2xl md:text-3xl">{stat.number}</h2>
            <p className="text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
