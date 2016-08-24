import React, { PropTypes } from 'react';

const styles = {
  corner: {
    maxWidth: '100px',
    position: 'absolute',
    top: '80px',
    left: '25px',
  },
  center: {
    width: '350px'
  }
}

const logoColors = {
  'various': "https://dl.dropboxusercontent.com/u/7884169/react-presentation/tangram%2Blogo-V.png",
  'white': 'https://dl.dropboxusercontent.com/u/7884169/react-presentation/da-tangram%2Blogo-white.png'
}

const DaLogo = ({position, color}) => {

  return (
    <img
      style={styles[position]}
      src={logoColors[color]}
      alt="DA Logo"
    />
  )
}

DaLogo.defaultProps = {
  position: 'corner',
  color: 'various'
};

DaLogo.propTypes = {
  position: PropTypes.oneOf(['corner', 'center']),
  color: PropTypes.oneOf(['various', 'white'])
};

export default DaLogo;