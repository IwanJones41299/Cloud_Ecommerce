import React from 'react';
import Product from '../components/Product';
import products from '../products';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={6} md={4} lg={4} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home