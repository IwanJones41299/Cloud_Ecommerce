import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Col, Container, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productActions'

const Home = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <Container>
      <h1>Latest Products</h1>
      {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : ( 
        <Row>
        {products.map(product => (
          <Col key={product._id} sm={6} md={4} lg={4} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      )}
      
    </Container>
  )
}

export default Home