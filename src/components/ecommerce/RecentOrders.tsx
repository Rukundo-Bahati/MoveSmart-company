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
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "07:45 AM",
    start: "Kigali",
    destination: "Nyagatare",
    status: "Completed",
  },
  {
    id: 4,
    name: "RUKUNDO Bahati",
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "02:15 PM",
    start: "Kigali",
    destination: "New York",
    status: "Canceled",
  },
  {
    id: 5,
    name: "Dushimire Aine",
    date: "1/03/2025",
    price: "800FRW",
    departureTime: "05:30 PM",
    start: "Kigali",
    destination: "Rusizi",
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
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
                Name
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
                Date
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
                Price
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
                Departure Time
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
                Start
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
                Destination
              </TableCell>
              <TableCell isHeader className="px-4 py-3 text-left dark:text-white">
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
                <TableCell className="px-4 py-3 dark:text-white">{booking.name}</TableCell>
                <TableCell className="px-4 py-3 dark:text-white">{booking.date}</TableCell>
                <TableCell className="px-4 py-3 dark:text-white">{booking.price}</TableCell>
                <TableCell className="px-4 py-3 dark:text-white">
                  {booking.departureTime}
                </TableCell>
                <TableCell className="px-4 py-3 dark:text-white">{booking.start}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
