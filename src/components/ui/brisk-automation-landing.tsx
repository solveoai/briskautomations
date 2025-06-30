"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  BarChart3, 
  Hexagon, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Calendar, 
  MessageSquare, 
  Bot, 
  Sparkles, 
  Globe, 
  Building, 
  ShoppingCart, 
  Home, 
  Heart, 
  Settings, 
  Palette,
  Menu,
  X,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const BriskAutomationLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      content: "Brisk Automations transformed our lead generation process. We're now capturing 300% more qualified leads with their AI systems.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Sales, GrowthCorp",
      content: "The recruiting automation saved us 40 hours per week. We're finding better candidates faster than ever before.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "Operations Director, ScaleUp Inc",
      content: "Their cloud orchestration reduced our infrastructure costs by 60% while improving performance. Incredible ROI.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Lead Generation & Customer Acquisition",
      description: "AI-powered systems that identify, engage, and convert high-quality prospects automatically",
      features: ["Intelligent prospect scoring", "Automated outreach sequences", "Real-time lead qualification"],
      color: "from-[#8B5CF6] to-[#2D1A53]"
    },
    {
      icon: Users,
      title: "Recruiting Automation & Talent Acquisition",
      description: "Streamline your hiring process with AI that finds, screens, and engages top talent",
      features: ["Resume parsing & ranking", "Automated candidate screening", "Interview scheduling"],
      color: "from-[#C89BA1] to-[#8B6B8F]"
    },
    {
      icon: Globe,
      title: "Cloud Infrastructure Orchestration",
      description: "Optimize and automate your cloud operations for maximum efficiency and cost savings",
      features: ["Auto-scaling optimization", "Cost monitoring & alerts", "Performance tuning"],
      color: "from-[#2D1A53] to-[#4A3B7A]"
    },
    {
      icon: Bot,
      title: "Custom AI Model Development",
      description: "Bespoke AI solutions tailored to your specific business needs and industry requirements",
      features: ["Domain-specific training", "Custom integrations", "Ongoing optimization"],
      color: "from-[#8B6B8F] to-[#C89BA1]"
    }
  ];

  const industries = [
    { name: "Professional Services", icon: Building, count: "150+" },
    { name: "E-commerce", icon: ShoppingCart, count: "200+" },
    { name: "Real Estate", icon: Home, count: "75+" },
    { name: "Healthcare", icon: Heart, count: "100+" },
    { name: "Home Services", icon: Settings, count: "125+" },
    { name: "Digital Agencies", icon: Palette, count: "90+" }
  ];

  const faqs = [
    {
      question: "How quickly can you implement automation solutions?",
      answer: "Most implementations take 2-4 weeks depending on complexity. We start with a discovery phase, then build and test your custom automation before full deployment."
    },
    {
      question: "What kind of ROI can I expect from automation?",
      answer: "Our clients typically see 200-400% ROI within the first year through increased efficiency, reduced manual work, and improved conversion rates."
    },
    {
      question: "Do you integrate with existing business tools?",
      answer: "Yes! We integrate with 500+ popular business tools including CRMs, marketing platforms, HR systems, and cloud infrastructure providers."
    },
    {
      question: "Is there ongoing support after implementation?",
      answer: "Absolutely. We provide 24/7 monitoring, regular optimization, and dedicated support to ensure your automations continue performing at peak efficiency."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We follow enterprise-grade security protocols, including encryption, access controls, and compliance with GDPR, HIPAA, and other relevant regulations."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F0F5] relative overflow-hidden">
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

      {/* Navigation Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 bg-white/85 backdrop-blur-20 border-b border-[#2D1A53]/8"
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <motion.div
                className="relative w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
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
              <span className="text-2xl font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Services</a>
              <a href="#industries" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Industries</a>
              <a href="#testimonials" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Testimonials</a>
              <a href="#faq" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">FAQ</a>
              
              <motion.button
                className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-[#2D1A53]/8 py-4 space-y-4"
              >
                <a href="#services" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Services</a>
                <a href="#industries" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Industries</a>
                <a href="#testimonials" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">Testimonials</a>
                <a href="#faq" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200 font-medium">FAQ</a>
                <button className="w-full bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-6 py-2 rounded-lg font-semibold">
                  Get Started
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-32 py-20"
          >
            {/* Hero Section */}
            <motion.section variants={staggerItem} className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="space-y-8">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-4 h-4 text-[#2D1A53]" />
                  <span className="text-sm font-semibold text-[#2D1A53]">AI-Powered Business Automation</span>
                </motion.div>

                <div className="space-y-6">
                  <h1
                    className="text-5xl lg:text-7xl font-extrabold leading-tight"
                    style={{
                      background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                      filter: 'contrast(1.1) brightness(1.05)',
                    }}
                  >
                    Scale Your Business with Intelligent Automation
                  </h1>

                  <p className="text-xl text-[#8B9299] leading-relaxed max-w-xl">
                    Transform your operations with AI-powered solutions that generate leads, recruit talent, and optimize your infrastructure automatically.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Your Automation Journey
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                      className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Watch Demo
                    </motion.button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: "500+", label: "Businesses Automated" },
                    { number: "300%", label: "Average ROI Increase" },
                    { number: "24/7", label: "AI-Powered Support" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-[#2D1A53]">{stat.number}</div>
                      <div className="text-sm text-[#8B9299] font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="relative w-full max-w-lg mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/20 to-[#C89BA1]/20 rounded-3xl blur-2xl" />
                  
                  <div 
                    className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                      boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">Meet Our AI Specialists</h3>
                        <p className="text-[#8B9299]">Ready to transform your business</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Link 
                          to="/cassie-b"
                          className="group bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/60 transition-all duration-300 text-center"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-[#C89BA1] to-[#8B6B8F] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Users size={24} className="text-white" />
                          </div>
                          <h4 className="font-semibold text-[#2D1A53] text-sm">Cassie B.</h4>
                          <p className="text-xs text-[#8B9299] mt-1">Recruiting Specialist</p>
                        </Link>

                        <Link 
                          to="/caleb-b"
                          className="group bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/60 transition-all duration-300 text-center"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Phone size={24} className="text-white" />
                          </div>
                          <h4 className="font-semibold text-[#2D1A53] text-sm">Caleb B.</h4>
                          <p className="text-xs text-[#8B9299] mt-1">Sales Specialist</p>
                        </Link>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-[#8B9299]">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Available 24/7 for instant deployment
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section id="services" variants={staggerItem} className="space-y-16">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Automation Services
                </h2>
                <p className="text-xl text-[#8B9299] max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to streamline your operations and accelerate growth
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#2D1A53] mb-2">{service.title}</h3>
                            <p className="text-[#8B9299] leading-relaxed">{service.description}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                              <span className="text-[#2D1A53] font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <motion.button
                          className="w-full bg-white/40 text-[#2D1A53] py-3 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Industries Section */}
            <motion.section id="industries" variants={staggerItem} className="space-y-16">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Industries We Serve
                </h2>
                <p className="text-xl text-[#8B9299] max-w-3xl mx-auto">
                  Trusted by businesses across diverse sectors to deliver measurable results
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-lg flex items-center justify-center">
                            <industry.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-[#2D1A53]">{industry.name}</span>
                        </div>
                        <span className="text-sm font-bold text-[#8B5CF6]">{industry.count}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section id="testimonials" variants={staggerItem} className="space-y-16">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  What Our Clients Say
                </h2>
                <p className="text-xl text-[#8B9299] max-w-3xl mx-auto">
                  Real results from real businesses that transformed with our automation solutions
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
                
                <div 
                  className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 lg:p-12 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-center space-y-6"
                    >
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-xl lg:text-2xl text-[#2D1A53] font-medium leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-[#2D1A53]">{testimonials[currentTestimonial].name}</div>
                          <div className="text-[#8B9299] text-sm">{testimonials[currentTestimonial].role}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? 'bg-[#8B5CF6]' : 'bg-[#8B9299]/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section id="faq" variants={staggerItem} className="space-y-16">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-[#8B9299] max-w-3xl mx-auto">
                  Everything you need to know about our automation solutions
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 to-[#C89BA1]/5 rounded-2xl blur-xl" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <h3 className="text-lg font-semibold text-[#2D1A53] pr-4">{faq.question}</h3>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                        )}
                      </button>

                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-[#8B9299] leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section variants={staggerItem} className="text-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
                
                <div 
                  className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }}
                >
                  <h2
                    className="text-4xl lg:text-6xl font-bold mb-6"
                    style={{
                      background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Ready to Automate Your Success?
                  </h2>

                  <p className="text-xl text-[#8B9299] mb-8 max-w-2xl mx-auto">
                    Join hundreds of businesses that have transformed their operations with our AI-powered automation solutions.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Start Your Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                      className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule a Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/40 backdrop-blur-xl border-t border-white/20 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center">
                  <Hexagon size={16} className="text-white" />
                </div>
                <span className="text-lg font-bold text-[#2D1A53]">BRISK AUTOMATIONS</span>
              </div>
              <p className="text-[#8B9299] text-sm leading-relaxed">
                Transforming businesses with intelligent automation solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D1A53]">Services</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Lead Generation</a>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Recruiting Automation</a>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Cloud Orchestration</a>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Custom AI Development</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D1A53]">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">About Us</a>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Careers</a>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Blog</a>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D1A53]">Legal</h4>
              <div className="space-y-2 text-sm">
                <Link to="/privacy" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Terms of Service</Link>
                <a href="#" className="block text-[#8B9299] hover:text-[#2D1A53] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8B9299] text-sm">
              © 2025 Brisk Automations. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-[#8B9299] hover:text-[#2D1A53] transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bolt.new Badge */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.a
          href="https://bolt.new"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">b</span>
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
            Powered by Bolt.new
          </span>
          <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-black transition-colors" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default BriskAutomationLanding;