
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'


import { useSelector, useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { useParams , useNavigate} from 'react-router'
import { BookDetail, UpdateBookAction } from '../action/bookAction'
import { BOOK_UPDATE_RESET } from '../Constants/bookConstant'



const EditBook = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [quantity, setQuantity] = useState(0)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const bookbyid = useSelector((state) => state.BookById)

    const { bookdetail } = bookbyid
    console.log(bookdetail)

    const bookupdate = useSelector((state) => state.UpdateBook)

    const { success:successupdate } = bookupdate
    

    
    useEffect(() => {
        if(successupdate){
            dispatch({type:BOOK_UPDATE_RESET})
            navigate('/home')
        }
        if(!bookdetail.title || bookdetail.id !== Number(id)){
            dispatch(BookDetail(id))
        }else{
            setTitle(bookdetail.title)
            setAuthor(bookdetail.author)
            setQuantity(bookdetail.quantity)
        }
                    
        
    },[dispatch,bookdetail,id, navigate,successupdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(UpdateBookAction({
            id:id,
            title,
            author,
            quantity
        }))

    }
  return (
    <div>
        <Link to='/home'>Go Back</Link>
        <FormContainer>

            <h1>Edit Book</h1>

            
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='title'>

                    <Form.Label>Title:</Form.Label>
                    <Form.Control type='text' placeholder='Title ...' value={title} onChange={(e) => setTitle(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='author'>

                    <Form.Label>Author:</Form.Label>
                    <Form.Control type='text'  placeholder='Auhtor ..' value={author} onChange={(e) => setAuthor(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId='quantity'>

                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type='number' placeholder='quantity..' value={quantity } onChange={(e) => setQuantity(e.target.value)}>

                    </Form.Control>
                </Form.Group>



                
                
                <br></br>

                <Button type='submit' variant='primary'>Update</Button>
            </Form>
        </FormContainer>
    </div>
  )
}

export default EditBook