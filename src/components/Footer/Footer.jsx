import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <Container>
            <Row>
                <Col lg='4' md='6' className='mb-4'>
                <div className="logo">
                        <img src={logo} alt="logo" />
                    <div>
                    <h1 className='text-white'>Glamour Girls Fashion</h1>
                    </div>
                </div>
                <p className="footer_text mt-4">
                    Glamour Girls Fashion is by your side as a symbol of beauty
                    .You can get Permanent Skin Care solution
                    </p>
                </Col>
                <Col lg='3' md='3' className='mb-4'>
                    <div className="footer_quick-links">
                        <h4 className="quick_links_title">Top Categories</h4>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="#">Mobile Phones</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="#">Mobile Phones</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="#">Mobile Phones</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="#">Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='2' md='3' className='mb-4'>
                <div className="footer_quick-links">
                        <h4 className="quick_links_title">Useful Links</h4>
                        <ListGroup>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="/shop">Shop</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="/cart">Cart</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="/login">Login</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to="#">Privacy Policy</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='3' md='4'>
                <div className="footer_quick-links">
                        <h4 className="quick_links_title">Contact</h4>
                        <ListGroup className='footer_contact'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                <span><i className="ri-map-pin-line"></i></span>
                                <p>Dhaka, Dhaka Division, Bangladesh</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                            <span><i className="ri-phone-line"></i></span>
                                <p>+008 1798767860</p>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                            <span><i className="ri-mail-line"></i></span>
                                <p>ggfglamourgirlsfashion2019@gmail.com</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='12'>
                    <p className="footer_copyright">Copyright {year}</p>
                </Col>
            </Row>
        </Container>
        </footer>
    );
};

export default Footer;