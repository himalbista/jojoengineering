import { Target, Eye, Shield, Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous safety protocols ensuring zero-harm workplaces",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Premium materials and engineering precision in every project",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional engineers with decades of experience",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Meeting deadlines without compromising quality",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="about" className="section-padding bg-background">
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
            About Us
          </span>
          <h2 className="section-title">Building Nepal's Future</h2>
          <p className="section-subtitle mx-auto mt-4">
            Founded by professional engineers, JoJo Engineering & Construction Pvt. Ltd. has
            been transforming Nepal's landscape with innovative construction
            solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Engineering Excellence Since Day One
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              JoJo Engineering & Construction Pvt. Ltd. was established with a vision to bring
              world-class engineering standards to Nepal's construction industry.
              Our team of experienced engineers combines technical expertise with
              innovative approaches to deliver projects that stand the test of
              time.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From residential buildings to major infrastructure projects, we have
              consistently demonstrated our commitment to quality, safety, and
              timely delivery. Our engineer-led approach ensures that every
              project meets the highest standards of structural integrity and
              design excellence.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-secondary p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To build sustainable infrastructure that empowers communities
                  and drives Nepal's development forward.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-secondary p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  To be Nepal's most trusted construction partner, known for
                  engineering excellence and innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="card-service group"
              >
                <div className="feature-icon mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
