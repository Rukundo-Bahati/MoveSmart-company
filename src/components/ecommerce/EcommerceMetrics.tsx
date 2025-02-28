import { ArrowUpIcon, GroupIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center ">
      {/* Total Clients */}
      <div className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6 shadow-md min-w-[300px] w-full">
        <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-xl dark:bg-gray-800">
          <GroupIcon className="size-12 text-white/90" />
        </div>
        <div className="flex-grow">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Total Clients
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-lg dark:text-white/90">
            500
          </h4>
          <Badge color="success">
            + 12% <ArrowUpIcon />
          </Badge>
        </div>
      </div>

      {/* Completed */}
      <div className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6 shadow-md min-w-[300px] w-full">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-xl dark:bg-gray-800">
          <GroupIcon className="size-12 text-white/90" />
        </div>
        <div className="flex-grow">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Completed
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-lg dark:text-white/90">
            500
          </h4>
          <Badge color="complete">
            + 12% <ArrowUpIcon />
          </Badge>
        </div>
      </div>

      {/* Pending */}
      <div className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6 shadow-md min-w-[300px] w-full">
        <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-xl dark:bg-gray-800">
          <GroupIcon className="size-12 text-white/90" />
        </div>
        <div className="flex-grow">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Pending
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-lg dark:text-white/90">
            500
          </h4>
          <Badge color="pending">
            + 12% <ArrowUpIcon />
          </Badge>
        </div>
      </div>

      {/* Income */}
      <div className="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6 shadow-md min-w-[320px] w-full">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-950 rounded-xl dark:bg-gray-800">
          <GroupIcon className="size-12 text-white/90" />
        </div>
        <div className="flex-grow">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Income
          </span>
          <h4 className="mt-2 font-bold text-gray-800 text-lg dark:text-white/90">
            500
          </h4>
          <Badge color="income">
            + 12% <ArrowUpIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
}
