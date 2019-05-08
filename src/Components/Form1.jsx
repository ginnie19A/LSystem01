import React, { Component } from 'react';

import {CustomerInput}  from './CustomerInput';
import { postCustomer } from '../Util/service-helper';


class Form1 extends Component {
    constructor(props) {  
        super(props);
        
        this.state = {
            customerList: [],
            customer: {
              custid:'',
              fname: '',
              mname: '',
              lname: '',
              gender: '',
              birthdate: '',
              expdate: '',
              totalbal:''
    
            }
        };
      }
    handleChangeInfo = e => {
        const {name, value} = e.target;
        console.log(value);
    
        this.setState((prevState) => ({
          customer: {
            ...prevState.customer,
            [name]: value
             
    
          }
        }));
      }
      handleAddCustomer = e => {
        
        postCustomer(this.state.customer)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        e.preventDefault();
        alert('Successully added Member!');
      }
      
      
  render() {
    

    return (
      
      <div>
		<div className ="majorContainer">
    
        <CustomerInput
              handleChangeInfo={this.handleChangeInfo} 
              handleAddCustomer={this.handleAddCustomer} 
            />
                
          </div>		
          </div>
          
    );
  }
}

export {
    Form1
}
