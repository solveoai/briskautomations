"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import {
  Menu,
  X,
  PlayCircle,
  Hexagon,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Bot,
  Cloud,
  Target,
  MessageSquare,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon
} from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const navItems: NavItem[] = [
  { name: "SERVICES", href: "#services" },
  { name: "ROI CALCULATOR", href: "#roi" },
  { name: "PROCESS", href: "#process" },
];

const footerLinks: FooterSection[] = [
  {
    label: 'Services',
    links: [
      { title: 'Lead Generation', href: '#services' },
      { title: 'Recruiting AI', href: '#services' },
      { title: 'Cloud Orchestration', href: '#services' },
      { title: 'Custom Models', href: '#services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Case Studies', href: '/cases' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Documentation', href: '/docs' },
      { title: 'API Reference', href: '/api' },
      { title: 'Support', href: '/support' },
      { title: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
      { title: 'Twitter', href: '#', icon: FacebookIcon },
      { title: 'GitHub', href: '#', icon: InstagramIcon },
      { title: 'YouTube', href: '#', icon: YoutubeIcon },
    ],
  },
];

// Animated Number Component
const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({ value }) => {
  const spring = useSpring(value, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [spring]);

  return <span>{displayValue.toLocaleString()}</span>;
};

const BriskAutomationLanding: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [roiInputs, setRoiInputs] = useState({
    leads: 500,
    dealSize: 5000,
    recruitingHours: 40,
    hourlyRate: 75
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const calculateROI = () => {
    const newRevenue = Math.round(roiInputs.leads * 0.15 * roiInputs.dealSize);
    const laborSavings = Math.round(roiInputs.recruitingHours * 0.7 * roiInputs.hourlyRate);

    return {
      newRevenue,
      laborSavings,
      hoursSaved: Math.round(roiInputs.recruitingHours * 0.7)
    };
  };

  const roi = calculateROI();

  const headerVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(20px)",
      borderColor: "rgba(45, 26, 83, 0.08)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(30px)",
      boxShadow: "0 1px 20px 0 rgba(45, 26, 83, 0.08)",
      borderColor: "rgba(45, 26, 83, 0.12)",
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.15, ease: "easeIn" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F0F0F5] relative overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(212, 160, 167, 0.06) 30%, rgba(45, 26, 83, 0.04) 70%, rgba(45, 26, 83, 0.08) 100%)',
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#2D1A53]/5 to-[#D4A0A7]/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.header
        variants={headerVariants}
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderColor: isScrolled ? "rgba(45, 26, 83, 0.12)" : "rgba(45, 26, 83, 0.08)" }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="cursor-pointer flex items-center gap-3"
              >
                <motion.div
                  className="relative w-10 h-10 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 360]
                  }}
                  transition={{
                    opacity: { duration: 0.6, ease: "easeOut" },
                    scale: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                    rotate: { duration: 2, ease: "easeInOut", delay: 0.5 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-[#2D1A53]/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <motion.div
                    className="w-6 h-6 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(45, 26, 83, 0.4)",
                        "0 0 0 8px rgba(45, 26, 83, 0)",
                        "0 0 0 0 rgba(45, 26, 83, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Hexagon size={12} className="text-white" />
                  </motion.div>
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
                </div>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A0A7] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA Button */}
              <motion.a
                href="#contact"
                className="hidden md:block bg-[#C89BA1] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#C89BA1]/90 transition-all duration-200"
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden relative z-50 p-2 text-[#A1ACB5] hover:text-[#2D1A53] transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="w-6 h-0.5 bg-current block mb-1.5"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block mb-1.5"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Panel */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#2D1A53]/10 shadow-xl z-50 max-h-screen overflow-y-auto"
                >
                  <div className="px-6 py-6 space-y-4">
                    {/* Navigation Items */}
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="block text-lg font-medium text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 py-3 border-b border-[#2D1A53]/10 last:border-b-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}

                    {/* Mobile CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                      className="pt-4"
                    >
                      <a
                        href="#contact"
                        className="block w-full bg-[#C89BA1] text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-[#C89BA1]/90 transition-all duration-200 text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Let's Talk
                      </a>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="pt-4 text-center text-sm text-[#8B9299]"
                    >
                      <p>Ready to automate your business?</p>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="pt-32 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center"
            >
              <motion.div
                className="relative bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-[#2D1A53] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.span
                    className="relative text-sm font-semibold text-[#2D1A53]"
                    style={{
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    Stop Wasting Time. Start Automating.
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            >
              Deploy AI Systems.<br />Not Just Models.
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl lg:text-2xl text-[#8B9299] leading-relaxed max-w-2xl mx-auto"
            >
              From lead gen to model training—AI infrastructure that works while you sleep.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D1A53] to-[#D4A0A7] rounded-lg blur-lg opacity-20" />
                <motion.a
                  href="#contact"
                  className="relative bg-[#241647] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#241647]/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3"
                  whileHover={{ scale: 1.02, y: -2, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Talk
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>


      {/* Hidden Cost Section */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 via-transparent to-[#C89BA1]/5" />

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-[#2D1A53]/20 font-mono text-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {'<AI_SYSTEM>'}
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-[#C89BA1]/30 font-mono text-xs"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {'function automate() { return revenue++; }'}
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-1/4 text-[#2D1A53]/15 font-mono text-sm"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {'while(manual) { waste_time(); }'}
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D1A53]/10 to-[#C89BA1]/10 backdrop-blur-xl border border-white/30 rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#2D1A53]">Revenue Leak Detected</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D1A53] mb-6">
              The Hidden Cost of Manual Work
            </h2>
            <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
              Every minute spent on manual tasks is revenue walking out the door
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Manual Lead Gen",
                description: "Losing thousands of qualified prospects every week.",
                lossAmount: "$50K+",
                lossType: "monthly",
                gradient: "from-[#2D1A53]/20 via-[#4A3B7A]/10 to-transparent",
                iconBg: "from-[#2D1A53] to-[#4A3B7A]", // Changed to theme color
                code: "if(manual) { prospects.escape(); }"
              },
              {
                icon: Clock,
                title: "Manual Recruiting",
                description: "Your hours vanish in email black holes.",
                lossAmount: "160hrs",
                lossType: "wasted monthly",
                gradient: "from-[#C89BA1]/20 via-[#D4A0A7]/10 to-transparent",
                iconBg: "from-[#C89BA1] to-[#D4A0A7]", // Changed to theme color
                code: "while(recruiting) { time.drain(); }"
              },
              {
                icon: Cloud,
                title: "Cloud Inefficiency",
                description: "Overpaying for servers you never use.",
                lossAmount: "35%",
                lossType: "overspend",
                gradient: "from-[#2D1A53]/15 via-[#8B6B8F]/10 to-transparent",
                iconBg: "from-[#8B6B8F] to-[#2D1A53]", // Changed to theme color
                code: "servers.idle() && money.burn();"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />

                <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl hover:bg-white/80 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  {/* Floating Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C89BA1] rounded-full flex items-center justify-center"> {/* Changed to theme color */}
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>

                  {/* Code Snippet */}
                  <div className="bg-[#2D1A53]/5 border border-[#2D1A53]/10 rounded-lg p-3 mb-4 font-mono text-xs text-[#2D1A53]/70">
                    {item.code}
                  </div>

                  <h3 className="text-xl font-bold text-[#2D1A53] mb-3">{item.title}</h3>
                  <p className="text-[#8B9299] mb-4">{item.description}</p>

                  {/* Loss Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#C89BA1] rounded-full animate-pulse" /> {/* Changed to theme color */}
                      <span className="text-sm text-[#8B9299]">Current Loss:</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#C89BA1]">{item.lossAmount}</div> {/* Changed to theme color */}
                      <div className="text-xs text-[#8B9299]">{item.lossType}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-20 px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(212, 160, 167, 0.06) 30%, rgba(45, 26, 83, 0.04) 70%, rgba(45, 26, 83, 0.08) 100%)',
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#2D1A53]/5 to-[#D4A0A7]/5 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl overflow-hidden mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-[#2D1A53] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.span
                    className="relative text-sm font-semibold text-[#2D1A53]"
                    style={{
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    ROI Calculator
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            >
              Calculate Your Revenue Impact
            </motion.h2>
            <motion.p
              className="text-xl lg:text-2xl text-[#8B9299] leading-relaxed max-w-2xl mx-auto"
            >
              See the financial impact of automation in real-time
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />

            <div
              className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Left Side - Inputs */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-[#2D1A53] mb-6">Your Current Metrics</h3>
                  {[
                    { label: "Monthly leads processed", key: "leads", max: 10000, icon: Users },
                    { label: "Average deal size ($)", key: "dealSize", max: 50000, icon: DollarSign },
                    { label: "Hours on manual recruiting/month", key: "recruitingHours", max: 200, icon: Clock },
                    { label: "Hourly labor cost ($/hr)", key: "hourlyRate", max: 200, icon: TrendingUp }
                  ].map((input) => (
                    <motion.div
                      key={input.key}
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-xl flex items-center justify-center shadow-lg">
                            <input.icon className="w-5 h-5 text-white" />
                          </div>
                          <label className="text-sm font-semibold text-[#2D1A53]">
                            {input.label}
                          </label>
                        </div>
                        <motion.span
                          className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          <AnimatedNumber value={roiInputs[input.key as keyof typeof roiInputs]} />
                        </motion.span>
                      </div>
                      <div className="relative">
                        <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#2D1A53] to-[#C89BA1] rounded-full shadow-lg"
                            style={{
                              width: `${(roiInputs[input.key as keyof typeof roiInputs] / input.max) * 100}%`
                            }}
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(roiInputs[input.key as keyof typeof roiInputs] / input.max) * 100}%`
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={input.max}
                          value={roiInputs[input.key as keyof typeof roiInputs]}
                          onChange={(e) => setRoiInputs(prev => ({
                            ...prev,
                            [input.key]: parseInt(e.target.value)
                          }))}
                          className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Side - Results */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#2D1A53] mb-6">Your Automation Impact</h3>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-2xl blur-lg opacity-20" />

                    <div
                      className="relative p-6 rounded-2xl text-white overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #2D1A53 0%, #4A3B7A 50%, #8B6B8F 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                      <div className="relative space-y-6">
                        <motion.div
                          className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-sm opacity-80 mb-2">Additional Monthly Revenue</div>
                          <motion.div
                            className="text-3xl font-bold text-green-400"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            +$<AnimatedNumber value={roi.newRevenue} />
                          </motion.div>
                        </motion.div>

                        <motion.div
                          className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-sm opacity-80 mb-2">Time Saved Monthly</div>
                          <motion.div
                            className="text-3xl font-bold text-blue-400"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <AnimatedNumber value={roi.hoursSaved} />hrs
                          </motion.div>
                        </motion.div>

                        <motion.div
                          className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-sm opacity-80 mb-2">Labor Cost Savings</div>
                          <motion.div
                            className="text-3xl font-bold text-yellow-400"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                          >
                            $<AnimatedNumber value={roi.laborSavings} />
                          </motion.div>
                        </motion.div>

                        <motion.a
                          href="#contact"
                          className="relative w-full mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-3 border border-white/30"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Get Your Custom Plan
                          <ArrowRight size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Replace the existing Services Section with this */}
      <section id="services" className="py-20 px-6 lg:px-8 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(45, 26, 83, 0.02) 0deg, rgba(212, 160, 167, 0.04) 90deg, rgba(139, 107, 143, 0.03) 180deg, rgba(45, 26, 83, 0.02) 270deg, rgba(212, 160, 167, 0.04) 360deg)',
          }}
        />

        {/* Futuristic Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#2D1A53]/8 to-[#C89BA1]/8 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#C89BA1]/6 to-[#2D1A53]/6 rounded-full blur-2xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 0.7, 1],
              rotate: [360, 0, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Geometric Patterns */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#2D1A53]/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#C89BA1]/30 rounded-full"
            animate={{
              scale: [1, 3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl overflow-hidden mb-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-[#2D1A53] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 0 rgba(45, 26, 83, 0.4)",
                        "0 0 0 4px rgba(45, 26, 83, 0)",
                        "0 0 0 0 rgba(45, 26, 83, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.span
                    className="relative text-sm font-semibold text-[#2D1A53]"
                    style={{
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    Enterprise AI Infrastructure
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
              style={{
                background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Premium AI Systems
            </motion.h2>
            <motion.p
              className="text-xl lg:text-2xl text-[#8B9299] leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Meet our AI specialists trained for specific business functions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cassie B.",
                specialty: "AI Customer Support",
                description: "Handles customer inquiries, tickets, and support workflows 24/7 with human-like responses",
                avatar: "👩‍💼",
                available: true,
                route: "/cassie-b",
                gradient: "from-[#2D1A53]/15 via-[#4A3B7A]/8 to-transparent",
                accentColor: "from-[#2D1A53] to-[#4A3B7A]"
              },
              {
                name: "Seona B.",
                specialty: "SEO & Content Optimization",
                description: "Creates and optimizes content for search engine rankings automatically",
                avatar: "👩‍💻",
                available: false,
                route: null,
                gradient: "from-[#C89BA1]/15 via-[#D4A0A7]/8 to-transparent",
                accentColor: "from-[#C89BA1] to-[#D4A0A7]"
              },
              {
                name: "Leida B.",
                specialty: "Lead Generation",
                description: "Finds, qualifies, and nurtures potential customers through intelligent automation",
                avatar: "👩‍🎯",
                available: false,
                route: null,
                gradient: "from-[#8B6B8F]/15 via-[#2D1A53]/8 to-transparent",
                accentColor: "from-[#8B6B8F] to-[#2D1A53]"
              },
              {
                name: "Caleb B.",
                specialty: "Sales & Appointments",
                description: "Schedules meetings and manages your sales calendar with intelligent booking",
                avatar: "👨‍💼",
                available: true,
                route: "/caleb-b",
                gradient: "from-[#4A3B7A]/15 via-[#C89BA1]/8 to-transparent",
                accentColor: "from-[#4A3B7A] to-[#C89BA1]"
              },
              {
                name: "Emilia B.",
                specialty: "Email Marketing",
                description: "Crafts personalized email campaigns and nurture sequences automatically",
                avatar: "👩‍📧",
                available: false,
                route: null,
                gradient: "from-[#2D1A53]/15 via-[#8B6B8F]/8 to-transparent",
                accentColor: "from-[#2D1A53] to-[#8B6B8F]"
              },
              {
                name: "Fiona B.",
                specialty: "Process Automation",
                description: "Streamlines workflows and automates repetitive business tasks intelligently",
                avatar: "👩‍⚙️",
                available: false,
                route: null,
                gradient: "from-[#C89BA1]/15 via-[#4A3B7A]/8 to-transparent",
                accentColor: "from-[#C89BA1] to-[#4A3B7A]"
              }
            ].map((specialist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialist.gradient} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-100`} />

                <motion.div
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-2xl ${!specialist.available ? 'opacity-75' : ''
                    }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                  whileHover={specialist.available ? {
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: 2,
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {/* Coming Soon Overlay for locked products */}
                  {!specialist.available && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/20 to-[#C89BA1]/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
                      <div className="text-center">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <span className="bg-[#C89BA1] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="relative p-8">
                    <div className="text-center space-y-6">
                      {/* Avatar */}
                      <motion.div
                        className="relative inline-block"
                        whileHover={specialist.available ? { scale: 1.1, rotate: 5 } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`relative w-20 h-20 bg-gradient-to-br ${specialist.accentColor} rounded-full flex items-center justify-center mx-auto shadow-lg text-3xl`}>
                          {specialist.avatar}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                        </div>
                        {specialist.available && (
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        )}
                      </motion.div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-[#2D1A53] mb-2">{specialist.name}</h3>
                        <div className="inline-block bg-[#C89BA1]/20 text-[#2D1A53] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                          {specialist.specialty}
                        </div>
                        <p className="text-[#8B9299] leading-relaxed text-sm">{specialist.description}</p>
                      </div>

                      {/* Action Button */}
                      {specialist.available && specialist.route ? (
                        <Link to={specialist.route}>
                          <motion.button
                            className="inline-flex items-center gap-2 bg-[#C89BA1] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#C89BA1]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Meet {specialist.name.split(' ')[0]}
                            <ArrowRight size={16} />
                          </motion.button>
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 bg-gray-400 text-white px-6 py-3 rounded-lg text-sm font-semibold cursor-not-allowed opacity-60"
                        >
                          Coming Soon
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 616 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 via-transparent to-[#C89BA1]/5" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D1A53]/10 to-[#C89BA1]/10 backdrop-blur-xl border border-white/30 rounded-full px-6 py-2 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PlayCircle className="w-4 h-4 text-[#2D1A53]" />
              <span className="text-sm font-semibold text-[#2D1A53]">See It In Action</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D1A53] mb-6">
              Watch AI Transform Your Business
            </h2>
            <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
              Real automation workflows generating real results for real companies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />

            <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-[#2D1A53]/20 to-[#C89BA1]/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 to-[#C89BA1]/5" />

                <motion.div
                  className="relative z-10 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(45, 26, 83, 0.4)",
                        "0 0 0 20px rgba(45, 26, 83, 0)",
                        "0 0 0 0 rgba(45, 26, 83, 0)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <PlayCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#2D1A53] mb-2">
                    Lead Generation Demo
                  </h3>
                  <p className="text-[#8B9299]">
                    Watch our AI find 500+ qualified leads in 60 seconds
                  </p>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2D1A53]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Live Demo
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 bg-[#C89BA1]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  3:42 min
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { title: "Lead Gen", duration: "2:15", views: "1.2K" },
                  { title: "Recruiting AI", duration: "3:42", views: "856" },
                  { title: "Cloud Setup", duration: "1:58", views: "743" }
                ].map((video, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/20 cursor-pointer hover:bg-white/60 transition-all duration-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2D1A53] text-sm">{video.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-[#8B9299]">
                          <span>{video.duration}</span>
                          <span>•</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
        <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Hexagon className="size-8 text-[#2D1A53]" />
              <span className="text-xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
            </div>
            <p className="text-[#8B9299] mt-8 text-sm md:mt-0">
              © {new Date().getFullYear()} Brisk Automations. All rights reserved.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs text-[#2D1A53] font-semibold">{section.label}</h3>
                  <ul className="text-[#8B9299] mt-4 space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        {link.href.startsWith('/') ? (
                          <Link
                            to={link.href}
                            className="hover:text-[#2D1A53] inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="hover:text-[#2D1A53] inline-flex items-center transition-all duration-300"
                          >
                            {link.icon && <link.icon className="me-1 size-4" />}
                            {link.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BriskAutomationLanding;
