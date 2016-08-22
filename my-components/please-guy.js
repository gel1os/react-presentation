import React from 'react';

const style = {
  position: 'absolute',
  right: '99px',
  top: '180px'
};

const PleaseGuy = () =>
  <div className="please-guy">
    <img
      style={style}
      src="https://dl.dropboxusercontent.com/u/7884169/react-presentation/Please_Guy_meme.png"
      alt="Please guy"
    />
  </div>;

export default PleaseGuy;