"use client";

import { cn } from "@/lib/utils";
import React, {  useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Star } from "lucide-react";

export const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className="w-4 h-4 fill-orange-500 text-orange-500" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <Star className="w-4 h-4 text-orange-500" />
        <div className="absolute inset-0 w-2 h-4 overflow-hidden">
          <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
        </div>
      </div>
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={`empty-${i}`} className="w-4 h-4 text-gray-200 " />
    );
  }

  return <div className="flex items-center gap-0.5">{stars}</div>;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  children,
}: {
  items: {
    rating?: number;
    quote: string;
    name?: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  children?: ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = {
        fast: "20s",
        normal: "40s",
        slow: "80s"
      }[speed] || "40s";
      
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children || items.map((item, idx) => (
          <li 
            key={`${item.title}-${idx}`}
            className="relative w-[350px] max-w-full flex-shrink-0 rounded-lg bg-white  p-6 shadow-sm border border-gray-100  mx-2 h-64 flex flex-col justify-between"
          >
            <div className="mb-4">
              {item.rating !== undefined && renderStars(item.rating)}
            </div>
            <p className="text-gray-700  mb-6 italic line-clamp-4">
              "{item.quote}
            </p>
            <div className="mt-auto">
              <p className="font-medium text-gray-900 ">{item.title}</p>
              {item.name && (
                <p className="text-sm text-gray-500 ">{item.name}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
