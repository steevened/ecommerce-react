import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import SearchInput from '../components/SearchInput';
import ShowFilter from '../components/ShowFilter';
import {
  filterHeadThunk,
  filterThunk,
  getProductsThunk,
} from '../store/slices/products.slice';
import { BsCart2 } from 'react-icons/bs';
import Cart from '../components/Cart';
import { postCartThunk } from '../store/slices/cart.slice';

function Home({ cart, setCart, setModalShowed, modalShowed }) {
  const [categories, setCategories] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(99999);
  const [idImg, setIdImg] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  const addtoCart = (id) => {
    const productBuyed = {
      id,
      quantity: 1,
    };
    // console.log(productBuyed)
    dispatch(postCartThunk(productBuyed));
  };

  return (
    <div className="text-center relative overflow-hidden pt-16">
      <Filter
        categories={categories}
        modalShowed={modalShowed}
        dispatch={dispatch}
        setModalShowed={setModalShowed}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        maxPrice={maxPrice}
      />
      <div
        onClick={() => {
          setModalShowed(false);
          setCart(false);
        }}
        className="py-10 md:ml-80"
      >
        <SearchInput
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          dispatch={dispatch}
        />

        <ShowFilter setModalShowed={setModalShowed} />

        <ul className="text-left  grid xl:grid-cols-2  w-3/4 mx-auto my-10 gap-5">
          {products.map(
            (product) =>
              Number(product.price) > minPrice &&
              Number(product.price) < maxPrice && (
                <div
                  className="border-2 border-base-300  w-full "
                  key={product.id}
                >
                  <Link
                    to={`/products/${product.id}`}
                    onMouseOver={() => {
                      setIdImg(product.id);
                    }}
                    onMouseLeave={() => {
                      setIdImg(null);
                    }}
                    className="flex items-center justify-center w-full h-64 relative overflow-hidden "
                  >
                    <img
                      className={`absolute block object-contain w-5-6 h-5/6 transition-all duration-700 ${
                        idImg === product.id ? 'opacity-0' : ''
                      }`}
                      src={product.productImgs[0]}
                      alt="product"
                    />
                    <img
                      className={`absolute block object-contain  w-5-6 h-5/6  transition-all duration-700 ${
                        idImg !== product.id ? 'opacity-0' : ''
                      }`}
                      src={product.productImgs[1]}
                      alt="product"
                    />
                  </Link>
                  <div className="border-t-2 border-base-300 relative h-32">
                    <div className="px-2 py-3 flex flex-col justify-between">
                      <h2 className="text-lg">{product?.title}</h2>
                      <p className="text-gray-500">Price</p>
                      <p>{product?.price}</p>
                    </div>
                    <button
                      onClick={() => addtoCart(product.id)}
                      className="btn btn-base text-xl  text-base-100 grid place-content-center btn-circle absolute bottom-3 right-3 tooltip tooltip-base tooltip-bottom"
                      data-tip="Add to Cart"
                    >
                      <BsCart2 />
                    </button>
                  </div>
                </div>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
