import React from 'react';
import { Jumbotron, ListGroup, Col } from 'react-bootstrap';

const ExperiencePanel = () => {
    return (
        <Jumbotron>
            <div className="text-center">
                <h2>What are some key highlights?</h2>
            </div>
            <Col xs={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </Col>

        </Jumbotron>
    )
}

export default ExperiencePanel;