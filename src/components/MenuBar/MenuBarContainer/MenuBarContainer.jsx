import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from 'nanoid';
import React from 'react';
import MenuBar from '../MenuBar';
import {useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  toolbar: {
    display: 'flex',
    width: props => props.minWidth1200 ? '70%' : '98%',
    justifyContent: 'space-around',
    minWidth: '700px',
  },
  title: {
    color: '#fff',
  },
});

const menuOptions = [
  { title: 'Գլխավոր', link: '/', id: nanoid() },
  { title: 'Մեր մասին', link: '/about-us', id: nanoid() },
  { title: 'Կոնտակտներ', link: '/contact', id: nanoid() },
  { title: 'Տաղավարներ', link: '/pavilions', id: nanoid() },
  { title: 'Զանգահարեք մեզ` 093579264', link: '/', id: nanoid() },
];

const MenuBarContainer = () => {
  const minWidth1200 = useMediaQuery('(min-width:1200px)');
  const minWidth900 = useMediaQuery('(max-width:900px)');
  const classes = useStyles({ minWidth900 });
  return <MenuBar menuOptions={menuOptions} classes={classes} isSmallDevice={minWidth900} />;
};

export default MenuBarContainer;
