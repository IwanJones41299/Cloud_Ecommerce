import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {

    const product = products.find(p => p._id === match.params.id)

    return (
        <>
            <Link to="/" className="btn bttn-dark my-3">Go Back</Link>
            <Row>
                <Col md={5}>
                 <Image src={product.image} atl={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2 style={{ fontSize: "1.5em" }}>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : £{product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Colours : {product.colour}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup.Item>
                            <Row>
                                <Col>
                                    <h3 style={{textAlign: "center", fontSize: "1em"}}>Basket</h3>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price :
                                </Col>
                                <Col>
                                    <strong>£{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status :
                                </Col>
                                <Col>
                                    {product.stock > 0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.stock === 0}>Add to Cart</Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
