import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center w-full justify-between gap-5 ">
      <div className="flex items-center w-[80%] justify-between">
        <h1 className="text-2xl ">Duas Page</h1>
        <div className="w-[22rem] relative">
          <input
            className="bg-white px-4 py-3 w-full focus:outline-primary rounded-lg  "
            type="text"
            placeholder="Search by Dua Name"
          />
          <button
            type="submit"
            className="bg-veryLightGray absolute top-1 right-1 px-4 py-[9px] rounded-lg flex items-center justify-center"
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
          </button>
        </div>
      </div>

      <div className="flex gap-2 ">
        <Image width={45} height={45} src="/assets/icons/profile.svg" alt="" />
        <Image width={10} height={7} src="/assets/icons/downArrow.svg" alt="" />
      </div>
    </div>
  );
}
