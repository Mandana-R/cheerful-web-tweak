import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section className="py-24 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-[800px]">
        <div className="text-center mb-12">
          <ScrollAnimation>
            <p className="text-emerald font-display font-semibold tracking-[0.06em] uppercase text-xs mb-3">
              Carrier FAQ
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
              Common<br/><span className="text-emerald">Questions</span>
            </h2>
          </ScrollAnimation>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div 
                className={`bg-white/[0.02] border rounded-lg overflow-hidden transition-all ${
                  openIndex === i ? "border-emerald" : "border-white/10 hover:border-emerald/25"
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(i)}
                  className="w-full p-5 flex justify-between items-center text-left cursor-pointer"
                >
                  <span className="font-display font-semibold text-white text-[14px] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-emerald flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 pb-5 px-5" : "max-h-0"
                  }`}
                >
                  <p className="text-white/55 text-[13px] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrierFAQ;
