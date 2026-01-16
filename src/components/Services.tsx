import {
  Home,
  Building2,
  Route,
  Hammer,
  Compass,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Custom homes and apartment complexes built with precision engineering and modern design aesthetics for comfortable living.",
      features: ["Custom Design", "Quality Materials", "Modern Amenities"],
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description:
        "Office complexes, shopping centers, and commercial spaces designed for functionality and architectural excellence.",
      features: ["Office Complexes", "Retail Spaces", "Industrial Buildings"],
    },
    {
      icon: Route,
      title: "Road & Infrastructure",
      description:
        "Highways, bridges, and urban infrastructure projects that connect communities and drive economic growth.",
      features: ["Highways", "Bridges", "Urban Development"],
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description:
        "Transform existing structures with modern upgrades while preserving structural integrity and heritage value.",
      features: ["Structural Upgrades", "Interior Renovation", "Restoration"],
    },
    {
      icon: Compass,
      title: "Structural Design & Engineering",
      description:
        "Expert engineering consultancy for complex structural designs, feasibility studies, and project planning.",
      features: ["Structural Analysis", "Project Planning", "Consultancy"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="section-title">Comprehensive Construction Solutions</h2>
          <p className="section-subtitle mx-auto mt-4">
            From concept to completion, we deliver end-to-end construction
            services tailored to meet your specific requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-service group bg-card"
            >
              {/* Icon */}
              <div className="feature-icon mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              {/* <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
