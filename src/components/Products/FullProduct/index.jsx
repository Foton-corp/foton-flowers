import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import {
  goToFloversPage, addProduct, addProductActive,
} from '../../../store/action';
import getFilterProducts from '../../../store/selectors/getFilterProducts';
import getCategoryName from '../../../store/selectors/getCategoryName';

import './style.scss';

const FullProductPage = () => {
  const [minSale, setMinsale] = useState('');
  const [maxSale, setMaxSale] = useState('');
  const [filtCategory, setFiltCategory] = useState();
  const [filterData, setFilterData] = useState({});

  const filterProducts = useSelector(getFilterProducts(filterData));
  const categoryName = useSelector(getCategoryName);
  const dispatch = useDispatch();

  const handleAdd = (id) => {
    dispatch(addProduct(id));
    dispatch(addProductActive(id));
  };

  const handleDelete = (id) => {
  };

  const handleChange = (event) => {
    setFiltCategory(event.target.value);
  };

  const handleFilterMin = (event) => {
    setMinsale(event.target.value);
  };

  const handleFilterMax = (event) => {
    setMaxSale(event.target.value);
  };


  const handleGetFiltr = () => {
    setFilterData({
      min: minSale,
      max: maxSale,
      category: filtCategory,
    });
  };

  return (
    <div className="fullProductPage">
      <div className="FullProductPage_products">
        <ul className="FullProductPage_products_items">
          {
            filterProducts.map((product) => (
              <li key={product.id}>
                <div className="FullProductCard">
                  <Link
                    onClick={() => dispatch(goToFloversPage(product.id))}
                    to={`flavors/${product.id}`}
                    className="FullProductCard_image"
                  >
                    <img src={product.img} alt="flowers" />
                  </Link>
                  <div className="FullProductCard_name">
                    {product.name}
                  </div>
                  <div className="FullProductCard_sale">
                    {product.sale}
                    {' '}
                    $
                  </div>
                  <div className="FullProductCard_btn">
                    <button
                      type="button"
                      disabled={product.active}
                      onClick={() => handleAdd(product.id)}
                    >
                      {product.active ? 'պահպանված է' : 'Պահպանել'}
                    </button>
                  </div>
                  <div className="FullProductCard_removeBtn">
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      style={{ display: product.active ? 'block' : 'none' }}
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
      <div className="fullProductPage_filter">
        <div className="filtrSale">
          <div>գին</div>
          <div>
            <input
              type="text"
              placeholder="մին"
              maxLength="5"
              value={minSale}
              onChange={handleFilterMin}
            />
            <input
              type="text"
              placeholder="մաքս"
              maxLength="5"
              value={maxSale}
              onChange={handleFilterMax}
            />

          </div>
        </div>
        <div className="filtrCategory">
          <RadioGroup aria-label="gender" name="gender1" value={filtCategory} onChange={handleChange}>
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All category"
            />
            {
            categoryName.map((prod) => (
              <FormControlLabel
                value={prod}
                control={<Radio />}
                label={prod}
              />
            ))
          }
          </RadioGroup>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGetFiltr}
          disabled={!filtCategory}
        >
          փնտրել
        </Button>
      </div>
    </div>
  );
};

export default FullProductPage;
