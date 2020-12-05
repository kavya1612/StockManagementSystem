import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
// import Login from "./Login.js";
 
class AdminDashboard extends Component {
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
            <div onLoad={this.checkLoggedIn}></div>
            <ul className="topnav">                    
                <NavLink className="topnav-link" to="/"onClick={this.destroyUserData}>Logout</NavLink>
                {/* <NavLink className="topnav-link" to="/Userprofile">Profile</NavLink> */}
            </ul>                
            <div className="sidenav">
                <NavLink className="sidenav-link" exact to="/admin/dashboard" >Home</NavLink>
                <NavLink className="sidenav-link" exact to="/admin/user">Users</NavLink>
                <NavLink className="sidenav-link" exact to="/admin/company">Company</NavLink>                    
            </div>
            <div className="main">
              <div className="card" style={{height:'500px'}}>
                <h3>Welcome to the Admin Dashboard</h3>
                  <div className="row">
                    <div className="col-4">
                      <div className="card text-white bg-primary mb-3" style={{maxWidth:"350px"}}>                        
                        <div className="card-body">
                        <h5 className="card-title">Total Users</h5>
                        <p className="card-text">15</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card text-white bg-primary mb-3" style={{maxWidth:"350px"}}>                        
                        <div className="card-body">
                        <h5 className="card-title">Total Companies</h5>
                        <p className="card-text">15</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>      
            </div>
          </HashRouter>
        );
    }
}

export default AdminDashboard;