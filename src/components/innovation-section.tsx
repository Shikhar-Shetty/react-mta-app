const innovations = [
  {
    title: "Porsche Active Suspension Management",
    description: "Adaptive damping system that continuously adjusts to road conditions and driving style.",
    icon: "/suspension-system-icon-white-minimalist.png",
  },
  {
    title: "Porsche Communication Management",
    description: "Intuitive infotainment system with seamless smartphone integration and navigation.",
    icon: "/digital-dashboard-icon-white-minimalist.png",
  },
  {
    title: "Porsche Traction Management",
    description: "Intelligent all-wheel drive system that optimizes power distribution for maximum performance.",
    icon: "/all-wheel-drive-icon-white-minimalist.png",
  },
  {
    title: "Porsche Electric Performance",
    description: "Revolutionary electric drivetrain technology delivering instant torque and zero emissions.",
    icon: "/electric-motor-icon-white-minimalist.png",
  },
]

export function InnovationSection() {
  return (
    <section id="innovation" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering <span className="text-accent">Innovation</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Every Porsche incorporates decades of motorsport expertise and cutting-edge technology to deliver
            uncompromising performance and driving pleasure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation) => (
            <div key={innovation.title} className="group text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <img
                    src={innovation.icon || "/placeholder.svg"}
                    alt={innovation.title}
                    className="w-8 h-8 group-hover:brightness-0 transition-all duration-300"
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {innovation.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{innovation.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative rounded-lg overflow-hidden">
          <img src="/porsche-factory-manufacturing-precision-engineerin.png" alt="Porsche Innovation" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Precision in Every Detail</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                From our state-of-the-art facilities to our meticulous craftsmanship, every Porsche is built to exceed
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
