import { 
    BOOKS_LIST_FAIL, BOOKS_LIST_REQUEST, BOOKS_LIST_SUCCESS,
    BOOK_FAIL, BOOK_REQUEST, BOOK_SUCCESS,
    BOOK_CREATE_FAIL, BOOK_CREATE_REQUEST, BOOK_CREATE_SUCCESS, 
    BOOK_UPDATE_REQUEST, BOOK_UPDATE_FAIL, BOOK_UPDATE_SUCCESS,
    BOOK_DELETE_FAIL, BOOK_DELETE_REQUEST, BOOK_DELETE_SUCCESS

} from "../Constants/bookConstant";
import axios from "axios"


export const BooksList = () => async (dispatch, getState) => {
    try{
        dispatch({type:BOOKS_LIST_REQUEST})
        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get('http://127.0.0.1:8000/api/books/', config)

        dispatch({
            type: BOOKS_LIST_SUCCESS,
            payload : data
        })

    }catch (error) {
        dispatch({
            type : BOOKS_LIST_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const BookDetail = (id) => async (dispatch,getState) => {
    try{
        dispatch({type: BOOK_REQUEST})
        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`http://127.0.0.1:8000/api/books/${id}/`,config)
        dispatch({
            type: BOOK_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type : BOOK_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const BookDelete = (id) => async (dispatch,getState) => {
    try{
        dispatch({type: BOOK_DELETE_REQUEST})
        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(`http://127.0.0.1:8000/api/books/delete/${id}/`,config)
        
        dispatch({
            type: BOOK_DELETE_SUCCESS,
            
        })
    } catch (error) {
        dispatch({
            type : BOOK_DELETE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const BooksCreate = (title,author,quantity) => async (dispatch, getState) => {
    try{
        dispatch({type:BOOK_CREATE_REQUEST})
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/books/create/',{'title':title,'author':author,'quantity':quantity}, config)

        dispatch({
            type: BOOK_CREATE_SUCCESS,
            payload : data
        })

    }catch (error) {
        dispatch({
            type : BOOK_CREATE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const UpdateBookAction = (book) => async (dispatch,getState) => {
    try{
        dispatch({type: BOOK_UPDATE_REQUEST})
        const {userLogin: { userInfo } } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`http://127.0.0.1:8000/api/books/update/${book.id}/`,book,config)
        dispatch({
            type: BOOK_UPDATE_SUCCESS,
            payload: data
            
        })


    } catch (error) {
        dispatch({
            type : BOOK_UPDATE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

