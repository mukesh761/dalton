import { useState } from "react";

const faqs = [
  { q: "What is the class format?", a: "Live 1-on-1 or small group sessions via our interactive platform with real-time whiteboard and chat." },
  { q: "What are the tutor qualifications?", a: "All tutors hold advanced degrees (Master's/PhD) from top universities and have 5+ years of international teaching experience." },
  { q: "How does scheduling work?", a: "Classes are scheduled around your timezone. We offer 24/7 availability including weekends." },
  { q: "What is the fee structure?", a: "Competitive hourly rates with monthly packages. A free consultation is provided before any commitment." },
  { q: "Do you support international students?", a: "Yes, we have students from USA, UK, Canada, Singapore, UAE, Australia, India, and many more." },
  { q: "Can I take a demo class?", a: "Absolutely! Schedule a free demo class anytime to experience our teaching methodology firsthand." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Frequently Asked <span className="text-gold">Questions</span></h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button onClick={() => toggle(i)} className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition">
                <span className="font-semibold text-navy">{faq.q}</span>
                <i className={`fas fa-chevron-down text-gold transition-transform ${openIndex === i ? "rotate-180" : ""}`}></i>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? "py-4 border-t border-gray-100" : "py-0 h-0"}`}>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}