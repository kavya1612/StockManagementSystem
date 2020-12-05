import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
// import Login from "./Login.js";
 
class InvestorDashboard extends Component {
    componentDidMount(){
        this.checkLoggedIn();
    }
    checkLoggedIn() {
        if(window.localStorage.getItem("userid")===null){
          this.props.history.push('/');
          console.log("empty");
        }
      }
      destroyUserData(){
        localStorage.clear();
      }

  render() {
    return (
          <HashRouter>
            <div>
              <ul className="topnav">                    
                  <NavLink className="topnav-link" to="/"onClick={this.destroyUserData}>Logout</NavLink>
                  {/* <NavLink className="topnav-link" to="/Userprofile">Profile</NavLink> */}
              </ul>              
              <div className="sidenav">
                  <NavLink className="sidenav-link" exact to="/investor/dashboard" >Home</NavLink>
                  <NavLink className="sidenav-link" exact to="/investor/stock">My Stocks</NavLink>
                  <NavLink className="sidenav-link" exact to="/investor/stock/available">Availble Stocks</NavLink>
              </div>
              <div className="main">
                <div className="card" style={{height:'500px'}}>
                  <h3>Welcome to the Investor Dashboard</h3>
                </div>
              </div>
            </div>
          </HashRouter>
        );
    }
}

export default InvestorDashboard;