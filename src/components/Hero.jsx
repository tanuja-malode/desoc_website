import backgroundImage from '../assets/bg.png';
import desocLogo from '../assets/logo_home.png';
import clgLogo from '../assets/clg_logo.svg';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden w-full">

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
      <div className="absolute top-12 sm:top-1 left-0 right-0 flex justify-center">
        <img 
          src={desocLogo} 
          alt="DESOC Logo"
          className="w-80 h-50 sm:w-220 sm:h-150 object-contain"
        />
      </div>
      {/* Description and Button */}
      <div className="absolute top-50 sm:top-1/2 left-0 right-0 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-4xl pt-0 sm:pt-12 leading-snug sm:leading-normal animate-fadeInUp">
          <span className="font-bold">Design Society</span> is a community where we empower students to innovate at the intersection of design and technology, through projects, workshops, competitions and collaborations, we transform ideas into impactful digital innovative experiences.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded transition-colors duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            About us
          </button>
          <button className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded transition-colors duration-300 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            GENESIS
          </button>
        </div>
      </div>    </section>
  );
};

export default Hero;