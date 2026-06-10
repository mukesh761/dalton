export default function ResourcesPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center text-navy">Free <span className="text-gold">Resources</span></h1>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-5 rounded-xl shadow"><i className="fas fa-file-pdf text-gold text-3xl"></i><h2 className="text-xl font-bold">SAT Math Formula Sheet</h2><button className="mt-2 text-gold">Download PDF</button></div>
          <div className="bg-white p-5 rounded-xl shadow"><i className="fas fa-file-pdf text-gold text-3xl"></i><h2 className="text-xl font-bold">IGCSE Revision Notes</h2><button className="mt-2 text-gold">Download PDF</button></div>
          <div className="bg-white p-5 rounded-xl shadow"><i className="fas fa-blog text-gold text-3xl"></i><h2 className="text-xl font-bold">Academic Blog</h2><p>Tips, strategies, student interviews.</p><button className="mt-2 text-gold">Read More</button></div>
        </div>
      </div>
    </div>
  );
}