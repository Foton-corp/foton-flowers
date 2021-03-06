import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import StyledMenu from './StyledMenu/StyledMenu';
import FlowerList from '../../Flavor/FlowerList/FlowerList';
import { getBasketProduct } from '../../../store/selectors/getBasketProduct';

const useStyles = makeStyles(() => ({
  flavors: {
    display: 'grid',
    gridTemplateRows: '1fr 4fr',
    maxWidth: '300px',
    width: '300px',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 10px',
  },
  close: {
    justifySelf: 'end',
  },
  flavorList: {
    padding: '0 16px',
  },
  flavorButton: {
    width: '40px',
    minWidth: '0px',
    padding: '6px 0',
  },
  flavorItems: {
    width: '100%',
    margin: 'auto',
  },
}));

const FlowerListPopup = ({ opened, handleProfileMenuChange }) => {
  const classes = useStyles();
  const flavors = useSelector(getBasketProduct);
  return (
    <StyledMenu
      type="flavors"
      id="customized-menu"
      // anchorEl={opened}
      keepMounted
      open={Boolean(opened)}
      onClose={handleProfileMenuChange}
    >
      {flavors.length > 0
        ? (
          <div className={classes.flavorItems}>
            <FlowerList flavors={flavors} />
            <Link to="/flavors" onClick={handleProfileMenuChange}>See all</Link>
          </div>
        )
        : (
          <section className={classes.flavors}>
            <div className={classes.header}>
              <Typography variant="h6" component="h6" align="right">
                Flavors
              </Typography>
              <Close cursor="pointer" className={classes.close} onClick={handleProfileMenuChange} />
            </div>
            <div className={classes.flavorList}>
              <Typography variant="subtitle2">
                No any flavors yet!
              </Typography>
            </div>
          </section>
        )}
    </StyledMenu>
  );
};

export default FlowerListPopup;
