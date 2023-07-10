import React from 'react';
import { Container, Row } from 'reactstrap';
import './header.css';
import logo from '../../assets/images/eco-logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import userIcon from '../../assets/images/user.png';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase .config';
import { toast } from 'react-toastify';

const nav_links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
    {
        path:'login',
        display:'Login'
    },
]

const Header = () => {
    const headerRef = useRef(null);
    
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const profileActionRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const stickyHeaderFunc= ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    const logout = ()=>{
        signOut(auth).then(()=>{
            toast.success('Logged out');
            navigate('/home')
        }).catch(err=>{
            toast.error(err.message)
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return()=>window.removeEventListener('scroll', stickyHeaderFunc);
    });

    const menuToggle = ()=> menuRef.current.classList.toggle('active_menu')

    const navigateToCart = ()=>{
        navigate('/cart');
    };

    const toggleProfileActions = ()=> profileActionRef.current.classList.toggle
    ('profile_actions')

    return ( 
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                    <h1>Glamour Girls Fashion</h1>
                    </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                       {
                        nav_links.map((item, index)=>(
                            <li className="nav_item" key={index}>
                            <NavLink 
                            to={item.path}
                            className={(navClass)=>navClass.isActive ? 'nav_active': ''}
                            >{item.display}</NavLink>
                        </li>
                        ))
                       }
                        </ul>
                    </div>
                    <div className="nav_icons">
                        <span className="fav_icon">
                            <i className="ri-heart-line"></i>
                            <span id="badge">1</span>
                        </span>
                        <span className="cart_icon" onClick={navigateToCart}>
                            <i className="ri-shopping-bag-line"></i>
                            <span id="badge">{totalQuantity}</span>
                        </span>
                        {/* <div className='profile'>
                            <motion.img whileTap={{scale:1.2}}
                            src={userIcon} 
                            alt="" 
                            onClick={toggleProfileActions}
                            />

                           <div className="profile_actions" 
                           ref={profileActionRef}
                           onClick={toggleProfileActions}>
                            {
                                currentUser ? (<span style={{cursor: 'pointer'}} onClick={logout}>Logout</span>):( 
                                <div className='d-flex align-items-center justify-content-center flex-column'>
                                    <Link style={{textDecoration: 'none', gap: '2px'}} to='/signup'>Signup</Link>
                                    <Link style={{textDecoration: 'none', gap: '2px'}} to='/login'>Login</Link>
                                    <Link style={{textDecoration: 'none', gap: '2px'}} to='/dashboard'>DashBoard</Link>
                                </div>)
                            }
                           </div>
                        </div> */}
                    <div className="mobile_menu">
                        <span onClick={menuToggle}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
    );
};

export default Header;