import React, { Component, Fragment } from 'react';

import '../Css/Input.css';
import PropTypes from 'prop-types';
class CustomerInput extends Component {
  
  render() {
    


    return (
      <div>
        <div className="ccontainer">
             <div className="menu col-7">
    
    <div className="box1 col-6">

                <form> 

                    <h2>INPUT PERSONAL INFORMATION</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="form-group">
                    
                    <div className="col-75">
                    <input type="text" name="fname" placeholder="First Name"  onChange={this.props.handleChangeInfo} />

                    </div>
                  </div>
                  <div class="form-group">
                   
                    <div className="col-75">
                    <input type="text" name="mname"  placeholder="Middle Name" onChange={this.props.handleChangeInfo} />

                    </div>
                  </div>
                  <div class="form-group">
                   
                    <div className="col-75">
                    <input type="text" name="lname" placeholder="Last Name" onChange={this.props.handleChangeInfo} />

                    </div>
                  </div>
                      <div class="form-group">
                    <label for="gender">Select Gender</label>
                   
                      <select name="gender"  onChange={this.props.handleChangeInfo} class="form-control">
                      <option value="Select Gender" >Select Gender</option>
                        <option value="Female" >Female</option>
                        <option value="Male" >Male</option>
                        
                      </select>
                    </div>
                     
                    <div class="form-group">
                      <label for="birthdate">Birthdate </label>
                   <div className="col-75">
                   <input type="date" name="birthdate"  placeholder="Birthdate" onChange={this.props.handleChangeInfo} />

                   </div>
                 </div>
                 <div class="form-group">
                 <label for="expdate">Expiration Date </label>
                   <div className="col-75">
                   <input type="date" name="expdate"  placeholder="Expiration Date" onChange={this.props.handleChangeInfo} />

                  
                   </div>
                 </div>
                 <div class="form-group">
                   
                   <div className="col-75">
                   <input type="text" name="totalbal"  placeholder="Total Balance" onChange={this.props.handleChangeInfo} />
                  
                   </div>
                 </div>
                 <div className="wrapper">
               <button type="button" className="button" onClick={this.props.handleAddCustomer}>Add Member</button>
               </div>
                </form>
                </div>
                </div>
              
  </div>
</div>
     

          
    );
  }
}
CustomerInput.propTypes = {
  handleChangeInfo: PropTypes.func,
  handleAddCustomer: PropTypes.func
}

export {
    CustomerInput
} 
