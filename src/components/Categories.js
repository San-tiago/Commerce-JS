import React from 'react';

function Categories({ categories, fetchByCategory, fetchProducts }) {
  return (
    <div className="py-5 lg:py-8 lg:px-16">
      <h1 className="text-gray-600 font-semibold text-md uppercase lg:text-xl">
        Categories
      </h1>
      <div className=" border-b-2 w-10 border-gray-700"></div>
      <div className="grid grid-cols-3 py-8 gap-y-5 gap-x-2 text-xs sm:grid-cols-6  md:flex md:text-sm lg:flex-col ">
        <div
          className="w-24 flex justify-center items-center bg-neutral-700 text-white py-1 hover:cursor-pointer"
          onClick={() => fetchProducts()}
        >
          <p>All</p>
        </div>
        {categories.map((category) => (
          <div
            className="w-24  flex justify-center items-center text-gray-600 py-1 hover:cursor-pointer"
            key={category.id}
            onClick={() => fetchByCategory(category.slug)}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
