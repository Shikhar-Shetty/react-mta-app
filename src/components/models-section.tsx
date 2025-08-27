import { Button } from "./ui/button"

const models = [
  {
    name: "911",
    tagline: "The Icon",
    description: "The legendary sports car that defines Porsche. Pure driving pleasure in its most concentrated form.",
    image: "/porsche-911-carrera-s-silver-sports-car-side-view-.png",
    price: "From $106,100",
    specs: ["3.0L Twin-Turbo H6", "379-443 HP", "0-60 in 3.5s"],
  },
  {
    name: "Taycan",
    tagline: "Soul, Electrified",
    description: "The first fully electric Porsche. Zero emissions, maximum emotions.",
    image: "/porsche-taycan-electric-sedan-white-modern-design-.png",
    price: "From $86,700",
    specs: ["Electric Drivetrain", "402-750 HP", "0-60 in 2.6s"],
  },
  {
    name: "Cayenne",
    tagline: "The Sports Car of SUVs",
    description: "Uncompromising performance meets everyday versatility in perfect harmony.",
    image: "/porsche-cayenne-suv-black-luxury-vehicle-dark-back.png",
    price: "From $69,000",
    specs: ["3.0L Turbo V6", "335-541 HP", "0-60 in 5.1s"],
  },
]

export function ModelsSection() {
  return (
    <section id="models" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-accent">Models</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Each Porsche is engineered to deliver an unparalleled driving experience, combining cutting-edge technology
            with timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.name} className="group relative overflow-hidden rounded-lg bg-card border border-accent/20">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl font-bold text-white">{model.name}</h3>
                  <span className="text-accent font-semibold">{model.price}</span>
                </div>

                <p className="text-accent font-medium mb-3">{model.tagline}</p>
                <p className="text-white/80 mb-4 leading-relaxed">{model.description}</p>

                <div className="space-y-2 mb-6">
                  {model.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center text-sm text-white/70">
                      <div className="w-1 h-1 bg-accent rounded-full mr-3" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-white text-black hover:bg-accent hover:text-black">Explore</Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
                  >
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
