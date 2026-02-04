import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CarrierFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "The application takes about 10 minutes to complete. Once submitted, we verify your authority, insurance, and safety record with FMCSA. Most carriers are approved within 24 hours. You'll receive an email notification once your account is activated."
    },
    {
      question: "How does QuickPay work exactly?",
      answer: "After you complete a delivery, upload your signed BOL and POD through our app or portal. Select QuickPay 24 (2% fee) or Same-Day (3% fee) and the funds are deposited directly to your bank account within the selected timeframe. You can also choose standard Net-30 terms with no fee. You decide per load—no commitment required."
    },
    {
      question: "What if I'm a newer carrier with less than 6 months authority?",
      answer: "We evaluate newer carriers on a case-by-case basis. If you have relevant experience, good references, and meet our insurance requirements, we may still be able to work with you. Contact our carrier relations team to discuss your situation."
    },
    {
      question: "How do I know the loads are legitimate?",
      answer: "Every shipper on our platform is verified. We don't allow brokers to post loads, eliminating double-brokering. You can see the shipper's name, contact info, and our direct relationship with them. If anything ever seems off, our dispatch team is available 24/7 to verify load details."
    },
    {
      question: "Is there a minimum number of loads I need to haul?",
      answer: "No minimums, no commitments. Haul as much or as little as you want. Our platform is designed for owner-operators who value flexibility. You're never locked into anything—use us when it makes sense for your business."
    },
    {
      question: "What support is available if I have issues on the road?",
      answer: "Our dispatch team is available 24/7/365. Whether it's a delivery issue, routing question, breakdown assistance referral, or anything else—call or text us anytime. We treat our carriers like partners because that's what you are."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald-light text-sm font-medium mb-6">
            Carrier FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common<br/><span className="bg-gradient-to-r from-green-500 to-emerald bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-[#1A1A1A] border rounded-xl overflow-hidden transition-all ${
                openIndex === i ? "border-emerald" : "border-gray-800 hover:border-emerald/50"
              }`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-emerald flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-6 px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierFAQ;
