/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductItems } from '../../store/selectors/getProductItems';
import {
  addProduct, addProductActive, removeProduct,
} from '../../store/action';
import HeaderCarousel from '../Header';

import './style.scss';

const ProductItems = () => {
  const selector = useSelector(getProductItems);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    const { id } = e.target.dataset;
    dispatch(addProduct(id));
    dispatch(addProductActive(id));
  };

  const handleDelet = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeProduct(id));
  };


  return (
    <div>
      <HeaderCarousel />
      <div className="products">
        <div className="products_title">
          ԾԱՂԻԿՆԵՐ
        </div>
        <div className="products_box" />
        <ul className="products_items">
          {
            selector.map((product) => (
              <li key={product.id}>
                <div className="productCard">
                  <Link
                    to={`flavors/${product.id}`}
                    className="productCard_image"
                  >
                    <img src={product.img} alt="flowers" />
                  </Link>
                  <div className="productCard_name">
                    {product.name}
                  </div>
                  <div className="productCard_sale">
                    {product.sale}
                    {' '}
                    $
                  </div>
                  <div className="productCard_btn">
                    <button
                      type="button"
                      disabled={product.active}
                      onClick={handleAdd}
                      data-id={product.id}
                    >
                      {product.active ? 'պահպանված է' : 'Պահպանել'}
                    </button>
                  </div>
                  <div className="productCard_removeBtn">
                    <button
                      type="button"
                      style={{ display: product.active ? 'block' : 'none' }}
                      onClick={handleDelet}
                      data-id={product.id}
                    >
                      չեղարկել
                    </button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ProductItems;
