import { motion } from "framer-motion";
import { Wrench, Layers, Grid3X3, Sparkles, Building2, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Ceiling Repairs",
    description: "Expert repairs for damaged, sagging, or aging ceilings. We restore your ceiling to pristine condition.",
  },
  {
    icon: Layers,
    title: "PVC Ceilings",
    description: "Durable, moisture-resistant PVC ceiling solutions. Perfect for bathrooms, kitchens, and humid areas.",
  },
  {
    icon: Grid3X3,
    title: "Suspended Ceilings",
    description: "Professional drop ceiling installation for offices and commercial spaces. Clean, modern aesthetics.",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Bespoke ceiling designs tailored to your unique vision. From coffered to tray ceilings.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Large-scale installations for offices, retail, and industrial spaces. On-time, on-budget delivery.",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Transform your home with beautiful, lasting ceilings. We treat every home like our own.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple repairs to complex installations, we deliver ceiling solutions
            that exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-xl p-8 border border-border card-hover"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-2">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
