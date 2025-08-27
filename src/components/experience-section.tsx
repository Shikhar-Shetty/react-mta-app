import { Button } from "./ui/button"

const experiences = [
  {
    title: "Porsche Experience Centers",
    description: "Drive our latest models on world-class tracks designed to showcase their capabilities.",
    image: "/porsche-experience-center-racing-track-modern-arch.png",
  },
  {
    title: "Porsche Travel Club",
    description: "Exclusive driving adventures to the world's most spectacular destinations.",
    image: "/porsche-road-trip-scenic-mountain-landscape-luxury.png",
  },
  {
    title: "Porsche Classic",
    description: "Preserve and restore the heritage of your classic Porsche with authentic parts and expertise.",
    image: "/classic-porsche-restoration-workshop-vintage-cars-.png",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Beyond the <span className="text-accent">Drive</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Owning a Porsche opens doors to exclusive experiences, communities, and services that extend far beyond the
            vehicle itself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="group relative overflow-hidden rounded-lg bg-black border border-accent/20"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {experience.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">{experience.description}</p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black rounded-lg p-8 md:p-12 border border-accent/20">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Join the Porsche Family</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Connect with fellow enthusiasts, access exclusive events, and become part of a community that shares your
              passion for exceptional driving experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-black hover:bg-white font-semibold px-8">
                Find a Dealer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-black px-8 bg-transparent"
              >
                Schedule Test Drive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
