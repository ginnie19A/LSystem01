import React, { Component } from 'react';
import '../Css/Table.css';
import {TransactionTbl}  from './TransactionTbl';


class Transaction extends Component {
  render() {
    let transactionList = this.props.transactionList;

        console.log('TRANSACTION COMPONENT');
        console.log(transactionList);
    return (
      <div>
         <div className ="majorContainer">
         <TransactionTbl transactionList={transactionList}/>
        </div>
          
          </div>
    );
  }
}

export default Transaction;
