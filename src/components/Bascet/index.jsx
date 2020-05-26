import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBascetProduct } from '../../store/selectors/getBascetProduct';
import { removeProduct } from '../../store/action';

import './style.scss';

const MainBascet = () => {
  const selector = useSelector(getBascetProduct);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeProduct(id));
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
                  <img src={prod.img} alt="icon" />
                </div>
                <div className="bascetCard_name">
                  {prod.name}
                </div>
                <div className="bascetCard_sale">
                  {prod.sale}
                  {' '}
                  $
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
    </div>

  );
};

export default MainBascet;
