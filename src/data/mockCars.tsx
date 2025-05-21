import { Car } from "../types/car";

const routePairs = [
  { start: "Kigali", destination: "Ruhengeri" },
  { start: "Kigali", destination: "Butare" },
  { start: "Kigali", destination: "Rubavu" },
  { start: "Kigali", destination: "Huye" },
];

// Raw car info without route
const rawCars = [
  { id: '1', model: 'RAC 560', available: true, color: 'green' as 'green' },
  { id: '2', model: 'RAC 550', available: false, color: 'blue' as 'blue' },
  { id: '3', model: 'RAC 560', available: true, color: 'orange' as 'orange' },
  { id: '4', model: 'RAC 550', available: true, color: 'purple' as 'purple' },
  { id: '5', model: 'RAC 550', available: true, color: 'green' as 'green' },
  { id: '6', model: 'RAC 550', available: false, color: 'blue' as 'blue' },
  { id: '7', model: 'RAC 560', available: true, color: 'orange' as 'orange' },
  { id: '8', model: 'RAC 550', available: true, color: 'purple' as 'purple' },
  { id: '9', model: 'RAC 560', available: true, color: 'green' as 'green' },
  { id: '10', model: 'RAC 550', available: false, color: 'blue' as 'blue' },
  { id: '11', model: 'RAC 560', available: true, color: 'orange' as 'orange' },
  { id: '12', model: 'RAC 550', available: true, color: 'purple' as 'purple' },
  { id: '13', model: 'RAC 560', available: true, color: 'green' as 'green' },
  { id: '14', model: 'RAC 550', available: false, color: 'blue' as 'blue' },
  { id: '15', model: 'RAC 560', available: true, color: 'orange' as 'orange' },
  { id: '16', model: 'RAC 550', available: true, color: 'purple' as 'purple' },
  { id: '17', model: 'RAC 550', available: true, color: 'green' as 'green' },
  { id: '18', model: 'RAC 550', available: false, color: 'blue' as 'blue' },
  { id: '19', model: 'RAC 560', available: true, color: 'orange' as 'orange' },
  { id: '20', model: 'RAC 550', available: true, color: 'purple' as 'purple' },
];

export const mockCars: Car[] = rawCars.map((car, index) => {
  const route = routePairs[index % routePairs.length];
  return {
    ...car,
    driver: "Guidatore Alex",
    start: route.start,
    destination: route.destination,
  };
});
