const testimonials = [
  { name: "Priya M.", country: "India", achievement: "SAT 1520", text: "Personalized attention transformed my score! The tutors are incredibly supportive." },
  { name: "James W.", country: "UK", achievement: "IB 44/45", text: "Guidance for EE and IA was top-notch. Highly recommend Dalton Prep." },
  { name: "Sarah Chen", country: "Singapore", achievement: "AP Scholar", text: "Best decision for my AP Calculus journey. Small groups made all the difference." },
  { name: "Ahmed K.", country: "UAE", achievement: "IGCSE 9 A*", text: "The structured approach and practice materials helped me excel." },
];

export default function Testimonials() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Success <span className="text-gold">Stories</span></h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-3 mb-12">Real results from our global students</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 card-hover">
              <i className="fas fa-quote-left text-2xl text-gold opacity-50 mb-3"></i>
              <p className="text-gray-600 italic">"{t.text}"</p>
              <div className="mt-4">
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-gray-500">{t.country}</p>
                <p className="text-gold font-semibold text-sm mt-1">{t.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}