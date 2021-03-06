import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';
import FlowerListPopup from '../FlowerListPopup/FlowerListPopup';
import { getBasketProduct } from '../../../store/selectors/getBasketProduct';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
const Basket = ({ opened, handleProfileMenuChange }) => {
  const selector = useSelector(getBasketProduct);
  const productQuantity = selector.length;
  return (
    <MenuItem onClick={handleProfileMenuChange} style={{ left: '0' }}>
      <IconButton aria-label="cart">
        <StyledBadge color="secondary" badgeContent={productQuantity}>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <FlowerListPopup opened={opened} handleProfileMenuChange={handleProfileMenuChange} />
    </MenuItem>
  );
};

export default Basket;
