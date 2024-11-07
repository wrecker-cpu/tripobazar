
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="w-auto pr-3 bg-green-50 h-autom-0 border-r-4 border-white font-poppins font-medium ">
      <nav className="flex flex-col pt-10 text-start items-start">
        <Link to="users" className="mb-4 pl-2 w-full hover:bg-green-50 hover:text-green-600 ">Users</Link>
        <Link to="destination-details" className="mb-4 pl-2 hover:bg-green-50 hover:text-green-600 rounded">DestinationDetails</Link>
      </nav>
    </div>
  );
};

export default SideNav;
