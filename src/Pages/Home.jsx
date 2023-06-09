import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from 'reactstrap';
import beautyGirlImg from '../assets/images/beauty-girls.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import { useState } from 'react';
import { useEffect } from 'react';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

const Home = () => {
    const [trendingProducts,setTrendingProducts] = useState([]);
    const [bestSalesProducts,setBestSalesProducts] = useState([]);
    const [mobileProducts,setMobileProducts] = useState([]);
    const [wireLessProducts,setWireLessProducts] = useState([]);
    const [popularProducts,setPopularProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(()=>{
        const filterdTrendingProducts = products.filter
        (item=> item.category === 'cream')
        setTrendingProducts(filterdTrendingProducts);
        const filterdBestSalesProducts = products.filter
        (item=> item.category === 'oil')
        const filterdMobileProducts = products.filter
        (item=> item.category === 'shampoo')
        const filterdWireLessProducts = products.filter
        (item=> item.category === 'soap')
        const filterdPopularProducts = products.filter
        (item=> item.category === 'capsule')
        setTrendingProducts(filterdTrendingProducts);
        setBestSalesProducts(filterdBestSalesProducts);
        setWireLessProducts(filterdWireLessProducts);
        setMobileProducts(filterdMobileProducts);
        setPopularProducts(filterdPopularProducts);
    }, []);

    return <Helmet title={"Home"}>
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">Trending product in {year}</p>
                            <h2>Glamour Girls Fashion is by your side as a symbol of beauty.You can get Permanent Skin Care solution</h2>
                            <motion.button 
                                className='buy_btn'>
                                <Link to='/shop'>SHOP NOW</Link>
                            </motion.button>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="hero_img">
                            <img src={beautyGirlImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services/>
        <section className="trending_products">
            <Container>
                <Row>
                    <Col lg="12" className='text-center'>
                        <h2 className="section_title">Trending Products</h2>
                    </Col>
                     <ProductsList data={trendingProducts}/>
                    
                </Row>
            </Container>
        </section>
        <section className="best_sales">
            <Container>
            <Row>
                    <Col lg="12" className='text-center'>
                        <h2 className="section_title">Best Sales</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts}/>
                   
                </Row>
            </Container>
        </section>
        <section className="timer_count">
            <Container>
            <Row>
                    <Col lg="6" md="12" className='count_down-col'>
                        <div className="clock_top-content">
                            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                            <h3 className='text-white fs-5 mb-3'>Quality Beauty Products</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn">
                            <Link to='/shop'>Visit Store</Link>
                        </motion.button>
                    </Col>
                    <Col lg="6" md="12" className='text-end counter_img'>
                       <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="new_arrivals">
            <Container>
                <Row>
                    <Col lg="12" className='text-center mb-5'>
                        <h2 className="section_title">New Arrivals</h2>
                    </Col>
                      
                        <ProductsList data={mobileProducts}/>
                        <ProductsList data={wireLessProducts}/>
                </Row>
            </Container>
        </section>
        <section className='popular_category'>
        <Container>
                <Row>
                    <Col lg="12" className='text-center mb-5'>
                        <h2 className="section_title">Popular in Category</h2>
                    </Col>
                    <ProductsList data={popularProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;