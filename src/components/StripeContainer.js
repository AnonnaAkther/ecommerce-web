import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51KI3njKZZhb5pP7b7H120DYbDj6PNiaQ5jYYi1MJGsAf8Ur8x4iK6Lne12mzWxHDxEyhy4ubUiTEJVBeSHgmLiXw00bsr4kiOJ"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer