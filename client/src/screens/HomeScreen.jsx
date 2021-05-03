import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

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