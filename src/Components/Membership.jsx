import React, { Component } from 'react';
import '../Css/Table.css';
import {CustomerTbl}  from './CustomerTbl';




class Membership extends Component {
  
  render() {
    let customerList = this.props.customerList;

        console.log('CUSTOMER COMPONENT');
        console.log(customerList);

    return (
      
      <div>
		<div className ="majorContainer">
    
                <CustomerTbl customerList={customerList}/>

                
          </div>		
          </div>
          
    );
  }
}

export default Membership;
