import React from 'react';
import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) return <div style={{ padding: '1rem' }}>Car not found</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <img src={car.image} alt={car.name} style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', display: 'block', margin: '0 auto 1rem' }} />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{car.name}</h1>
      <p>Price: {car.price}</p>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Transmission: {car.transmission}</p>
    </div>
  );
}