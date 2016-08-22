import React from 'react';

const style = {
  position: 'relative',
  top: '-100px',
  float: 'right',
  right: '50px'
};

const ReactLogo = () => 
  <img 
    style={style} 
    src="https://dl.dropboxusercontent.com/u/7884169/react-presentation/react.svg"
    alt="React Logo"
  />;

export default ReactLogo;