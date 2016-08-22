import React from 'react';

const style = {
  float: 'right',
  position: 'relative',
  top: '-200px',
  maxWidth: '200px',
  right: '50px'
};

const LegoFace = () =>
  <img
    style={style}
    src="https://dl.dropboxusercontent.com/u/7884169/react-presentation/lego-happy-face.png" 
    alt="Lego happy face"
  />;

export default LegoFace;
