import React from 'react';

const style = {
    padding: '16px',
    backgroundColor: '#eee',
    width: '300px',
    height: '100vh',
    overflow: 'scroll'
};

export default ({ children }) => (<aside style={style}>{children}</aside>);
