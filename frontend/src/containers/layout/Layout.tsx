import React from 'react';
import Toolbar from '../../components/toolbar/Toolbar';

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({children}) => {

    return (
        <div>
            <Toolbar  />
            {children}
        </div>
    );
}

export default Layout;