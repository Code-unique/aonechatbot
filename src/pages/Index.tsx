// src/pages/Index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MessageCircle, Building, TrendingUp, Home, Key } from "lucide-react";
import { motion } from 'framer-motion'; // For more advanced animations

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const featureCardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] } },
  hover: { scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-realestate-light to-white overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="container mx-auto px-6 py-20 md:py-32">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-realestate-primary mb-6 tracking-tight">
            A ONE Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in Adelaide real estate. Discover properties, insights, and expert advice.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="flex flex-col items-center justify-center mb-24"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <Link to="/chat">
            <Button
              className="bg-realestate-primary hover:bg-realestate-secondary text-white text-lg px-10 py-8 rounded-xl flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <MessageCircle size={24} />
              <span>Chat with our AI Assistant</span>
            </Button>
          </Link>
          <p className="text-gray-500 mt-5 text-lg">
            Get instant answers to your property questions
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <FeatureCard
            icon={<Building size={28} />}
            title="Adelaide Suburbs"
            description="Explore the diverse suburbs of Adelaide, from coastal havens to vibrant city-fringe locales."
            variants={featureCardVariants}
          />
          <FeatureCard
            icon={<TrendingUp size={28} />}
            title="Market Trends"
            description="Stay ahead with real-time data and insightful analysis of Adelaide's dynamic property market."
            variants={featureCardVariants}
            transition={{ delay: 0.1 }}
          />
          <FeatureCard
            icon={<Home size={28} />}
            title="First Home Buyers"
            description="Your guide to navigating grants, understanding the market, and finding your ideal first home in SA."
            variants={featureCardVariants}
            transition={{ delay: 0.2 }}
          />
          <FeatureCard
            icon={<Key size={28} />}
            title="Investment Advice"
            description="Unlock high-potential investment opportunities across Adelaide with expert insights."
            variants={featureCardVariants}
            transition={{ delay: 0.3 }}
          />
        </motion.div>

        

        {/* Testimonial */}
        <motion.div
          className="bg-white rounded-2xl p-10 shadow-lg max-w-4xl mx-auto"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-realestate-primary flex items-center justify-center text-white text-2xl font-bold mb-5">
              A1
            </div>
            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-5">
              "Our AI assistant is trained on the most up-to-date Adelaide real estate data, providing you with accurate insights on property values, suburb profiles, and market trends."
            </p>
            <p className="text-realestate-primary font-semibold text-md">
              — A ONE Real Estate Team
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description, variants, transition }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
      variants={variants}
      whileHover="hover"
      initial="initial"
      animate="animate"
      transition={transition}
    >
      <div className="h-14 w-14 bg-realestate-light rounded-lg flex items-center justify-center text-realestate-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-realestate-primary mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default Index;