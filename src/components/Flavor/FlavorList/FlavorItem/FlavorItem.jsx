import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToFloversPage } from '../../../../store/action';

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 250,
    marginBottom: '30px',
  },
  media: {
    height: 140,
  },
  LinkDecor: {
    textDecoration: 'none',
  },
});


const FlavorItem = ({ flavor }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>

        <Link
          onClick={() => dispatch(goToFloversPage(flavor.id))}
          to={`/flavors/${flavor.id}`}
          className={classes.LinkDecor}
        >
          <CardMedia
            className={classes.media}
            image={flavor.img}
            title={flavor.name}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {flavor.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sale is:
            {' '}
            {flavor.sale}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
};

export default FlavorItem;
