import React from 'react';
// import { ArrowUpRight } from 'lucide-react';

export function Card({ key, price, image, title, description }) {
  return (
    <div className=" rounded-md border">
      <img
        src={image}
        alt={title}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title} &nbsp;
        </h1>

        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
