import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-2xl serif">DaltonPrep</h4>
          <p className="text-sm mt-2">Global academic excellence platform</p>
        </div>
        <div>
          <h5 className="font-semibold text-white">Quick Links</h5>
          <ul className="text-sm space-y-2 mt-2">
            <li><Link to="/programs" className="hover:text-gold transition">Programs</Link></li>
            <li><Link to="/subjects" className="hover:text-gold transition">Subjects</Link></li>
            <li><Link to="/resources" className="hover:text-gold transition">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Contact</h5>
          <p className="text-sm mt-2"><i className="fas fa-envelope mr-2"></i> hello@daltonprep.com</p>
          <p className="text-sm"><i className="fab fa-whatsapp mr-2 text-green-400"></i> +1 888 777 1234</p>
          <p className="text-sm"><i className="fas fa-phone-alt mr-2"></i> +1 (555) 678-1234</p>
        </div>
        <div>
          <h5 className="font-semibold text-white">Follow</h5>
          <div className="flex space-x-4 text-xl mt-2">
            <i className="fab fa-instagram hover:text-gold cursor-pointer transition"></i>
            <i className="fab fa-linkedin hover:text-gold cursor-pointer transition"></i>
            <i className="fab fa-twitter hover:text-gold cursor-pointer transition"></i>
            <i className="fab fa-facebook hover:text-gold cursor-pointer transition"></i>
          </div>
        </div>
      </div>
      <div className="text-center text-xs pt-8 border-t border-gray-700 mt-6">
        © 2025 Dalton Prep — Empowering global learners. All rights reserved.
      </div>
    </footer>
  );
}