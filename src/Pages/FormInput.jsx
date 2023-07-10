import React, { useState } from 'react'
import Form from './Form'
import '../styles/formInput.css'

function FormInput() {
    const [values, setValues] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        city: "",
        country: "",
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: 'text',
            placeholder: "Name",
            lable: "Your Name",
            required: true
        },
        {
            id: 2,
            name: "address",
            type: 'text',
            placeholder: "Address",
            lable: "Your Address",
            required: true
        },
        {
            id: 3,
            name: "phoneNumber",
            type: 'number',
            placeholder: "Phone Number",
            lable: "Your Phone Number",
            required: true
        },
        {
            id: 4,
            name: "city",
            type: 'text',
            placeholder: "City",
            lable: "Your City",
            required: true
        },
        {
            id: 5,
            name: "country",
            type: 'text',
            placeholder: "Country",
            lable: "Your Country",
            required: true
        },
    ]
      

    const handleSubmit = (e)=>{
        e.preventDefault();
    };

    const onChange = (e)=>{
        setValues({...values, [e.target.name]: e.target.value});
    };

    console.log(values);

  return (
    <div className='form-input'>
        <form>
            <h1>Shipping Address</h1>
            {inputs.map((input)=>(
                <Form 
                key={input.id} 
                {...input} 
                value={values[input.name]}
                onChange={onChange}/>
            ))}
            <br />
            <button onClick={this.form.elements['text-input'].value=''}>Submit</button>
        </form>
       
    </div>
  )
}

export default FormInput