import React, { PropTypes } from 'react';

const styles = {
  corner: {
    maxWidth: '100px',
    position: 'absolute',
    top: '80px',
    left: '25px',
  }
}

const DaLogo = ({type}) =>
  <img
    style={styles[type]}
    src="https://dl.dropboxusercontent.com/u/7884169/react-presentation/tangram%2Blogo-V.png"
    alt="DA Logo"
  />;

DaLogo.defaultProps = {
  type: 'corner'
};

DaLogo.propTypes = {
  type: PropTypes.oneOf(['corner'])
};

export default DaLogo;