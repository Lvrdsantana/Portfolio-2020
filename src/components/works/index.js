import React from 'react';
import '../works/style.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import HamburgerMenu from '../hamburger_menu';
import Data from '../../data/employer_data.json';
import ReactCardFlip from 'react-card-flip';

function Works() {
  return (
    <Container className="works_main" fluid={true}>
    <Row>
       <HamburgerMenu />
    </Row>
    {/* <Row>
       <div>
         hi
       </div>
    </Row> */}
    <Row className="works_content">

    <Col xl={12} className="works_content_col">
    {
       Data.employer.map(function(item, i){
         return(
           <Row>
            <Card style={{ width: '18rem' }}  key={i+1}>
              <Card.Img variant="top" src={item.logo} />
              <Card.Body>
              <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                {item.docs}
                {item.logo}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
           </Row>
           
        
      
         )
       })
     }

    </Col>
    
    
        
    </Row>
  </Container>
  );
}

export default Works;
