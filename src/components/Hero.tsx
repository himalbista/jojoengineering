import { ArrowRight, Building2, HardHat, Ruler, Wrench } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-construction.jpg";

// Animated counter hook
const useCounter = (end: number, duration: number = 2, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay, hasStarted]);

  return { count, start: () => setHasStarted(true) };
};

// Floating icon component
const FloatingIcon = ({ 
  Icon, 
  delay, 
  x, 
  y, 
  size = 40 
}: { 
  Icon: React.ElementType; 
  delay: number; 
  x: string; 
  y: string; 
  size?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className="absolute text-white/20"
    style={{ left: x, top: y }}
  >
    <motion.div
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{ 
        duration: 4 + Math.random() * 2, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay * 0.5
      }}
    >
      <Icon size={size} strokeWidth={1} />
    </motion.div>
  </motion.div>
);

// Animated text reveal
const TextReveal = ({ children, delay }: { children: string; delay: number }) => {
  const words = children.split(" ");
  
  return (
    <span className="inline-flex flex-wrap justify-center gap-x-3">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + i * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const counter1 = useCounter(15, 2, 1.5);
  const counter2 = useCounter(20, 2.5, 1.6);
  const counter3 = useCounter(5, 2, 1.7);
  const counter4 = useCounter(100, 2, 1.8);
  const counter5 = useCounter(100, 2, 1.8);

  useEffect(() => {
    const timer = setTimeout(() => {
      counter1.start();
      counter2.start();
      counter3.start();
      counter4.start();
      counter5.start();
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    // { value: counter1.count, suffix: "+", label: "Years Experience" },
    { value: counter2.count, suffix: "+", label: "Projects Completed" },
    { value: counter3.count, suffix: "+", label: "Expert Engineers" },
    { value: counter4.count, suffix: "%", label: "Client Satisfaction" },
    { value: counter5.count, suffix: "%", label: "Quality & Tested Products" }

  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </motion.div>

      {/* Animated Overlay Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-hero-overlay" 
      />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating hexagon */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.08, scale: 1, rotate: 360 }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1.5, delay: 0.5 },
            rotate: { duration: 60, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon 
              points="50,5 95,25 95,75 50,95 5,75 5,25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-white"
            />
          </svg>
        </motion.div>

        {/* Giant circle top right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px]"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-2 border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 border border-accent/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 border border-white/5 rounded-full"
          />
        </motion.div>

        {/* Giant triangle bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{ opacity: 0.1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px]"
        >
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <polygon 
              points="50,10 90,90 10,90" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.3"
              className="text-accent"
            />
          </motion.svg>
        </motion.div>

        {/* Large floating square */}
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 0.06, rotate: 45 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/3 -right-20 w-[350px] h-[350px] border-2 border-white/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          />
        </motion.div>

        {/* Massive gradient orb */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full blur-3xl"
        />

        {/* Diagonal lines */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent origin-left rotate-[25deg] translate-y-32"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-white to-transparent origin-right -rotate-[20deg] -translate-y-40"
        />

        {/* Floating construction icons */}
        <FloatingIcon Icon={HardHat} delay={0.5} x="8%" y="25%" size={60} />
        <FloatingIcon Icon={Ruler} delay={0.8} x="88%" y="35%" size={55} />
        <FloatingIcon Icon={Wrench} delay={1.1} x="12%" y="68%" size={50} />
        <FloatingIcon Icon={Building2} delay={1.4} x="82%" y="60%" size={65} />
        
        {/* Large animated ring bottom right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute -bottom-60 -right-60 w-[700px] h-[700px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-[3px] border-dashed border-white/20 rounded-full"
          />
        </motion.div>

        {/* Animated arc */}
        <motion.svg
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-20 left-1/4 w-[300px] h-[300px]"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M 10 50 Q 50 10 90 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-accent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </motion.svg>

        {/* Pulsing dot grid - larger */}
        <div className="absolute top-16 right-16 grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2.5, 
                delay: i * 0.08 + 1,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="w-2.5 h-2.5 bg-accent/40 rounded-full"
            />
          ))}
        </div>

        {/* Large cross shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.05, scale: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-1/4 left-1/4"
        >
          <div className="relative w-40 h-40">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-1 h-full bg-white -translate-x-1/2" />
          </div>
        </motion.div>
      </div>

      {/* Content with parallax */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-10 container mx-auto px-4 md:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Building2 className="w-4 h-4 text-accent" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-white font-medium"
            >
              Engineer-Led Construction Company
            </motion.span>
          </motion.div>

          {/* Main Heading with character animation */}
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <TextReveal delay={0.5}>Engineering Strength.</TextReveal>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-gradient-accent mt-2 relative"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-gradient-accent mt-2 relative"
              >
                Building Nepal.
              </motion.span>
              {/* Underline animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
              />
            </motion.div>
          </div>

          {/* Subheading with word reveal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            <TextReveal delay={1.3}>
              JoJo Engineering & Construction Pvt. Ltd. delivers excellence in residential, commercial, and infrastructure projects across Nepal with precision engineering and unwavering commitment to quality.
            </TextReveal>
          </motion.p>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(230, 126, 34, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero-primary flex items-center gap-2 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Contact Us</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero-secondary relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 border-2 border-white/30 rounded-md"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(255,255,255,0.3)", "0 0 0 10px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative">Our Projects</span>
            </motion.a>
          </motion.div>

          {/* Animated Stats with counters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-default"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-accent mb-1 tabular-nums"
                  animate={{ 
                    textShadow: [
                      "0 0 0 rgba(230, 126, 34, 0)",
                      "0 0 20px rgba(230, 126, 34, 0.5)",
                      "0 0 0 rgba(230, 126, 34, 0)"
                    ]
                  }}
                  transition={{ duration: 2, delay: 2.5 + index * 0.2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <motion.div 
                  className="text-sm text-white/70 group-hover:text-white/90 transition-colors"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xs text-white/50 uppercase tracking-widest"
          >
            Scroll
          </motion.span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
