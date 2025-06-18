"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Hexagon, Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
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
                <Lock className="w-4 h-4 text-[#2D1A53]" />
                <span className="text-sm font-semibold text-[#2D1A53]">Privacy & Security</span>
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
                Privacy Policy
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
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Our Commitment to Privacy</h2>
                    </div>
                    <p className="text-[#8B9299] leading-relaxed">
                      At Brisk Automations, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                    </p>
                  </motion.section>

                  {/* Information We Collect */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#D4A0A7] rounded-lg flex items-center justify-center">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Information We Collect</h2>
                    </div>
                    <div className="space-y-4 text-[#8B9299] leading-relaxed">
                      <div>
                        <h3 className="text-lg font-semibold text-[#2D1A53] mb-2">Personal Information</h3>
                        <p className="mb-2">We may collect the following personal information:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Name, email address, and contact information</li>
                          <li>Company name and business information</li>
                          <li>Payment and billing information</li>
                          <li>Communication preferences</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#2D1A53] mb-2">Technical Information</h3>
                        <p className="mb-2">We automatically collect certain technical information:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>IP address and device information</li>
                          <li>Browser type and version</li>
                          <li>Usage patterns and analytics data</li>
                          <li>Cookies and similar tracking technologies</li>
                        </ul>
                      </div>
                    </div>
                  </motion.section>

                  {/* How We Use Information */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#8B6B8F] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">How We Use Your Information</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>We use the collected information for the following purposes:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Providing and maintaining our AI automation services</li>
                        <li>Processing payments and managing billing</li>
                        <li>Communicating with you about our services</li>
                        <li>Improving our services and developing new features</li>
                        <li>Ensuring security and preventing fraud</li>
                        <li>Complying with legal obligations</li>
                        <li>Sending marketing communications (with your consent)</li>
                      </ul>
                    </div>
                  </motion.section>

                  {/* Information Sharing */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4A3B7A] to-[#C89BA1] rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Information Sharing and Disclosure</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our services</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                        <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                        <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                      </ul>
                    </div>
                  </motion.section>

                  {/* Data Security */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#8B6B8F] rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Data Security</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        We implement industry-standard security measures to protect your personal information:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Access controls and authentication mechanisms</li>
                        <li>Employee training on data protection practices</li>
                        <li>Incident response and breach notification procedures</li>
                      </ul>
                      <p>
                        However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                      </p>
                    </div>
                  </motion.section>

                  {/* Data Retention */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Data Retention</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                      </p>
                      <p>
                        When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies.
                      </p>
                    </div>
                  </motion.section>

                  {/* Your Rights */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#8B6B8F] to-[#C89BA1] rounded-lg flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Your Privacy Rights</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Access:</strong> Request access to your personal information</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                        <li><strong>Restriction:</strong> Request restriction of processing</li>
                        <li><strong>Objection:</strong> Object to certain types of processing</li>
                        <li><strong>Withdrawal:</strong> Withdraw consent for processing</li>
                      </ul>
                      <p>
                        To exercise these rights, please contact us using the information provided below.
                      </p>
                    </div>
                  </motion.section>

                  {/* Cookies */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4A3B7A] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Cookies and Tracking</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Remember your preferences and settings</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Provide personalized content and recommendations</li>
                        <li>Improve our services and user experience</li>
                      </ul>
                      <p>
                        You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                      </p>
                    </div>
                  </motion.section>

                  {/* Third-Party Services */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#8B6B8F] rounded-lg flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Third-Party Services</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you access.
                      </p>
                      <p>
                        We may integrate with third-party services for analytics, payment processing, and other business purposes. These integrations are governed by the respective privacy policies of those services.
                      </p>
                    </div>
                  </motion.section>

                  {/* Children's Privacy */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2D1A53] to-[#C89BA1] rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Children's Privacy</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                      </p>
                    </div>
                  </motion.section>

                  {/* Changes to Privacy Policy */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#8B6B8F] to-[#2D1A53] rounded-lg flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Changes to This Privacy Policy</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date.
                      </p>
                      <p>
                        Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
                      </p>
                    </div>
                  </motion.section>

                  {/* Contact Information */}
                  <motion.section variants={staggerItem} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C89BA1] to-[#4A3B7A] rounded-lg flex items-center justify-center">
                        <Hexagon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#2D1A53]">Contact Us</h2>
                    </div>
                    <div className="space-y-3 text-[#8B9299] leading-relaxed">
                      <p>
                        If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                      </p>
                      <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <p className="font-semibold text-[#2D1A53]">Brisk Automations</p>
                        <p>Email: privacy@briskautomations.com</p>
                        <p>Address: [Company Address]</p>
                        <p>Phone: [Phone Number]</p>
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

export default PrivacyPolicy;