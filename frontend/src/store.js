import thunk from "redux-thunk";
import  {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { ProductListReducer,ProductCreateReducer,ProductUpdateReducer,ProductDeleteReducer } from "./reducers/productReducer";
import { userRegisterReducer, userLoginReducer } from "./reducer/userReducer";
import { BooksListReducer, BookDeleteReducer, BookCreateReducer, UpdateBookReducer, BookReducer } from "./reducer/bookReducer";


import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';


const reducers = combineReducers({
    
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,

    BooksList:BooksListReducer,
    BookById:BookReducer,
    BookDelete:BookDeleteReducer,
    BookCreate:BookCreateReducer,
    UpdateBook:UpdateBookReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducers)

const userInfostorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo : userInfostorage}, 
}

// //console.log('state',initialState);

const middleware = [thunk]

const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })},initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store

export const persistor = persistStore(store)