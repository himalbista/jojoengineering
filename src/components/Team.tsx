import { Linkedin, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";
import teamCeo from "@/assets/team-ceo.jpg";
import teamEngineer from "@/assets/team-engineer.jpg";
import teamPm from "@/assets/team-pm.jpg";
import teamStructural from "@/assets/team-structural.jpg";
import teamArchitect from "@/assets/team-architect.jpg";
import teamSupervisor from "@/assets/team-supervisor.jpg";
import sachit from "@/assets/sachit.png";
import lauka from "@/assets/lauka.png";
import hcf from "@/assets/hcf.png";
import jojo from "@/assets/jojo.png";

const Team = () => {
  const teamMembers = [
    {
      image: jojo,
      name: "Neejam Bhandari",
      role: "Chairman",
      expertise: "Governance and Oversight",
      // experience: "20+ years in structural engineering",
      description:
        "Focus on strategic oversight, governance, and guiding the Board and executive leadership.",
    },
    {
      image: sachit,
      name: "Er. Sachit Thapa",
      role: "Managing Director",
      expertise: "Strategic Leadership",
      // experience: "25+ years in civil engineering and business management",
      description:
        "Visionary leader with extensive experience in large-scale infrastructure development across Nepal.",
    },
     {
      image: lauka,
      name: "Lokendra Saud",
      role: "CEO",
      expertise: "Operational Oversight",
      // experience: "12+ years managing major projects",
      description:
        "Responsible for setting the vision, making high-level decisions, leading the company, and being accountable to the Board of Directors.",
    },
    {
      image: hcf,
      name: "Er. Nirajan Dural",
      role: "Technical Director",
      expertise: "Project Engineering",
      // experience: "15+ years in modern architecture",
      description:
        "Expert in structural design and construction methodology, ensuring every project meets international standards.",
    },
   
    // {
    //   image: teamStructural,
    //   name: "Bikash Rai",
    //   role: "Structural Engineer",
    //   expertise: "Structural Analysis",
    //   experience: "10+ years in structural engineering",
    //   description:
    //     "Specialist in earthquake-resistant designs and modern construction techniques for high-rise buildings.",
    // },
    // {
    //   image: teamSupervisor,
    //   name: "Ram Bahadur Gurung",
    //   role: "Site Operations Manager",
    //   expertise: "Site Management",
    //   experience: "18+ years in construction supervision",
    //   description:
    //     "Ensures seamless on-site operations with strict adherence to safety protocols and quality standards.",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="team" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-3"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-4 h-4" />
            </motion.div>
            Our Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Meet Our Expert Engineers
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4 mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Our leadership team brings decades of combined experience in civil
            engineering, architecture, and project management.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 relative"
            >
              {/* Gradient border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, hsl(28 90% 52% / 0.3), transparent, hsl(28 90% 52% / 0.1))",
                  padding: "1px",
                }}
              />
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.08 }}
                />
                
                {/* Overlay gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end justify-center pb-6"
                >
                  <motion.div 
                    className="flex gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Index number decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-accent/80 backdrop-blur-sm rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Name and Role */}
                <motion.h3 
                  className="text-xl font-bold text-primary mb-1"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  {member.role}
                </p>

                {/* Expertise Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-foreground">
                    {member.expertise}
                  </span>
                </motion.div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {member.description}
                </p>

                {/* Experience */}
                <motion.p 
                  className="text-xs text-muted-foreground/70 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-4 h-px bg-accent" />
                  {member.experience}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-br from-secondary via-secondary to-secondary/80 rounded-2xl p-10 relative overflow-hidden"
        > */}
          {/* Decorative elements */}
          {/* <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          
          <motion.h3 
            className="text-2xl font-bold text-primary mb-3 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join Our Growing Team
          </motion.h3>
          <motion.p 
            className="text-muted-foreground mb-6 max-w-xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're always looking for talented engineers, architects, and
            construction professionals to join our team.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(230, 126, 34, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 relative z-10 overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative">View Open Positions</span>
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Team;
