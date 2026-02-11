import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ceiling.jpg";

const features = [
  "Premium Quality Materials",
  "Expert Installation",
  "30+ Years Experience",
];

const stats = [
  { value: "500+", label: "Projects Done" },
  { value: "30+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium ceiling installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 dark:from-background dark:via-background/98 dark:to-background/70" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-20 h-20 bg-accent/10 rounded-full blur-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[25%] w-32 h-32 bg-accent/5 rounded-full blur-3xl hidden lg:block"
      />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-accent">
                Trusted by 1,000+ Homeowners
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Premium Ceiling
              <br />
              Solutions{" "}
              <span className="text-gradient-gold">Built to Last</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8"
            >
              We install ceilings that don't just look good, they last. From PVC to
              suspended ceilings, we deliver craftsmanship you can trust.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/contact">
                <Button size="lg" className="btn-gold group h-14 px-8 text-base">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-2 border-foreground/20 h-14 px-8 text-base group text-foreground hover:text-foreground hover:bg-foreground/10">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-accent-foreground">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-l border-border pl-6">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">4.9/5</span> from 200+ reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Stats Cards (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4 items-end"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 w-56 card-hover"
              >
                <div className="font-display text-4xl font-bold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
