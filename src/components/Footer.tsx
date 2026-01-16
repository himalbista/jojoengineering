import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Buildings",
    "Road & Infrastructure",
    "Renovation & Remodeling",
    "Structural Engineering",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/JOJO-Engineering-Construction-Pvt-Ltd/61586756337067/", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 0.9, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white rounded-full blur-3xl"
        />
      </div>

      {/* Main Footer */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="container mx-auto px-4 md:px-8 py-16 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.a 
              href="#home" 
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={logo} alt="JoJo Construction" className="h-16 w-auto bg-white rounded-lg p-2" />
            </motion.a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Engineering strength, building Nepal. Professional construction
              services delivered with precision and excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3, backgroundColor: "hsl(28 90% 52%)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent origin-left"
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "hsl(28 90% 52%)" }}
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-200 text-sm inline-flex items-center gap-2"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      whileHover={{ width: 8 }}
                      className="h-px bg-accent"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 relative">
              Our Services
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent origin-left"
              />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-primary-foreground/70 text-sm flex items-center gap-2"
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-accent rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 relative">
              Contact Info
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent origin-left"
              />
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                </motion.div>
                <span className="text-primary-foreground/70 text-sm">
                  Tokha - Kathmandu, Nepal
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                </motion.div>
                <span className="text-primary-foreground/70 text-sm">
                  +977 - 9860924264, +977 - 9866962070
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                </motion.div>
                <span className="text-primary-foreground/70 text-sm">
                  jojoengineering04@gmail.com
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-white/10 relative z-10"
      >
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground/60 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} JoJo Construction Pvt. Ltd. All
              rights reserved.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/60 text-sm text-center md:text-right"
            >
              Building Nepal with Engineering Excellence
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;
