import { InfiniteMovingCards } from "@/components/ui";

export default function CustomerReviews() {
  const reviews = [
    {
      title: "John D.",
      quote: "The quality of the products exceeded my expectations. Will definitely order again!",
      rating: 4.5
    },
    {
      title: "Sarah M.",
      quote: "Excellent customer service and fast delivery. The products are durable and well-made.",
      rating: 5
    },
    {
      title: "Michael T.",
      quote: "Great value for money. The items arrived well-packaged and in perfect condition.",
      rating: 4
    },
    {
      title: "Emily R.",
      quote: "I'm very satisfied with my purchase. The quality is outstanding!",
      rating: 4.5
    },
    {
      title: "David K.",
      quote: "Fast shipping and excellent communication. Highly recommended!",
      rating: 5
    },
  ];


  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="w-full">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Customers <span className="text-purple-600">Feedback & Reviews</span>
          </h2>
          <h3 className="mx-auto  w-1/2">Hear what our amazing customers have to say about their experience with our products and services. Their trust inspires us to keep delivering excellence.
          </h3>
        </div>

        <InfiniteMovingCards
          items={reviews}
          direction="left"
          speed="normal"
          className="py-4"
        >
          {/* {reviews.map((review, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 mx-2 h-64 flex flex-col justify-between"
            >
              <div className="mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic line-clamp-4">
                "{review.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-medium text-gray-900 dark:text-white">{review.title}</p>
              </div>
            </div>
          ))} */}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}