import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

import {  useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { BooksCreate } from '../action/bookAction'


const CreateBook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [quantity, setQuantity] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(BooksCreate(
            title,
            author,
            quantity
        ))
        navigate('/home')

    }
  return (
    <div>
        <Link to='/home'>Go Back</Link>
        <FormContainer>

            <h1>Create Book</h1>
            
            
            <Form onSubmit={submitHandler} method='POST'>
                <Form.Group controlId='name'>

                    <Form.Label>Title:</Form.Label>
                    <Form.Control type='text' placeholder='Title ...' value={title} onChange={(e) => setTitle(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='author'>

                    <Form.Label>Author:</Form.Label>
                    <Form.Control type='text' placeholder='Author ...' value={author} onChange={(e) => setAuthor(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='quantity'>

                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type='number'  placeholder='Quantity ...' value={quantity} onChange={(e) => setQuantity(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                
                <br></br>

                <Button type='submit' variant='primary'>Create</Button>
            </Form>
        </FormContainer>
    </div>
  )
}

export default CreateBook