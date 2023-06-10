import React from 'react'
import { toast } from 'react-toastify'
import { Col, Container, Row } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'

function PaymentScreen() {
  const {data: loading} = useGetData('users')

  return (
    <Container>
      <Row>
        <Col lg='12'>
          <table className='table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>PostalCode</th>
                <th>Address</th>
                <th>City</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
                       {
                        loading ? (<h3 className='py-5 text-center fw-bold'>Loading....</h3>) : (
                             <tr>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}</td>
                            </tr>
                            
                        ) 
                       }

                    </tbody>
          </table>
        </Col>
      </Row>
    </Container>
                    
  )
}

export default PaymentScreen