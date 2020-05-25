import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from 'nanoid';
import React from 'react';
import MenuBar from '../MenuBar';

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  toolbar: {
    display: 'flex',
    width: '70%',
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
  const classes = useStyles();
  return <MenuBar menuOptions={menuOptions} classes={classes} />;
};

export default MenuBarContainer;
