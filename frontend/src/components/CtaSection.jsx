import { Link, useLocation } from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const CtaSection = ({ className = "" }) => {
  const location = useLocation();

  // Scroll to top when contact page loads
  useEffect(() => {
    if (location.pathname === '/contact') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleContactClick = (e) => {
    if (location.pathname === '/contact') {
      e.preventDefault();
      document.getElementById('contact-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className={`relative py-24 bg-[#151517] text-center border-t border-[#ffffff08] ${className}`}>
      <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/5e6c01bbf0b34a0ddbde3d4e/5e6ed8a89d75514f5d6dbe1c_noise.png')] opacity-5" />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 font-poppins">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-10 leading-relaxed">
          Send us a message, and<br />
          let's collaborate on your<br />
          <span className="bg-gradient-to-r from-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">
            privacy project.
          </span>
        </h2>
        
        {location.pathname === '/contact' ? (
          <button
            onClick={handleContactClick}
            className="font-jost px-8 py-4 bg-transparent border-2 border-[#10B981] text-white rounded-xl font-medium hover:bg-[#10B981]/10 transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer"
          >
            <PaperAirplaneIcon className="h-5 w-5 text-[#10B981] group-hover:translate-x-1 transition-transform" />
            Jump to Contact Form
          </button>
        ) : (
          <Link 
            to="/contact" 
            className="group inline-block"
          >
            <button className="font-jost px-8 py-4 bg-transparent border-2 border-[#10B981] text-white rounded-xl font-medium hover:bg-[#10B981]/10 transition-all duration-300 flex items-center gap-3 mx-auto">
              <PaperAirplaneIcon className="h-5 w-5 text-[#10B981] group-hover:translate-x-1 transition-transform" />
              Contact Now
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CtaSection;