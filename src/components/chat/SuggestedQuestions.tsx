// src/components/SuggestedQuestions.tsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Spinner from '@/components/ui/spinner';

import { motion } from 'framer-motion';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

interface QuestionSuggestionsProps {
  onSelectQuestion: (question: string) => void;
  onFeedback?: (liked: boolean, question: string) => void;
  className?: string;
  userName?: string;
  questionsPerPage?: number;
}

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

const SuggestedQuestions: React.FC<QuestionSuggestionsProps> = ({
  onSelectQuestion,
  onFeedback,
  className,
  userName,
  questionsPerPage = 6, // Default questions per page
}) => {
  const [likedQuestions, setLikedQuestions] = useState<Record<string, boolean>>({});
  const [loadingQuestion, setLoadingQuestion] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const allQuestions = questionCategories.flatMap(category => category.questions);
  const totalQuestions = allQuestions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const currentQuestions = React.useMemo(() => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return allQuestions.slice(startIndex, endIndex);
  }, [allQuestions, currentPage, questionsPerPage]);

  const greeting = userName
    ? `Hi ${userName}, explore these questions:`
    : "Explore these popular questions:";

  const handleFeedback = (liked: boolean, question: string) => {
    setLoadingQuestion(question);
    setLikedQuestions(prev => ({ ...prev, [question]: liked }));
    onFeedback?.(liked, question);
    setTimeout(() => setLoadingQuestion(null), 1000);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      className={cn("bg-white rounded-2xl p-8 shadow-lg max-w-6xl mx-auto mb-20", className)}
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-realestate-primary mb-2">{greeting}</h2>
        <div className="w-20 h-1 bg-realestate-light mx-auto rounded-full mt-1"></div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {currentQuestions.map((question, index) => {
          const isLiked = likedQuestions[question] === true;
          const isDisliked = likedQuestions[question] === false;

          return (
            <motion.div
              key={index}
              variants={questionVariants}
              whileHover="hover"
            >
              <div className="relative group">
                <Button
                  variant="outline"
                  className={cn(
                    "w-full bg-white border shadow-sm hover:shadow-md transition-transform duration-200 transform hover:scale-[1.02] rounded-full px-4 py-2 text-xs font-medium flex items-center gap-2 text-left justify-start",
                    isLiked && "border-green-400 text-green-600",
                    isDisliked && "border-red-400 text-red-600"
                  )}
                  onClick={() => onSelectQuestion(question)}
                >
                  <MessageSquare className="h-4 w-4" />
                  {question}
                </Button>

                <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white p-1 rounded-full shadow-lg z-20">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFeedback(true, question);
                    }}
                    className="h-6 w-6 p-0 rounded-full"
                    aria-label={`Thumb up for ${question}`}
                  >
                    {loadingQuestion === question ? (
                      <Spinner size="sm" />
                    ) : (
                      <ThumbsUp className="h-4 w-4 text-green-500" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFeedback(false, question);
                    }}
                    className="h-6 w-6 p-0 rounded-full"
                    aria-label={`Thumb down for ${question}`}
                  >
                    {loadingQuestion === question ? (
                      <Spinner size="sm" />
                    ) : (
                      <ThumbsDown className="h-4 w-4 text-red-500" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page} active={currentPage === page}>
                  <PaginationLink onClick={() => handlePageChange(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </motion.div>
  );
};

export default SuggestedQuestions;