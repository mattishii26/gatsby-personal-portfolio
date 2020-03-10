import React from 'react';
import Data from '../data';
import {
    ButtonToolbar,
    Button
} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container-fluid text-center">
            <h3>Contact Me</h3>
            <ButtonToolbar bsPrefix="text-center">

            
            {
                Data.social.map(item =>{
                    return(
                    <Button className="m-1" variant="primary" target="_blank" href={item.link}>{item.linkName}</Button>
                    )
                })
            }
            </ButtonToolbar>
  
        </div>
    )
}

export default Footer;