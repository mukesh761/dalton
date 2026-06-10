export default function ContactPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-center text-navy">Book a <span className="text-gold">Consultation</span></h1>
        <div className="grid md:grid-cols-2 gap-10 mt-10 bg-gray-50 p-8 rounded-2xl shadow-xl">
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border rounded-xl p-3" />
            <input type="email" placeholder="Email" className="w-full border rounded-xl p-3" />
            <select className="w-full border rounded-xl p-3"><option>Select Program: SAT</option><option>AP</option><option>IGCSE</option><option>IB</option><option>Cambridge</option></select>
            <button className="btn-primary w-full">Send Inquiry</button>
          </form>
          <div>
            <p><i className="fab fa-whatsapp text-3xl text-green-500"></i> Chat with us: <strong>+1 888 777 1234</strong></p>
            <p className="mt-3"><i className="fas fa-envelope"></i> hello@daltonprep.com</p>
            <p className="mt-5">We serve students globally: USA, UK, Canada, Singapore, UAE, Australia, India.</p>
          </div>
        </div>
      </div>
    </div>
  );
}