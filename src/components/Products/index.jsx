import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductItems } from '../../store/selectors/getProductItems';
import { addProduct, addProductActive, removeProduct } from '../../store/action';
import './style.scss';
import HeaderCarousel from '../Header';

const ProductItems = () => {
  const [productActive, setProductActive] = useState(false);
  const selector = useSelector(getProductItems);
  const disptach = useDispatch();
  const handleAdd = (e) => {
    const { id } = e.target.dataset;
    disptach(addProduct(id));
    disptach(addProductActive(id));
    setProductActive(true);
  };
  const handleDelet = (e) => {
    const { id } = e.target.dataset;
    disptach(removeProduct(id));
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
                  <div className="productCard_image">
                    <img src={product.img} alt="flowers" />
                  </div>
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
                      onClick={handleAdd}
                      data-id={product.id}
                      disabled={product.active}
                    >
                      Պահպանել
                    </button>
                  </div>
                  <div className="productCard_removeBtn">
                    <button
                      type="button"
                      style={{ display: product.active ? 'block' : 'none' }}
                      onClick={handleDelet}
                      data-id={product.id}
                    >
                      ջնջել
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
