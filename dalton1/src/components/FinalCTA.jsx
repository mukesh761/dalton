export default function FinalCTA() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="max-w-5xl mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Unlock Your Academic Potential?</h2>
        <p className="text-lg text-gray-200 mt-3 max-w-2xl mx-auto">Book a free consultation and discover the right learning path for your goals.</p>
        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <button className="btn-primary bg-white text-navy hover:bg-gray-100">Book Free Consultation</button>
          <button className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-navy transition">Contact Us</button>
        </div>
      </div>
    </section>
  );
}