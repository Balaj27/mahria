import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Business Owner",
    content:
      "Mahria Construction exceeded our expectations. Their professionalism and attention to detail was outstanding. We highly recommend them for any construction project.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    role: "Homeowner",
    content:
      "The interior design team transformed our home beautifully. They understood our vision perfectly and delivered beyond our expectations. Exceptional work!",
    rating: 5,
  },
  {
    name: "Muhammad Ali",
    role: "Developer",
    content:
      "Working with Mahria on our town planning project was excellent. Their expertise and innovative approach helped us create a sustainable community.",
    rating: 5,
  },
  {
    name: "Sara Abdullah",
    role: "Corporate Executive",
    content:
      "Our office complex was completed on time and within budget. The architectural design is stunning and functional. Very professional team.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our satisfied clients say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
