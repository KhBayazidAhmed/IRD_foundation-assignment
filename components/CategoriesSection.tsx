"use client";

import { Suspense, use, useState } from "react";
import CategoriesItemsCart from "./CategoriesItemsCart";
import { Dua } from "@/types/dua";
interface Category {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}
interface SubCategory {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_bn: string;
  subcat_name_en: string;
  no_of_dua: number;
}

export default function CategoriesSection({
  data,
  subCat,
  dua,
}: {
  data: Promise<Category[]>;
  subCat: Promise<SubCategory[]>;
  dua: Promise<Dua[]>;
}) {
  const [search, setSearch] = useState("");
  const categories = use(data);
  const filteredData = categories.filter((item) =>
    item.cat_name_en.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl w-[35%] md:w-[40%]  hidden sm:flex flex-col  ">
      <h2 className="bg-primary rounded-md rounded-b-none text-white text-center py-3 text-lg">
        Categories
      </h2>
      <div className="px-3 py-3 relative">
        <input
          className="w-full border rounded-md  py-2 pl-10 pr-2 focus:outline-primary"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Categories"
        />
        <button
          type="submit"
          className=" absolute top-[22px] left-6  rounded-lg flex items-center justify-center"
        >
          <span className="flex items-center sm-max:hidden">
            <svg
              className="stroke-secondary"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="hidden sm-max:block sm-max:text-white">Search</p>
        </button>{" "}
      </div>
      <Suspense>
        <CategoriesItemsCart dua={dua} items={filteredData} subCat={subCat} />
      </Suspense>
    </div>
  );
}
