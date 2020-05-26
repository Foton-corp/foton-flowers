import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';
import FlavorListPopup from '../FlavorListPopup/FlavorListPopup';
import { getBascetProduct } from '../../../store/selectors/getBascetProduct';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
const Basket = ({ opened, handleProfileMenuChange }) => {
  const selector = useSelector(getBascetProduct);
  console.log(selector.length);
  return (
    <MenuItem onClick={handleProfileMenuChange} style={{ left: '0' }}>
      <IconButton aria-label="cart">
        <StyledBadge color="secondary" badgeContent={selector.length}>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <FlavorListPopup opened={opened} handleProfileMenuChange={handleProfileMenuChange} />
    </MenuItem>
  );
};

export default Basket;
