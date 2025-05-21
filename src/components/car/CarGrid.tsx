import React from 'react';
import { Car } from '../../types/car';
import CarCard from './CarCard';

interface CarGridProps {
  cars: Car[];
  onEditCar: (car: Car) => void;
  onDeleteCar: (id: string) => void;
}

const CarGrid: React.FC<CarGridProps> = ({ cars, onEditCar, onDeleteCar }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cars.map((car) => (
        <CarCard 
          key={car.id} 
          car={car} 
          onEdit={onEditCar} 
          onDelete={onDeleteCar} 
        />
      ))}
    </div>
  );
};

export default CarGrid;
