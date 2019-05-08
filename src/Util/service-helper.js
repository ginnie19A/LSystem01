import {getCustomerListURL} from './service-url';
import {getTransactionListURL} from './service-url';
import axios from 'axios';

const getCustomerList = () => {
    return axios.get(getCustomerListURL);
}
const getTransactionList = () => {
    return axios.get(getTransactionListURL);
}
const postCustomer = (customer) => {
    return axios.post(getCustomerListURL, customer )
}
const postTransaction = (transaction) => {
    return axios.post(getTransactionListURL, transaction )
}


export {
    getCustomerList,
    getTransactionList,
    postCustomer,
    postTransaction
}