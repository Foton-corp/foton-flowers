import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { getBasketProduct } from '../../store/selectors/getBasketProduct';
import {changeCountBouqet, removeProductFromBasket} from '../../store/action';
import './style.scss';
import DialogContainer from './DialogContainer/DialogContainer';


const MainBasket = () => {
  const [showModal, setShowModal] = useState(false);

  const baseProduct = useSelector(getBasketProduct);
  const totalAmount = baseProduct.reduce((num, item) => num + +item.sale * item.quantity, 0);
  const dispatch = useDispatch();

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDelet = (id) => {
    dispatch(removeProductFromBasket(id));
  };

  const handlePlus = (id, quantity) => {
    dispatch(changeCountBouqet(id, quantity, '+'));
  };

  const handleMinus = (id, quantity) => {
    dispatch(changeCountBouqet(id, quantity, '-'));
  };
  return (
    <>
      <div className="main_bascet">
        <div className="main_bascet_title">ընտրված ապրանքներ</div>
        <div>
          <ul className="main_bascet_items">
            <div
              className="notAreProduct"
              style={{ display: baseProduct.length ? 'none' : 'block' }}
            >
              {' '}
              {baseProduct.length ? null : 'դուք չունեք ընտրված ապրանք'}
              {' '}
            </div>
            {
          baseProduct.map((prod) => (
            <li key={prod.id}>
              <div className="bascetCard">
                <div className="bascetCard_image">
                  <img src={prod.img} alt="Flower" />
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
                  <AddCircleSharpIcon
                    onClick={() => handlePlus(prod.id, prod.quantity)}
                    color="primary"
                  />
                  <span className="bascetCard_productQuantity">{prod.quantity}</span>
                  <RemoveCircleIcon
                    onClick={() => handleMinus(prod.id, prod.quantity)}
                    color="secondary"
                    badgeContent={2}
                  />
                </div>
                <div className="productCard_removeBtn">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelet(prod.id)}
                  >
                    <DeleteForeverTwoToneIcon />
                    ջնջել
                  </Button>
                </div>
              </div>
            </li>
          ))
          }
          </ul>
        </div>
        <div className="border_hr" />
        <div
          className="total_amount"
          style={{ display: baseProduct.length ? 'flex' : 'none' }}
        >
          <div className="total_amount_sale">
            Ընդանուր առժեք:
            {' '}
            {`${totalAmount} դրամ`}
          </div>
          <div className="total_amount_toOrderBtn">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleOpen}
            >
              Պատվիրել
            </Button>
          </div>
        </div>
      </div>
      <DialogContainer open={showModal} handleClose={handleClose} />
    </>
  );
};

export default MainBasket;
