const programsData = {
  SAT: { overview: "Master SAT Math and English with personalized strategies.", subjects: ["Math", "Reading", "Writing"], for: "High school students applying to US colleges.", benefits: ["Score improvement guarantee", "Full-length practice tests"] },
  AP: { overview: "Support for AP Calculus, Physics, Chemistry, Biology, etc.", subjects: ["Calculus AB/BC", "Physics", "Chemistry", "Biology", "English"], for: "Students aiming for college credits.", benefits: ["Exam-focused tutoring", "FRQ drilling"] },
  IGCSE: { overview: "Comprehensive Cambridge IGCSE preparation.", subjects: ["All core & extended subjects"], for: "Students in Year 10-11.", benefits: ["Past paper practice", "Concept clarity"] },
  IB: { overview: "IB Diploma support for HL/SL subjects.", subjects: ["Math AA/AI", "Physics", "Chemistry", "Economics", "English"], for: "IBDP students.", benefits: ["IA & EE guidance", "Exam strategies"] },
  Cambridge: { overview: "Cambridge curricula (Checkpoint, IGCSE, A Level).", subjects: ["Mathematics", "Sciences", "Humanities"], for: "Cambridge pathway students.", benefits: ["Personal mentoring", "Progress tracking"] },
};

export default function ProgramsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-navy">Our <span className="text-gold">Programs</span></h1>
        {Object.entries(programsData).map(([name, data]) => (
          <div key={name} className="mt-16 p-6 bg-gray-50 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-navy">{name}</h2>
            <p className="text-gray-600 mt-2">{data.overview}</p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div><h3 className="font-semibold">Subjects</h3><ul className="list-disc list-inside">{data.subjects.map(s=><li key={s}>{s}</li>)}</ul></div>
              <div><h3 className="font-semibold">Who it's for</h3><p>{data.for}</p></div>
              <div><h3 className="font-semibold">Benefits</h3><ul className="list-disc list-inside">{data.benefits.map(b=><li key={b}>{b}</li>)}</ul></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}