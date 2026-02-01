import { motion } from "framer-motion";
import { Wrench, Layers, Grid3X3, Sparkles, Building2, Home, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Ceiling Repairs & Fixing",
    description: "Expert repairs for damaged, sagging, or aging ceilings. We diagnose the issue and restore your ceiling to pristine condition with minimal disruption.",
    benefits: ["Same-day assessment", "Invisible repairs", "Long-lasting fix", "Affordable rates"],
  },
  {
    icon: Layers,
    title: "PVC Ceilings",
    description: "Durable, moisture-resistant PVC ceiling solutions. Perfect for bathrooms, kitchens, and humid areas where traditional ceilings would deteriorate.",
    benefits: ["100% waterproof", "Easy to clean", "Mold resistant", "15+ year lifespan"],
  },
  {
    icon: Grid3X3,
    title: "Suspended Ceilings",
    description: "Professional drop ceiling installation for offices and commercial spaces. Hide wiring, improve acoustics, and create a clean, modern aesthetic.",
    benefits: ["Easy access to utilities", "Acoustic control", "Fire rated options", "Cost effective"],
  },
  {
    icon: Sparkles,
    title: "Custom Ceiling Solutions",
    description: "Bespoke ceiling designs tailored to your unique vision. From coffered to tray ceilings, we bring architectural elegance to your space.",
    benefits: ["Unique designs", "LED integration", "Premium finishes", "Architectural value"],
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Large-scale installations for offices, retail, and industrial spaces. We handle projects of all sizes with on-time, on-budget delivery.",
    benefits: ["Project management", "Minimal downtime", "Safety compliant", "Bulk pricing"],
  },
  {
    icon: Home,
    title: "Residential Installations",
    description: "Transform your home with beautiful, lasting ceilings. We treat every home like our own, ensuring a spotless, professional finish.",
    benefits: ["Clean work sites", "Family friendly", "Flexible scheduling", "Full cleanup"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Expertise
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
                Professional Ceiling <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                From repairs to complete installations, we offer comprehensive ceiling
                solutions for homes and businesses across Cape Town.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="mt-8 mb-8 btn-gold group">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div
                    className={`bg-secondary/50 rounded-2xl aspect-video flex items-center justify-center ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <service.icon className="h-24 w-24 text-accent/30" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
