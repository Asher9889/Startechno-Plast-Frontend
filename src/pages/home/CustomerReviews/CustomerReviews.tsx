
import { Star } from "lucide-react";

interface Review {
  name: string;
  avatar: string; // URL or local image
  rating: number; // 1 to 5
  message: string;
  role?: string;
}

const reviews: Review[] = [
  {
    name: "Rahul Sharma",
    avatar: "https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_1280.jpg",
    rating: 5,
    message:
      "Excellent quality products! Startechno Plast truly delivers on trust and innovation.",
    role: "Tech Enthusiast",
  },
  {
    name: "Neha Gupta",
    avatar: "https://cdn.pixabay.com/photo/2017/03/17/04/07/portrait-2150880_1280.jpg",
    rating: 4,
    message:
      "Fast delivery and amazing customer support. Highly recommend their chargers and earbuds.",
    role: "Entrepreneur",
  },
  {
    name: "Amit Verma",
    avatar: "https://cdn.pixabay.com/photo/2013/05/28/18/10/man-114257_1280.jpg",
    rating: 5,
    message:
      "Premium products with excellent performance. Power banks and speakers are top-notch!",
    role: "Digital Marketer",
  },
];

const CustomerReviews = () => {
  return (
    <section className="w-full bg-white  py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-primary)]">
          Customer Reviews
        </h2>
        <p className="text-[var(--color-text-muted)] mt-2">
          Hear from our happy customers who trust Startechno Plast products.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--color-primary)]"
            />
            <h3 className="text-[var(--color-primary-dark)] font-semibold text-lg">
              {review.name}
            </h3>
            {review.role && (
              <p className="text-[var(--color-text-muted)] text-sm mb-2">
                {review.role}
              </p>
            )}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < review.rating
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-border)]"
                  }
                />
              ))}
            </div>
            <p className="text-[var(--color-text-muted)]">{review.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
