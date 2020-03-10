import React from 'react';

import MasterLayout from '../styling/master.module.scss';
const Introduction = () => {
    return (
        <div className={MasterLayout.introductionBody}>
            <div className={MasterLayout.introductionBodyPanel}>
                <h1 className="text-center p-2">
                    Hello, I'm <span className={MasterLayout.highlightOceanBlue}>Matthew Ishii</span>!
            </h1>
            <h4 className="text-center p-2">
                    Let's <span className={MasterLayout.highlightOceanBlue}>develop</span> something new
            </h4>
            </div>

            <div className={MasterLayout.introNext}>
                <a className={`fa fa-arrow-circle-down fa-4x ${MasterLayout.introButton}`} aria-hidden="true" href="#aboutSection"></a>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </div>
        
    )
}
export default Introduction;