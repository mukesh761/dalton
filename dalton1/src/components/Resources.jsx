const resources = [
  { name: "Study Guides", icon: "fa-file-alt", desc: "Comprehensive curriculum guides" },
  { name: "Formula Sheets", icon: "fa-table", desc: "Quick reference for exams" },
  { name: "Exam Strategies", icon: "fa-lightbulb", desc: "Tips from top scorers" },
  { name: "Revision Notes", icon: "fa-pen-fancy", desc: "Key concepts summarized" },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Free <span className="text-gold">Resources</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {resources.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-6 text-center card-hover shadow-md">
              <i className={`fas ${r.icon} text-4xl text-gold mb-3`}></i>
              <h3 className="font-bold text-xl text-navy">{r.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{r.desc}</p>
              <button className="mt-4 text-gold font-medium flex items-center justify-center gap-1 hover:gap-2 transition">Download <i className="fas fa-download"></i></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}