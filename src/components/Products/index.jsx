/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import getHomeProducts from '../../store/selectors/getHomeProducts';
import {
  addProductToBasket, goToFloversPage, removeProductFromBasket,
} from '../../store/action';
import HeaderCarousel from '../Header';
import './style.scss';
import RenderTranslated from '../common/RenderTranslated/RenderTranslated';
import { getBasketProduct } from '../../store/selectors/getBasketProduct';

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

const ProductItems = (props) => {
  const classes = useStyles();

  const selector = useSelector(getHomeProducts);
  const basketQauntity = useSelector(getBasketProduct);
  const dispatch = useDispatch();

  const handleAdd = (id) => {
    dispatch(addProductToBasket(id));
  };
  const handleDelete = (id) => {
    dispatch(removeProductFromBasket(id));
  };

  const handlePathBasket = () => {
    props.history.push('/flavors');
  };

  const handleFullProduct = () => {
    props.history.push('/fullproductpage');
  };

  return (
    <div>
      <HeaderCarousel />
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
      <div className="products">
        <div className="products_title">
          <RenderTranslated selector="home:flowers" />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleFullProduct}
          >
            ««Մեծ ընտրանի ձեր և ձեր սիրելիների համար»»
          </Button>
        </div>
        <div className="products_box" />
        <ul className="products_items">
          {
            selector.map((product) => (
              <li key={product.id}>
                <div className="productCard">
                  <Link
                    onClick={() => dispatch(goToFloversPage(product.id))}
                    to={`flavors/${product.id}`}
                    className="productCard_image"
                  >
                    <img src={product.img} alt="flowers" />
                  </Link>
                  <div className="productCard_name">
                    {product.name}
                  </div>
                  <div className="productCard_sale">
                    {product.sale}
                    {' '}
                    $
                  </div>
                  <div className="productCard_btn">
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={product.active}
                      onClick={() => handleAdd(product.id)}
                    >
                      <RenderTranslated selector={product.active ? 'home:saved' : 'home:save'} />
                    </Button>
                  </div>
                  <div className="productCard_removeBtn">
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ display: product.active ? 'block' : 'none' }}
                      onClick={() => handleDelete(product.id)}
                    >
                      չեղարկել
                    </Button>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <div className="products_title">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleFullProduct}
          >
            ««Մեծ ընտրանի ձեր և ձեր սիրելիների համար»»
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
