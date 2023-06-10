import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css'

const Checkout = () => {
    const totalQty = useSelector(state=> state.cart.totalQuantity)
    const totalAmount = useSelector(state=> state.cart.totalAmount)


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout'/>
            <section>
                <Container>
                    <Row>
                        {/* <Col lg='8'>
                            <h6 className='mb-4 fw-bold'>Billing Information</h6>
                            <Form className='billing_forms'>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder='Enter Your Name' 
                                    value={name}
                                    required
                                    onChange={(e)=>setName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="email" placeholder='Enter Your Email' 
                                    value={email}
                                    required
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="number" placeholder='Phone Number' 
                                    value={phone}
                                    required
                                    onChange={(e)=>setPhone(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder='Street Address' 
                                    value={address}
                                    required
                                    onChange={(e)=>setAddress(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder='City' 
                                    value={city}
                                    required
                                    onChange={(e)=>setCity(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="number" placeholder='Postal Code' 
                                    value={postalCode}
                                    required
                                    onChange={(e)=>setPostalCode(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form_group">
                                    <input type="text" placeholder='Country' 
                                    value={country}
                                    required
                                    onChange={(e)=>setCountry(e.target.value)}
                                    />
                                </FormGroup>
                              </Form>
                        </Col> */}
                        <Col lg='12'>
                        <div className="checkout_cart">
                            <h6>Total Qty: <span>{totalQty} Items</span></h6>
                            <h6>Subtotal: <span>{totalAmount}</span></h6>
                            <h6><span>Shipping: <br />free shipping</span><span>0</span></h6>
                            <h4>Total Cost: <span>{totalAmount}</span></h4>
                            <Link to="/payment">
                            <button className="buy_btn w-100 bg-white auth_btn">Place an Order</button>
                            </Link>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;