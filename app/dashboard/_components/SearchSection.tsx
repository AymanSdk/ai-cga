import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-white bg-gradient-to-br from-primary via-purple-700 to-primary">
      <h2 className="text-3xl font-bold ">Browse all templates</h2>
      <p>What would you like to create today</p>
      <div className="flex justify-center w-full">
        <div className="flex items-center gap-2 p-2 my-5 bg-white border rounded-md w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="w-full text-black bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
