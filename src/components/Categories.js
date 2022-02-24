import React from 'react';
import { useEffect, useState } from 'react';

function Categories({ categories, fetchByCategory, fetchProducts }) {
  const [active, setActive] = useState('');
  const categoryBaseClass =
    'w-24 flex justify-center items-center py-1 hover:cursor-pointer text-gray-600 ';
  const activeCategory = (id) => {
    setActive(id);
  };

  return (
    <div className="py-5 lg:py-8 lg:px-16">
      <h1 className="text-gray-600 font-semibold text-md uppercase lg:text-xl">
        Categories
      </h1>
      <div className=" border-b-2 w-10 border-gray-700"></div>
      <div className="grid grid-cols-3 py-8 gap-y-5 gap-x-2 text-xs sm:grid-cols-6  md:flex md:text-sm lg:flex-col ">
        <div
          className={categoryBaseClass.concat(
            active === '' ? ' bg-neutral-700 text-white' : ' text-gray-600 '
          )}
          onClick={() => {
            fetchProducts();
            setActive('');
          }}
        >
          <p>All</p>
        </div>
        {categories.map((category) => (
          <div
            className={
              active === category.id
                ? categoryBaseClass.concat('bg-neutral-700 text-white ')
                : categoryBaseClass
            }
            key={category.id}
            onClick={() => {
              fetchByCategory(category.slug);
              activeCategory(category.id);
            }}
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
