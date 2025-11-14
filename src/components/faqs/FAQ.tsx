interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  return (
    <div className="hs-accordion-group mx-auto max-w-6xl">
       <h2 className="text-3xl text-white md:text-4xl font-bold mb-8 text-center">
        FAQ's
        <span className="text-purple-400 underline"></span>
        </h2>
      {faqs.map(({ id, question, answer }) => (
        <div
          key={id}
          className="hs-accordion-to-destroy hs-accordion hs-accordion-active:border-gray-200 border border-transparent rounded-xl bg-white my-4"
          id={`hs-destroy-heading-${id}`}
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex cursor-pointer justify-between items-center gap-x-3 w-full font-semibold text-start bg-white  rounded-xl py-4 px-5 hover:text-gray-500"
            aria-expanded="false"
            aria-controls={`hs-destroy-collapse-${id}`}
          >
            {question}

            <svg
              className="hs-accordion-active:hidden block size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>

            <svg
              className="hs-accordion-active:block hidden size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14"></path>
            </svg>
          </button>

          <div
            id={`hs-destroy-collapse-${id}`}
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          >
            <div className="pb-4 px-5">
              <p className="text-(--text-primary) font-medium">{answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
