import React from 'react';
import FlavorItem from './FlavorItem/FlavorItem';

const FlavorList = ({ flavors }) => flavors.map((val) => <FlavorItem key={val.id} flavor={val} />);
export default FlavorList;
