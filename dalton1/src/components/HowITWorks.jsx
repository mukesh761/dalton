const steps = [
  "Book a Free Consultation",
  "Get Matched with the Right Tutor",
  "Receive a Personalized Learning Plan",
  "Attend Interactive Live Classes",
  "Track Progress and Achieve Results",
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">How It <span className="text-gold">Works</span></h2>
        <div className="relative mt-16 flex flex-col md:flex-row justify-between items-start">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-gold text-navy flex items-center justify-center text-2xl font-bold shadow-lg">{i+1}</div>
              <p className="mt-4 font-semibold text-gray-800">{step}</p>
              {i < steps.length-1 && <div className="hidden md:block absolute w-16 h-0.5 bg-gold top-8" style={{left: `${(i+1)*20 - 8}%`}}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}