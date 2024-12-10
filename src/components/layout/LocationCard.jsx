// import React from 'react';

// const LocationCard = ({ flag, country, type, company, address }) => (
//   <div className="w-[400px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
//     <div className="bg-purple-900/30 backdrop-blur-md rounded-xl p-6 text-white transition-all duration-300 hover:bg-purple-900/40">
//       <img 
//         src={flag}
//         alt={`${country} flag`}
//         className="h-6 w-8 mb-4"
//         onError={(e) => {
//           console.log(`Failed to load image: ${flag}`);
//           e.target.onerror = null;
//           e.target.src = '/img/singapore.png';
//         }}
//       />
//       <h2 className="text-xl font-normal mb-1">{country}</h2>
//       <p className="text-sm text-white/60 mb-4">{type}</p>
//       <p className="text-sm mb-1">{company}</p>
//       <p className="text-sm text-white/60">{address}</p>
//     </div>
//   </div>
// );

// export default LocationCard;
import React from 'react';

const LocationCard = ({ flag, country, type, company, address }) => (
  <div className="w-[400px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="bg-purple-900/30 backdrop-blur-md rounded-xl p-6 text-white transition-all duration-300 hover:bg-purple-900/40">
      <img 
        src={flag}
        alt={`${country} flag`}
        className="h-6 w-8 mb-4 rounded-md"
        onError={(e) => {
          console.log(`Failed to load image: ${flag}`);
          e.target.onerror = null;
          e.target.src = '/img/singapore.png';
        }}
      />
      <h2 className="text-xl font-normal mb-1">{country}</h2>
      <p className="text-sm text-white/60 mb-4">{type}</p>
      <p className="text-sm mb-1">{company}</p>
      <p className="text-sm text-white/60">{address}</p>
    </div>
  </div>
);

export default LocationCard;