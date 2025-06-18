"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, Shield, FileText, Scale, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService: React.FC = () => {
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
      <main className="relative z-10 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Hero Section */}
            <motion.div variants={staggerItem} className="text-center space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-full px-6 py-3 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <FileText className="w-4 h-4 text-[#2D1A53]" />
                <span className="text-sm font-semibold text-[#2D1A53]">Legal Documentation</span>
              </motion.div>

              <h1
                className="text-5xl lg:text-6xl font-extrabold leading-tight"
                style={{
                  background: 'linear-gradient(to right, #2D1A53, #8B6B8F, #C89BA1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 1px 2px rgba(45, 26, 83, 0.1)',
                  filter: 'contrast(1.1) brightness(1.05)',
                }}
              >
                Terms of Service
              </h1>

              <p className="text-xl text-[#8B9299] leading-relaxed max-w-2xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>

            {/* Content Container */}
            <motion.div
              variants={staggerItem}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/5 to-[#C89BA1]/5 rounded-3xl blur-xl" />
              
              <div 
                className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                <div className="p-8 lg:p-12 space-y-8">
                  {/* Introduction */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Agreement to Terms</h2>
                    </div>
                    <p className="text-[#8B9299] leading-relaxed">
                      These Terms of Service ("Terms") govern your use of Brisk Automations' website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
                    </p>
                  </motion.section>

                  {/* Services Description */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#D4A0A7] rounded-lg flex items-center justify-center">
                        <Hexagon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Description of Services</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        Brisk Automations provides AI-powered automation solutions including but not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Lead generation and customer acquisition systems</li>
                        <li>Recruiting automation and candidate screening</li>
                        <li>Cloud infrastructure orchestration and optimization</li>
                        <li>Custom AI model development and training</li>
                        <li>Business process automation consulting</li>
                      </ul>
                    </div>
                  </motion.section>

                  {/* User Responsibilities */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#8B6B8F] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <Scale className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">User Responsibilities</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>By using our services, you agree to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide accurate and complete information when requested</li>
                        <li>Maintain the confidentiality of your account credentials</li>
                        <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                        <li>Not attempt to gain unauthorized access to our systems or networks</li>
                        <li>Not use our services to transmit harmful, offensive, or illegal content</li>
                        <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                      </ul>
                    </div>
                  </motion.section>

                  {/* Intellectual Property */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4A3B7A] to-[#C89BA1] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Intellectual Property Rights</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        The services, including all content, features, and functionality, are owned by Brisk Automations and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                      </p>
                      <p>
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
                      </p>
                    </div>
                  </motion.section>

                  {/* Payment Terms */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#8B6B8F] rounded-lg flex items-center justify-center">
                        <Scale className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Payment and Billing</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        Payment terms are established in individual service agreements. All fees are non-refundable unless otherwise specified in writing. We reserve the right to suspend or terminate services for non-payment.
                      </p>
                      <p>
                        Prices are subject to change with 30 days' notice. Continued use of services after price changes constitutes acceptance of new pricing.
                      </p>
                    </div>
                  </motion.section>

                  {/* Limitation of Liability */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Limitation of Liability</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        To the maximum extent permitted by law, Brisk Automations shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                      </p>
                      <p>
                        Our total liability to you for all claims arising from or relating to these Terms or our services shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim.
                      </p>
                    </div>
                  </motion.section>

                  {/* Termination */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#8B6B8F] to-[#C89BA1] rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Termination</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.
                      </p>
                      <p>
                        Upon termination, your right to use our services will cease immediately. All provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                      </p>
                    </div>
                  </motion.section>

                  {/* Governing Law */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#C89BA1] rounded-lg flex items-center justify-center">
                        <Scale className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Governing Law</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Brisk Automations is incorporated, without regard to its conflict of law provisions.
                      </p>
                      <p>
                        Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                      </p>
                    </div>
                  </motion.section>

                  {/* Changes to Terms */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4A3B7A] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Changes to Terms</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website and updating the "Last updated" date.
                      </p>
                      <p>
                        Your continued use of our services after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must discontinue use of our services.
                      </p>
                    </div>
                  </motion.section>

                  {/* Contact Information */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#8B6B8F] rounded-lg flex items-center justify-center">
                        <Hexagon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Contact Information</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        If you have any questions about these Terms of Service, please contact us at:
                      </p>
                      <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <p className="font-semibold text-[#2D1A53]">Brisk Automations</p>
                        <p>Email: legal@briskautomations.com</p>
                        <p>Address: [Company Address]</p>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;