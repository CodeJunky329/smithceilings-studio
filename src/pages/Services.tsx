import { motion } from "framer-motion";
import { 
  Wrench, 
  Layers, 
  Grid3X3, 
  Sparkles, 
  Building2, 
  Home, 
  Check, 
  ArrowRight,
  Phone,
  ClipboardCheck,
  HardHat,
  ThumbsUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Ceiling Repairs & Fixing",
    description: "Expert repairs for damaged, sagging, or aging ceilings. We diagnose the issue and restore your ceiling to pristine condition.",
    benefits: ["Same-day assessment", "Invisible repairs", "Long-lasting fix", "Affordable rates"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Layers,
    title: "PVC Ceilings",
    description: "Durable, moisture-resistant PVC ceiling solutions. Perfect for bathrooms, kitchens, and humid environments.",
    benefits: ["100% waterproof", "Easy to clean", "Mold resistant", "15+ year lifespan"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Grid3X3,
    title: "Suspended Ceilings",
    description: "Professional drop ceiling installation for offices and commercial spaces with acoustic control.",
    benefits: ["Easy utility access", "Acoustic control", "Fire rated options", "Cost effective"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Bespoke ceiling designs tailored to your unique vision. From coffered to tray ceilings.",
    benefits: ["Unique designs", "LED integration", "Premium finishes", "Architectural value"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Large-scale installations for offices, retail, and industrial spaces with on-time delivery.",
    benefits: ["Project management", "Minimal downtime", "Safety compliant", "Bulk pricing"],
    gradient: "from-slate-500/20 to-zinc-500/20",
  },
  {
    icon: Home,
    title: "Residential Installations",
    description: "Transform your home with beautiful, lasting ceilings. Professional finish guaranteed.",
    benefits: ["Clean work sites", "Family friendly", "Flexible scheduling", "Full cleanup"],
    gradient: "from-rose-500/20 to-red-500/20",
  },
];

const processSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Free Consultation",
    description: "Call us or fill out our form. We'll discuss your needs and schedule a site visit.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Quote & Planning",
    description: "We assess your space and provide a detailed, no-obligation quote within 24 hours.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Expert Installation",
    description: "Our skilled team executes your project with precision and minimal disruption.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Quality Guarantee",
    description: "Final inspection, full cleanup, and our satisfaction guarantee on every job.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  What We Do Best
                </span>
              </motion.span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
                Ceiling Services That{" "}
                <span className="text-gradient-gold">Elevate</span> Your Space
              </h1>
              
              <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                From quick repairs to complete transformations, we deliver exceptional 
                ceiling solutions for homes and businesses across Cape Town.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-gold group">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-primary-foreground/10"
            >
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "30+", label: "Years Experience" },
                { value: "100%", label: "Satisfaction Rate" },
                { value: "24h", label: "Quote Turnaround" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Complete Ceiling Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                Whatever your ceiling needs, we have the expertise to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Simple, Transparent Process
              </h2>
              <p className="text-muted-foreground text-lg">
                From first contact to final finish, we make the process smooth and stress-free.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
                  )}

                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
                    <step.icon className="h-8 w-8 text-accent" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/95" />
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your{" "}
                <span className="text-gradient-gold">Ceiling</span>?
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
                Get a free, no-obligation quote today. Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-gold group text-base px-8">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+27839881164">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-accent/40 bg-accent/10 text-primary-foreground hover:bg-accent/20 hover:text-primary-foreground text-base px-8"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
