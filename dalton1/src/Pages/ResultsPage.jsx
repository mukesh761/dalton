export default function ResultsPage() {
  const achievements = ["SAT 99th percentile", "IB 44/45", "AP Scholars", "IGCSE A*"];
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center text-navy">Student <span className="text-gold">Achievements</span></h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {achievements.map(a => <span key={a} className="bg-gold text-navy px-4 py-2 rounded-full font-bold">{a}</span>)}
        </div>
        <div className="mt-12 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow"><i className="fas fa-quote-left text-gold"></i><p>"My SAT score jumped from 1350 to 1520. Thank you Dalton Prep!" – Anjali S.</p></div>
          <div className="bg-white p-6 rounded-2xl shadow"><i className="fas fa-quote-left text-gold"></i><p>"The IB tutors are phenomenal. Predicted 44/45." – Rohan M.</p></div>
        </div>
      </div>
    </div>
  );
}