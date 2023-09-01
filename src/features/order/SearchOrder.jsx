import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-48 rounded-full bg-yellow-100 px-4  py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:scale-105 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 sm:w-64 md:w-[24rem] xl:w-[32rem]"
      />
    </form>
  );
}

export default SearchOrder;
