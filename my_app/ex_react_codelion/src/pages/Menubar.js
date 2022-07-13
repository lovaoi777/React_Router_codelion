import React from 'react';
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
const Menubar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Movies">Moives</Link></li>
            </ul>
            <Outlet / > 
        </div>

       
    );
};

export default Menubar;