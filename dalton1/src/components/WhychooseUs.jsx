const features = [
  { title: "Expert Tutors", desc: "Carefully selected subject specialists from top universities", icon: "fa-user-tie" },
  { title: "Personalized Learning", desc: "Customized learning plans tailored to each student", icon: "fa-chalkboard-user" },
  { title: "Flexible Scheduling", desc: "Convenient online classes around your timezone", icon: "fa-calendar-alt" },
  { title: "Small Group Learning", desc: "More interaction and individual attention", icon: "fa-users" },
  { title: "Progress Tracking", desc: "Continuous monitoring and regular feedback", icon: "fa-chart-simple" },
  { title: "Academic Excellence", desc: "Focus on top performance and confidence building", icon: "fa-trophy" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy">Why <span className="text-gold">Choose Us</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 hover:bg-white transition-all card-hover">
              <i className={`fas ${f.icon} text-3xl text-gold mb-4`}></i>
              <h3 className="text-xl font-bold text-navy">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}