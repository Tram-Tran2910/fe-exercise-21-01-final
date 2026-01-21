import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link to="/" className="text-lg font-black tracking-[0.2em]">
          BASIC
        </Link>

        <div className="mx-2 flex flex-1 items-center">
          <div className="flex w-full items-center rounded-xl border border-black/10 bg-white px-3 py-2 shadow-sm focus-within:border-black/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-black/70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              className="ml-2 w-full text-sm text-black placeholder:text-black/40 focus:outline-none"
              placeholder="Search by name..."
            />

            <button
              type="button"
              className="ml-2 rounded-lg px-2 py-1 text-sm font-medium text-black/80 hover:bg-black/5"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-xl border border-black/10 p-2 shadow-sm hover:bg-black/5 active:scale-[0.98] transition"
            aria-label="Go to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          <Link
            to="/orders"
            className="rounded-xl border border-black/10 px-3 py-2 font-semibold shadow-sm hover:bg-black/5"
          >
            Orders
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-black/10 px-3 py-2 font-semibold hover:bg-black/5"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
