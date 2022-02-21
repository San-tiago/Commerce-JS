import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import MobileNavIcons from './components/MobileNavIcons';
import Categories from './components/Categories';
import Products from './components/Products/Products';
import ProductModal from './components/Modal/ProductModal';
import Loading from './components/Loading/Loading';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]); //products state
  const [categories, setCategories] = useState([]); //products state
  const [modalProduct, setmodalProduct] = useState([]);
  const [modal, setModal] = useState(false); // modal state
  const [mobileLinks, setmobileLinks] = useState(false); // mobile nav state
  const mlBtn = () => setmobileLinks(!mobileLinks); // toggle function mobile nav state

  const [loading, setLoading] = useState(false); //loading state

  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const addToCart = async (productID) => {
    const item = await commerce.cart.add(productID);
    console.log(item);
    setCart(item.cart);
  };

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(false);
  };
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  const productModal = (product) => {
    setmodalProduct([product]);
    setModal(true);
  };

  const fetchByCategory = async (category) => {
    setLoading(true);
    const { data } = await commerce.products.list({
      category_slug: [category],
    });
    setProducts(data);
    setLoading(false);
  };

  const closeModal = () => setModal(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
  }, []);
  return (
    <div>
      <div className="w-full fixed">
        <Navbar togglemlLinks={mlBtn} totalItems={cart.total_items} />
        {cart.total_items}
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

        {loading ? (
          <Loading />
        ) : (
          <Products
            products={products}
            productModal={productModal}
            addToCart={addToCart}
          />
        )}
      </div>
      {modalProduct && modal ? (
        <ProductModal
          item={modalProduct}
          closeModal={closeModal}
          addToCart={addToCart}
        />
      ) : null}
      {/*       {modalProduct ? modalProduct.map((item) => <p>{item.name}</p>) : null}
       */}{' '}
    </div>
  );
}

export default App;
