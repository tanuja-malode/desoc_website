import backgroundImage from '../assets/bg.png';
import desocLogo from '../assets/logo_home.png';
import clgLogo from '../assets/clg_logo.svg';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [events, setEvents] = useState(0);
  const [participation, setParticipation] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [prize, setPrize] = useState(0);

  useEffect(() => {
    // Events Conducted - count to 50
    const eventInterval = setInterval(() => {
      setEvents(prev => prev < 50 ? prev + 1 : 50);
    }, 100);

    // Participation Received - count to 5000
    const participationInterval = setInterval(() => {
      setParticipation(prev => prev < 5000 ? prev + 50 : 5000);
    }, 30);

    // Alumni Registered - count to 100
    const alumniInterval = setInterval(() => {
      setAlumni(prev => prev < 100 ? prev + 1 : 100);
    }, 100);

    // Prize Pool - count to 15000
    const prizeInterval = setInterval(() => {
      setPrize(prev => prev < 15000 ? prev + 150 : 15000);
    }, 30);

    return () => {
      clearInterval(eventInterval);
      clearInterval(participationInterval);
      clearInterval(alumniInterval);
      clearInterval(prizeInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden w-full">
      
      {/* Gradient Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#970233] to-transparent z-50"></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="DESOC Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* CLG Logo - Top Left */}
      <div className="absolute top-0 left-3 lg:-top-6 lg:left-12 z-40">
        <img 
          src={clgLogo} 
          alt="CLG Logo"
          className="w-44 h-32 sm:w-50 sm:h-30 lg:w-60 lg:h-44 object-contain"
        />
      </div>

      {/* Centered Logo Overlay */}
      <div className="absolute top-12 sm:top-1 lg:-top-8 left-0 right-0 flex justify-center">
        <img 
          src={desocLogo} 
          alt="DESOC Logo"
          className="w-80 h-50 sm:w-220 sm:h-150 object-contain"
        />
      </div>
      {/* Description and Button */}
      <div className="absolute top-[23%] sm:top-[45%] left-0 right-0 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-4xl pt-0 sm:pt-12 leading-snug sm:leading-normal animate-fadeInUp" style={{animationDelay: '0.1s'}}>
          <span className="font-bold">Design Society</span> is a community where we empower students to innovate at the intersection of design and technology, through projects, workshops, competitions and collaborations, we transform ideas into impactful digital innovative experiences.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold text-base rounded transition-colors duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            About us
          </button>
          <button className="px-6 py-2 backdrop-blur-md border border-white/30 text-white font-bold text-base rounded transition-all duration-300 animate-fadeInUp" style={{background: 'linear-gradient(135deg, #970233 0%, #c41e5c 100%)', animationDelay: '0.3s'}} onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #800125 0%, #a41650 100%)'} onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #970233 0%, #c41e5c 100%)'}>
            GENESIS
          </button>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="absolute bottom-24 sm:bottom-10 left-0 right-0 px-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
        <div className="bg-gradient-to-r from-black/40 via-[#970233]/50 to-black/40 backdrop-blur-md py-2 sm:py-5 px-6 sm:px-8 rounded-lg shadow-2xl mx-auto max-w-5xl border border-white/20 pt-4 sm:pt-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center items-center">
            {/* Events Conducted */}
            <div className="flex flex-col items-center justify-center py-2 sm:py-0 sm:min-h-[100px] sm:h-full border-b sm:border-b-0 sm:border-r border-white/30 last:border-b-0 sm:last:border-r-0">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{events}+</h3>
              <p className="text-sm sm:text-base text-white/90">Events Conducted</p>
            </div>
            
            {/* Participation Received */}
            <div className="flex flex-col items-center justify-center py-2 sm:py-0 sm:min-h-[100px] sm:h-full border-b sm:border-b-0 sm:border-r border-white/30 last:border-b-0 sm:last:border-r-0">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{participation}+</h3>
              <p className="text-sm sm:text-base text-white/90">Participation Received</p>
            </div>

            {/* Alumni Registered */}
            <div className="flex flex-col items-center justify-center py-2 sm:py-0 sm:min-h-[100px] sm:h-full border-b sm:border-b-0 sm:border-r border-white/30 last:border-b-0 sm:last:border-r-0 col-span-2 sm:col-span-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{alumni}+</h3>
              <p className="text-sm sm:text-base text-white/90">Alumni Registered</p>
            </div>

            {/* GENESIS Prize Pool */}
            <div className="flex flex-col items-center justify-center py-2 sm:py-0 sm:min-h-[100px] sm:h-full col-span-2 sm:col-span-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">₹{prize}+</h3>
              <p className="text-sm sm:text-base text-white/90">GENESIS Prize Pool</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#970233] to-transparent z-50"></div>
    </section>
  );
};

export default Hero;