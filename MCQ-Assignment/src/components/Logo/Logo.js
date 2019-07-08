import React from 'react';

import favicon from '../../assets/Images/favicon.ico';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={favicon} alt="favicon" />
  </div>
);

export default logo;
