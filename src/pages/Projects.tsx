import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const categories = ["All", "Commercial", "Residential", "Hospitality"];

const projects = [
  {
    id: 1,
    image: project1,
    title: "Tech Office Headquarters",
    category: "Commercial",
    description: "Geometric suspended ceiling with integrated lighting for a modern tech company.",
    year: "2024",
  },
  {
    id: 2,
    image: project2,
    title: "The Golden Oak Restaurant",
    category: "Hospitality",
    description: "Elegant acoustic ceiling panels creating the perfect dining ambiance.",
    year: "2024",
  },
  {
    id: 3,
    image: project3,
    title: "Luxury Family Home",
    category: "Residential",
    description: "Custom coffered ceiling with warm LED lighting throughout the living space.",
    year: "2023",
  },
  {
    id: 4,
    image: project1,
    title: "Corporate Law Firm",
    category: "Commercial",
    description: "Professional suspended ceiling with premium acoustic treatment.",
    year: "2023",
  },
  {
    id: 5,
    image: project2,
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    description: "Statement ceiling design creating a memorable first impression.",
    year: "2023",
  },
  {
    id: 6,
    image: project3,
    title: "Modern Apartment",
    category: "Residential",
    description: "Sleek PVC ceiling installation for a contemporary living space.",
    year: "2022",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
                Portfolio
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
                Our <span className="text-gradient-gold">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore our completed ceiling installations across commercial,
                residential, and hospitality sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground shadow-gold"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-xl bg-card"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                            {project.category}
                          </span>
                          <span className="text-primary-foreground/60 text-xs">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
