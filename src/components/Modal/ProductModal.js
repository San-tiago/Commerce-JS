import React from 'react';
import { useEffect, useState } from 'react';

function ProductModal({ item, closeModal }) {
  const [currentProduct, setcurrentProduct] = useState('');

  useEffect(() => {
    item.map((item) => {
      setcurrentProduct(item.image.url);
    });
  }, []);

  const changeProductImage = (url) => {
    setcurrentProduct(url);
  };
  console.log(item);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/[0.2] py-8 overflow-y-auto md:py-5">
      {/*    <p onClick={closeModal} className="text-center text-2xl">
        X
      </p> */}
      <div className="w-4/5 mx-auto bg-white lg:w-9/12 ">
        <div className="w-full relative">
          <div
            onClick={closeModal}
            className="absolute right-0 text-right px-5 py-2 text-2xl z-10 text-white lg:text-neutral-700"
          >
            X
          </div>
          {item.map((item, i) => (
            <div key={i} className="w-full md:grid grid-cols-2 md:h-screen">
              <div className="flex justify-center items-center  relative h-screen w-100 bg-neutral-700 md:h-full md:items-center md:pt-0">
                <div className="w-80 ">
                  <img
                    src={currentProduct}
                    alt=""
                    className=" w-full object-contain"
                  />
                </div>
                <div className=" absolute left-0 right-0 bottom-8 px-5 py-2 flex justify-center sm:bottom-5 ">
                  <div className="w-4/5">
                    <div className="w-100 flex justify-center space-x-5 overflow-x-auto">
                      {item.assets.map((img) => (
                        <div
                          className="flex items-center justify-center hover:cursor-pointer hover:bg-neutral-600  py-2"
                          onClick={() => changeProductImage(img.url)}
                          key={img.id}
                        >
                          <img
                            src={img.url}
                            alt=""
                            className="max-w-16 max-h-16 object-contain md:w-14 md:h-10 lg:h-14 lg:w-16"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full px-7 py-7 text-neutral-700  md:h-full md:flex md:items-center md:py-0">
                <div className="w-full">
                  <div className="w-100 md:pt-5">
                    <h3 className="text-2xl  font-semibold">{item.name}</h3>
                    <div className="w-100 py-2 font-semibold text-neutral-600">
                      <p>{item.price.formatted_with_symbol}</p>
                    </div>
                  </div>

                  <div className="w-full py-4 text-left leading-normal text-sm text-neutral-600">
                    <p
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-100 py-2 font-semibold text-gray-600">
                      <p>Size</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {item.variant_groups.map((variant) =>
                        variant.options.map((variant_name) => (
                          <div
                            className="px-3 py-1 bg-neutral-700 text-white text-xs flex justify-center align-center"
                            key={variant_name.id}
                          >
                            <p> {variant_name.name}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="w-100 py-5 mt-4 flex justify-center">
                    <button className="bg-neutral-700 p-3 text-white w-4/5 font-semibold text-xs">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
