import React from 'react';

export function Card({ id, image, title, price, category, description, rating }) {

    const MAX_DESCRIPTION_LENGTH = 100;
    const truncatedDescription = description?.length > MAX_DESCRIPTION_LENGTH 
      ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...` 
      : description;

  return (
    <div key={id} className="border bg-gray-100 p-4 rounded-lg shadow-md border-gray-400">
      <img 
        src={image} 
        alt={title} 
        className="h-60 w-full object-contain rounded-lg border border-gray-400 p-10 bg-white" 
      />
      <h3 className="mt-5 text-lg xl:text-xl lg:text-2xl font-semibold min-h-[50px] leading-tight">
        {title}
      </h3>
      <p className="md:text-md lg:text-lg font-bold text-black-500 mt-5 lg:mt-8">Price: <b className='text-yellow-600 md:text-md lg:text-lg border px-2 py-1 '>${price}</b></p>

      <div className="text-sm mt-5 lg:mt-8">
        <p className='md:text-md lg:text-lg'><b className=' md:text-md lg:text-lg'>Description:</b> {truncatedDescription}</p>
      </div>

      <div className="flex items-center my-5">
        <span className="md:text-md lg:text-lg"><b className='text-black-500 md:text-md lg:text-lg'>Rating:</b> <span className='text-yellow-600 font-semibold'>{rating.rate}</span> ({rating.count} reviews)</span>
      </div>
    </div>
  );
}
