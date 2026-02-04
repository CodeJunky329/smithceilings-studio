import { motion } from "framer-motion";
import { Wrench, Layers, Grid3X3, Sparkles, Building2, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Ceiling Repairs",
    description: "Expert repairs for damaged, sagging, or aging ceilings. We restore your ceiling to pristine condition.",
    gradient: "from-orange-500/20 to-red-500/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: Layers,
    title: "PVC Ceilings",
    description: "Durable, moisture-resistant PVC ceiling solutions. Perfect for bathrooms, kitchens, and humid areas.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Grid3X3,
    title: "Suspended Ceilings",
    description: "Professional drop ceiling installation for offices and commercial spaces. Clean, modern aesthetics.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Bespoke ceiling designs tailored to your unique vision. From coffered to tray ceilings.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Large-scale installations for offices, retail, and industrial spaces. On-time, on-budget delivery.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Transform your home with beautiful, lasting ceilings. We treat every home like our own.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              What We Do
            </span>
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Ceiling{" "}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From simple repairs to complex installations, we deliver ceiling solutions
            that exceed expectations with premium craftsmanship.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border overflow-hidden card-hover"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <Button size="lg" className="btn-gold group h-14 px-8">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
