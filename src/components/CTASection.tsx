import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-accent/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform <br />
            <span className="text-gradient-gold">Your Space?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let's discuss your project. Get a free, no-obligation quote and see why
            hundreds of clients trust SmithCeilings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="btn-gold group">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+27000000000">
              <Button size="lg" variant="outline" className="border-2">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Or WhatsApp us directly for a quick response
          </p>
        </motion.div>
      </div>
    </section>
  );
}
