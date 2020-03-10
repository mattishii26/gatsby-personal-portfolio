import React from 'react';

import Header from './header';
import Footer from './footer';
import MasterLayout from '../styling/master.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) =>{
    return(
        <div>
            <Header></Header>
                <div className="container-fluid p-4">
                {props.children}
                </div>
                
            <Footer></Footer>
        </div>
    )
}

export default Layout;