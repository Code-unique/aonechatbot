import React from 'react';
import { User, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export type MessageType = 'user' | 'bot';

interface ChatMessageProps {
  type: MessageType;
  content: string;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, content, timestamp }) => {
  const isUser = type === 'user';
  const time = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex max-w-[80%]", isUser ? "flex-row-reverse" : "flex-row")}>
        <Avatar className={cn("mt-1", isUser ? "ml-2" : "mr-2")}>
          <AvatarFallback className={cn(
            isUser ? "bg-realestate-light text-realestate-primary" : "bg-realestate-primary text-white"
          )}>
            {isUser ? <User size={18} /> : <Building size={18} />}
          </AvatarFallback>
        </Avatar>

        <div>
          <div className={cn(
            "rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap",
            isUser
              ? "bg-realestate-primary text-white rounded-tr-none shadow-soft"
              : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-soft"
          )}>
            {content}
          </div>

          <div className={cn("text-xs mt-1 text-gray-500", isUser ? "text-right" : "text-left")}>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
