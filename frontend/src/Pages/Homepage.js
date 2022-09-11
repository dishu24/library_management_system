import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button ,Table, Row, Col } from 'react-bootstrap'

import Message from '../components/Message'
import { useSelector, useDispatch } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import { BookDelete, BooksList } from '../action/bookAction'
import Header from '../components/Header'


const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const bookslist = useSelector(state => state.BooksList)
    const {loading, error, books } = bookslist


    const userinfo = useSelector(state => state.userLogin)
    const {userInfo} = userinfo
    

    useEffect(() => {
        if(!userInfo.isAdmin){
            navigate('/')
        }
        else{
            dispatch(BooksList())
        }
        
    },[dispatch, navigate,userInfo.isAdmin])


    const deleteHandler = (id) => {
        dispatch(BookDelete(id))
        navigate('/home')
    }
    const createproducthandler = () =>{
        navigate('/create')
    }

  return (
    <>
    <Header/>
    <div>
    <Col><h2>Books</h2></Col>
        {userInfo.isAdmin ? 
        
      <Row className='align-items-center'>
        
        <Col className='text-right'>
            <Button className='my-3' onClick={createproducthandler}>
                <i className='fas fa-plus'></i> Create Book
            </Button>
        </Col>
      </Row>
      : null }
      
      
      {loading ? <h2>Loading...</h2> : error ? (<Message variant='danger'>{error}</Message>)
        : (
            <div>
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            
                            
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(books) ? books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.quantity}</td>

                                {userInfo.isAdmin ? 
                                <td>
                                    <LinkContainer to={`/update/${book.id}`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>

                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(book.id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td> : null}
                            </tr>
                        )) : null}
                    </tbody>
                </Table>

            </div>
        )}
        
        
                        
        
    </div>
    </>
  )
}

export default HomePage