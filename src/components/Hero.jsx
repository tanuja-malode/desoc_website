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
      <div className="absolute top-0 left-6 lg:left-12 z-40 pt-4 -mt-17">
        <img 
          src={clgLogo} 
          alt="CLG Logo"
          className="w-50 h-30 sm:w-80 sm:h-60 object-contain"
        />
      </div>

      {/* Centered Logo Overlay */}
      <div className="absolute top-1 left-0 right-0 flex justify-center">
        <img 
          src={desocLogo} 
          alt="DESOC Logo"
          className="w-80 h-50 sm:w-220 sm:h-150 object-contain"
        />
      </div>
      {/* Description and Button */}
      <div className="absolute top-1/2 left-0 right-0 flex flex-col items-center justify-center text-center px-6 animate-fade-in">
        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-4xl pt-12 animate-fadeInUp">
          <span className="font-bold">Design Society</span> is a community where we empower students to innovate at the intersection of design and technology, through projects, workshops, competitions and collaborations, we transform ideas into impactful digital innovative experiences.
        </p>
        <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg rounded transition-colors duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          About us
        </button>
      </div>    </section>
  );
};

export default Hero;