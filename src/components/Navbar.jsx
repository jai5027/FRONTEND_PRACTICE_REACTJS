import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-20 py-4 bg-gray-950 text-white shadow-md">
      
      {/* Left Side */}
      <h1 className="text-xl font-bold tracking-wide">
        Media Search
      </h1>

      {/* Right Side */}
      <div className="flex gap-3">
        
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Search
        </Link>

        <Link
          to="/collection"
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Collection
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;