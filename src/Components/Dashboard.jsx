import React, { Component } from 'react';
import '../Css/Dashboard.css';
import logo from '../pppp.jpg';


class Dashboard extends Component {
  render() {
    return (

      <div>
         <div className ="majorBody">
         <div className="wrapper1">
         <h1>Welcome Admin!</h1>
         
       
          
         </div>
         <div className="container"> 
         
         <img src={logo} width="960" height="600" alt="IBM" />
         </div>
        
         </div>
         </div>
        
         
         
              
          
          
    );
  }
}

export default Dashboard;
