import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from 'nanoid';
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import MenuBar from '../MenuBar';

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
    alignItems: (props) => (props.maxWidth900 ? 'flex-end' : 'center'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  toolbar: {
    display: 'flex',
    width: (props) => (props.maxWidth1200 ? '70%' : '98%'),
    justifyContent: 'space-around',
    minWidth: '700px',
  },
  title: {
    color: 'greenyellow',
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
  const maxWidth1200 = useMediaQuery('(min-width:1200px)');
  const maxWidth900 = useMediaQuery('(min-width:900px)');
  const classes = useStyles({ maxWidth1200, maxWidth900 });
  return <MenuBar menuOptions={menuOptions} classes={classes} isSmallDevice={!maxWidth900} />;
};

export default MenuBarContainer;
