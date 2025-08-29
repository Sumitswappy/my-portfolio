const academicsData = [
  {
    university: 'Kalinga Institute of Industrial Technology University',
    degree: 'Masters of Computer Applications',
    dates: 'Sept 2024 - Aug 2026',
    grade: 'CGPA: 9.10',
  },
  {
    university: 'Techno India College of Technology',
    degree: 'Bachelors of Computer Applications',
    dates: 'Sept 2021 - July 2024',
    grade: 'CGPA: 8.80',
  },
  {
    university: 'Sunrise English Medium School',
    degree: 'ISC (Class 12)',
    dates: 'May 2020 - July 2021',
    grade: 'Percentage: 88.5%',
  },
];

const Academics = () => {
  return (
    <section id="academics" className="py-38 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-text-light sm:text-5xl">
          My Journey
        </h2>
        
        {/* --- DESKTOP: Alternating Timeline (Visible on medium screens and up) --- */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 top-2 h-full w-0.5 -translate-x-1/2 bg-gray-700"></div>
            <div className="space-y-12">
              {academicsData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute top-0 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-accent bg-transparent shadow-[0_0_20px] shadow-accent/50"></div>
                  <div
                    className={`flex items-center md:gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="hidden w-1/2 md:block"></div>
                    <div className="w-full rounded-lg border border-gray-700 bg-main-gray p-6 md:w-1/2">
                      <h3 className="text-xl font-bold text-text-light">{item.university}</h3>
                      <p className="mt-1 text-text-light">{item.degree}</p>
                      <p className="mt-2 text-sm text-text-dark">{item.dates}</p>
                      <p className="mt-1 text-sm text-text-dark">{item.grade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- MOBILE: Simple Vertical Timeline (Hidden on medium screens and up) --- */}
        <div className="relative md:hidden">
          <div className="absolute left-3 top-2 h-full w-0.5 -translate-x-1/2 bg-gray-700"></div>
          <div className="space-y-12">
            {academicsData.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute top-0 left-3 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-accent bg-transparent shadow-[0_0_20px] shadow-accent/50"></div>
                <div className="rounded-lg border border-gray-700 bg-main-gray p-6">
                  <h3 className="text-xl font-bold text-text-light">{item.university}</h3>
                  <p className="mt-1 text-text-light">{item.degree}</p>
                  <p className="mt-2 text-sm text-text-dark">{item.dates}</p>
                  <p className="mt-1 text-sm text-text-dark">{item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;