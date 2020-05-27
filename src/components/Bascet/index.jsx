import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBascetProduct } from '../../store/selectors/getBascetProduct';
import { removeProduct, increaseCountBouqet, decreaseBouqetAccount } from '../../store/action';

import './style.scss';

const MainBascet = () => {
  const selector = useSelector(getBascetProduct);
  const totalAmount = selector.reduce((num, item) => num + +item.sale * item.quantity, 0);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeProduct(id));
  };

  const handlePlus = (e) => {
    const { id } = e.target.dataset;
    const { quantity } = e.target.dataset;
    dispatch(increaseCountBouqet(id, quantity));
  };

  const handleMinus = (e) => {
    const { id } = e.target.dataset;
    const { quantity } = e.target.dataset;
    dispatch(decreaseBouqetAccount(id, quantity));
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
                  <button
                    type="button"
                    onClick={handlePlus}
                    data-id={prod.id}
                    data-quantity={prod.quantity}
                    className="bascetCard_quantityBox_plus"
                  >
                    +
                  </button>
                  <span>{prod.quantity}</span>
                  <button
                    type="button"
                    onClick={handleMinus}
                    data-id={prod.id}
                    data-quantity={prod.quantity}
                    className="bascetCard_quantityBox_minus"
                  >
                    -
                  </button>
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
