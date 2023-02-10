import React from "react";
import { Provider } from 'react-redux';
import configureStore from './redux-store/store';
import DMNew from "./DMNew";

const store = configureStore();

export const DM = () => {
    return (
        <Provider store={store}>
        <DMNew/>
        </Provider>
    )
}





