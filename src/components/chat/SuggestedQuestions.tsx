// src/components/SuggestedQuestions.jsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from 'framer-motion';

interface SuggestedQuestionsProps {
  onQuestionSelect: (question: string) => void;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const questionVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ onQuestionSelect }) => {
  // Organized questions by category from your knowledge base
  const questionCategories = [
    {
      title: "Adelaide Suburbs",
      questions: [
        "What are the best suburbs in Adelaide?",
        "Which Adelaide suburbs are most affordable?",
        "Tell me about North Adelaide properties",
        "What's the property market like in Glenelg?",
        "Which suburbs have the best schools?",
        "What are good coastal suburbs in Adelaide?"
      ]
    },
    {
      title: "Market Trends",
      questions: [
        "What are current Adelaide property prices?",
        "Is now a good time to buy in Adelaide?",
        "What's the forecast for Adelaide real estate?",
        "How does Adelaide compare to other Australian cities?",
        "What are the latest rental market trends?",
        "Which suburbs are growing fastest?"
      ]
    },
    {
      title: "First Home Buyers",
      questions: [
        "What grants are available for first home buyers?",
        "Which suburbs are best for first home buyers?",
        "What are the hidden costs of buying a home?",
        "How much deposit do I need in Adelaide?",
        "What's the First Home Loan Deposit Scheme?",
        "Tips for negotiating as a first home buyer"
      ]
    },
    {
      title: "Investment Advice",
      questions: [
        "Where are the best investment suburbs in Adelaide?",
        "What rental yields can I expect in Adelaide?",
        "Should I invest in houses or units?",
        "What are the tax benefits for property investors?",
        "Which suburbs have high capital growth potential?",
        "What's the vacancy rate in Adelaide?"
      ]
    },
    {
      title: "Buying & Selling",
      questions: [
        "What's the buying process in South Australia?",
        "How much are agent fees when selling?",
        "What adds the most value when selling a home?",
        "How do auctions work in Adelaide?",
        "What should I look for in property inspections?",
        "How long does settlement usually take?"
      ]
    },
    {
      title: "Regional SA",
      questions: [
        "What's the property market like in Barossa Valley?",
        "Tell me about Victor Harbor real estate",
        "Is Mount Gambier a good investment?",
        "What are prices like in Adelaide Hills?",
        "How is McLaren Vale for lifestyle properties?",
        "What regional areas have the best rental yields?"
      ]
    }
  ];

  const handleQuestionClick = (question: string) => {
    if (onQuestionSelect) {
      onQuestionSelect(question); // Pass the selected question to the parent
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg max-w-6xl mx-auto mb-20"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <h2 className="text-2xl font-bold text-realestate-primary mb-6 text-center">
        What would you like to know about Adelaide real estate?
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {questionCategories.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-realestate-secondary mb-3">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.questions.map((question, qIndex) => (
                <motion.div
                  key={qIndex}
                  variants={questionVariants}
                  whileHover="hover"
                >
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start py-2 px-4 h-auto whitespace-normal text-sm font-normal border-gray-200 hover:border-realestate-primary hover:bg-realestate-light/20"
                    onClick={() => handleQuestionClick(question)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4 text-realestate-primary" />
                    {question}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SuggestedQuestions;