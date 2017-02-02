import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import { ToasterMiddleware } from '../middlewares.js'


const configureStoreProd = (initialState) => {

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, ToasterMiddleware)
    );
};

export default configureStoreProd