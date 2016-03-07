import React from 'react';
import { render } from 'react-dom';

import AtvImg from 'react-atv-img';

const rootDivStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(238, 239, 244, 1)',
};

render(
  <div style={rootDivStyle}>
    <AtvImg
      layers={[
        'http://i.imgur.com/RJYDwFk.png'
      ]}
      style={{ width: 150, height: 150 }}
    />
  </div>,
  document.getElementById('root')
);
