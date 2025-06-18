"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Hexagon, MessageCircle, Clock, CheckCircle, Star, Users, Headphones, ArrowRight, Play, Target, Zap, BarChart3, Settings, Shield, Building, ShoppingCart, Home, Heart, Palette, ChevronDown, ChevronUp, X, Send, Minimize2 } from "lucide-react";
import { Link } from "react-router-dom";

const CassieBPage: React.FC = () => {
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showChatWidget, setShowChatWidget] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! 👋 I'm Cassie B., your AI Customer Support Specialist. How can I help you today?",
            sender: "cassie",
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage; // Store the input before clearing
        setInputMessage("");
        setIsTyping(true);

        try {
            console.log("Sending to webhook:", currentInput); // Debug log

            const response = await fetch("https://n8n.srv850687.hstgr.cloud/webhook/cassie", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: currentInput,
                    timestamp: new Date().toISOString(),
                    sessionId: `cassie-demo-${Date.now()}`
                }),
            });

            console.log("Response status:", response.status); // Debug log
            console.log("Response headers:", response.headers); // Debug log

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Get the raw text first to see what's actually returned
            const rawText = await response.text();
            console.log("Raw response text:", rawText); // Debug log

            let data;
            try {
                data = JSON.parse(rawText);
                console.log("Parsed JSON data:", data); // Debug log
                console.log("All keys in response:", Object.keys(data)); // Debug log
            } catch (parseError) {
                console.error("JSON parse error:", parseError);
                throw new Error("Invalid JSON response from webhook");
            }

            setTimeout(() => {
                // Try multiple possible response field names
                const responseText =
                    data.reply ||
                    data.response ||
                    data.message ||
                    data.answer ||
                    data.text ||
                    data.content ||
                    data.output ||
                    rawText || // Use raw text as fallback
                    "I'm here to help! Could you please rephrase your question?";

                console.log("Using response text:", responseText); // Debug log

                const cassieResponse = {
                    id: messages.length + 2,
                    text: responseText,
                    sender: "cassie",
                    timestamp: new Date()
                };

                setMessages(prev => [...prev, cassieResponse]);
                setIsTyping(false);
            }, 1000);

        } catch (error) {
            console.error("Full webhook error:", error);
            setTimeout(() => {
                const errorResponse = {
                    id: messages.length + 2,
                    text: "I'm experiencing some technical difficulties right now. Please try again in a moment, or feel free to contact our human support team!",
                    sender: "cassie",
                    timestamp: new Date()
                };

                setMessages(prev => [...prev, errorResponse]);
                setIsTyping(false);
            }, 1000);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
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

    const industries = [
        { name: "Professional Services", icon: Building, image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "E-commerce Stores", icon: ShoppingCart, image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Real Estate", icon: Home, image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Healthcare Practices", icon: Heart, image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Home Services", icon: Settings, image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Digital Agencies", icon: Palette, image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ];

    const testimonials = [
        {
            quote: "Cassie transformed our customer support. Our customers love talking to her - many don't even realize she's AI!",
            name: "Sarah M.",
            company: "TechCorp",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
        },
        {
            quote: "We went from 2-hour response times to instant responses. Customer satisfaction scores went through the roof.",
            name: "Mike R.",
            company: "GrowthCo",
            image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
        },
        {
            quote: "Cassie handles 80% of our support tickets perfectly. Our human team can focus on complex issues.",
            name: "Lisa K.",
            company: "ServicePro",
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
        }
    ];

    const faqs = [
        {
            question: "How does Cassie learn about my business?",
            answer: "Cassie is trained on your specific business data, including your knowledge base, FAQs, policies, and previous customer interactions. The setup process includes comprehensive training on your products, services, and customer service protocols."
        },
        {
            question: "Can customers tell they're talking to AI?",
            answer: "Cassie is designed to provide natural, human-like conversations. Many customers don't realize they're speaking with AI. However, we can configure Cassie to identify herself as an AI assistant if preferred for transparency."
        },
        {
            question: "What happens if Cassie can't solve an issue?",
            answer: "Cassie intelligently recognizes when an issue requires human intervention and seamlessly escalates to your human support team, providing complete conversation context and customer history for a smooth handoff."
        },
        {
            question: "How quickly can Cassie be set up?",
            answer: "Cassie can be fully operational within 24-48 hours. This includes AI training, system integration, testing, and team onboarding. We handle the entire setup process for you."
        },
        {
            question: "Does Cassie work with my existing tools?",
            answer: "Yes! Cassie integrates with all major CRMs, helpdesk systems, chat platforms, and business tools including Salesforce, HubSpot, Zendesk, Intercom, and 50+ other platforms."
        },
        {
            question: "What industries work best with Cassie?",
            answer: "Cassie works across all industries but is particularly effective for businesses with high support volumes, repetitive inquiries, or 24/7 support needs. This includes e-commerce, SaaS, healthcare, real estate, and professional services."
        }
    ];

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
                                    <MessageCircle className="w-4 h-4 text-[#2D1A53]" />
                                    <span className="text-sm font-semibold text-[#2D1A53]">AI Customer Support Specialist</span>
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
                                        Meet Cassie B.,<br />
                                        your AI Customer Support Specialist
                                    </h1>

                                    <div className="space-y-4">
                                        <p className="text-xl text-[#8B9299] leading-relaxed">
                                            No more phone trees. No typing numbers.<br />
                                            <span className="font-semibold text-[#2D1A53]">Just real conversations that solve problems.</span>
                                        </p>

                                        <p className="text-lg text-[#8B9299] leading-relaxed">
                                            As soon as a customer reaches out,<br />
                                            <span className="font-semibold text-[#2D1A53]">Cassie handles the support by:</span>
                                        </p>

                                        <div className="space-y-3">
                                            {[
                                                "Answering phone calls with natural conversation (no keypad navigation)",
                                                "Responding to support emails with personalized solutions",
                                                "Managing website chat with instant, accurate responses",
                                                "Resolving issues 24/7 across all channels seamlessly"
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
                                            onClick={() => setShowChatWidget(true)}
                                            className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Talk to Cassie Now
                                            <MessageCircle className="w-5 h-5" />
                                        </motion.button>

                                        <motion.button
                                            className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Play className="w-5 h-5" />
                                            See How Cassie Works
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
                                            <Headphones size={80} className="text-white" />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">Cassie B.</h3>
                                            <p className="text-[#8B9299]">AI Customer Support Specialist</p>
                                            <div className="flex items-center justify-center gap-2 mt-4">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm text-[#8B9299]">Available 24/7</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* How Cassie Works Section */}
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
                                    How Cassie Works
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    A simple 4-step process that transforms customer support
                                </p>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    {
                                        number: "1",
                                        icon: Target,
                                        title: "Customer Reaches Out",
                                        description: "Phone call, email, or website chat - customers contact you however they prefer"
                                    },
                                    {
                                        number: "2",
                                        icon: Zap,
                                        title: "Cassie Responds Instantly",
                                        description: "In seconds, Cassie engages in natural conversation - no menus, no waiting"
                                    },
                                    {
                                        number: "3",
                                        icon: CheckCircle,
                                        title: "Problem Gets Solved",
                                        description: "Cassie resolves issues using your knowledge base and company policies"
                                    },
                                    {
                                        number: "4",
                                        icon: Users,
                                        title: "Seamless Escalation",
                                        description: "Complex cases get smoothly transferred to your human team with full context"
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

                        {/* Experience Cassie in 2 Ways Section */}
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
                                    Experience Cassie in 2 Ways
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    Test Cassie's natural conversation abilities right now
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {/* Chat Demo Card */}
                                <motion.div
                                    className="relative group"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                                    <div
                                        className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                            boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <MessageCircle size={32} className="text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">💬 Chat with Cassie Now</h3>
                                        <p className="text-[#8B9299] mb-6">Ask Cassie any customer service question</p>

                                        <motion.button
                                            onClick={() => setShowChatWidget(true)}
                                            className="bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full mb-4"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Start Chat
                                        </motion.button>

                                        <p className="text-sm text-[#8B9299]">Instant responses, just like your customers would experience</p>
                                    </div>
                                </motion.div>

                                {/* Phone Demo Card */}
                                <motion.div
                                    className="relative group"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                                    <div
                                        className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                            boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#2D1A53] to-[#4A3B7A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <Headphones size={32} className="text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#2D1A53] mb-4">📞 Call Cassie Directly</h3>
                                        <div className="text-3xl font-bold text-[#8B5CF6] mb-4">(609)-508-8569</div>

                                        <motion.button
                                            className="bg-white/40 text-[#2D1A53] px-8 py-4 rounded-xl font-semibold border border-[#2D1A53]/20 hover:bg-white/60 transition-all duration-300 w-full mb-4"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Call Now
                                        </motion.button>

                                        <p className="text-sm text-[#8B9299]">Experience natural phone support - no menus, just conversation</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* Cassie's Capabilities Section */}
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
                                    Cassie's Capabilities
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    Advanced AI features designed for exceptional customer support
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Headphones,
                                        title: "Natural Phone Support",
                                        description: "Real conversations, not robotic menus. Customers talk normally and get human-like responses."
                                    },
                                    {
                                        icon: MessageCircle,
                                        title: "Email Intelligence",
                                        description: "Reads, understands, and responds to support emails with personalized, helpful solutions."
                                    },
                                    {
                                        icon: Clock,
                                        title: "Website Chat Integration",
                                        description: "Embedded chat widget that provides instant, accurate answers to visitor questions."
                                    },
                                    {
                                        icon: Target,
                                        title: "Learning & Adaptation",
                                        description: "Gets smarter over time, learning your products, policies, and customer preferences."
                                    },
                                    {
                                        icon: Users,
                                        title: "Smart Escalation",
                                        description: "Knows when to involve humans, passing along complete conversation context."
                                    },
                                    {
                                        icon: BarChart3,
                                        title: "Real-Time Analytics",
                                        description: "Track response times, resolution rates, and customer satisfaction in real-time."
                                    }
                                ].map((capability, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative group"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                                        <div
                                            className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                            }}
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#2D1A53] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <capability.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#2D1A53] mb-2">{capability.title}</h3>
                                            <p className="text-[#8B9299] leading-relaxed">{capability.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Cassie is Always On Section */}
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
                                    Cassie is Always On
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    Performance metrics that matter for your business
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: "⚡",
                                        stat: "<3 Second",
                                        label: "Response",
                                        description: "Average response time across all channels"
                                    },
                                    {
                                        icon: "🌙",
                                        stat: "24/7",
                                        label: "Availability",
                                        description: "Never miss a customer inquiry, even on weekends and holidays"
                                    },
                                    {
                                        icon: "🎯",
                                        stat: "95%",
                                        label: "Resolution Rate",
                                        description: "Solves most issues without human intervention"
                                    },
                                    {
                                        icon: "💰",
                                        stat: "70%",
                                        label: "Cost Reduction",
                                        description: "Reduce support costs while improving satisfaction"
                                    },
                                    {
                                        icon: "📈",
                                        stat: "10x",
                                        label: "Scale",
                                        description: "Handle 10x more inquiries without hiring additional staff"
                                    },
                                    {
                                        icon: "🔗",
                                        stat: "Full",
                                        label: "Integration",
                                        description: "Works with your existing CRM, helpdesk, and communication tools"
                                    }
                                ].map((metric, index) => (
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
                                            <div className="text-4xl mb-4">{metric.icon}</div>
                                            <div className="text-3xl font-bold text-[#8B5CF6] mb-1">{metric.stat}</div>
                                            <div className="text-lg font-semibold text-[#2D1A53] mb-2">{metric.label}</div>
                                            <p className="text-[#8B9299] text-sm leading-relaxed">{metric.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Client Testimonials Section */}
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
                                    What Businesses Say About Cassie
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    Real results from companies using Cassie for customer support
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative group"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                                        <div
                                            className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                            }}
                                        >
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-[#8B5CF6] text-[#8B5CF6]" />
                                                ))}
                                            </div>

                                            <blockquote className="text-[#2D1A53] mb-6 leading-relaxed">
                                                "{testimonial.quote}"
                                            </blockquote>

                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <div className="font-semibold text-[#2D1A53]">{testimonial.name}</div>
                                                    <div className="text-sm text-[#8B9299]">{testimonial.company}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Pricing Section */}
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
                                    Invest in Cassie B.
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    Transparent pricing that delivers exceptional ROI
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {[
                                    {
                                        icon: "🔧",
                                        name: "Setup & Training",
                                        price: "$2,997",
                                        period: "one-time",
                                        description: "Complete configuration and training",
                                        features: [
                                            "Custom knowledge base setup",
                                            "Voice and personality training",
                                            "Integration with your systems",
                                            "Testing and optimization"
                                        ],
                                        popular: false
                                    },
                                    {
                                        icon: "📊",
                                        name: "Monthly Platform",
                                        price: "$297",
                                        period: "/month",
                                        description: "Access and support",
                                        features: [
                                            "Access to Cassie dashboard",
                                            "Performance analytics",
                                            "Ongoing improvements",
                                            "Priority support"
                                        ],
                                        popular: false
                                    },
                                    {
                                        icon: "💬",
                                        name: "Per Interaction",
                                        price: "$0.50",
                                        period: "/interaction",
                                        description: "Pay only for actual customer interactions",
                                        features: [
                                            "Pay only for actual customer interactions",
                                            "No minimums or hidden fees",
                                            "Scale up or down as needed"
                                        ],
                                        popular: true
                                    }
                                ].map((plan, index) => (
                                    <motion.div
                                        key={index}
                                        className={`relative group ${plan.popular ? 'scale-105' : ''}`}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </div>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1A53]/10 to-[#C89BA1]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />

                                        <div
                                            className={`relative bg-white/60 backdrop-blur-xl border rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-[#8B5CF6]/30' : 'border-white/40'
                                                }`}
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                                                boxShadow: '0 8px 32px rgba(45, 26, 83, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                            }}
                                        >
                                            <div className="text-center mb-8">
                                                <div className="text-4xl mb-4">{plan.icon}</div>
                                                <h3 className="text-2xl font-bold text-[#2D1A53] mb-2">{plan.name}</h3>
                                                <p className="text-[#8B9299] mb-4">{plan.description}</p>
                                                <div className="flex items-baseline justify-center">
                                                    <span className="text-4xl font-bold text-[#2D1A53]">{plan.price}</span>
                                                    <span className="text-[#8B9299] ml-1">{plan.period}</span>
                                                </div>
                                            </div>

                                            <ul className="space-y-3 mb-8">
                                                {plan.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-3">
                                                        <CheckCircle className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                                                        <span className="text-[#8B9299]">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <motion.button
                                                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white shadow-lg hover:shadow-xl'
                                                    : 'bg-white/40 text-[#2D1A53] border border-[#2D1A53]/20 hover:bg-white/60'
                                                    }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                Get Started with Cassie
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
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
                                    Frequently Asked Questions about Cassie
                                </h2>
                                <p className="text-xl text-[#8B9299] max-w-2xl mx-auto">
                                    Everything you need to know about working with Cassie
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
                                        Ready to Transform Your Customer Support?
                                    </h2>

                                    <p className="text-xl text-[#8B9299] mb-8 max-w-2xl mx-auto">
                                        Transform your customer support with AI that understands, responds, and resolves issues 24/7.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Get Started with Cassie B.
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

            {/* Chat Widget */}
            <AnimatePresence>
                {showChatWidget && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: isMinimized ? 0.8 : 1,
                            y: 0,
                            height: isMinimized ? "60px" : "500px"
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 right-6 z-50 w-80 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                            boxShadow: '0 20px 40px rgba(45, 26, 83, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                        }}
                    >
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-[#2D1A53] to-[#4A3B7A] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Headphones size={16} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm">Cassie B.</h3>
                                    <p className="text-white/80 text-xs">AI Customer Support</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <Minimize2 size={16} />
                                </button>
                                <button
                                    onClick={() => setShowChatWidget(false)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Chat Messages */}
                                <div className="h-80 overflow-y-auto p-4 space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user'
                                                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white'
                                                    : 'bg-white/60 text-[#2D1A53] border border-white/40'
                                                    }`}
                                                style={
                                                    message.sender === 'cassie'
                                                        ? {
                                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                                                            boxShadow: '0 4px 16px rgba(45, 26, 83, 0.08)',
                                                        }
                                                        : {}
                                                }
                                            >
                                                <p className="text-sm leading-relaxed">{message.text}</p>
                                                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-[#8B9299]'
                                                    }`}>
                                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div
                                                className="bg-white/60 text-[#2D1A53] border border-white/40 p-3 rounded-2xl"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
                                                    boxShadow: '0 4px 16px rgba(45, 26, 83, 0.08)',
                                                }}
                                            >
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Chat Input */}
                                <div className="p-4 border-t border-white/20">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Ask Cassie anything..."
                                            className="flex-1 px-4 py-2 bg-white/40 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-[#2D1A53] placeholder-[#8B9299] text-sm"
                                            disabled={isTyping}
                                        />
                                        <motion.button
                                            onClick={sendMessage}
                                            disabled={!inputMessage.trim() || isTyping}
                                            className="bg-gradient-to-r from-[#8B5CF6] to-[#2D1A53] text-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Send size={16} />
                                        </motion.button>
                                    </div>
                                    <p className="text-xs text-[#8B9299] mt-2 text-center">
                                        This is a demo. Real Cassie would know your specific business.
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CassieBPage;