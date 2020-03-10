import React from 'react';

import Layout from '../components/layout';

import Introduction from '../components/introduction';
import About from '../components/about';
import ExperiencePanel from '../components/experience';

const HomePage = () =>{
    return (
        <Layout>
           <Introduction></Introduction>
           <About></About>
           <ExperiencePanel></ExperiencePanel>
        </Layout>
    )
}

export default HomePage;