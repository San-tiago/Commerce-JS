import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import MobileNavIcons from './components/MobileNavIcons';
import Categories from './components/Categories';
import Products from './components/Products/Products';
import ProductModal from './components/Modal/ProductModal';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]); //products state
  const [categories, setCategories] = useState([]); //products state
  const [modalProduct, setmodalProduct] = useState([]);
  const [modal, setModal] = useState(false); // modal state
  const [mobileLinks, setmobileLinks] = useState(false); // mobile nav state
  const mlBtn = () => setmobileLinks(!mobileLinks); // toggle function mobile nav state

  const fetchProducts = async () => {
    await commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };
  const fetchCategories = async () => {
    await commerce.categories
      .list()
      .then((category) => {
        setCategories(category.data);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };

  const productModal = (product) => {
    setmodalProduct([product]);
    setModal(true);
  };

  const fetchByCategory = async (category) => {
    const categoryProducts = await commerce.products
      .list({
        category_slug: [category],
      })
      .then((response) => response.data);

    setProducts(categoryProducts);
  };

  const closeModal = () => setModal(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="w-full fixed">
        <Navbar togglemlLinks={mlBtn} />
        {mobileLinks ? (
          <div className="absolute w-full h-screen transition ease-in-out delay-150">
            <MobileNavIcons />
          </div>
        ) : null}
      </div>
      <div className="px-6 pt-20 sm:px-10 lg:flex lg:pt-28">
        <Categories
          categories={categories}
          fetchByCategory={fetchByCategory}
          fetchProducts={fetchProducts}
        />
        <Products products={products} productModal={productModal} />
      </div>
      {modalProduct && modal ? (
        <ProductModal item={modalProduct} closeModal={closeModal} />
      ) : null}
      {/*       {modalProduct ? modalProduct.map((item) => <p>{item.name}</p>) : null}
       */}{' '}
    </div>
  );
}

export default App;
