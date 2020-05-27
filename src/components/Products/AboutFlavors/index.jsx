/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoForFlavor } from '../../../store/selectors/getInfoForFlavor';
import { goToFloversPage, addProduct, addProductActive } from '../../../store/action';

import './style.scss';


const FloversAbout = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector(getInfoForFlavor);
  // eslint-disable-next-line consistent-return
  const handleBuy = (id) => {
    dispatch(addProduct(id));
    dispatch(addProductActive(id));
  };

  useEffect(() => {
    console.log('Selector is: ', selector);
    if (!selector.length) {
      const { id } = props.match.params;
      dispatch(goToFloversPage(id));
    }
  }, [selector, dispatch]);
  return (
    <>
      {selector.map((product) => (
        <div className="flowersAbout" key={product.id}>
          <div className="flowersAbout_image">
            <img src={product.img} alt="flover" />
          </div>
          <div className="flowersAbout_descriptions">
            <div className="flowersAbout_title">{product.name}</div>
            <div className="flowersAbout_about">{product.about}</div>
            <div>
              <div className="flowersAbout_sale">
                {product.sale}
                $
              </div>
              <div>
                <button
                  type="button"
                  className="flowersAbout_btn"
                  disabled={product.active}
                  onClick={() => handleBuy(product.id)}
                >
                  {product.active ? 'ԾԱՂԻԿԸ ԶԱՄԲՅՈՒՂՈՒՄ Է' : 'ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FloversAbout;
