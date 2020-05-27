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
  const [opened, setOpened] = useState(null);
  const classes = useStyles();
  const handleProfileMenuChange = () => {
    setOpened(!opened);
  };
  return (
    <Basket
      opened={opened}
      classes={classes}
      handleProfileMenuChange={handleProfileMenuChange}
    />
  );
};

export default BasketContainer;
