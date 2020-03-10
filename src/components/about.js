import React from 'react';
import MasterLayout from '../styling/master.module.scss';
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'react-bootstrap';

const AboutSection = () =>{
    return(
        <div>
            <div id="aboutSection" className="mb-5 pb-5"></div>
            <Jumbotron>
            <Container>
                <Row>
                    <Col xs={3}>
                        INSERT IMAGE
                    </Col>
                    <Col xs={9}>
                        <div className="text-center">
                            <h2>Who are you?</h2>
                        </div>
                        <p>
                            I'm a product driven <span className={MasterLayout.highlightOceanBlue}>Full-Stack Software Engineer</span> based in the <span className={MasterLayout.highlightOceanBlue}>Bay Area, CA</span>, who is actively seeking new challenges and opportunities to grow both in my personal life and career.
                        </p>
                        <p>
                            I have successfully delivered multiple projects in an <span className={MasterLayout.highlightOceanBlue}>Agile Environment</span>, as a Technical Lead, Front End Developer and Full Stack Developer! I thoroughly enjoy collaborating with a team, from beginning to end, to overcome the challenges of converting business requirements to a deliverable product. 
                        </p>
                        <p>
                            My motivation comes from being able to understand a problem and finding ways to derive a deliverable solution.
                        </p>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        </div>
    )
}
export default AboutSection;