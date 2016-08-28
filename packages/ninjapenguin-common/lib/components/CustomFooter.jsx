import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomFooter = props => {
  return (
    <div className="footer col-md-6 col-md-offset-6"><a href="contactUs" target="_blank"><FormattedMessage id="contactUs"/></a></div>
  )
}

export default CustomFooter;