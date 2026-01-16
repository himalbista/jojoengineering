import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Loader2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

// Google Form Configuration
const GOOGLE_FORM_CONFIG = {
  formId: "YOUR_GOOGLE_FORM_ID",
  fields: {
    name: "entry.YOUR_NAME_ENTRY_ID",
    email: "entry.YOUR_EMAIL_ENTRY_ID", 
    phone: "entry.YOUR_PHONE_ENTRY_ID",
    message: "entry.YOUR_MESSAGE_ENTRY_ID",
  },
};

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone number must be less than 20 characters" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const googleFormUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.formId}/formResponse`;
      
      const submitData = new FormData();
      submitData.append(GOOGLE_FORM_CONFIG.fields.name, formData.name.trim());
      submitData.append(GOOGLE_FORM_CONFIG.fields.email, formData.email.trim());
      submitData.append(GOOGLE_FORM_CONFIG.fields.phone, formData.phone.trim());
      submitData.append(GOOGLE_FORM_CONFIG.fields.message, formData.message.trim());

      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: submitData,
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Company",
      details: ["JoJo Engineering & Construction Pvt. Ltd."],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Tokha - Kathmandu, Nepal"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977 - 9825133065", "+977 - 9749410443"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["jojoengineering04@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sun - Fri: 9:00 AM - 6:00 PM"],
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

  const itemVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
  };

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        
        {/* Floating sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
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
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Contact Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Let's Build Together
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
            Ready to start your construction project? Get in touch with our team
            for a free consultation and quote.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="lg:col-span-3 bg-card rounded-2xl p-8 shadow-card relative overflow-hidden"
          >
            {/* Card decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            <motion.h3 
              className="text-2xl font-bold text-primary mb-6 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Send us a Message
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  custom={0}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px hsl(28 90% 52% / 0.2)" }}
                    className={`form-input-custom ${errors.name ? "border-destructive focus:ring-destructive/50" : ""}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div
                  custom={1}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px hsl(28 90% 52% / 0.2)" }}
                    className={`form-input-custom ${errors.email ? "border-destructive focus:ring-destructive/50" : ""}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px hsl(28 90% 52% / 0.2)" }}
                  className={`form-input-custom ${errors.phone ? "border-destructive focus:ring-destructive/50" : ""}`}
                  placeholder="+977-98XXXXXXXX"
                />
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mt-1"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={5}
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px hsl(28 90% 52% / 0.2)" }}
                  className={`form-input-custom resize-none ${errors.message ? "border-destructive focus:ring-destructive/50" : ""}`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(230, 126, 34, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: -15 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                className="bg-card rounded-xl p-5 shadow-card flex items-start gap-4 relative overflow-hidden group"
              >
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10"
                >
                  <info.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-primary mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl overflow-hidden shadow-card h-64 relative"
            >
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl"
                whileHover={{ borderColor: "hsl(28 90% 52% / 0.3)" }}
                transition={{ duration: 0.3 }}
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64125560586!2d85.25456741640398!3d27.70895594361641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JoJo Construction Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
