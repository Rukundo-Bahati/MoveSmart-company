import  { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface Payment {
  id: string;
  clientName: string;
  car: string;
  price: string;
  paymentMethod: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const mockPayments: Payment[] = Array(12).fill(null).map((_, index) => ({
  id: `payment-${index + 1}`,
  clientName: 'Ouattara Alex',
  car: 'RAC 479',
  price: '$200 Ref',
  paymentMethod: 'Card',
  date: '20/5',
  status: 'completed',
}));

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const filteredPayments = mockPayments.filter(payment => 
    payment.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.car.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayments = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPayments.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg px-6 pb-4 pt-5 dark:border-gray-800 dark:bg-white/[0.05]">
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payments</h1>
       
        </div>
      
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Transactions" 
            value="$500" 
            change="+1%" 
            color="bg-green-500" 
          />
          <StatCard 
            title="Pending payments" 
            value="$500" 
            change="+1%" 
            color="bg-yellow-500" 
          />
          <StatCard 
            title="Done Transactions" 
            value="$500" 
            change="+1%" 
            color="bg-blue-500" 
          />
          <StatCard 
            title="Failed Transactions" 
            value="$500" 
            change="+1%" 
            color="bg-red-500" 
          />
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              placeholder="Search recent transactions"
              className="pl-10 w-full md:w-80 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <select className="px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 cursor-pointer">
                <option>Payment method</option>
                <option>Card</option>
                <option>Cash</option>
                <option>Transfer</option>
              </select>
       
            </div>
            <div className="relative">
              <select className="px-3 py-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            
            </div>
          </div>
        </div>
        
        {/* Transactions Table */}
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="text-green-800 font-medium px-4 py-2 text-left">Client Name</th>
                  <th className="text-green-800 font-medium px-4 py-2 text-left">Car</th>
                  <th className="text-green-800 font-medium px-4 py-2 text-left">Price</th>
                  <th className="text-green-800 font-medium px-4 py-2 text-left">Payment method</th>
                  <th className="text-green-800 font-medium px-4 py-2 text-left">Date</th>
                  <th className="text-green-800 font-medium px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentPayments.map((payment) => (
                  <tr key={payment.id} className="border-b">
                    <td className="px-4 py-4">{payment.clientName}</td>
                    <td className="px-4 py-4">{payment.car}</td>
                    <td className="px-4 py-4">{payment.price}</td>
                    <td className="px-4 py-4">{payment.paymentMethod}</td>
                    <td className="px-4 py-4">{payment.date}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className={`h-2 w-2 rounded-full mr-2 ${
                          payment.status === 'completed' ? 'bg-green-500' :
                          payment.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className={`text-sm ${
                          payment.status === 'completed' ? 'text-green-600' :
                          payment.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPayments.length)} of {filteredPayments.length}
            </div>
            <div className="flex space-x-1">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-2 py-1 border rounded-md ${currentPage === 1 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {pageNumbers.slice(0, 3).map(number => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === number
                      ? 'bg-green-500 text-white border-green-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {number}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => 
                  Math.min(prev + 1, Math.ceil(filteredPayments.length / itemsPerPage))
                )}
                disabled={currentPage >= Math.ceil(filteredPayments.length / itemsPerPage)}
                className={`px-2 py-1 border rounded-md ${
                  currentPage >= Math.ceil(filteredPayments.length / itemsPerPage)
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-50'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = (props: StatCardProps) => {
  const { title, value, change, color } = props;
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{value}</h3>
        <div className={`${color} w-10 h-10 rounded flex items-center justify-center`}>
          <span className="text-white text-lg">$</span>
        </div>
      </div>
      <p className="text-xs text-green-600 mt-2">{change}</p>
    </div>
  );
};

export default Payments;
