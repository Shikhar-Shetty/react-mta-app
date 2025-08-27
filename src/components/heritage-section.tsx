const milestones = [
  {
    year: "1948",
    title: "The Beginning",
    description: "Ferry Porsche creates the first Porsche 356, laying the foundation for a legendary brand.",
  },
  {
    year: "1963",
    title: "911 Born",
    description: "The iconic 911 debuts, becoming the heart and soul of Porsche for generations to come.",
  },
  {
    year: "1970",
    title: "Racing Dominance",
    description: "Porsche 917 achieves the first overall victory at Le Mans, beginning decades of racing success.",
  },
  {
    year: "2019",
    title: "Electric Future",
    description: "The Taycan launches, proving that electric can be emotional and performance-focused.",
  },
]

export function HeritageSection() {
  return (
    <section id="heritage" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              75 Years of <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              From a small workshop in Austria to a global icon of performance and luxury. Our heritage is built on
              innovation, precision, and an unwavering commitment to the pure joy of driving.
            </p>

            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{milestone.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-semibold">{milestone.year}</span>
                      <h3 className="font-serif text-xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src="/vintage-porsche-356-classic-car-museum-display-ele.png" alt="Porsche Heritage" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
