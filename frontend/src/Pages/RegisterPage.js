import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button ,Col, Row } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import { useSelector, useDispatch } from 'react-redux'
import { registerAction } from '../action/userAction'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const registeruser =  useSelector(state => state.userRegister)
    const { userInfo} = registeruser

    useEffect(() => {
        if (userInfo){
            navigate('/home')
        }
    },[navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setMessage("Password doesn't match.")
        } else {
           dispatch(registerAction(email,name,password))
           navigate('/')

        }
        
    }

  return (
    <FormContainer>

        <h1>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>

                <Form.Label>Name:</Form.Label>
                <Form.Control type='text'required placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}>

                </Form.Control>
            </Form.Group>
        
            <Form.Group controlId='email'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' required placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId='password'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password' required placeholder='Enter Your Password..' value={password} onChange={(e) => setPassword(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password2'>
                <Form.Label>Comfirm Password:</Form.Label>
                <Form.Control type='password' required placeholder='Enter Your Comfirm Password..' value={password2} onChange={(e) => setPassword2(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            <br></br>

            <Button type='submit' variant='primary'>Sign Up</Button>
        </Form>
        <Row className='py-3'>
            <Col>
                Have an Account? <Link to='/'>Sign In</Link>
            </Col>
        </Row>
      
    </FormContainer>
  )
}

export default RegisterPage