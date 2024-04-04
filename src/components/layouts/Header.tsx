
const Header = () => {
  return (
    <nav className="flex sm:flex-row flex-col sm:gap-20 gap-10 p-5 w-full">
      <button className="font-extrabold text-4xl h-fit px-2 w-full sm:w-[30%]">
        Belcom
      </button>
      <div className="flex gap-2 w-full sm:w-[70%] sm:justify-between justify-center">
        <button className="relative p-2 h-fit">
          <span className="absolute top-0 right-0 leading-none text-xs font-bold text-red-100 bg-red-600 p-1 rounded-full"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
