import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

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
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg px-6 pb-4 pt-5 dark:border-gray-800 dark:bg-white/[0.05]">
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Bookings
        </h3>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table className="w-full border-collapse">
          {/* Table Header */}
          <TableHeader className="border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableCell isHeader className="px-4 py-3 text-left">
                Name
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left">
                Date
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left">
                Price
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left">
                Departure Time
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left">
                Start
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left">
                Destination
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
            {tableData.map((booking, index) => (
              <TableRow
                key={booking.id}
                className={`transition-all ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-900/30"
                    : "bg-white dark:bg-gray-900/50"
                } hover:bg-gray-100 dark:hover:bg-gray-800`}
              >
                <TableCell className="px-4 py-3">{booking.name}</TableCell>
                <TableCell className="px-4 py-3">{booking.date}</TableCell>
                <TableCell className="px-4 py-3">{booking.price}</TableCell>
                <TableCell className="px-4 py-3">{booking.departureTime}</TableCell>
                <TableCell className="px-4 py-3">{booking.start}</TableCell>
                <TableCell className="px-4 py-3">{booking.destination}</TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    size="sm"
                    className={`px-2 py-1 rounded-lg ${
                      booking.status === "Completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    }`}
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
