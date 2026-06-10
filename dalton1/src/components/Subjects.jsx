const subjects = ["Mathematics", "English", "Physics", "Chemistry", "Biology", "Economics", "Business Studies", "Computer Science"];
const icons = ["fa-square-root-alt", "fa-book", "fa-atom", "fa-flask", "fa-dna", "fa-chart-line", "fa-building", "fa-laptop-code"];

export default function Subjects() {
  return (
    <section id="subjects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Subjects We <span className="text-gold">Cover</span></h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-3 mb-12">Comprehensive support across all major disciplines</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {subjects.map((subject, idx) => (
            <div key={subject} className="group bg-white rounded-xl p-6 shadow-md text-center card-hover cursor-pointer">
              <i className={`fas ${icons[idx]} text-4xl text-gold mb-3 group-hover:scale-110 transition`}></i>
              <h3 className="font-semibold text-lg">{subject}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}