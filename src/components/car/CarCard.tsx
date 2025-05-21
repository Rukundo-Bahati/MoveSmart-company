import { Car } from '../../types/car';
import { Edit, Trash } from 'lucide-react';
import { toast } from 'sonner';
import Button from '../ui/button/Button';
import './car.css'
import { Bus } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onEdit: (car: Car) => void;
  onDelete: (id: string) => void;
}

const getBackgroundColor = (color: Car['color']) => {
    switch (color) {
      case 'green':
        return 'bg-car-green';
      case 'blue':
        return 'bg-car-blue';
      case 'orange':
        return 'bg-car-orange';
      case 'purple':
        return 'bg-car-purple';
      default:
        return 'bg-car-green';
    }
  };
  

const CarCard: React.FC<CarCardProps> = ({ car, onEdit, onDelete }) => {
  const backgroundColor = getBackgroundColor(car.color);
  
  const handleEdit = () => {
    onEdit(car);
    toast.success(`Editing ${car.model}`);
  };
  
  const handleDelete = () => {
    onDelete(car.id);
    toast.success(`${car.model} has been deleted`);
  };
  
  return (
    <div className="flex flex-col rounded-md shadow-md overflow-hidden">
 <div className={`p-4 flex justify-center items-center ${backgroundColor}`}>
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-800">
         <Bus className="h-6 w-6" />
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg">{car.model}</h3>
        <p className="text-gray-600 text-sm">Guidatore: {car.driver}</p>
        <div className="mt-2 flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${car.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-xs text-gray-500">{car.available ? 'Available' : 'Unavailable'}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <Button 
            variant="outline" 
            size={"icon" as any}
            className="h-8 w-8" 
            onClick={handleEdit}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size={"icon" as any}
            className="h-8 w-8" 
            onClick={handleDelete}
          >
            <Trash className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
