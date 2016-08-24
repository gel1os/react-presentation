import React from 'react';

const imageStyle = {
  background: 'url("https://dl.dropboxusercontent.com/u/7884169/react-presentation/Lin%20Clark.jpg")',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundPosition: '-35px 0',
  backgroundSize: '270px',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '30px'
};

const LinClark = () =>
  <div style={{ position: 'absolute', bottom: '60px' }}>
    <div style={imageStyle}></div>
    <div style={{display: 'inline-block'}}>
      <div>
        <a target="_github" href="http://github.com/gel1os" style={{color: 'inherit', background: 'none'}}>
          Lin Clark
        </a>
      </div>
      <div>
        Senior Developer Tools Engineer
      </div>
      <div>Mozilla</div>
    </div>
  </div>;

export default LinClark;