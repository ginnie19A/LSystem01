import React, { Component, Fragment } from 'react';
import axios from 'axios';
import '../Css/Input.css';
import PropTypes from 'prop-types';
class TransactionInput extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      customer: [],
      
      editCustomerData: {
        custid: '',
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        birthdate: '',
        expdate: '',
        totalbal: ''
      },
  };
}

  componentDidMount(){
    axios.get('http://localhost:8080/LSystem01/rest/Customer').then(res =>{
   console.log(res);
    this.setState({customer:res.data});
}) }

  render() {
   
    let  customer = this.state.customer.map((customer) => {
      return (
        <option key={customer.custid} value={customer.custid} >{customer.custid}</option>
      )
      });
    return (
      
      
      <div>
      <div className="ccontainer">
           <div className="menu col-7">
  
  <div className="box1 col-6">

              <form> 

                  <h2>INPUT DETAILS</h2>
                  <br />
                  <br />
                  <br />
                  <div className="form-group">
                  <label for="custid">Customer ID </label>
                 <div className="col-75">
                 <select name="custid"  onChange={this.props.handleChangeInfo} className="form-control">
                     {customer} 
                     
                   </select>
                 </div>
               </div>
               
                  <div className="form-group">
                  
                  <label for="transdesc">Select Transaction</label>
                   
                   <select name="transdesc"  onChange={this.props.handleChangeInfo} className="form-control">
                   <option value="Select Transaction" >Select Transaction</option>
                     <option value="Membership Activation" >Membership Activation</option>
                     <option value="Add Points" >Add Points</option>
                    
                     
                   </select>


                  </div>
                
                <div className="form-group">
                 
                  <div className="col-75">
                  <input type="text" name="pointsamt"  placeholder="Points Amount" onChange={this.props.handleChangeInfo} />


                  </div>
                </div>
                <div className="form-group">
                <label for="transdate">Transaction Date </label>
                  <div className="col-75">
                  <input type="date" name="transdate" placeholder="Transaction Date" onChange={this.props.handleChangeInfo} />


                  </div>
                </div>
                
               <div className="wrapper">
             <button type="button" className="button" onClick={this.props.handleAddTransaction}>Add Transaction</button>
             </div>
              </form>
              </div>
              </div>
            
</div>
</div>
     


          
    );
  }
}
TransactionInput.propTypes = {
  handleChangeInfo: PropTypes.func,
  handleAddTransaction: PropTypes.func
}

export {
    TransactionInput
} 
