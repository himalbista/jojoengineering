import {
  GraduationCap,
  Package,
  HardHat,
  ShieldCheck,
  Timer,
  ThumbsUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated counter with spring effect
const AnimatedNumber = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericPart = parseInt(value.replace(/\D/g, "")) || 0;
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += numericPart / steps;
        if (current >= numericPart) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Engineer-Led Company",
      description:
        "Our leadership team consists of professional engineers with decades of experience in structural design and project management.",
    },
    {
      icon: Package,
      title: "Quality Materials",
      description:
        "We source only the finest construction materials from certified suppliers, ensuring durability and longevity.",
    },
    {
      icon: HardHat,
      title: "Skilled Workforce",
      description:
        "Our team of trained professionals brings expertise and dedication to every project we undertake.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Compliance",
      description:
        "Strict adherence to international safety standards and local regulations ensures zero-harm workplaces.",
    },
    {
      icon: Timer,
      title: "On-Time Delivery",
      description:
        "We understand the value of time and consistently deliver projects within agreed timelines.",
    },
    {
      icon: ThumbsUp,
      title: "Client Satisfaction",
      description:
        "Our transparent communication and quality focus has earned us a 100% client satisfaction rate.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
    },
  };

  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            The JoJo Engineering & Construction Advantage
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/70 max-w-2xl mx-auto"
          >
            Discover why leading organizations, government and homeowners across Nepal trust
            us with their construction projects.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.3 } 
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                className="relative w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-accent rounded-xl"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(230, 126, 34, 0)",
                      "0 0 0 10px rgba(230, 126, 34, 0.1)",
                      "0 0 0 0 rgba(230, 126, 34, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <reason.icon className="w-7 h-7 text-accent-foreground relative z-10" />
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-bold text-primary-foreground mb-3 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {reason.title}
              </motion.h3>
              <p className="text-primary-foreground/70 leading-relaxed relative z-10">
                {reason.description}
              </p>

              {/* Bottom line accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "ISO", label: "Quality Certified", suffix: "" },
              { value: "15", label: "Years Experience", suffix: "+" },
              { value: "200", label: "Projects Delivered", suffix: "+" },
              { value: "100", label: "Client Retention", suffix: "%" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={statVariants}
                whileHover={{ scale: 1.1 }}
                className="relative group cursor-default"
              > */}
                {/* Glow effect on hover */}
                {/* <motion.div
                  className="absolute inset-0 bg-accent/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                />
                
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-accent mb-2 tabular-nums relative"
                  animate={{ 
                    textShadow: [
                      "0 0 0 rgba(230, 126, 34, 0)",
                      "0 0 30px rgba(230, 126, 34, 0.5)",
                      "0 0 0 rgba(230, 126, 34, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.value === "ISO" ? (
                    stat.value
                  ) : (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  )}
                </motion.div>
                <motion.div 
                  className="text-sm text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div> */}
            {/* ))}
          </motion.div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
