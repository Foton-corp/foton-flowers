import React from 'react';
import Typography from '@material-ui/core/Typography';
import GoogleMapUI from './YandexMapUI/YandexMapUI';

const Pavilions = () => (
  <>
    <Typography component="h2" variant="h2" align="center" style={{ margin: 50 }}>
      Տաղավարներ
    </Typography>
    <GoogleMapUI />
  </>
);

export default Pavilions;
