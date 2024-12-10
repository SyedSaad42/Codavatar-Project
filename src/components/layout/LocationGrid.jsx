import React from 'react';
import LocationCard from './LocationCard';

const LocationGrid = ({ locations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  );
};

export default LocationGrid;