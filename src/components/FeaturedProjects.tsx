import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import projectOffice from "@/assets/project-office.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectResidential from "@/assets/project-residential.jpg";

const projects = [
  {
    id: 1,
    image: projectOffice,
    title: "Modern Office Complex",
    category: "Commercial",
    description: "Geometric suspended ceiling installation for a tech company headquarters with integrated smart lighting.",
    stats: { area: "2,500 sqm", duration: "4 weeks" },
  },
  {
    id: 2,
    image: projectRestaurant,
    title: "Upscale Restaurant",
    category: "Hospitality",
    description: "Elegant acoustic ceiling panels with integrated ambient lighting for premium dining experience.",
    stats: { area: "800 sqm", duration: "2 weeks" },
  },
  {
    id: 3,
    image: projectResidential,
    title: "Luxury Residence",
    category: "Residential",
    description: "Custom coffered ceiling with premium LED lighting integration and decorative moldings.",
    stats: { area: "350 sqm", duration: "3 weeks" },
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projects-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Portfolio
              </span>
            </motion.span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured{" "}
              <span className="text-gradient-gold">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              Explore our latest work showcasing premium ceiling installations across various sectors.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="border-2 group h-12 px-6">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <div>
                    <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Area</div>
                    <div className="text-sm font-semibold text-primary-foreground">{project.stats.area}</div>
                  </div>
                  <div>
                    <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Duration</div>
                    <div className="text-sm font-semibold text-primary-foreground">{project.stats.duration}</div>
                  </div>
                </div>
              </div>

              {/* Corner Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <Button size="lg" className="btn-gold group h-14 px-8">
              Explore Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
