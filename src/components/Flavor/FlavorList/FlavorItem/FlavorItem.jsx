import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 250,
    marginBottom: '30px',
  },
  media: {
    height: 140,
  },
});


const FlavorItem = ({ flavor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.media}
          image={flavor.img}
          title={flavor.name}
        />
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
