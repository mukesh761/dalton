const programs = [
  { name: "SAT", desc: "Preparation for SAT Math and SAT English.", benefits: ["Full-length practice tests", "Personal strategies"], icon: "fa-book-open" },
  { name: "AP", desc: "Support for AP courses across multiple subjects.", benefits: ["Exam-focused tutoring", "FRQ help"], icon: "fa-graduation-cap" },
  { name: "IGCSE", desc: "Comprehensive preparation for Cambridge IGCSE.", benefits: ["Core & extended syllabus", "Past paper practice"], icon: "fa-school" },
  { name: "IB", desc: "Support for IB Diploma Programme subjects.", benefits: ["IA, EE guidance", "Exam prep"], icon: "fa-globe" },
  { name: "Cambridge", desc: "Academic support for Cambridge curricula.", benefits: ["A Level / AS Level", "Personal mentoring"], icon: "fa-university" },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Our <span className="text-gold">Programs</span></h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-3 mb-12">Elite preparation for global exams and curricula</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover">
              <i className={`fas ${p.icon} text-4xl text-gold mb-4`}></i>
              <h3 className="text-2xl font-bold text-navy">{p.name}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <ul className="mt-3 space-y-1">
                {p.benefits.map((b, i) => <li key={i} className="text-sm text-gray-500"><i className="fas fa-check-circle text-gold mr-2"></i>{b}</li>)}
              </ul>
              <button className="mt-5 text-gold font-semibold flex items-center gap-1 hover:gap-2 transition-all">Learn More <i className="fas fa-arrow-right"></i></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}