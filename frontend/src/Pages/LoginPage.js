import FormContainer from '../components/FormContainer'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button ,Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../action/userAction'
import Message from '../components/Message'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.userLogin)
    const {error, userInfo} = user

    useEffect(() => {
        if (userInfo){
            navigate('/home')
        }
    },[userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loginAction(email, password))
    }

  return (
    <FormContainer>
        <h1>Library Management System</h1>
        <br></br>
        <br></br>
      <h3>Sign In</h3>
      {error && <Message variant='danger'>{error}</Message>}
      
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' placeholder='Enter your password..' value={password} onChange={(e) => setPassword(e.target.value)}>
                
            </Form.Control>
        </Form.Group>
        <br></br>

        <Button type='submit' variant='primary'>Sign In</Button>
      </Form>
      <Row className='py-3'>
        <Col>
            New User? <Link to='/register'>Sign up</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginPage