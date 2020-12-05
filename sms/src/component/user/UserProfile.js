import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
 
class Userprofile extends Component {

    destroyUserData(){
        localStorage.clear();
      }
  render() {
    return (
        <HashRouter>
        <div className="whitebg">
            <ul className="topnav">                    
                <NavLink className="topnav-link" exact to="/" onClick={this.destroyUserData}>Logout</NavLink>
                {/* <NavLink className="topnav-link" exact to="/Userprofile">Profile</NavLink> */}
            </ul>                
            <div className="sidenav">
                <NavLink className="sidenav-link" exact to="/admin/dashboard">Home</NavLink>
              
            </div>
            <div className="main">
            <button className="btn btn-primary" onClick={this.props.history.goBack}>Dashboard</button>
                <div className="col-lg-12 col-md-12 " width="400px">
                    <form>
                        <h3>My Profile</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="Date" className="form-control" placeholder="Enter Your DOB" />
                        </div>                
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Update My Profile</button>
                        
                    </form>
                </div>
            </div>
            </div>
            </HashRouter>
        );
    }
}

export default Userprofile;