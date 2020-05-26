import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import FlavorListPopup from '../FlavorListPopup/FlavorListPopup';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Basket = ({ opened, handleProfileMenuChange }) => (
  <MenuItem onClick={handleProfileMenuOpen} style={{ left: '0' }}>
    <IconButton aria-label="cart">
      <StyledBadge color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    <FlavorListPopup opened={opened} handleProfileMenuChange={handleProfileMenuChange} />
  </MenuItem>
);

export default Basket;
