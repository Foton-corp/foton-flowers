import React from 'react';
import FlowerItem from './FlowerItem/FlowerItem';

const FlowerList = ({ flavors }) => flavors.map((val) => <FlowerItem key={val.id} flavor={val} />);
export default FlowerList;
