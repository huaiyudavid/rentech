import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomFooter = props => {
  return (
    <div className="footer"><a href={Telescope.utils.getSiteUrl() + "/contactUs"}><FormattedMessage id="contactUs"/></a></div>
  )
}

export default CustomFooter;