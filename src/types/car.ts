// types/car.ts
export interface Car {
  id: string;
  model: string;
  driver: string;
  available: boolean;
  color: 'green' | 'blue' | 'orange' | 'purple';
  start: string;
  destination: string;
}
