import React, { useEffect, useState } from 'react';
import YandexMapsApi from '../util/api';

const YMaps = (props) => {
  const [yMaps, setYMaps] = useState(null);
  let _mounted = true;
  const getChildContext = () => ({ yMaps });
  useEffect(() => {
    const {
      query, version, enterprise, onApiAvaliable,
    } = props;

    YandexMapsApi.get(query, version, enterprise).then((ymaps) => {
      window.ymaps = ymaps;

      onApiAvaliable(ymaps);
      _mounted && setYMaps(yMaps);
    });

    return () => {
      _mounted = false;
    };
  }, []);
  const { children } = props;
  return typeof children === 'function'
    ? children(yMaps)
    : children
      ? React.Children.only(children)
      : null;
};

YMaps.defaultProps = {
  enterprise: false,
  onApiAvaliable: Function.prototype,
  version: '2.1',
};

export default YMaps;
