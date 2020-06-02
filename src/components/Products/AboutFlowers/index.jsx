/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {addProductActive, addProductToBasket} from '../../../store/action';
import './style.scss';
import getInfoForFlavorById from '../../../store/selectors/getInfoForFlavorById';

const FlowersAbout = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(props.match.params.id);
  const product = useSelector(getInfoForFlavorById(id));
  // eslint-disable-next-line consistent-return
  const handleBuy = (id) => {
    dispatch(addProductToBasket(id));
    dispatch(addProductActive(id));
  };

  useEffect(() => {
    setId(props.match.params.id);
  }, [props.match.params.id]);
  if (!product) {
    return null;
  }

  return (
    <div className="flowersAbout" key={product.id}>
      <div className="flowersAbout_image_box">
        <img src={product.img} alt="flover" className="flowersAbout_image_box_img" />
      </div>
      <div className="flowersAbout_descriptions">
        <div className="flowersAbout_title">{product.name}</div>
        <div className="flowersAbout_about">{product.about}</div>
        <div>
          <div className="flowersAbout_sale">
            {`${product.sale} դրամ`}
          </div>
          <div>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="button"
              className="flowersAbout_btn"
              disabled={product.active}
              onClick={() => handleBuy(product.id)}
            >
              {product.active ? 'ԾԱՂԻԿԸ ԶԱՄԲՅՈՒՂՈՒՄ Է' : 'ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowersAbout;
