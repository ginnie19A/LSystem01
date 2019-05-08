import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

class CustomerTbl extends Component {
  constructor(props){
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
      viewCustomerData: {
        custid: '',
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        birthdate: '',
        expdate: '',
        totalbal: ''
      },
      editCustomerData: false,
      viewCustomerData: false
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeFNAME = this.handleChangeFNAME.bind(this);
  this.handleChangeMNAME = this.handleChangeMNAME.bind(this);
  this.handleChangeLNAME = this.handleChangeLNAME.bind(this);
    
    
  }
  componentWillMount() {
    this._refreshCustomer();
  }

  toggleEditCustomerModal() {
    this.setState({
      editCustomerModal: !this.state.editCustomerModal
    });
  }

  toggleViewCustomerModal() {
    this.setState({
      viewCustomerModal: !this.state.viewCustomerModal
    });
  }

  updateCustomer() {
    let { custid, fname, mname, lname, gender, birthdate, expdate, totalbal } = this.state.editCustomerData;

    axios.put('http://localhost:8080/LSystem01/rest/Customer', {
      custid,
      fname, mname, lname, gender, birthdate, expdate, totalbal
    }).then((response) => {
      this._refreshCustomer();

      this.setState({
        editCustomerModal: false, editCustomerData: { custid: '', fname: '', mname: '', lname: '', gender: '', birthdate: '', expdate: '', totalbal: '' }
      })
    });
    alert('Successully updated Member Details!');
  }
  editCustomer(custid, fname, mname, lname, gender, birthdate, expdate, totalbal) {
    this.setState({
      editCustomerData: { custid, fname, mname, lname, gender, birthdate, expdate, totalbal }, editCustomerModal: !this.state.editCustomerModal
    });
    
  }
  
  viewCustomer(custid, fname, mname, lname, gender, birthdate, expdate, totalbal) {
    this.setState({
      viewCustomerData: { custid, fname, mname, lname, gender, birthdate, expdate, totalbal }, viewCustomerModal: !this.state.viewCustomerModal
    });
  }
  _refreshCustomer() {
    axios.get('http://localhost:8080/LSystem01/rest/Customer/').then((response) => {
      this.setState({
        customer: response.data
      })
    });
  }
  handleSubmit(){
    
    if(this.state.fname !=""){
      let getFNAMEURL ='http://localhost:8080/LSystem01/rest/Customer?FNAME=' + this.state.fname;
      console.log(getFNAMEURL);
      axios.get(getFNAMEURL).then(res =>
        {
          this.setState({customer:[]});
          //var BlankArray = this.state.books;
          //this.state.books.push(res.data)
          this.setState({customer:res.data})
          
          console.log(res);
          console.log(res.data)
        });
      }
  
    else if (this.state.mname !=""){
  
      let getMNAMEURL ='http://localhost:8080/LSystem01/rest/Customer?MNAME='+this.state.mname;
      console.log(getMNAMEURL);
      axios.get(getMNAMEURL).then(res =>
        {
          this.setState({customer:[]});
          //var BlankArray = this.state.books;
          //this.state.books.push(res.data)
          this.setState({customer:res.data})
          
          console.log(res);
          console.log(res.data)
        });
  
    }
    else if (this.state.lname !=""){
  
      let getLNAMEURL ='http://localhost:8080/LSystem01/rest/Customer?LNAME='+this.state.lname;
      console.log(getLNAMEURL);
      axios.get(getLNAMEURL).then(res =>
        {
          this.setState({customer:[]});
          //var BlankArray = this.state.books;
          //this.state.books.push(res.data)
          this.setState({customer:res.data})
          
          console.log(res);
          console.log(res.data)
        });
      
    }
  }
  handleChangeFNAME(event) {
    this.setState({fname: event.target.value});
  }

  handleChangeMNAME(event) {
    this.setState({mname: event.target.value});
  }

  handleChangeLNAME(event) {
    this.setState({lname: event.target.value});
  }
  render() {
  
    return (

      <div className='container1'>
       <div className='wrapper'>
        <h1>MEMBERS</h1>
        
       
          <button type='button'><NavLink to='/form1'>Add Customer </NavLink></button>
          </div>
        <div className="search">
            <input type="text" name="fname" className="searchbar" onKeyUp={this.handleSubmit}onChange={this.handleChangeFNAME} placeholder="Search by First Name..."></input>
            <input type="text" name="mname" className="searchbar1" onKeyUp={this.handleSubmit}onChange={this.handleChangeMNAME}placeholder="Search by Middle Name..."></input>
            <input type="text" name="lname" className="searchbar2" onKeyUp={this.handleSubmit}onChange={this.handleChangeLNAME}placeholder="Search by Last Name..."></input>
            
                
          
         
         </div>
           
          <Modal isOpen={this.state.editCustomerModal} toggle={this.toggleEditCustomerModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditCustomerModal.bind(this)}>Edit Member Details</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Input id="fname" value={this.state.editCustomerData.fname} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.fname = e.target.value;

                  this.setState({ editCustomerData });
                }} />
              </FormGroup>
              <FormGroup>
                <Input id="mname" value={this.state.editCustomerData.mname} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.mname = e.target.value;

