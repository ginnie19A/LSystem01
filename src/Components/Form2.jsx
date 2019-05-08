import React, { Component } from 'react';
import '../Css/Form2.css';
import {TransactionInput}  from './TransactionInput';
import { postTransaction } from '../Util/service-helper';
import axios from 'axios';

class Form2 extends Component {
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
           
           axios.put('http://localhost:8080/LSystem01/rest/Customer/updateBal', {custid,  totalbal}).then((res) => {
            
            console.log(res);
            axios.get('http://localhost:8080/LSystem01/rest/Customer/').then((response) => {
              this.setState({
                customer: response.data
              })
            });
          
             
           });
          
          };
          editCustomerDetails();
          alert('Successully added Transaction!');
          
         
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
    
        <TransactionInput
              handleChangeInfo={this.handleChangeInfo} 
              handleAddTransaction={this.handleAddTransaction} 
            />
                
          </div>		
          </div>
          
    );
  }
}

export {
    Form2
}
