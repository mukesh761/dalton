const subjectsDetail = {
  Mathematics: "Algebra, Calculus, Statistics, Problem-solving", English: "Grammar, Writing, Literature Analysis", Physics: "Mechanics, Electromagnetism, Modern Physics", Chemistry: "Organic, Inorganic, Physical Chemistry", Biology: "Cell Biology, Genetics, Human Physiology", Economics: "Micro, Macro, International Economics", "Business Studies": "Marketing, Finance, Operations", "Computer Science": "Python, Java, Data Structures" };

export default function SubjectsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center text-navy">Our <span className="text-gold">Subjects</span></h1>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {Object.entries(subjectsDetail).map(([sub, topics]) => (
            <div key={sub} className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-bold text-gold">{sub}</h2>
              <p className="text-gray-600 mt-2"><strong>Topics covered:</strong> {topics}</p>
              <p className="text-gray-500 mt-1"><strong>Methodology:</strong> Live problem-solving, concept maps, past paper practice.</p>
              <p className="text-green-600 font-semibold mt-2">Outcome: Mastery & top grades</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}