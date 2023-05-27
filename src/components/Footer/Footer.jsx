import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import './footer.css';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col lg='4'>
                <div className="logo">
                        <img src={logo} alt="logo" />
                    <div>
                    <h1>Glamour Girls Fashion</h1>
                    </div>
                    <p className="footer_text">
                    Glamour Girls Fashion is by your side as a symbol of beauty
                    .You can get Permanent Skin Care solution
                    </p>
                </div>
                </Col>
                <Col lg='3'></Col>
                <Col lg='2'></Col>
                <Col lg='3'></Col>
            </Row>
        </Container>
    );
};

export default Footer;