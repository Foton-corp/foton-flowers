import React from 'react';
import { Menu, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
  paper: {
    border: '1px solid #d3d4d5',
    padding: '15px',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > .MuiPaper-root': {
      background: 'aqua',
      left: '73%!important',
      position: 'static!important',
    },
    '& ul': {
      padding: '15px',
    },
  },
}));

const StyledMenu = (props) => {
  const classes = useStyles();
  return (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      className={classes.paper}
      {...props}
    />
  );
};


export default StyledMenu;
