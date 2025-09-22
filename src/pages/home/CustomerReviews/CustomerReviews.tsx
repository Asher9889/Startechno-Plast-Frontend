import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

export default function CustomerReviews() {
  const reviews = [
    {
      rating: 4.5,
      text: "I like it because I like to travel far and still can connect with high speed.",
      author: "Happy Customer",
    },
    {
      rating: 4.5,
      text: "I like it because I like to travel far and still can connect with high speed.",
      author: "Happy Customer",
    },
    {
      rating: 4.5,
      text: "I like it because I like to travel far and still can connect with high speed.",
      author: "Happy Customer",
    },
    {
      rating: 4.5,
      text: "I like it because I like to travel far and still can connect with high speed.",
      author: "Happy Customer",
    },
    {
      rating: 4.5,
      text: "I like it because I like to travel far and still can connect with high speed.",
      author: "Happy Customer",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />);
    }

    if (halfStar) {
      stars.push(
        <Star
          key="half"
          className="w-5 h-5 text-orange-500"
          style={{ fill: "url(#half-gradient)" }}
        />
      );
    }

    return (
      <div className="flex gap-1 items-center">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="half-gradient" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="orange" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
        {stars}
      </div>
    );
  };

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Customers <span className="text-purple-600">Feedback & Reviews</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Hear what our amazing customers have to say about their experience with our
          products and services. Their trust inspires us to keep delivering excellence.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth thumb-none"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <Card
              key={index}
              className="shadow-sm rounded-2xl max-w-[80%] sm:max-w-[10%] lg:max-w-[40%] flex-shrink-0"
            >
              <CardContent className="p-6 text-left">
                {renderStars(review.rating)}
                <p className="mt-4 text-gray-700 italic">“{review.text}”.</p>
                <p className="mt-4 font-semibold">{review.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Tailwind utility for hiding scrollbar */
/* Add this in globals.css if not already */
/*
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/