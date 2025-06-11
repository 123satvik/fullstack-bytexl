import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CarCard({ car }) {
  const navigate = useNavigate();

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '1rem'
  };

  return (
    <div style={cardStyle} onClick={() => navigate(`/car/${car.id}`)}>
      <img src={car.image} alt={car.name} style={imageStyle} />
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{car.name}</h3>
      <p>Price: {car.price}</p>
      <p>Fuel: {car.fuelType}</p>
      <p>Transmission: {car.transmission}</p>
    </div>
  );
}
