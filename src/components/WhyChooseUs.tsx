import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, ThumbsUp, Ruler, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project comes with our quality assurance.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Projects completed on schedule.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized excellence in ceiling craftsmanship.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience.",
  },
  {
    icon: ThumbsUp,
    title: "Fair Pricing",
    description: "Competitive rates without compromising quality.",
  },
  {
    icon: Ruler,
    title: "Precision Work",
    description: "Meticulous attention to every detail.",
  },
];

const stats = [
  { value: "30+", label: "Years of Excellence", suffix: "" },
  { value: "1,000", label: "Projects Completed", suffix: "+" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
  { value: "50", label: "Expert Craftsmen", suffix: "+" },
];

const highlights = [
  "Premium materials sourced from trusted suppliers",
  "Comprehensive warranty on all installations",
  "Free consultation and detailed quotes",
  "Clean, professional work environment",
];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-grid)" />
        </svg>
      </div>

      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-sm text-primary-foreground/60 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6"
            >
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Why SmithCeilings
              </span>
            </motion.span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Built on Trust,{" "}
              <span className="text-accent">Proven by Quality</span>
            </h2>

            <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
              When you choose SmithCeilings, you're choosing a partner who cares about
              your project as much as you do. We bring together decades of experience, precision
              craftsmanship, and a commitment to excellence that sets us apart.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="btn-gold group h-14 px-8">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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
                className="group bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
