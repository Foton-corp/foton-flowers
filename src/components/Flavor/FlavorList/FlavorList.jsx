import React from 'react';
import FlavorItem from './FlavorItem/FlavorItem';

const FlavorList = ({ flavors }) => {
  console.log('Flavors are: ', flavors);
  return flavors.map((val) => <FlavorItem flavor={val} />);
};

export default FlavorList;
