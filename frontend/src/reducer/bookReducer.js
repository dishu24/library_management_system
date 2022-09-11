import { 
    BOOKS_LIST_FAIL, BOOKS_LIST_REQUEST, BOOKS_LIST_SUCCESS,
    BOOK_FAIL, BOOK_REQUEST, BOOK_SUCCESS,
    BOOK_CREATE_FAIL, BOOK_CREATE_REQUEST, BOOK_CREATE_SUCCESS, BOOK_CREATE_RESET,
    BOOK_UPDATE_REQUEST, BOOK_UPDATE_FAIL, BOOK_UPDATE_SUCCESS, BOOK_UPDATE_RESET,
    BOOK_DELETE_FAIL, BOOK_DELETE_REQUEST, BOOK_DELETE_SUCCESS

} from "../Constants/bookConstant";

export const BooksListReducer = (state= {books:{} }, action) => {
    switch(action.type){
        case BOOKS_LIST_REQUEST:
            return {loading:true, books:[]}
        case BOOKS_LIST_SUCCESS:
            return {
                    loading:false,
                    books:action.payload
                    
                }
        case BOOKS_LIST_FAIL:
            return {loading:false, error:action.payload}
        
        default:
            return state
    }
}

export const BookReducer = (state= {bookdetail:{} }, action) => {
    switch(action.type){
        case BOOK_REQUEST:
            return {loading:true}
        case BOOK_SUCCESS:
            return {
                    loading:false,
                    bookdetail:action.payload
                    
                }
        case BOOK_FAIL:
            return {loading:false, error:action.payload}
        
        default:
            return state
    }
}


export const BookDeleteReducer = (state= {}, action) => {
    switch(action.type){
        case BOOK_DELETE_REQUEST:
            return {loading:true}
        case BOOK_DELETE_SUCCESS:
            return {loading:false, success:true}
        case BOOK_DELETE_FAIL:
            return {loading:false, error:action.payload}
        
        default:
            return state
    }
}

export const BookCreateReducer = (state= {book:{}}, action) => {
    switch(action.type){
        case BOOK_CREATE_REQUEST:
            return {loading:true}
        case BOOK_CREATE_SUCCESS:
            return {loading:false, success:true, book:action.payload}
        case BOOK_CREATE_FAIL:
            return {loading:false, error:action.payload}
        case BOOK_CREATE_RESET:
            return {}
        
        default:
            return state
    }
}

export const UpdateBookReducer = (state= {book:{}}, action) => {
    switch(action.type){
        case BOOK_UPDATE_REQUEST:
            return {loading:true}
        case BOOK_UPDATE_SUCCESS:
            return {loading:false, success:true}
        case BOOK_UPDATE_FAIL:
            return {loading:false, error:action.payload}
        case BOOK_UPDATE_RESET:
            return { book:{}}
        
        default:
            return state
    }
}