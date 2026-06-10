import { motion } from "framer-motion";

const faqs = [
  {
    question: "How can I report a public issue?",
    answer:
      "Simply create an account, log in, and submit a report with issue details, location, and supporting images.",
  },
  {
    question: "Can I track the progress of my report?",
    answer:
      "Yes! Every submitted issue includes status tracking so you can monitor updates from review to resolution.",
  },
  {
    question: "Who can resolve reported issues?",
    answer:
      "Authorized government staff and administrators can review, manage, and update issue statuses.",
  },
  {
    question: "Do I need to upload images?",
    answer:
      "While optional, adding images helps authorities better understand the issue and speeds up verification.",
  },
  {
    question: "Can I report multiple issues?",
    answer:
      "Yes! Users can submit multiple reports for different public infrastructure problems whenever necessary.",
  },
  {
    question: "What types of issues can be reported?",
    answer:
      "Broken Streetlight, Water leakage, Garbage Overflow, Road Damage, and more.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-base-200">
      <div className="max-w-11/12 mx-auto sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
            Find answers to common questions about reporting issues, tracking
            progress, and using the platform effectively.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl"
            >
              <input type="radio" name="faq-accordion" />

              <div className="collapse-title text-lg md:text-xl font-semibold">
                {faq.question}
              </div>

              <div className="collapse-content">
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
