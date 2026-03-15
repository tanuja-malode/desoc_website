const CommitteeCard = ({ name, role, image, isActive = false, instagram, linkedin, website }) => {
  return (
    <div 
      className={`
        group relative flex-shrink-0 w-44 sm:w-48 h-80 sm:h-96 
        overflow-hidden rounded-lg 
        transition-all duration-400 ease-in-out
        ${isActive 
          ? 'scale-105 grayscale-0 opacity-100 z-10' 
          : 'scale-90 grayscale opacity-60'
        }
      `}
    >
      {/* Full Height Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top"
      />
      
      {/* Dark Gradient Overlay at Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Social Icons Slider - Right Edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 pr-1 opacity-100 transition-opacity duration-300">
        {instagram && (
          <a 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform translate-x-0 hover:scale-110 transition-transform duration-500 ease-out bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-1.5 rounded-full"
            title="Instagram"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              {/* Rounded square background */}
              <rect x="2.5" y="2.5" width="19" height="19" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Center circle */}
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              {/* Top right dot */}
              <circle cx="17" cy="7" r="0.8" fill="currentColor"/>
            </svg>
          </a>
        )}
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform translate-x-0 hover:scale-110 transition-transform duration-500 ease-out bg-blue-600 hover:bg-blue-700 p-1.5 rounded-full"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.384 3.704 4.362v5.586zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.955-1.71 1.184 0 1.915.759 1.915 1.71 0 .951-.73 1.71-1.955 1.71zm1.575 11.019H3.762V9.724h3.15v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
        {website && (
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform translate-x-0 hover:scale-110 transition-transform duration-500 ease-out bg-blue-600 hover:bg-blue-700 p-1.5 rounded-full"
            title="Website"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              {/* Outer circle */}
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1"/>
              {/* Vertical lines (longitude) */}
              <path d="M12 3 Q15 12 12 21 Q9 12 12 3" fill="none" stroke="currentColor" strokeWidth="0.8"/>
              <path d="M5 12 Q12 10 19 12" fill="none" stroke="currentColor" strokeWidth="0.8"/>
              {/* Horizontal curves (latitude) */}
              <ellipse cx="12" cy="7" rx="6" ry="2" fill="none" stroke="currentColor" strokeWidth="0.7"/>
              <ellipse cx="12" cy="12" rx="8" ry="2.5" fill="none" stroke="currentColor" strokeWidth="0.7"/>
              <ellipse cx="12" cy="17" rx="6" ry="2" fill="none" stroke="currentColor" strokeWidth="0.7"/>
            </svg>
          </a>
        )}
      </div>

      {/* Name and Role at Bottom */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 
          className={`
            font-bold text-lg uppercase tracking-wide leading-tight
            transition-colors duration-400
            ${isActive ? 'text-white' : 'text-white/70'}
          `}
        >
          {name.split(' ')[0]}
        </h3>
        <h3 
          className={`
            font-bold text-lg uppercase tracking-wide leading-tight
            transition-colors duration-400
            ${isActive ? 'text-white' : 'text-white/70'}
          `}
        >
          {name.split(' ')[1] || ''}
        </h3>
        <p 
          className={`
            text-sm font-medium mt-1 uppercase
            transition-colors duration-400
            ${isActive ? 'text-[#bc0034]' : 'text-[#bc0034]/50'}
          `}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default CommitteeCard;