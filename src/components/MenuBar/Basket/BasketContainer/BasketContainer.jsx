import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Basket from '../Basket';

const useStyles = makeStyles({
  basket: {
    minWidth: '300px',
    minHeight: '500px',
  },
});

const BasketContainer = () => {
  const [opened, setOpened] = useState(false);
  const classes = useStyles();

  const handleProfileMenuOpen = () => {
    setOpened(!opened);
  };
  return (
    <Basket
      opened={opened}
      classes={classes}
      handleProfileMenuOpen={handleProfileMenuOpen}
    />
  );
};

export default BasketContainer;
