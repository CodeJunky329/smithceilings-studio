import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free consultation & site visit",
  "Detailed written quote",
  "No obligation, no pressure",
];

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="currentColor" />
              <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Accent Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Get Started Today
              </span>
            </motion.span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Transform{" "}
              <span className="text-accent">Your Space?</span>
            </h2>

            <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
              Let's discuss your project. Get a free, no-obligation quote and see why
              hundreds of clients trust SmithCeilings for their ceiling solutions.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/10"
          >
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">
              Request Your Free Quote
            </h3>

            <div className="space-y-4">
              <Link to="/contact" className="block">
                <Button size="lg" className="btn-gold group w-full h-14 text-base justify-center">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <a href="tel:+27839881164" className="block">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full h-14 text-base border-2 border-accent/40 bg-accent/10 text-primary-foreground hover:bg-accent/20 hover:text-primary-foreground justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 083 988 1164
                </Button>
              </a>

              <a 
                href="https://wa.me/27839881164?text=Hi%20SmithCeilings!%20I'd%20like%20to%20get%20a%20quote%20for%20a%20ceiling%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full h-14 text-base border-2 border-emerald-500/40 bg-emerald-500/10 text-primary-foreground hover:bg-emerald-500/20 hover:text-primary-foreground justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
              <p className="text-sm text-primary-foreground/60">
                Available Monday - Saturday, 7AM - 6PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
