import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NavLink } from "react-router-dom";
class TransactionTbl extends Component { 
    constructor(props) {  
        super(props);
        this.state = {
            
          transactionList: [],


          transdesc:'',

          custid:'',
        
          transaction: {
            transid: '',
            transdesc: '',
            pointsamt: '',
            transdate: '',
            custid: ''
    
          }
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeTRANSDESC = this.handleChangeTRANSDESC.bind(this);
      this.handleChangeCUSTID = this.handleChangeCUSTID.bind(this);
    }
    
    componentWillMount() {
        this._refreshTransaction();
      }
    handleChangeTRANSDESC(event) {
        this.setState({transdesc: event.target.value});
      }
      handleChangeCUSTID(event){
        this.setState({custid: event.target.value});
      }
      _refreshTransaction() {
        axios.get('http://localhost:8080/LSystem01/rest/Transaction' ).then((response) => {
          this.setState({
            transactionList: response.data
          })
        });
      }
      handleSubmit(){
    
        if(this.state.transdesc !=""){
          let getTRANSDESCURL ='http://localhost:8080/LSystem01/rest/Transaction?TRANSDESC=' + this.state.transdesc;
          console.log(getTRANSDESCURL);
          axios.get(getTRANSDESCURL).then(res =>
            {
              this.setState({transactionList:[]});
              //var BlankArray = this.state.books;
              //this.state.books.push(res.data)
              this.setState({transactionList:res.data})
              
              console.log(res);
              console.log(res.data)
            });
          }
          else if (this.state.custid !=""){
  
            let getCUSTIDURL ='http://localhost:8080/LSystem01/rest/Transaction?CUSTID='+this.state.custid;
            console.log(getCUSTIDURL);
            axios.get(getCUSTIDURL).then(res =>
              {
                this.setState({transactionList:[]});
                //var BlankArray = this.state.books;
                //this.state.books.push(res.data)
                this.setState({transactionList:res.data})
                
                console.log(res);
                console.log(res.data)
              });
        
          }
          else if (this.state.transdesc =="" && this.state.custid ==""){
  
            let getLNAMEURL ='http://localhost:8080/LSystem01/rest/Transaction';
            console.log(getLNAMEURL);
            axios.get(getLNAMEURL).then(res =>
              {
                this.setState({transactionList:[]});
                //var BlankArray = this.state.books;
                //this.state.books.push(res.data)
                this.setState({transactionList:res.data})
                
                console.log(res);
                console.log(res.data)
              });
          }
            
        }
      
    render() {
     
        return (
            <Fragment>
                 
                 

                 <div className='container1'>
                 <div className='wrapper'>
                 <h1>TRANSACTION</h1>
                 
                 <button type='button'><NavLink to='/form2' className="fa fa-plus"></NavLink></button>
                 <button type='button'><NavLink to='/form' className="fa fa-minus"></NavLink></button>
                 
                 </div>
                    <div className="search">
                    <input type="text" name="transdesc" className="searchbar" onKeyUp={this.handleSubmit}onChange={this.handleChangeTRANSDESC} placeholder="Search by Transaction..."></input>
                    <input type="text" name="custid" className="searchbar1" onKeyUp={this.handleSubmit}onChange={this.handleChangeCUSTID} placeholder="Search by Customer ID..."></input>
                     
                   
                    
                           </div> 
                        
                <table className='container1'>
                
                <thead>
                <tr>
                        <th><h1>TRANSID</h1></th>
                        <th><h1>TRANSACTION</h1></th>
                        <th><h1>POINTS AMOUNT</h1> </th>
                        <th><h1>TRANSACTION DATE</h1></th>
                        <th><h1>CUSTOMER ID</h1></th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        this.state.transactionList.map((transaction) =>{
                            return (
                                <tr>
                                    <td>{transaction.transid}</td>
                                    <td>{transaction.transdesc}</td>
                                    <td>{transaction.pointsamt}</td>
                                    <td>{transaction.transdate}</td>
                                    <td>{transaction.custid}</td>
                                    
                                    
                                </tr>
                            )
                    })
                    }
                    
                </tbody>
                
                </table>
                </div>
               
                
                
            </Fragment>
        );
    }
}

TransactionTbl.propTypes = {
   
    transactionList: PropTypes.func
}

export {
    TransactionTbl
}