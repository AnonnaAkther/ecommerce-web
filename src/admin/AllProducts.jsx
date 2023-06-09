import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase .config';

const AllProducts = () => {
    const {data: productsData, loading} = useGetData('products')

    const deleteProduct = async(id)=>{
        await deleteDoc(doc(db, 'products', id))
        toast.success('Deleted!')
    }

    return <section>
        <Container>
            <Row>
                <Col lg='12'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        loading ? (<h3 className='py-5 text-center fw-bold'>Loading....</h3>) : (
                            
                                productsData.map(item =>(
                            <tr key={item.id}>
                                <td>
                                    <img src={item.imgUrl} alt="" />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={()=>{deleteProduct(item.id)}}>
                                    Delete</button></td>
                            </tr>
                                ))
                            
                        ) 
                       }
                    </tbody>
                </table>
                </Col>
            </Row>
        </Container>
    </section>
};

export default AllProducts;