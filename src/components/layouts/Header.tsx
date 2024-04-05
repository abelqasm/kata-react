import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

const Header = () => {
  return (
    <nav className="flex md:flex-row flex-col md:gap-20 gap-10 p-5 w-full">
      <Link to={"/"} className="px-20">
        <button className="font-extrabold text-4xl h-fit px-2 w-full md:w-[30%]">
          Belcom
        </button>
      </Link>
      <div className="flex gap-2 w-full md:w-[70%] md:justify-around justify-center">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <FaSearch />
        </label>
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
