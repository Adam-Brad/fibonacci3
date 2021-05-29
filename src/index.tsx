import React from 'react';
import { render } from 'react-dom';
import { createStore } from "redux";
import { fibonacciReducer } from "./reducers/fibonacciReducer"
import { Provider } from "react-redux";
import { FibonacciContainer } from "./components/Fibonacci";

const store = createStore(fibonacciReducer);

render(
    <Provider store={store}>
        <FibonacciContainer/>
    </Provider>,
    document.getElementById('root')
);
