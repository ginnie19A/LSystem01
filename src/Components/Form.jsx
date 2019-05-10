import React, { Component } from 'react';
import '../Css/Form2.css';
import {TransactionInput1}  from './TransactionInput1';
import { postTransaction } from '../Util/service-helper';
import axios from 'axios';

class Form extends Component {
    constructor(props) {  
        super(props);
        
        this.state = {
            customer: [],
            customer:{
              custid:'',
              totalbal:''
            },
            
          
            transaction: {
              transid: '',
              transdesc: '',
              pointsamt: '',
              transdate: '',
              custid: '',
             
    
            }
        };
      }
      
    handleChangeInfo = e => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
    
        this.setState((prevState) => ({
          transaction: {
            ...prevState.transaction,
            [name]: value
            
    
          }
        }));
      }
      
      handleAddTransaction = e => {
        let { transid, transdesc, pointsamt, transdate, custid, totalbal } = this.state.transaction;
        
        console.log(this.state.transaction)
        postTransaction(this.state.transaction)
        
        .then((response) => {
          console.log("postTransaction");
           //console.log(response);
          console.log(this.state.transaction);
          let editCustomerDetails = () => {
            console.log("editCustomer");
           
           axios.put('http://localhost:8080/LSystem01/rest/Customer/updateBal1', {custid, pointsamt}).then((res) => {
            
            console.log(res);
             
           });
          
          };
          editCustomerDetails();
          alert('You successully input Transaction details');
          window.location.reload();
          
         
      })
      .catch(function(error){
          console.log(error);
      });
      
         e.preventDefault();
      
      
      }
  render() {
    

    return (
      
      <div>
		<div className ="majorContainer">
    
        <TransactionInput1
              handleChangeInfo={this.handleChangeInfo} 
              handleAddTransaction={this.handleAddTransaction} 
            />
                
          </div>		
          </div>
          
    );
  }
}

export {
    Form
}
