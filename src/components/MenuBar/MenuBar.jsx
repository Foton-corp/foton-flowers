import React, { memo } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import BasketContainer from "./Basket/BasketContainer/BasketContainer";

// eslint-disable-next-line react/prop-types
const MenuBar = ({ classes, menuOptions }) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      {
          menuOptions.map((item) => (
            <Link to={item.link} component={RouterLink} key={item.id}>
              <Typography variant="h6" className={classes.title}>
                {item.title}
              </Typography>
            </Link>
          ))
        }
    </Toolbar>
    <BasketContainer />
  </AppBar>
);

export default memo(MenuBar);
