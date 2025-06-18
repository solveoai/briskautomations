"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, Phone, Calendar, CheckCircle, Star, Users, PhoneCall, ArrowRight, Play, Target, Zap, BarChart3, Settings, Clock, Shield, Building, ShoppingCart, Home, Heart, Palette, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const CalebBPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>("Professional Services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const industries = [
    { 
      name: "Professional Services", 
      icon: Building, 
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Law firms, consulting, accounting, and professional service providers"
    },
    { 
      name: "E-commerce Stores", 
      icon: ShoppingCart, 
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Online retailers, dropshipping, and e-commerce businesses"
    },
    { 
      name: "Real Estate", 
      icon: Home, 
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Real estate agents, brokers, and property management companies"
    },
    { 
      name: "Healthcare Practices", 
      icon: Heart, 
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Medical practices, dental offices, and healthcare providers"
    },
    { 
      name: "Home Services", 
      icon: Settings, 
      image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "HVAC, plumbing, electrical, and home improvement services"
    },
    { 
      name: "Digital Agencies", 
      icon: Palette, 
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Marketing agencies, web design, and digital service providers"
    }
  ];

  const faqs = [
    {
      question: "How quickly can Caleb start making calls for my business?",
      answer: "Caleb can be set up and making calls within 24-48 hours. We'll configure his scripts, integrate with your CRM, and train him on your specific sales process during the setup phase."
    },
    {
      question: "What happens if a prospect wants to speak to a human?",
      answer: "Caleb seamlessly transfers qualified prospects to your human sales team. He can schedule immediate callbacks or transfer calls in real-time based on your preferences."
    },
    {
      question: "Can Caleb integrate with my existing CRM and tools?",
      answer: "Yes! Caleb integrates with all major CRMs including Salesforce, HubSpot, Pipedrive, and 50+ other platforms. All call data and appointments sync automatically."
    },
    {
      question: "How does Caleb handle objections and complex questions?",
      answer: "Caleb is trained on advanced objection handling and can navigate complex sales conversations. For highly technical questions, he intelligently escalates to your human team while maintaining the relationship."
    },
    {
      question: "What's the difference between Caleb and other AI calling solutions?",
      answer: "Caleb is specifically designed for sales conversations with advanced natural language processing, emotional intelligence, and industry-specific training. He sounds human and builds genuine rapport with prospects."
    },
    {
      question: "Can I customize Caleb's scripts and conversation flow?",
      answer: "Absolutely! Caleb's scripts, personality, and conversation flows are fully customizable to match your brand voice and sales methodology. We provide ongoing optimization based on performance data."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://n8n.srv850687.hstgr.cloud/webhook/caleb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          industry: selectedIndustry,
          timestamp: new Date().toISOString(),
          source: 'caleb-demo-form'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Success! Caleb will call you within the next few minutes.');
        setFormData({ firstName: '', lastName: '', phone: '', email: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedIndustryData = industries.find(industry => industry.name === selectedIndustry) || industries[0];

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
            <Link to="/" className="flex items-center gap-3">
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
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 text-[#8B9299] hover:text-[#2D1A53] transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-20 py-20"
          >
            {/* AI Specialist Intro Section */}
            <motion.section variants={staggerItem} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                    boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-4 h-4 text-[#2D1A53]" />
                  <span className="text-sm font-semibold text-[#2D1A53]">AI Sales Call & Booking Specialist</span>
                </motion.div>

                <div className="space-y-6">
                  <h1
                    className="text-4xl lg:text-6xl font-extrabold leading-tight"
                    style={{
                      background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                      filter: 'contrast(1.1) brightness(1.05)',
                    }}
                  >
                    Meet Caleb B.,<br />
                    your AI Sales Specialist
                  </h1>

                  <div className="space-y-4">
                    <p className="text-xl text-[#8B9299] leading-relaxed">
                      As soon as a lead enters your pipeline,<br />
                      <span className="font-semibold text-[#2D1A53]">Caleb handles the sales process by:</span>
                    </p>

                    <div className="space-y-3">
                      {[
                        "Making personalized outbound calls within minutes of lead capture",
                        "Qualifying prospects with intelligent conversation and objection handling",
                        "Booking qualified appointments directly into your calendar automatically"
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                          <span className="text-[#2D1A53] font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Call from Caleb
                      <Phone className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-5 h-5" />
                      Watch Demo
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="relative w-full max-w-md mx-auto"
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
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-full flex items-center justify-center shadow-2xl mb-6">
                      <PhoneCall size={80} className="text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">Caleb B.</h3>
                      <p className="text-[#8B9299]">AI Sales Specialist</p>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-[#8B9299]">Available 24/7</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* How Caleb Works Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  How Caleb Works
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  A simple 5-step process that turns leads into booked appointments automatically
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-6">
                {[
                  {
                    number: "1",
                    icon: Target,
                    title: "Lead Detected",
                    description: "New lead enters your CRM or fills out a form on your website"
                  },
                  {
                    number: "2",
                    icon: Zap,
                    title: "Caleb Responds",
                    description: "In under 60 seconds, Caleb initiates contact via phone call"
                  },
                  {
                    number: "3",
                    icon: PhoneCall,
                    title: "Qualification Call",
                    description: "Caleb conducts natural conversation to qualify the prospect"
                  },
                  {
                    number: "4",
                    icon: Calendar,
                    title: "Appointment Booked",
                    description: "Qualified prospects get scheduled directly into your calendar"
                  },
                  {
                    number: "5",
                    icon: BarChart3,
                    title: "Data Synced",
                    description: "Caleb updates your CRM with call notes and next steps"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {step.number}
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#2D1A53] mb-2">{step.title}</h3>
                      <p className="text-[#8B9299] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Try Our Live Demo Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Try Our Live Demo
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Select your industry and get a personalized call from Caleb within minutes
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Form */}
                <div className="space-y-8">
                  {/* Industry Selection */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#2D1A53]">Select Your Industry</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {industries.map((industry, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedIndustry(industry.name)}
                          className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                            selectedIndustry === industry.name
                              ? 'border-[#8B5CF6] bg-[#8B5CF6]/10'
                              : 'border-white/40 bg-white/20 hover:bg-white/30'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3">
                            <industry.icon className={`w-5 h-5 ${
                              selectedIndustry === industry.name ? 'text-[#8B5CF6]' : 'text-[#2D1A53]'
                            }`} />
                            <span className={`font-medium text-sm ${
                              selectedIndustry === industry.name ? 'text-[#8B5CF6]' : 'text-[#2D1A53]'
                            }`}>
                              {industry.name}
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <h3 className="text-xl font-bold text-[#2D1A53] mb-6">Receive a live call from Caleb</h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#2D1A53] mb-2">First Name*</label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                              placeholder="John"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#2D1A53] mb-2">Last Name*</label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                              placeholder="Doe"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#2D1A53] mb-2">Phone Number*</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                            placeholder="123-456-7890"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#2D1A53] mb-2">Email Address*</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-300"
                            placeholder="john@company.com"
                            required
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                          {isSubmitting ? 'Submitting...' : 'GET A CALL'}
                          {!isSubmitting && <Phone className="w-5 h-5" />}
                        </motion.button>

                        {submitMessage && (
                          <div className={`text-center p-3 rounded-lg ${
                            submitMessage.includes('Success') 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {submitMessage}
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>

                {/* Right Side - Industry Image and Info */}
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl" />
                    
                    <div 
                      className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl overflow-hidden shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                        boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${selectedIndustryData.image})` }}>
                        <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                          <div className="text-white">
                            <selectedIndustryData.icon className="w-8 h-8 mb-2" />
                            <h3 className="text-2xl font-bold">{selectedIndustryData.name}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-[#8B9299] leading-relaxed">{selectedIndustryData.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Demo Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "📞", title: "Receptionist", description: "Professional call handling" },
                      { icon: "📅", title: "Appointment Setter", description: "Calendar booking" },
                      { icon: "🎯", title: "Lead Qualification", description: "Smart prospect scoring" },
                      { icon: "📋", title: "Survey", description: "Data collection" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <h4 className="font-semibold text-[#2D1A53] text-sm">{feature.title}</h4>
                        <p className="text-xs text-[#8B9299] mt-1">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section variants={staggerItem} className="space-y-12">
              <div className="text-center space-y-4">
                <h2
                  className="text-4xl lg:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Frequently Asked Questions about Caleb
                </h2>
                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                  Everything you need to know about working with Caleb
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

            {/* Final CTA Section */}
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
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    style={{
                      background: 'linear-gradient(to right, #2D1A53, #8B6B8F)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Ready to Scale Your Sales with Caleb?
                  </h2>
                  
                  <p className="text-xl text-[#8B9299] mb-8 max-w-2xl mx-auto">
                    Join hundreds of businesses using Caleb to book more appointments, qualify better leads, and close more deals automatically.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Call from Caleb Today
                      <Phone className="w-5 h-5" />
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
    </div>
  );
};

export default CalebBPage;