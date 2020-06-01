import React, { memo, useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import MenuBarResponsive from './MenuBarResponsive/MenuBarResponsive';
import BasketContainer from './Basket/BasketContainer/BasketContainer';
import { setLanguage } from '../../store/reducers/language-reducer';
import RenderTranslated from '../common/RenderTranslated/RenderTranslated';

const RenderSelect = () => {
  const [lang, setLang] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLang(e.target.value);
    dispatch(setLanguage(e.target.value));
  };

  return (
    <FormControl variant="filled" style={{ width: '95px', margin: 'auto 0', }}>
      <InputLabel id="demo-simple-select-label">
        <RenderTranslated selector="home:language" />
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang}
        onChange={handleChange}
      >
        <MenuItem value="arm">
          <RenderTranslated selector="menu:armenian" />
        </MenuItem>
        <MenuItem value="ru">
          <RenderTranslated selector="menu:russian" />
        </MenuItem>
        <MenuItem value="en">
          <RenderTranslated selector="menu:english" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};


// eslint-disable-next-line react/prop-types
const MenuBar = ({ classes, menuOptions, isSmallDevice }) => {
  const menu = menuOptions.map((item) => (
    <Link to={item.link} component={RouterLink} key={item.id}>
      <Typography variant="h6" className={classes.title}>
        <RenderTranslated selector={item.selector} />
      </Typography>
    </Link>
  ));

  return (
    <AppBar position="static" className={classes.appBar}>
      { isSmallDevice ? <MenuBarResponsive menu={menu} />
        : (
          <Toolbar className={classes.toolbar}>
            {menu}
          </Toolbar>
        ) }
      <BasketContainer />
      <RenderSelect />
    </AppBar>
  );
};

export default memo(MenuBar);
