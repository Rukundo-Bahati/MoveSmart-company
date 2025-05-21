import  { useState } from 'react';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Area,
  AreaChart
} from 'recharts';

const clientStatsData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 70 },
  { name: 'Jun', value: 60 },
  { name: 'Jul', value: 80 },
];

const incomeData = [
  { name: 'Jan', value: 500 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 700 },
  { name: 'May', value: 900 },
  { name: 'Jun', value: 750 },
  { name: 'Jul', value: 950 },
];

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <div className={`${color} w-8 h-8 rounded-md flex items-center justify-center`}>
          <span className="text-white text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <div className="flex items-center text-xs mt-1">
        {isPositive ? (
          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
        )}
        <span className={isPositive ? "text-green-500" : "text-red-500"}>
          {change}
        </span>
      </div>
    </div>
  );
};

interface RevenueCardProps {
  title: string;
  value: string;
  change: string;
  period: string;
  isPositive: boolean;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ title, value, change, period, isPositive }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold mt-2">{value}</h3>
      <div className="flex items-center text-xs mt-1">
        {isPositive ? (
          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
        )}
        <span className={isPositive ? "text-green-500" : "text-red-500"}>
          {change}
        </span>
        <span className="ml-1 text-gray-500">{period}</span>
      </div>
    </div>
  );
};

interface ChartCardProps {
  title: string;
  filterOptions?: string[];
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, filterOptions, children }) => {
  const [filter, setFilter] = useState(filterOptions ? filterOptions[0] : '');
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm text-gray-500">{title}</h3>
        {filterOptions && (
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 rounded px-3 py-1 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 pointer-events-none" />
          </div>
        )}
      </div>
      <div className="h-52">
        {children}
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg px-6 pb-4 pt-5 dark:border-gray-800 dark:bg-white/[0.05]">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Clients" 
            value="500" 
            change="+2%" 
            isPositive={true}
            color="bg-green-500" 
          />
          <StatCard 
            title="Bought Tickets" 
            value="$500" 
            change="+5%" 
            isPositive={true}
            color="bg-blue-500" 
          />
          <StatCard 
            title="Pending Tickets" 
            value="$500" 
            change="+1%" 
            isPositive={true}
            color="bg-yellow-500" 
          />
          <StatCard 
            title="Cancelled Tickets" 
            value="$500" 
            change="-2%" 
            isPositive={false}
            color="bg-red-500" 
          />
        </div>
        
        {/* Revenue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <RevenueCard 
            title="Today's Revenue" 
            value="$500" 
            change="+5%" 
            period="vs yesterday"
            isPositive={true}
          />
          <RevenueCard 
            title="Weekly Revenue" 
            value="$500" 
            change="+3%" 
            period="vs last week"
            isPositive={true}
          />
          <RevenueCard 
            title="Monthly Revenue" 
            value="$500" 
            change="-2%" 
            period="vs last month"
            isPositive={false}
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard title="Client Statistics" filterOptions={['Daily', 'Weekly', 'Monthly']}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={clientStatsData}
                margin={{
                  top: 5,
                  right: 0,
                  left: -25,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorClient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px',
                    fontSize: '12px',
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  fill="url(#colorClient)"
                  dot={{ stroke: '#10B981', strokeWidth: 2, fill: '#FFFFFF', r: 4 }}
                />
                {/* Highlight point */}
                <text x="50%" y="40%" textAnchor="middle" dominantBaseline="middle" className="text-green-500 font-medium">
                  <tspan x="40%" dy="-20" className="text-2xl font-bold text-green-500">220</tspan>
                  <tspan x="40%" dy="20" className="text-sm text-gray-500">clients</tspan>
                </text>
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard title="Total Income" filterOptions={['Last 7 days', 'Last 30 days', 'Last 90 days']}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={incomeData}
                margin={{
                  top: 5,
                  right: 0,
                  left: -25,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px',
                    fontSize: '12px',
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  fill="url(#colorIncome)"
                  dot={{ stroke: '#10B981', strokeWidth: 2, fill: '#FFFFFF', r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </main>
    </div>
  );
};

export default Analytics;