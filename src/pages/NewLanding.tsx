
import React from 'react';

const NewLanding = () => {
  return (
    <iframe 
      src="/new-landing.html" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    />
  );
};

export default NewLanding;
