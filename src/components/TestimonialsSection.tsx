import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    avatar: "PS",
    stars: 5,
    quote:
      "I had extreme dental anxiety, but Dr. Mehta made me feel completely at ease. The root canal was absolutely painless — I couldn't believe it. The clinic is spotless and the staff is incredibly kind.",
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    avatar: "RV",
    stars: 5,
    quote:
      "Best dental experience I've ever had! Got my Invisalign done here and the results are stunning. The team is professional, the clinic is state-of-the-art, and the pricing is very fair.",
  },
  {
    name: "Anita Patel",
    role: "Teacher",
    avatar: "AP",
    stars: 5,
    quote:
      "Took my 7-year-old daughter here and she actually enjoyed the visit! The pediatric dentist was so patient and playful with her. Our whole family now visits SmileCare for everything.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-4">
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real patients who trusted us with their smiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-card border border-border/50 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
