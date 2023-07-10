import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './services.css';
import serviceData from '../assets/data/serviceData';
import { motion } from 'framer-motion';

const Services = () => {
    return <section className="services">
        <h1 className='text-success text-center mb-5'>Place an order on the website, and the product 
       <br /> will be delivered to your home!</h1>
        <Container>
            <Row>
                {
                    serviceData.map((item,index)=>(
                    <Col lg="3" md="4" key={index}>
                    <motion.div whileHover={{scale:1.1}}
                    className="service_item" 
                    style={{background:`${item.bg}`}}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
};

export default Services;