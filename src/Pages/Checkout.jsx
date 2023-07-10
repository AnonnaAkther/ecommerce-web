import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css'
import { toast } from 'react-toastify';

const Checkout = () => {
    const totalQty = useSelector(state=> state.cart.totalQuantity)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

 
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(
            'service_1mv0ret', 
            'template_9sr3ajb', 
            form.current, 
            'SXiW8hnHg99IjcZI1')
            .then((result) => {
                toast.success('Message Sent Successfully')
            }, (error) => {
                toast.error('Something Went Wrong')
            });
        };
      

    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                        <div className='billing_form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Your Name*</label>
                            <input placeholder='Name' type="text" name="user_name" required />
                            <label>Street Address*</label>
                            <input placeholder='Street Address' type="text" name="user_address" required />
                            <label>Phone Number*</label>
                            <input placeholder='Phone Number' type="number" name="user_phone" required />
                            <label>Country*</label>
                            <input placeholder='Country' type='text' name="user_country" required />
                            <label>City*</label>
                            <input placeholder='City' type='text' name="user_city" required />
                            <br />
                            <input className='submit-button' type="submit" value="Send" />
                        </form>
                        </div>
                        </Col>
                        <Col lg='4'>
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