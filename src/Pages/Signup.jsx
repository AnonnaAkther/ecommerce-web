import React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import { auth, db, storage } from '../firebase .config';
import '../styles/login.css';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const signup = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try{
            const userCredential = await createUserWithEmailAndPassword(
                auth, email, password
            );
            const user = userCredential.user;
            const storageRef = ref(storage,`images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on((error)=>{
                toast.error(error.message)
            },()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURl)=>{
                    // update user profile
                    await updateProfile(user,{
                        displayName: username,
                        photoURL: downloadURl
                    });

                    // store user data in firestore database
                    await setDoc(doc(db, 'users', user.uid),{
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURl
                    })
                });
            });
            setLoading(false);
            toast.success('Account created')
            navigate('/login')

        }catch(error){
            setLoading(false);
            toast.error('something went wrong')
        }
    }

    return <Helmet title='Signup'>
        <section>
            <Container>
                <Row>
                  {
                    loading?( <Col lg='12' className='text-center'>
                        <h5 className='fw-bold'>Loading....</h5></Col> ):(
                          <Col lg='6' className='m-auto text-center'>
                          <h3 className='fw-bold mb-4'>Signup</h3>
                          <Form className='auth_form'onSubmit={signup}>
                              <FormGroup className='form_group'>
                                  <input type="text" 
                                  placeholder='Username'
                                  value={username} 
                                  onChange={(e)=> setUsername(e.target.value)}/>
                              </FormGroup>
                              <FormGroup className='form_group'>
                                  <input type="email" 
                                  placeholder='Enter Your Email'
                                  value={email} 
                                  onChange={(e)=> setEmail(e.target.value)}/>
                              </FormGroup>
                              <FormGroup className='form_group'>
                                  <input type="password" 
                                  placeholder='Enter Your Password' 
                                  value={password} 
                                  onChange={(e)=> setPassword(e.target.value)}/>
                              </FormGroup>
                              <FormGroup className='form_group'>
                                  <input type="file" 
                                  onChange={(e)=> setFile(e.target.files[0])}/>
                              </FormGroup>
                              <button type='submit' className="buy_btn auth_btn">Create an Account</button>
                              <p style={{marginTop: '10px'}}>Already have an account? <Link style={{textDecoration: 'none', color: 'gray'}} to='/login'>Login</Link></p>
                          </Form>
                      </Col>
                  )}
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Signup;