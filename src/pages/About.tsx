import { motion } from "framer-motion";
import { Award, Target, Users, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on materials or workmanship. Every project gets our best.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail ensures flawless finishes on every installation.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your satisfaction drives everything we do. We listen, adapt, and deliver.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On time, on budget, every time. We respect your schedule and keep our promises.",
  },
];

const About = () => {
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
                About Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
                Craftsmanship You Can <span className="text-gradient-gold">Trust</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                For over three decades, SmithCeilings has been transforming spaces across
                Cape Town with premium ceiling solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                  Meet Salie Smith
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    SmithCeilings was founded by Salie Smith, a craftsman with a passion
                    for perfection. What started as a small operation has grown into one
                    of Cape Town's most trusted ceiling installation companies.
                  </p>
                  <p>
                    "I started this business because I saw too many homeowners left with
                    subpar work and unfulfilled promises. I wanted to build something
                    different, a company where quality and honesty come first."
                  </p>
                  <p>
                    Today, with over 30 years of experience and over one thousand of completed
                    projects, that commitment remains unchanged. Every ceiling we install
                    carries our reputation, and we take that seriously.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center font-display font-bold text-2xl text-accent">
                    SS
                  </div>
                  <div>
                    <div className="font-semibold">Salie Smith</div>
                    <div className="text-sm text-muted-foreground">Founder & Lead Ceiling Fixer</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary rounded-2xl p-8 text-primary-foreground"
              >
                <h3 className="font-display text-2xl font-bold mb-6">Our Numbers</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="font-display text-5xl font-bold text-accent">30+</div>
                    <div className="text-primary-foreground/70 mt-1">Years in Business</div>
                  </div>
                  <div>
                    <div className="font-display text-5xl font-bold text-accent">1k+</div>
                    <div className="text-primary-foreground/70 mt-1">Projects Completed</div>
                  </div>
                  <div>
                    <div className="font-display text-5xl font-bold text-accent">100%</div>
                    <div className="text-primary-foreground/70 mt-1">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="font-display text-5xl font-bold text-accent">24h</div>
                    <div className="text-primary-foreground/70 mt-1">Quote Response</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Values</h2>
              <p className="text-muted-foreground mt-4">
                The principles that guide every project we undertake.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
