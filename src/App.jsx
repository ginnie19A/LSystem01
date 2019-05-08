import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Membership from './Components/Membership';
import Transaction from './Components/Transaction';
import { Form1 } from './Components/Form1';
import { Form2 } from './Components/Form2';
import {Form} from './Components/Form';
import { BrowserRouter, Route} from "react-router-dom";
import {
  getTransactionList
} from './Util/service-helper';

import {
  getCustomerList
} from './Util/service-helper';

const NewRoute = () => {
  return (
    <div>
        <div className="App">
        <Header />
        <Navbar />
        <Body />
        </div>
      </div>
  );
}
const dashboard = () => {
  return (
    <div>
        
        <Dashboard />
      </div>
  );
}

const transaction = () => {
  return (
    <div>
  
        <Transaction />
        
      </div>
  );
}
const form1 = () => {
  return (
    <div>
  
        <Form1 />
        
      </div>
  );
}
const form = () => {
  return (
    <div>
  
        <Form />
        
      </div>
  );
}



class App extends Component {
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
          totalbal: ''

        }
    };
    this.state = {
      transactionList: [],
      transaction: {
        transid: '',
        transdesc: '',
        pointsamt: '',
        transdate: '',
        custid: ''

      }
  };
  }

    
 
  
  componentDidMount() {

    // Call Service on component mount
    this.getCustomer();
    this.getTransaction();
    
  }

  // SERVICE METHODS
  getCustomer = () => {

    console.trace('DEMO NA');

    getCustomerList().then(res => {
      this.setState({customerList : res.data});
    }) 
  }

    // SERVICE METHODS
    getTransaction() {

      getTransactionList().then(res => {
        this.setState({transactionList : res.data});
      }) 
    }
  render(){
    return (
      <BrowserRouter>
        <div> 
          <Route path="/" component={NewRoute}/>
          <Route path="/dashboard" component={dashboard}/>
          <Route path="/membership" render={()=><Membership customerList={this.state.customerList}/>}/>
          <Route path="/transaction" render={()=><Transaction transactionList={this.state.transactionList}/>}/>
          <Route path="/form1" render={()=><Form1 customer={this.state.customer}/>}/>
          <Route path="/form2" render={()=><Form2 transaction={this.state.transaction} getCustomer={this.getCustomer}/>}/>
          <Route path="/form" render={()=><Form transaction={this.state.transaction}/>}/>
          
          
         
        </div>      
      </BrowserRouter>
      
     );
   }
  }
   export default App;
  
  
