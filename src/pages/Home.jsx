import React from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

export default function Home() {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '1rem'
  };

  return (
    <div style={gridStyle}>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}