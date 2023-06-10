import { useState } from 'react'
import axios from 'axios'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import '../styles/paymentForm.css'
import { toast } from 'react-toastify'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {color: "#fce883"},
            "::placeholder": {color: "#87bbfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error){
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment",{
                amount: 1000,
                id
            })
            if(response.data.success){
                toast.success('Successfully Paid')
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error);
        }
    }
    else{
        toast.error('Your card number is incomplete! Try again')
        console.log(error.message)
    }
}
  return (
    <>
    
    {!success ?
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS}/>
            </div>
        </fieldset>
        <button style={{marginLeft: '20%', marginBottom: '10px'}} className='buy_btn text-white w-50'>Pay Now</button>
    </form> 
    : 
    <div>
        <h2>You just bought a sweet spatula congrates this is the best decision of you'r life</h2>
    </div>
    }
    </>
  )
}
