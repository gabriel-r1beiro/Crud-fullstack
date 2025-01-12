import { IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="w-full h-20 rounded-t flex items-center justify-around bg-gray-700 p-2">
      <div className="flex items-center justify-center">
        <input
          placeholder="Procurar produtos..."
          className="w-[20rem] focus:outline-none rounded-l py-1 px-2 text-black "
          type="text"
        />
        <button
          type="button"
          className="rounded-r bg-white text-black py-1 text-2xl px-3"
        >
          <IoSearch />
        </button>
      </div>
      <button
        className="bg-green-600 hover:bg-green-700 px-6 py-1 rounded "
        type="button"
      >
        Add New Item
      </button>
    </header>
  );
};
