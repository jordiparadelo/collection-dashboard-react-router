import React from 'react';
// Styles
import './Layout.scss';

const Layout = ({children}) => {
    return (
        <main className='Layout'>
            {children}
        </main>
    );
};

export default Layout;