import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { commerce } from './lib/commerce';

import Navbar from './components/Navbar';
import MobileNavIcons from './components/MobileNavIcons';
import Categories from './components/Categories';
import Products from './components/Products/Products';
import ProductModal from './components/Modal/ProductModal';
import Loading from './components/Loading/Loading';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';

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
  const addToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID);
    setCart(item.cart);
  };
  const removeFromCart = async (id) => {
    const { cart } = await commerce.cart.remove(id);
    setCart(cart);
  };

  const updateCartQty = async (id, quantity) => {
    if (quantity == 0) {
      quantity = 1;
    }
    const { cart } = await commerce.cart.update(id, { quantity });
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const closeModal = () => setModal(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    /*   <div>
      <div className="w-full fixed">
        <Navbar togglemlLinks={mlBtn} totalItems={cart.total_items} />
        {mobileLinks ? (
          <div className="absolute w-full h-screen transition ease-in-out delay-150">
            <MobileNavIcons />
          </div>
        ) : null}
      </div> */
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout
                togglemlLinks={mlBtn}
                totalItems={cart.total_unique_items}
                mobileLinks={mobileLinks}
              />
              <Outlet />
            </>
          }
        >
          <Route
            path="/Commerce-JS"
            element={
              <>
                <div className="px-6 pt-20 sm:px-10 lg:flex">
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
              </>
            }
          />
          <Route
            path="/cart"
            index
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateCartQty={updateCartQty}
                emptyCart={emptyCart}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
    /*   </div> */
  );
}

export default App;
