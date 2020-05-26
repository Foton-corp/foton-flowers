/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoForFlavor } from '../../../store/selectors/getInfoForFlavor';
import { goToFloversPage, addProduct } from '../../../store/action';

import './style.scss';


const FloversAbout = (props) => {
  const [activeFlov, setActivePrdo] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector(getInfoForFlavor);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!selector.length) {
      const { id } = props.match.params;
      dispatch(goToFloversPage(id));
    }
  }, [dispatch]);
  const handleBuy = (e) => {
    const { id } = e.target.dataset;
    dispatch(addProduct(id));
    setActivePrdo(true);
  };
  return (
    <>
      {selector.map((product) => (
        <div className="flowersAbout">
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
                  disabled={activeFlov}
                  onClick={handleBuy}
                  data-id={product.id}
                >
                  {activeFlov ? 'ԾԱՂԻԿԸ ԶԱՄԲՅՈՒՂՈՒՄ Է' : 'ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ'}
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
