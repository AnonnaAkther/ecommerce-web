import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Col, Form, Container, FormGroup, Row } from 'reactstrap';
import { db, storage } from '../firebase .config';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('')
    const [enterShortDesc, setEnterShortDesc] = useState('')
    const [enterDescription, setEnterDescription] = useState('')
    const [enterCategory, setEnterCategory] = useState('')
    const [enterPrice, setEnterPrice] = useState('')
    const [enterProductImg, setEnterProductImg] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const addProduct = async(e)=>{
        e.preventDefault()
        setLoading(true)


        try {
            const docRef = await collection(db, 'products')
            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

            uploadTask.on(()=>{
                toast.error('images not uploaded!')
            }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
                    await addDoc(docRef, {
                        productName: enterTitle,
                        shortDesc: enterShortDesc,
                        description: enterDescription,
                        category: enterCategory,
                        price: enterPrice,
                        imgUrl: downloadURL
                    })
                })
               
            })
            setLoading(false)
            toast.success('product successfully added!')
            navigate('/dashboard/all-products')
        }
        catch(err){
            setLoading(false)
            toast.error('product not added!')
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                    {
                        loading ? <h4>Loading......</h4> : <>
                        <h4 className='py-5'>Add Product</h4>
                    <Form onSubmit={addProduct}>
                        <FormGroup className='form_group'>
                            <span>Product Title</span>
                            <input type="text" placeholder='Cream' 
                            value={enterTitle} 
                            onChange={e=> setEnterTitle(e.target.value)} 
                            required
                            />
                        </FormGroup>
                        <FormGroup className='form_group'>
                            <span>ShortDesc</span>
                            <input type="text" placeholder='lorem....'  
                            value={enterShortDesc} 
                            onChange={e=> setEnterShortDesc(e.target.value)}
                            required
                            />
                        </FormGroup>
                        <FormGroup className='form_group'>
                            <span>Description</span>
                            <input type="text" placeholder='description....' 
                            value={enterDescription} 
                            onChange={e=> setEnterDescription(e.target.value)}
                            required
                            />
                        </FormGroup>
                        <div className='d-flex align-items-center gap-5 justify-content-between'>
                        <FormGroup className='form_group w-50'>
                            <span>Price</span>
                            <input type="number" placeholder='100'  
                            value={enterPrice} 
                            onChange={e=> setEnterPrice(e.target.value)}
                            required
                            />
                        </FormGroup>
                        <FormGroup className='form_group w-50'>
                            <span>Category</span>
                            <select className='w-100 p-2' 
                            value={enterCategory} 
                            onChange={e=> setEnterCategory(e.target.value)}
                            >   <option>Select Category</option>
                                <option value="cream">Cream</option>
                                <option value="gel">Gel</option>
                                <option value="powder">Powder</option>
                                <option value="capsule">Capsule</option>
                                <option value="oil">Oil</option>
                                <option value="shampoo">Shampoo</option>
                                <option value="juice">Juice</option>
                            </select>
                        </FormGroup>
                        </div>
                        
                        <div>
                        <FormGroup className='form_group'>
                            <span>Product Img</span>
                            <input type="file"
                            required  
                            onChange={e=> setEnterProductImg(e.target.files[0])}
                            />
                        </FormGroup>
                        </div>
                        <button className="buy_btn text-white" type='submit'>Add Product</button>
                    </Form>
                        </>
                    }
                </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddProducts;