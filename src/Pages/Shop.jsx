import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';
import { useState } from 'react';

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=>{
        const filterValue = e.target.value
        if(filterValue==='cream'){
            const filteredProducts = products.filter(item => item.category==='cream')
            setProductsData(filteredProducts);
        }
        if(filterValue==='oil'){
            const filteredProducts = products.filter(item => item.category==='oil')
            setProductsData(filteredProducts);
        }
        if(filterValue==='shampoo'){
            const filteredProducts = products.filter(item => item.category==='shampoo')
            setProductsData(filteredProducts);
        }
        if(filterValue==='gel'){
            const filteredProducts = products.filter(item => item.category==='gel')
            setProductsData(filteredProducts);
        }
        if(filterValue==='soap'){
            const filteredProducts = products.filter(item => item.category==='soap')
            setProductsData(filteredProducts);
        }
        if(filterValue==='powder'){
            const filteredProducts = products.filter(item => item.category==='powder')
            setProductsData(filteredProducts);
        }
        if(filterValue==='capsule'){
            const filteredProducts = products.filter(item => item.category==='capsule')
            setProductsData(filteredProducts);
        }
    }

    const handleSearch = e=>{
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => 
            item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

            setProductsData(searchedProducts);
    }

    return <Helmet title='Shop'>
        <CommonSection title='Products'/>
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='6'>
                        <div className="filter_widget">
                            <select onChange={handleFilter}>
                                <option>Filter By Category</option>
                                <option value="cream">Cream</option>
                                <option value="oil">Oil</option>
                                <option value="shampoo">Shampoo</option>
                                <option value="gel">Gel</option>
                                <option value="soap">Soap</option>
                                <option value="powder">Powder</option>
                                <option value="capsule">Capsule</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='6' className='text-end'>
                    <div className="filter_widget">
                            {/* <select>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="decending">Decending</option>
                            </select> */}
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="search_box">
                            <input type="text" placeholder='Search....' onChange={handleSearch} />
                            <span>
                                <i className="ri-search-line"></i>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Container>
                <Row>
                    {
                        productsData.length === 0 ?
                        (<h1 className='text-center fs-4'>No Products are Found!</h1>) : 
                        (<ProductsList data={productsData}/>)
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Shop;