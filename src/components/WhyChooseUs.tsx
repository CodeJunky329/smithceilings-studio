import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, ThumbsUp, Ruler } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project comes with our quality assurance. We stand behind our work.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Projects completed on schedule, every time.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "A decade of expertise in ceiling installation and repairs.",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Join hundreds of satisfied homeowners and businesses.",
  },
  {
    icon: ThumbsUp,
    title: "Fair Pricing",
    description: "Competitive rates without compromising on quality or materials.",
  },
  {
    icon: Ruler,
    title: "Precision Work",
    description: "Meticulous attention to detail in every installation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why SmithCeilings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
              Built on Trust, <br />
              <span className="text-accent">Proven by Quality</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
              When you choose SmithCeilings, you're choosing a partner who cares about
              your project as much as you do. We bring together experience, precision,
              and a commitment to excellence that sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-4xl font-bold text-accent">10+</div>
                <div className="text-sm text-primary-foreground/60">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/60">Projects Done</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/60">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <reason.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-primary-foreground/60">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
