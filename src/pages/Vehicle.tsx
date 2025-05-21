import React, { useState, useMemo } from "react";
import CarGrid from "../components/car/CarGrid";
import { Car } from "../types/car";
import { mockCars } from "../data/mockCars";

const Index = () => {
  const [cars, setCars] = useState<Car[]>(mockCars);
  const [selectedRoute, setSelectedRoute] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [formData, setFormData] = useState<{ start: string; destination: string; available: boolean } | null>(null);

  const handleEditCar = (car: Car) => {
    setEditingCar(car);
    setFormData({ start: car.start, destination: car.destination, available: car.available });
  };

  const handleDeleteCar = (id: string) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
    console.log("Deleted car with id:", id);
  };

  const handleRouteFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev!,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCar && formData) {
      setCars((prev) =>
        prev.map((car) =>
          car.id === editingCar.id
            ? { ...car, start: formData.start, destination: formData.destination, available: formData.available }
            : car
        )
      );
      setEditingCar(null);
      setFormData(null);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg px-6 pb-4 pt-5 dark:border-gray-800 dark:bg-white/[0.05]">
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Destination Vehicles
        </h3>

        <div className="flex flex-wrap gap-4 sm:ml-auto items-center">
          <div className="flex flex-col">
            <label htmlFor="routeSelect" className="mb-1 text-gray-700 dark:text-gray-300 font-medium">
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
            <label htmlFor="availabilitySelect" className="mb-1 text-gray-700 dark:text-gray-300 font-medium">
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

      {editingCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-60 p-4">
          <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
            <button
              onClick={() => {
                setEditingCar(null);
                setFormData(null);
              }}
              className="absolute right-4 top-4 rounded-full bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              aria-label="Close edit modal"
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Edit Vehicle</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="start" className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
                  Start
                </label>
                <input
                  id="start"
                  name="start"
                  type="text"
                  value={formData?.start || ""}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                />
              </div>
              <div>
                <label htmlFor="destination" className="mb-2 block font-semibold text-gray-700 dark:text-gray-300">
                  Destination
                </label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  value={formData?.destination || ""}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="available"
                  name="available"
                  type="checkbox"
                  checked={formData?.available || false}
                  onChange={handleFormChange}
                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800"
                />
                <label htmlFor="available" className="ml-2 select-none font-semibold text-gray-700 dark:text-gray-300">
                  Available
                </label>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditingCar(null);
                    setFormData(null);
                  }}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

