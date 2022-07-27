import React from 'react';
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
    const Navigate = useNavigate();
    const home =() => {
        Navigate("/");
}
    return (
        <div>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Movies">Moives</Link></li>
            </ul>
            <Outlet /> 
            <button type="button" onClick={home}>
                메인홈페이지로 가기
            </button>
        </div>
    );
};

export default Menubar;