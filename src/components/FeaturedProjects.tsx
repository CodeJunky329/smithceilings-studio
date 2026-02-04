import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    description: "Geometric suspended ceiling installation for a tech company headquarters.",
  },
  {
    id: 2,
    image: projectRestaurant,
    title: "Upscale Restaurant",
    category: "Hospitality",
    description: "Elegant acoustic ceiling panels with integrated ambient lighting.",
  },
  {
    id: 3,
    image: projectResidential,
    title: "Luxury Residence",
    category: "Residential",
    description: "Custom coffered ceiling with premium LED lighting integration.",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12"
        >
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
              Featured Projects
            </h2>
          </div>
          <Link to="/projects">
            <Button variant="outline" className="border-2 group">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
