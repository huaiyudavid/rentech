import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomFooter = props => {
  return (
    <div className="footer"><a href={Telescope.utils.getSiteUrl()} target="_blank"><FormattedMessage id="contactUs"/></a></div>
  )
}

Footer.displayName = "Footer";

module.exports = Footer;

export default CustomFooter;