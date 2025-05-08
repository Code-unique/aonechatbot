import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, ArrowLeft, Building, User, ThumbsUp, ThumbsDown, AlertCircle,
  BarChart2, Home, MapPin, TrendingUp, Umbrella, TreePine, KeyRound, Users, Briefcase, PercentCircle, Search, Award, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import ChatMessage from "@/components/chat/ChatMessage";
import { generateChatResponse } from "@/lib/chat";
import { motion, AnimatePresence } from 'framer-motion';
import SuggestedQuestions from '@/components/chat/SuggestedQuestions';
import { cn } from "@/lib/utils";

// Add these new interfaces at the top
interface QuestionCategory {
  name: string;
  title: string;
  icon: React.ReactNode;
  questions: { text: string; answer: string; }[]; // Changed to include answers
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  feedback?: 'liked' | 'disliked'; // Track user feedback
}

const messageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const loadingVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
  exit: { opacity: 0 },
};

const dotVariants = {
  initial: { y: 0 },
  animate: { y: -5, transition: { repeat: Infinity, repeatType: 'yoyo', duration: 0.4 } },
};

const suggestionVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] } },
  hover: { scale: 1.02, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.08)', transition: { duration: 0.15 } },
  tap: { scale: 0.98 }
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "G'day! I'm the A ONE Real Estate virtual assistant for Adelaide and South Australia. How can I help you with your A ONE Real Estate property questions today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userPreferences, setUserPreferences] = useState<string[]>([]);
  const [showNamePrompt, setShowNamePrompt] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Updated question categories based on www.aonerealestate.com.au
  const questionCategories: QuestionCategory[] = [
    {
      name: 'buying',
      title: 'Buying Property',
      icon: <Home size={16} className="mr-2" />,
      questions: [
        {
          text: "What is the buying process in South Australia?",
          answer: "The buying process in South Australia typically involves getting pre-approval for a loan, searching for properties, making an offer, signing a contract, conducting inspections, and settlement. A ONE Real Estate can guide you through each step."
        },
        {
          text: "How can A ONE Real Estate help me find a property?",
          answer: "A ONE Real Estate can help you find a property by understanding your needs, providing property listings, arranging inspections, and offering expert advice throughout the buying process."
        },
        {
          text: "What are the costs associated with buying a home through A ONE Real Estate?",
          answer: "Costs associated with buying a home in South Australia include the deposit, stamp duty, legal fees, inspection costs, and loan fees. A ONE Real Estate can provide information on these costs."
        },
        {
          text: "Tell me about auctions in Adelaide with A ONE Real Estate.",
          answer: "Auctions in Adelaide are a common method of sale. A ONE Real Estate can assist you with understanding the auction process, bidding strategies, and your rights as a buyer or seller."
        },
        {
          text: "What should I look for during property inspections with A ONE Real Estate?",
          answer: "During property inspections, you should look for structural issues, pest infestations, and the condition of fixtures and fittings. A ONE Real Estate can help you arrange professional inspections."
        }
      ]
    },
    {
      name: 'selling',
      title: 'Selling Property',
      icon: <KeyRound size={16} className="mr-2" />,
      questions: [
        {
          text: "How can A ONE Real Estate help me sell my property?",
          answer: "A ONE Real Estate offers services like property appraisals, marketing, negotiating with buyers, and managing the sale process to help you sell your property."
        },
        {
          text: "What is involved in a property appraisal from A ONE Real Estate?",
          answer: "A property appraisal from A ONE Real Estate involves assessing the market value of your property based on its condition, location, and recent sales data."
        },
        {
          text: "What are the best ways A ONE Real Estate markets properties?",
          answer: "A ONE Real Estate markets properties through online listings, open houses, advertising, and their network of potential buyers to maximize exposure."
        },
        {
          text: "How do I prepare my home for sale with A ONE Real Estate?",
          answer: "Preparing your home for sale with A ONE Real Estate includes decluttering, cleaning, making necessary repairs, and staging to present it in the best possible light."
        },
        {
          text: "What are the selling costs in SA with A ONE Real Estate?",
          answer: "Selling costs in SA include agent commissions, advertising fees, legal fees, and any costs associated with preparing the property for sale. A ONE Real Estate can provide a detailed breakdown."
        }
      ]
    },
    {
      name: 'propertyManagement',
      title: 'Property Management',
      icon: <Users size={16} className="mr-2" />,
      questions: [
        {
          text: "What property management services does A ONE Real Estate offer?",
          answer: "A ONE Real Estate offers a range of property management services, including tenant screening, rent collection, property maintenance, and regular inspections."
        },
        {
          text: "How do A ONE Real Estate find and screen tenants?",
          answer: "A ONE Real Estate finds and screens tenants through background checks, reference checks, and assessing their financial suitability to ensure reliable tenancy."
        },
        {
          text: "What are the responsibilities of a landlord with A ONE Real Estate?",
          answer: "Landlord responsibilities, with A ONE Real Estate's assistance, include maintaining the property, adhering to tenancy laws, and ensuring a safe living environment for tenants."
        },
        {
          text: "How does A ONE Real Estate handle property maintenance?",
          answer: "A ONE Real Estate handles property maintenance by coordinating repairs, using trusted tradespeople, and ensuring that the property is well-maintained."
        },
        {
          text: "What are the fees for A ONE Real Estate property management?",
          answer: "A ONE Real Estate's property management fees vary depending on the services required. Contact them for a detailed fee schedule."
        }
      ]
    },
    {
      name: 'investing',
      title: 'Investing',
      icon: <TrendingUp size={16} className="mr-2" />,
      questions: [
        {
          text: "What are good investment areas in Adelaide according to A ONE Real Estate?",
          answer: "Good investment areas in Adelaide, according to A ONE Real Estate, often include suburbs with strong growth potential, good infrastructure, and high rental demand.  Specific areas vary, contact A ONE for current advice."
        },
        {
          text: "How can A ONE Real Estate help with investment properties?",
          answer: "A ONE Real Estate can help with investment properties by providing market analysis, identifying suitable properties, and offering property management services to maximize returns."
        },
        {
          text: "What are the risks and rewards of property investment with A ONE Real Estate?",
          answer: "Risks of property investment include market fluctuations and vacancy, while rewards include capital growth and rental income. A ONE Real Estate can help you manage these factors."
        },
        {
          text: "What is the rental yield in Adelaide?",
          answer: "Rental yield in Adelaide varies depending on the property and location. A ONE Real Estate can provide current rental yield data for specific areas."
        },
        {
          text: "How do I finance an investment property through A ONE Real Estate?",
          answer: "Financing an investment property typically involves obtaining a loan.  A ONE Real Estate can work with you and refer you to financial professionals to help with this process."
        }
      ]
    },
    {
      name: 'aboutUs',
      title: 'About A ONE',
      icon: <Building size={16} className="mr-2" />,
      questions: [
        {
          text: "Tell me about A ONE Real Estate.",
          answer: "A ONE Real Estate is a real estate agency in Adelaide and South Australia, known for its expertise in the local property market.  They offer a full range of services."
        },
        {
          text: "What areas does A ONE Real Estate service?",
          answer: "A ONE Real Estate services Adelaide and South Australia, providing real estate services across a wide range of metropolitan and regional areas."
        },
        {
          text: "What is A ONE Real Estate's company history?",
          answer: "A ONE Real Estate has a history of serving the South Australian community with real estate services.  For specific details, it's best to contact them directly."
        },
        {
          text: "What are A ONE Real Estate's core values?",
          answer: "A ONE Real Estate's core values typically include professionalism, integrity, and customer service.  Contact them to get the most up-to-date information."
        },
        {
          text: "What awards has A ONE Real Estate received?",
          answer: "A ONE Real Estate may have received industry recognition and awards.  Check their website or contact them for details on any awards."
        }
      ]
    },
    {
        name: 'commercial',
        title: 'Commercial Real Estate',
        icon: <Briefcase size={16} className="mr-2" />,
        questions: [
          {
            text: "What commercial property services does A ONE Real Estate offer?",
            answer: "A ONE Real Estate offers services such as sales, leasing, and management of commercial properties."
          },
          {
            text: "How can A ONE Real Estate help me find commercial space?",
            answer: "A ONE Real Estate can help you find commercial space by providing listings, arranging viewings, and negotiating leases or purchases."
          },
          {
            text: "What types of commercial properties does A ONE Real Estate handle?",
            answer: "A ONE Real Estate handles a variety of commercial properties, including offices, retail spaces, and industrial properties."
          },
          {
            text: "What is the commercial property market like in Adelaide, according to A ONE Real Estate?",
            answer: "A ONE Real Estate can provide insights into the Adelaide commercial property market, including trends and opportunities."
          },
          {
            text: "How do I lease a commercial property through A ONE Real Estate?",
            answer: "Leasing a commercial property through A ONE Real Estate involves finding a suitable space, negotiating lease terms, and signing a lease agreement."
          }
        ]
      },
      {
        name: 'newHomes',
        title: 'New Homes',
        icon: <Home size={16} className="mr-2" />,
        questions: [
          {
            text: "What new home developments are available through A ONE Real Estate?",
            answer: "A ONE Real Estate can provide information on new home developments, including locations, builders, and property types."
          },
          {
            text: "How can A ONE Real Estate help me buy a new home?",
            answer: "A ONE Real Estate assists with buying new homes by providing information, arranging inspections, and guiding you through the purchase process."
          },
          {
            text: "What are the advantages of buying a new home with A ONE Real Estate?",
            answer: "Advantages of buying a new home often include modern features, energy efficiency, and builder warranties. A ONE Real Estate can explain these benefits."
          },
          {
            text: "Tell me about A ONE Real Estate's house and land packages.",
            answer: "A ONE Real Estate can provide details on house and land packages, including available options and the building process."
          },
          {
            text: "What builders does A ONE Real Estate work with?",
            answer: "A ONE Real Estate works with various builders in South Australia. Contact them for a list of builders and developments."
          }
        ]
      },
      {
        name: 'auctions',
        title: 'Auctions',
        icon: <PercentCircle size={16} className="mr-2" />,
        questions: [
          {
            text: "How do property auctions work in Adelaide?",
            answer: "Property auctions in Adelaide involve bidding for a property, with the highest bidder typically securing the sale. A ONE Real Estate can guide you through this process."
          },
          {
            text: "How can A ONE Real Estate help me buy at auction?",
            answer: "A ONE Real Estate can assist buyers at auction by providing advice, helping with bidding strategies, and understanding auction conditions."
          },
          {
            text: "How can A ONE Real Estate help me sell at auction?",
            answer: "A ONE Real Estate helps sellers at auction by setting reserves, marketing the property, and managing the auction day process."
          },
          {
            text: "What are the pros and cons of auctions with A ONE Real Estate?",
            answer: "Pros of auctions include a quick sale, while cons can include uncertainty. A ONE Real Estate can help weigh these factors."
          },
          {
            text: "What are A ONE Real Estate's auction day tips?",
            answer: "A ONE Real Estate can provide auction day tips, such as setting a budget, inspecting the property, and understanding the rules."
          }
        ]
      },
  ];

  const defaultQuestions = [
    "Tell me about A ONE Real Estate.",
    "How can A ONE Real Estate help me sell my property?",
    "What property management services does A ONE Real Estate offer?",
    "What are good investment areas in Adelaide according to A ONE Real Estate?",
    "What is the buying process in South Australia with A ONE Real Estate?",
    "What new home developments are available through A ONE Real Estate?"
  ];

  const getRelevantQuestions = useCallback(() => {
    if (!userPreferences?.length) {
      // Return a mix from all categories if no preferences
      const availableCategories = questionCategories.slice(0, 6);
      return availableCategories
        .flatMap(cat => cat.questions.slice(0, 1))
        .map(q => q.text);
    }
  
    const relevantQuestions = userPreferences.flatMap(preference => {
      const category = questionCategories.find(cat => cat.name === preference);
      return category?.questions.map(q => q.text) || [];
    });
  
    // Remove duplicates and limit to 6 questions
    return [...new Set(relevantQuestions)].slice(0, 6);
  }, [userPreferences, questionCategories]);
  
  // Initialize suggested questions - runs only once on mount
  useEffect(() => {
    setSuggestedQuestions(getRelevantQuestions());
  }, [getRelevantQuestions]); // Safe because getRelevantQuestions is memoized
  
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  // Scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]); // scrollToBottom is memoized
  
  const adjustTextareaHeight = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, 150);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, []);
  
  // Adjust textarea when input changes
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue, adjustTextareaHeight]); // adjustTextareaHeight is memoized

    // Analyze user interests based on keywords.  Updated to include more A ONE specific terms.
    const analyzeUserInterests = useCallback((message: string) => {
      const lowerMessage = message.toLowerCase();
      const newPreferences = [...userPreferences];
 
      const interestMap: { [key: string]: string } = {
        'buy': 'buying',
        'selling': 'selling',
        'sell': 'selling',
        'property management': 'propertyManagement',
        'rental': 'propertyManagement',
        'invest': 'investing',
        'investment': 'investing',
        'commercial property': 'commercial',
        'commercial real estate': 'commercial',
        'new homes': 'newHomes',
        'house and land': 'newHomes',
        'auctions': 'auctions',
        'auction': 'auctions',
        'about a one': 'aboutUs',
        'a one real estate': 'aboutUs',
        'find property': 'buying',
        'appraisal': 'selling',
        'tenant screening': 'propertyManagement',
        'investment property': 'investing',
        'market trends': 'investing', // Can also be selling/buying
        'new developments': 'newHomes',
        'auction process': 'auctions',
        'adelaide real estate': 'buying', // Broad, could be others
        'sell my home': 'selling',
        'property investor': 'investing',
        'commercial lease': 'commercial',
        'first home buyer': 'buying',  //Could add firstHome category if needed.
      };
 
      for (const keyword in interestMap) {
        if (lowerMessage.includes(keyword) && !newPreferences.includes(interestMap[keyword])) {
          newPreferences.push(interestMap[keyword]);
        }
      }
 
      if (newPreferences.length !== userPreferences.length) {
        setUserPreferences(newPreferences);
      }
    }, [userPreferences]);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;

    if (showNamePrompt && !userName) {
      setUserName(text);
      setShowNamePrompt(false);

      const thankYouMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: `Thanks, ${text}! I'm here to help with your A ONE Real Estate questions.  What can I assist you with today?`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, {
        id: (Date.now() - 1).toString(),
        type: 'user',
        content: text,
        timestamp: new Date()
      }, thankYouMessage]);

      setInputValue('');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    analyzeUserInterests(text);

    try {
        const responseText = await generateChatResponse(text);
        let response: string;

        // Check if the input matches any of the detailed questions
        for (const category of questionCategories) {
            const foundQuestion = category.questions.find(q =>
                text.toLowerCase().includes(q.text.toLowerCase())
            );
            if (foundQuestion) {
                response = foundQuestion.answer; // Use the stored answer
                break; // Exit the loop after finding a match
            }
        }

        // Fallback to the AI-generated response if no specific question matched.
        if (!response) {
            response = responseText;
        }

      if (!response) {
        throw new Error("Empty response from AI");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setTimeout(() => {
        setSuggestedQuestions(getRelevantQuestions());
      }, 500);
    } catch (error: any) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'bot',
        content: "I'm sorry, I encountered an error and couldn't process your request. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setError(error.message || "Failed to get response");
      toast.error("Sorry, I'm having trouble connecting right now. Please try again in a moment.");
    } finally {
      setIsLoading(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

    const handleSelectSuggestion = (questionText: string) => {
        setInputValue(questionText);
        handleSendMessage(questionText);
    };

  const handleFeedback = useCallback((liked: boolean, messageContent: string) => {
    setMessages(prevMessages =>
      prevMessages.map(msg => {
        if (msg.content === messageContent) {
          return {
            ...msg,
            feedback: liked ? 'liked' : 'disliked',
          };
        }
        return msg;
      })
    );

    if (liked) {
      for (const category of questionCategories) {
        if (category.questions.some(q => q.text.toLowerCase().includes(messageContent.toLowerCase()))) {
          setUserPreferences(prev =>
            prev.includes(category.name) ? prev : [...prev, category.name]
          );
          break;
        }
      }
    }
    console.log('Feedback:', { liked, message: messageContent });
  }, [questionCategories]);

  useEffect(() => {
    if (showNamePrompt && messages.length === 1) {
      const timer = setTimeout(() => {
        const namePrompt: Message = {
          id: '2',
          type: 'bot',
          content: "I'd like to personalize your experience. What's your name?",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, namePrompt]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showNamePrompt, messages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-realestate-light to-white">
      <Card className="flex-grow w-full max-w-4xl mx-auto flex flex-col overflow-hidden shadow-2xl border border-gray-200 rounded-2xl">
        <CardHeader className="bg-realestate-primary text-white py-6 px-8 flex flex-row items-center justify-between">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
            <ArrowLeft size={24} className="mr-3" />
            <span className="text-lg font-medium">Back to Home</span>
          </Link>
          <CardTitle className="text-2xl font-semibold flex items-center">
            <Building size={26} className="mr-3" />
            A ONE Real Estate Assistant
            <div className="h-4 w-4 bg-green-400 rounded-full ml-2 animate-pulse"></div>
          </CardTitle>
          {userName && (
            <div className="flex items-center">
              <User size={18} className="text-white mr-2" />
              <span className="text-md">{userName}</span>
            </div>
          )}
          {!userName && <div className="w-24"></div>}
        </CardHeader>

        <CardContent className="flex-grow flex flex-col p-0">
          <div className="flex-grow overflow-y-auto p-6 bg-gray-50/50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={messageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={cn(
                    "mb-4 flex flex-col",
                    message.type === 'user' ? 'items-end' : 'items-start'
                  )}
                >
                  <ChatMessage
                    type={message.type}
                    content={message.content}
                    timestamp={message.timestamp}
                  />
                  {message.type === 'bot' && !showNamePrompt && messages[messages.length - 1]?.id === message.id && (
                    <div className="flex items-center mt-1 space-x-2">
                      <button
                        onClick={() => handleFeedback(true, message.content)}
                        className={cn(
                          "focus:outline-none",
                          message.feedback === 'liked'
                            ? 'text-green-600'
                            : 'text-gray-500 hover:text-green-500'
                        )}
                      >
                        <ThumbsUp size={18} />
                      </button>
                      <button
                        onClick={() => handleFeedback(false, message.content)}
                        className={cn(
                          "focus:outline-none",
                          message.feedback === 'disliked'
                            ? 'text-red-600'
                            : 'text-gray-500 hover:text-red-500'
                        )}
                      >
                        <ThumbsDown size={18} />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  variants={loadingVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex items-center space-x-3 p-4 max-w-[80%] bg-gray-100 rounded-2xl text-gray-500"
                >
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      variants={dotVariants}
                      className="w-3 h-3 bg-realestate-primary rounded-full"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  ))}
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded relative mb-6"
                  role="alert"
                >
                  <div className="flex items-center">
                    <AlertCircle size={24} className="mr-3 flex-shrink-0" />
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {(!isLoading && !showNamePrompt && suggestedQuestions.length > 0) && (
            <div className="px-8 py-6 border-t border-gray-200 bg-gray-50">
              <h4 className="text-lg font-semibold text-realestate-primary mb-4">
                {messages.length <= 2 ? "Explore A ONE Real Estate Services" : "Here are some suggestions..."}
              </h4>
             
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {questionCategories.map((category) => (
                  <motion.button
                    key={category.name}
                    variants={suggestionVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                        // Find a random question *text* from the category
                        const randomQuestionText = category.questions[Math.floor(Math.random() * category.questions.length)].text;
                        handleSelectSuggestion(randomQuestionText);
                    }}
                    className={cn(
                      "flex items-center text-sm px-3 py-1.5 rounded-full",
                      userPreferences.includes(category.name)
                        ? "bg-realestate-primary text-white"
                        : "bg-white text-gray-700 border border-gray-300"
                    )}
                  >
                    {category.icon}
                    {category.title}
                  </motion.button>
                ))}
              </div>

              {/* Suggested questions grid - wrapped in mobile-friendly scroll */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <AnimatePresence>
                  {suggestedQuestions.map((question, index) => (
                    <motion.div
                      key={index}
                      variants={suggestionVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handleSelectSuggestion(question)}
                      className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-realestate-primary transition-colors shadow-sm"
                    >
                      <section aria-labelledby={`question-${index}`}>
                        <div className="border-b border-gray-100 pb-3 mb-3">
                          <h3 id={`question-${index}`} className="sr-only">Suggested Question</h3>
                        </div>
                        <p className="text-gray-800">{question}</p>
                      </section>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex items-end space-x-3">
              <Textarea
                ref={textareaRef}
                className="flex-grow resize-none focus-visible:ring-realestate-primary min-h-[50px] max-h-[150px] py-3 px-4 rounded-xl text-lg"
                placeholder={showNamePrompt && !userName ? "Enter your name..." : "Ask me about Adelaide real estate..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                rows={1}
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isLoading}
                className="bg-realestate-primary hover:bg-realestate-secondary text-white rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                aria-label={inputValue.trim() ? `Ask: ${inputValue}` : "Send message"}
              >
                <Send size={20} />
              </Button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                {userName ?
                  `Hi ${userName}, I can provide information on buying, selling, property management and more from A ONE Real Estate.` :
                  "Ask about A ONE Real Estate services in Adelaide."}
              </p>
            </div>
          </div>
        </CardContent>
        <SuggestedQuestions
  onSelectQuestion={handleSelectSuggestion}
  userName={userName} // Assuming you have this in your parent
  // onFeedback={handleFeedbackSubmit} // If you want to use the feedback functionality
  // questionsPerPage={8} // Optional: Set the number of questions per page
  className="mt-4" // Optional: Add any custom classes
/>
      </Card>
    </div>
  );
};

export default Chatbot;
