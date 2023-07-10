import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Container, Row, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import { auth } from '../firebase .config';
import '../styles/login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signIn = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try{
            const userCredential = await signInWithEmailAndPassword(
                auth, email, password
            );
            const user = userCredential.user;
            console.log(user);
            setLoading(false)
            toast.success('Successfully Logged in')
            navigate('/')
        }
        catch(error){
            setLoading(false)
            toast.error(error.message)
        }
    }

    return <Helmet title='Login'>
        <section>
            <Container>
                <Row>
                   {
                    loading?( <Col lg='12' className='text-center'>
                        <h5 className='fw-bold'>Loading......</h5></Col>):(
                       <Col lg='6' className='m-auto text-center'>
                       <h3 className='fw-bold mb-4'>Login</h3>
                       <Form className='auth_form' onSubmit={signIn}>
                           <FormGroup className='form_group'>
                               <input type="email" 
                               placeholder='Enter Your Email'
                               value={email} 
                               onChange={e=> setEmail(e.target.value)}/>
                           </FormGroup>
                           <FormGroup className='form_group'>
                               <input type="password" 
                               placeholder='Enter Your Password' 
                               value={password} 
                               onChange={e=> setPassword(e.target.value)}/>
                           </FormGroup>
                           <button type='submit' className="buy_btn auth_btn">Login</button>
                           <p>Don't have an account? <Link style={{textDecoration: 'none', color: 'gray'}} to='/signup'>Create an account</Link></p>
                       </Form>
                   </Col>
                   )}
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Login;