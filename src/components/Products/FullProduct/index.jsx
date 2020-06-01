import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core';

import {
  goToFloversPage, addProduct, addProductActive, removeProduct,
} from '../../../store/action';
import getFilterProducts from '../../../store/selectors/getFilterProducts';
import getCategoryName from '../../../store/selectors/getCategoryName';

import './style.scss';
import { getBasketProduct } from '../../../store/selectors/getBasketProduct';

const FullProductPage = (props) => {
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
    dispatch(removeProduct(id));
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

  const useStyles = makeStyles((theme) => ({
    fab: {
      background: 'orange',
      position: 'fixed',
      right: '-75px',
      top: '50%',
      zIndex: '10',
      borderTopRightRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      transition: 'all 1s',
      '&:hover': {
        right: '-13px',
      },
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: '96px',
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  const handlePathBasket = () => {
    props.history.push('/flavors');
  };

  const basketQauntity = useSelector(getBasketProduct);

  const classes = useStyles();
  return (
    <div className="fullProductPage">
      <Fab
        variant="extended"
        className={classes.fab}
        onClick={handlePathBasket}
      >
        <StyledBadge color="secondary" badgeContent={basketQauntity.length}>
          <ShoppingCartTwoToneIcon
            className={classes.extendedIcon}
            color="secondary"
          />
          Basket
        </StyledBadge>
      </Fab>
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
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={product.active}
                      onClick={() => handleAdd(product.id)}
                    >
                      {product.active ? 'պահպանված է' : 'Պահպանել'}
                    </Button>
                  </div>
                  <div className="FullProductCard_removeBtn">
                    <Button
                      variant="contained"
                      color="secondary"
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      style={{ display: product.active ? 'block' : 'none' }}
                    >
                      չեղարկել
                    </Button>
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
