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
  addProduct, goToFloversPage, removeProduct,
} from '../../store/action';
import HeaderCarousel from '../Header';
import './style.scss';
import { getBascetProduct } from '../../store/selectors/getBascetProduct';

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
  const basketQauntity = useSelector(getBascetProduct);
  const dispatch = useDispatch();

  const handleAdd = (id) => {
    dispatch(addProduct(id));
  };
  const handleDelete = (id) => {
    dispatch(removeProduct(id));
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
          ԾԱՂԻԿՆԵՐ
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
                    <button
                      type="button"
                      disabled={product.active}
                      onClick={() => handleAdd(product.id)}
                    >
                      {product.active ? 'պահպանված է' : 'Պահպանել'}
                    </button>
                  </div>
                  <div className="productCard_removeBtn">
                    <button
                      type="button"
                      style={{ display: product.active ? 'block' : 'none' }}
                      onClick={() => handleDelete(product.id)}
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
    </div>
  );
};

export default ProductItems;
