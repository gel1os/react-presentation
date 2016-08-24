import React from 'react';
import DaLogo from './da-logo';

const WithLogo = ({children}) =>
    <div className="with-logo">
      <DaLogo />
      {children}
    </div>;

export default WithLogo;