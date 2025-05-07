// QuestionSuggestions.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

interface QuestionSuggestionsProps {
  suggestions: string[];
  onSelectQuestion: (question: string) => void;
  onFeedback?: (liked: boolean, question: string) => void;
  className?: string;
  userName?: string;
}

const QuestionSuggestions: React.FC<QuestionSuggestionsProps> = ({
  suggestions = [],
  onSelectQuestion,
  onFeedback,
  className,
  userName
}) => {
  const [likedQuestions, setLikedQuestions] = useState<Record<number, boolean>>({});
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  if (!suggestions.length) return <div className="text-center text-gray-500">No suggestions available.</div>;

  const greeting = userName
    ? `Hi ${userName}, interested in any of these?`
    : "What would you like to know about?";

  const handleFeedback = (index: number, liked: boolean, question: string) => {
    setLoadingIndex(index);
    setLikedQuestions(prev => ({ ...prev, [index]: liked }));
    onFeedback?.(liked, question);
    setTimeout(() => setLoadingIndex(null), 1000);
  };

  return (
    <div className={cn("w-full my-6", className)}>
      <div className="text-center mb-4">
        <p className="text-sm font-semibold text-realestate-primary">{greeting}</p>
        <div className="w-20 h-1 bg-realestate-light mx-auto rounded-full mt-1"></div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {suggestions.map((question, index) => {
          const isLiked = likedQuestions[index] === true;
          const isDisliked = likedQuestions[index] === false;

          return (
            <div key={index} className="relative group">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSelectQuestion(question)}
                className={cn(
                  "bg-white border shadow-md hover:shadow-lg transition-transform duration-200 transform hover:scale-105 rounded-full px-4 py-2 text-xs font-medium flex items-center gap-1",
                  isLiked && "border-green-400 text-green-600",
                  isDisliked && "border-red-400 text-red-600"
                )}
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
                    handleFeedback(index, true, question);
                  }}
                  className="h-6 w-6 p-0 rounded-full"
                  aria-label={`Thumb up for ${question}`}
                >
                  {loadingIndex === index ? <Spinner size="sm" /> : <ThumbsUp className="h-4 w-4 text-green-500" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeedback(index, false, question);
                  }}
                  className="h-6 w-6 p-0 rounded-full"
                  aria-label={`Thumb down for ${question}`}
                >
                  {loadingIndex === index ? <Spinner size="sm" /> : <ThumbsDown className="h-4 w-4 text-red-500" />}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionSuggestions;
