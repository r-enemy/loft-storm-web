import React from 'react';

const style = {
  fontSize: '5.5rem',
  color: 'red',
};

function Blockquote({ children }) {
  return <blockquote style={style}>{children}</blockquote>;
}

export default Blockquote;
