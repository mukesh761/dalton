import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy">
              World-Class Tutoring for <span className="text-gold">SAT, AP, IGCSE, IB & Cambridge</span> Students
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Personalized live classes, expert tutors, and proven academic strategies designed to help students achieve outstanding results in international curricula.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="btn-primary">Book Free Consultation</button>
              <button className="btn-outline">Schedule a Demo Class</button>
            </div>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">
              <span><i className="fas fa-star text-gold"></i> 4.9/5 Rating</span>
              <span><i className="fas fa-user-graduate text-gold"></i> 5000+ Students</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative">
            <div className="bg-gradient-to-br from-gold-light to-white rounded-3xl p-8 shadow-2xl">
              <i className="fas fa-chalkboard-teacher text-7xl text-gold block text-center mb-4"></i>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3"><i className="fas fa-video text-gold"></i><span>Live 1-on-1 & Group Classes</span></div>
                <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3"><i className="fas fa-globe text-gold"></i><span>Global Curriculum Experts</span></div>
                <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3"><i className="fas fa-chart-line text-gold"></i><span>Proven Results</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}