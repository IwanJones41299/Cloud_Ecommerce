import React from 'react';
import { isMobile, isTablet } from 'react-device-detect'
import Product from '../components/Product';
import products from '../products';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    if(isMobile || isTablet){
      return(
        <h1>Mobile Home</h1>
      )
    }else{
      return(
        <Container>
          <h1>Latest Products</h1>
          <Row>
            {products.map(product => (
              <Col sm={6} md={4} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )
    }
}

export default Home