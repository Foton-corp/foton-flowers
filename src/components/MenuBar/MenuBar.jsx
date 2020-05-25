import React, { memo } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import BasketContainer from './Basket/BasketContainer/BasketContainer';
import MenuBarResponsive from './MenuBarResponsive/MenuBarResponsive';

// eslint-disable-next-line react/prop-types
const MenuBar = ({ classes, menuOptions, isSmallDevice }) => {
  const menu = menuOptions.map((item) => (
    <Link to={item.link} component={RouterLink} key={item.id}>
      <Typography variant="h6" className={classes.title}>
        {item.title}
      </Typography>
    </Link>
  ));

  return (
    <AppBar position="static" className={classes.appBar}>
      { isSmallDevice ? <MenuBarResponsive menu={menu} />
      : <Toolbar className={classes.toolbar}>
        {menu}
      </Toolbar> }
      <BasketContainer />
    </AppBar>
  );
};

export default memo(MenuBar);
