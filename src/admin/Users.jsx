import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase .config';

const Users = () => {
    const {data: usersData, loading} = useGetData('users')

    const deleteUsers = async(id)=>{
        await deleteDoc(doc(db, 'users', id))
        toast.success('Users Deleted!')
    }
    return (
        <section>
        <Container>
            <Row>
                <Col lg='12'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        loading ? (<h3 className='py-5 text-center fw-bold'>Loading....</h3>) : (
                            
                                usersData.map(user =>(
                            <tr key={user.uid}>
                                <td>
                                    <img src={user.imgURL} alt="" />
                                </td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={()=>{deleteUsers(user.uid)}}>
                                    Delete</button>
                                </td>
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
    );
};

export default Users;