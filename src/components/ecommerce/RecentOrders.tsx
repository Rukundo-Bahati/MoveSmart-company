import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

// Define the TypeScript interface for transport bookings
interface Booking {
  id: number;
  name: string; // Passenger Name
  date: string; // Date of travel
  price: string; // Ticket price
  departureTime: string; // Departure time
  start: string; // Starting location
  destination: string; // Destination
  status: "Completed" | "Pending" | "Canceled"; // Booking status
}

// Sample transport bookings data
const tableData: Booking[] = [
  {
    id: 1,
    name: "John Doe",
    date: "2025-02-27",
    price: "$120.00",
    departureTime: "08:30 AM",
    start: "New York",
    destination: "Washington DC",
    status: "Completed",
  },
  {
    id: 2,
    name: "Alice Smith",
    date: "2025-02-28",
    price: "$90.00",
    departureTime: "10:00 AM",
    start: "Los Angeles",
    destination: "San Francisco",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Johnson",
    date: "2025-02-29",
    price: "$150.00",
    departureTime: "07:45 AM",
    start: "Chicago",
    destination: "Detroit",
    status: "Completed",
  },
  {
    id: 4,
    name: "Emily White",
    date: "2025-03-01",
    price: "$80.00",
    departureTime: "02:15 PM",
    start: "Boston",
    destination: "New York",
    status: "Canceled",
  },
  {
    id: 5,
    name: "Robert Brown",
    date: "2025-03-02",
    price: "$110.00",
    departureTime: "05:30 PM",
    start: "Miami",
    destination: "Orlando",
    status: "Pending",
  },
];

export default function RecentBookings() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Bookings
        </h3>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader>Name</TableCell>
              <TableCell isHeader>Date</TableCell>
              <TableCell isHeader>Price</TableCell>
              <TableCell isHeader>Departure Time</TableCell>
              <TableCell isHeader>Start</TableCell>
              <TableCell isHeader>Destination</TableCell>
              <TableCell isHeader>Status</TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>{booking.departureTime}</TableCell>
                <TableCell>{booking.start}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
