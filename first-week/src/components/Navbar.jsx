

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="text-2xl font-bold">
            <h1 className='mt-4'>YourPetCare</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Services</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