                  this.setState({ editCustomerData });
                }} />
              </FormGroup>
              <FormGroup>
               
                <Input id="lname" value={this.state.editCustomerData.lname} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.lname = e.target.value;

                  this.setState({ editCustomerData });
                }} />
              </FormGroup>
              <FormGroup>
              
                <Input id="gender" value={this.state.editCustomerData.gender} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.gender = e.target.value;

                  this.setState({ editCustomerData });
                }} />
              </FormGroup>
              <FormGroup>
               
                <Input id="birthdate" value={this.state.editCustomerData.birthdate} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.birthdate = e.target.value;

                  this.setState({ editCustomerData });
                }} />
              </FormGroup>
              <FormGroup>
                
                <Input id="expdate" value={this.state.editCustomerData.expdate} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.expdate = e.target.value;

                  this.setState({ editCustomerData });
                }} />
              </FormGroup>


              <FormGroup>
               
                <Input id="totalbal" value={this.state.editCustomerData.totalbal} onChange={(e) => {
                  let { editCustomerData } = this.state;

                  editCustomerData.totalbal = e.target.value;

                  this.setState({ editCustomerData });
                }} readOnly/>
              </FormGroup>

            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.updateCustomer.bind(this)}>Update Customer</Button>{' '}
              <Button color="secondary" onClick={this.toggleEditCustomerModal.bind(this)}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.viewCustomerModal} toggle={this.toggleViewCustomerModal.bind(this)}>
            <ModalHeader toggle={this.toggleViewCustomerModal.bind(this)}>View Member Details</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Input id="mname" value={this.state.viewCustomerData.fname} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.fname = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>
              <FormGroup>
                <Input id="mname" value={this.state.viewCustomerData.mname} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.mname = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>
              <FormGroup>
               
                <Input id="lname" value={this.state.viewCustomerData.lname} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.lname = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>
              <FormGroup>
              
                <Input id="gender" value={this.state.viewCustomerData.gender} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.gender = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>
              <FormGroup>
               
                <Input id="birthdate" value={this.state.viewCustomerData.birthdate} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.birthdate = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>
              <FormGroup>
                
                <Input id="expdate" value={this.state.viewCustomerData.expdate} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.expdate = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>


              <FormGroup>
               
                <Input id="totalbal" value={this.state.viewCustomerData.totalbal} onChange={(e) => {
                  let { viewCustomerData } = this.state;

                  viewCustomerData.totalbal = e.target.value;

                  this.setState({ viewCustomerData });
                }} readOnly/>
              </FormGroup>

            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>


          <Fragment>
            <table className='container1'>

              <thead>
                <tr>
                  <th><h1>CUST ID</h1></th>
                  <th><h1>FIRST NAME</h1></th>
                  <th><h1>MIDDLE NAME</h1> </th>
                  <th><h1>LAST NAME</h1></th>
                  <th><h1>GENDER</h1></th>
                  <th><h1>BIRTHDATE</h1></th>
                  <th><h1>EXPDATE</h1></th>
                  <th><h1>TOTAL BAL.</h1></th>
                  <th><h1>ACTIONS</h1></th>

                </tr>
              </thead>
              <tbody>

              {this.state.customer.map((customer) => {
                return (
                    <tr key={customer.custid}>
                        <td>{customer.custid}</td>
                        <td>{customer.fname}</td>
                        <td>{customer.mname}</td>
                        <td>{customer.lname}</td>
                        <td>{customer.gender}</td>
                        <td>{customer.birthdate}</td>
                        <td>{customer.expdate}</td>
                        <td>{customer.totalbal}</td>
                        <td>
                        <Button color="success" size="sm" className="fa fa-align-justify" onClick={this.viewCustomer.bind(this, customer.custid, customer.fname, customer.mname, customer.lname, customer.gender, customer.birthdate, customer.expdate, customer.totalbal)}></Button>
                        <Button color="success" size="sm" className="fa fa-edit" onClick={this.editCustomer.bind(this, customer.custid, customer.fname, customer.mname, customer.lname, customer.gender, customer.birthdate, customer.expdate, customer.totalbal)}></Button>
                       </td>
                        
                    </tr>
                )
        })}

              </tbody>

            </table></Fragment>

        </div>
     






    );
  }
}


export {
  CustomerTbl
}