import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap';

function PlaceOrderScreen() {
    const dispatch = useDispatch()
    const cartOne = useSelector((state)=> state.cartOne);
    // const userLogin = useSelector((state)=> state.userLogin);
    // const {userInfo} = userLogin;
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <div>
                <div>
                    <h5>Customer</h5>
                    {/* <p>{userInfo.name}</p>
                    <p>{userInfo.email}</p> */}
                </div>
                <div>
                   <h5>Order Info</h5>
                   <p>Shipping: {cartOne.shippingAddress.country}</p> 
                </div>
                <div>
                    <h5>Deliver To</h5>
                    <p>Address: 
                    {cartOne.shippingAddress.city}, {" "},
                    {cartOne.shippingAddress.address}, {" "},
                    {cartOne.shippingAddress.postalCode}, {" "},
                    </p>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PlaceOrderScreen