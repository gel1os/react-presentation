import React from 'react';

const imageStyle = {
  background: 'url("https://dl.dropboxusercontent.com/u/7884169/react-presentation/Kirill%20Trukhanovich.jpg")',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundPosition: '-55px 0',
  backgroundSize: '300px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '30px'
};

const Author = () =>
  <div style={{ position: 'absolute', bottom: '60px' }}>
    <div style={imageStyle}></div>
    <div style={{display: 'inline-block'}}>
      <div>
        <a target="_github" href="http://github.com/gel1os" style={{color: 'inherit', background: 'none'}}>
          Kirill Trukhanovich
        </a>
      </div>
      <div>
        JavaScript Developer
      </div>
      <div>DataArt</div>
      <div>25.08.2016</div>
    </div>
  </div>;

export default Author;