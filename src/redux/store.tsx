import reducer from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import  thunkMiddleware from 'redux-thunk';

export const store = createStore(
    reducer, 
    {}, 
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )

)
