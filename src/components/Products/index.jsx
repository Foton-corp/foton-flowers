/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductItems } from '../../store/selectors/getProductItems';
import {
  addProduct, addProductActive, goToFloversPage, removeProduct,
} from '../../store/action';
import HeaderCarousel from '../Header';

import './style.scss';
import RenderTranslated from '../common/RenderTranslated/RenderTranslated';

const ProductItems = () => {
  const selector = useSelector(getProductItems);
  const dispatch = useDispatch();
  const handleAdd = (id) => {
    dispatch(addProduct(id));
    dispatch(addProductActive(id));
  };

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };


  return (
    <div>
      <HeaderCarousel />
      <div className="products">
        <div className="products_title">
          <RenderTranslated selector="home:flowers" />
        </div>
        <div className="products_box" />
        <ul className="products_items">
          {
            selector.map((product) => (
              <li key={product.id}>
                <div className="productCard">
                  <Link
                    onClick={() => dispatch(goToFloversPage(product.id))}
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
                      onClick={() => handleAdd(product.id)}
                    >
                      <RenderTranslated selector={product.active ? 'home:saved' : 'home:save'} />
                    </button>
                  </div>
                  <div className="productCard_removeBtn">
                    <button
                      type="button"
                      style={{ display: product.active ? 'block' : 'none' }}
                      onClick={() => handleDelete(product.id)}
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
