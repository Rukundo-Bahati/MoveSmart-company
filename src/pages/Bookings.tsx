import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import Badge from "../components/ui/badge/Badge";
import { EyeIcon, Trash2Icon } from "lucide-react";
import { Modal } from "../components/ui/modal";
import Button from "../components/ui/button/Button";
import { useModal } from "../hooks/useModal";
import PageMeta from "../components/common/PageMeta";

interface Booking {
  id: number;
  name: string;
  date: string;
  price: string;
  departureTime: string;
  start: string;
  destination: string;
  status: "Completed" | "Pending" | "Canceled";
}

const initialData: Booking[] = [
  {
    id: 1,
    name: "Erneste",
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "08:30 AM",
    start: "Huye",
    destination: "Rubavu",
    status: "Completed",
  },
  {
    id: 2,
    name: "UWAYO Pascaline",
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "10:00 AM",
    start: "Kigali",
    destination: "Musanze",
    status: "Pending",
  },
  {
    id: 3,
    name: "Saly Nelson",
    date: "2/03/2025",
    price: "800FRW",
    departureTime: "07:45 AM",
    start: "Kigali",
    destination: "Nyagatare",
    status: "Completed",
  },
  {
    id: 4,
    name: "RUKUNDO Bahati",
    date: "3/03/2025",
    price: "800FRW",
    departureTime: "02:15 PM",
    start: "Kigali",
    destination: "Rwamagana",
    status: "Canceled",
  },
  {
    id: 5,
    name: "Dushimire Aine",
    date: "3/03/2025",
    price: "800FRW",
    departureTime: "05:30 PM",
    start: "Kigali",
    destination: "Rusizi",
    status: "Pending",
  },
  {
    id: 1,
    name: "Erneste",
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "08:30 AM",
    start: "Huye",
    destination: "Rubavu",
    status: "Completed",
  },
  {
    id: 2,
    name: "UWAYO Pascaline",
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "10:00 AM",
    start: "Kigali",
    destination: "Musanze",
    status: "Pending",
  },
  {
    id: 3,
    name: "Saly Nelson",
    date: "2/03/2025",
    price: "800FRW",
    departureTime: "07:45 AM",
    start: "Kigali",
    destination: "Nyagatare",
    status: "Completed",
  },
  {
    id: 4,
    name: "RUKUNDO Bahati",
    date: "3/03/2025",
    price: "800FRW",
    departureTime: "02:15 PM",
    start: "Kigali",
    destination: "Rwamagana",
    status: "Canceled",
  },
  {
    id: 5,
    name: "Dushimire Aine",
    date: "3/03/2025",
    price: "800FRW",
    departureTime: "05:30 PM",
    start: "Kigali",
    destination: "Rusizi",
    status: "Pending",
  },
];

export default function RecentBookings() {

  <PageMeta
  title="MoveSmart Company Admin"
  description="This is Yitegere webapp for company admins to control and manage the buses and tickets"
/>

  const [tableData, setTableData] = useState<Booking[]>(initialData);
  const [selectedDate, setSelectedDate] = useState("All");
  const [selectedRoute, setSelectedRoute] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const handleDateFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDate(event.target.value);
  };

  const handleRouteFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedRoute(event.target.value);
  };

  const uniqueDates = [
    "All",
    ...new Set(tableData.map((booking) => booking.date)),
  ];
  const uniqueRoutes = [
    "All",
    ...new Set(
      tableData.map((booking) => `${booking.start} - ${booking.destination}`)
    ),
  ];

  const filteredData = tableData.filter((booking) => {
    const routeMatch =
      selectedRoute === "All" ||
      `${booking.start} - ${booking.destination}` === selectedRoute;
    const dateMatch = selectedDate === "All" || booking.date === selectedDate;
    return routeMatch && dateMatch;
  });

  const handleView = (booking: Booking) => {
    setSelectedBooking(booking);
    openModal();
  };

  const handleDelete = (id: number) => {
    setTableData((prev) => prev.filter((booking) => booking.id !== id));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg px-6 pb-4 pt-5 dark:border-gray-800 dark:bg-white/[0.05]">
      {/* Header with Filters */}
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Bookings
        </h3>

        <div className="flex flex-wrap gap-2 sm:ml-auto">
          {/* Departure Date Filter */}
          <select
            className="px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
            value={selectedDate}
            onChange={handleDateFilterChange}
          >
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>

          {/* Departure Route Filter */}
          <select
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
      </div>

      {/* Table */}
      <div className="max-w-full overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader className="border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Departure Time
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Start
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Destination
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-4 py-3 text-left dark:text-white"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredData.map((booking, index) => (
              <TableRow
                key={booking.id}
                className={`transition-all ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-900/30"
                    : "bg-white dark:bg-gray-900/50"
                } hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.name}
                </TableCell>
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.date}
                </TableCell>
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.price}
                </TableCell>
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.departureTime}
                </TableCell>
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.start}
                </TableCell>
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.destination}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    size="sm"
                    color={
                      booking.status === "Completed"
                        ? "success"
                        : booking.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 flex items-center space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <EyeIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => handleView(booking)}
                    />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2Icon
                      className="cursor-pointer text-red-500"
                      onClick={() => handleDelete(booking.id)}
                    />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Modal */}
      {isOpen && (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[900px] m-6"
      >
        {selectedBooking ? (
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-8 dark:bg-gray-800 dark:text-white">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Booking Details for {selectedBooking.name}
            </h3>
      
            {/* Booking Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-lg">
                  <strong className="text-gray-700 dark:text-gray-300">Name:</strong>{" "}
                  {selectedBooking.name}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-700 dark:text-gray-300">Date:</strong>{" "}
                  {selectedBooking.date}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-700 dark:text-gray-300">Departure Time:</strong>{" "}
                  {selectedBooking.departureTime}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong className="text-gray-700 dark:text-gray-300">Price:</strong>{" "}
                  {selectedBooking.price}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-700 dark:text-gray-300">From:</strong>{" "}
                  {selectedBooking.start}
                </p>
                <p className="text-lg">
                  <strong className="text-gray-700 dark:text-gray-300">To:</strong>{" "}
                  {selectedBooking.destination}
                </p>
              </div>
            </div>
      
            {/* Status */}
            <div className="space-y-4">
              <p className="text-lg">
                <strong className="text-gray-700 dark:text-gray-300">Status:</strong>
                <Badge
                  color={
                    selectedBooking.status === "Completed"
                      ? "success"
                      : selectedBooking.status === "Pending"
                      ? "warning"
                      : "error"
                  }
                >
                  {selectedBooking.status}
                </Badge>
              </p>
            </div>
      
            {/* Close Button */}
            <div className="flex justify-end gap-6 mt-8">
              <Button size="md" variant="outline" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
      
      )}
    </div>
  );
}
