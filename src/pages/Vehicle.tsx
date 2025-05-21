import React, { useState, useMemo } from "react";
import CarGrid from "../components/car/CarGrid";
import { Car } from "../types/car";
import { mockCars } from "../data/mockCars";

const Index = () => {
  const [cars, setCars] = useState<Car[]>(mockCars);
  const [selectedRoute, setSelectedRoute] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  const handleEditCar = (car: Car) => {
    console.log("Editing car:", car);
  };

  const handleDeleteCar = (id: string) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
    console.log("Deleted car with id:", id);
  };

  const handleRouteFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedRoute(event.target.value);
  };

  const handleAvailabilityFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAvailabilityFilter(event.target.value);
  };

  const uniqueRoutes = useMemo(() => {
    const routes = Array.from(
      new Set(cars.map((car) => `${car.start} - ${car.destination}`))
    );
    return ["All", ...routes];
  }, [cars]);

  const filteredData = useMemo(() => {
    return cars.filter((car) => {
      const route = `${car.start} - ${car.destination}`;
      const matchesRoute = selectedRoute === "All" || route === selectedRoute;
      const matchesAvailability =
        availabilityFilter === "All" ||
        (availabilityFilter === "Available" && car.available) ||
        (availabilityFilter === "Unavailable" && !car.available);
      return matchesRoute && matchesAvailability;
    });
  }, [cars, selectedRoute, availabilityFilter]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg px-6 pb-4 pt-5 dark:border-gray-800 dark:bg-white/[0.05]">
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Destination Vehicles
        </h3>

        <div className="flex flex-wrap gap-4 sm:ml-auto items-center">
          <div className="flex flex-col">
            <label
              htmlFor="routeSelect"
              className="mb-1 text-gray-700 dark:text-gray-300 font-medium"
            >
              Route
            </label>
            <select
              id="routeSelect"
              className="px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
              value={selectedRoute}
              onChange={handleRouteFilterChange}
            >
              {uniqueRoutes.map((route) => (
                <option key={route} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="availabilitySelect"
              className="mb-1 text-gray-700 dark:text-gray-300 font-medium"
            >
              Availability
            </label>
            <select
              id="availabilitySelect"
              className="px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
              value={availabilityFilter}
              onChange={handleAvailabilityFilterChange}
            >
              <option value="All">All</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CarGrid
          cars={filteredData}
          onEditCar={handleEditCar}
          onDeleteCar={handleDeleteCar}
        />
      </main>
    </div>
  );
};

export default Index;

