import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBascetProduct } from '../../store/selectors/getBascetProduct';
import { removeProduct, changeQuantity } from '../../store/action';

import './style.scss';

const MainBascet = () => {
  const [quantity, setQuantity] = useState(1);
  const selector = useSelector(getBascetProduct);
  const totalAmount = selector.reduce((num, item) => num + +item.sale * item.quantity, 0);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeProduct(id));
  };

  const quantityChange = (e) => {
    const { value } = e.target;
    const { id } = e.target.dataset;
    setQuantity(value);
    dispatch(changeQuantity(id, quantity));
  };

  return (
    <div className="main_bascet">
      <div className="main_bascet_title">ընտրված ապրանքներ</div>
      <div>
        <ul className="main_bascet_items">
          {
          selector.map((prod) => (
            <li key={prod.id}>
              <div className="bascetCard">
                <div className="bascetCard_image">
                  <img src={prod.img} alt="flover" />
                </div>
                <div className="bascetCard_name">
                  {prod.name}
                </div>
                <div className="bascetCard_sale">
                  {prod.sale}
                  {' '}
                  $
                </div>
                <div className="bascetCard_title">
                  Քանակի ավելացում
                </div>
                <div className="bascetCard_quantityBox">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    onChange={quantityChange}
                    data-id={prod.id}
                    data-sale={prod.sale}
                    data-val={prod.quantity}
                    value={prod.quantity}
                    className="bascet_range"
                  />
                  <span>{prod.quantity}</span>
                </div>
                <div className="productCard_removeBtn">
                  <button
                    type="button"
                    onClick={handleDelete}
                    data-id={prod.id}
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
      <div className="total_amount">
        Ընդանուր առժեք:
        {' '}
        {totalAmount}
      </div>
    </div>

  );
};

export default MainBascet;
