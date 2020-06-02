import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../../store/selectors/getLanguage';
import { translate } from '../../../locales';

const RenderTranslated = ({selector}) => {
  const language = useSelector(getLanguage);
  return <span>{translate(selector, language)}</span>;
};

export default RenderTranslated;
