import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Userlisting from "./UserListing";
import UserDataService from '../../services/users.service';
 
class Adduser extends Component {

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

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            dob:'',
            accessLevel:'',
            email:'',
            password:''
        }
        this.saveUser=this.saveUser.bind(this);
    }

    saveUser=(e) => {
        e.preventDefault();
        let users ={
            firstname   :   this.state.firstname,
            lastname    :   this.state.lastname,
            dob         :   this.state.dob,
            accessLevel :   this.state.accesslevel,
            email       :   this.state.email,
            password    :   this.state.password
        };

        UserDataService.addUser(users)
            .then(res=>{
                // this.setState({message:'User Added Successfully'});
                this.props.history.push('/admin/user');
            });
        
    }
 
    onChange = (e) => this.setState({[e.target.name]:e.target.value});

  render() {
    return (
        <HashRouter>
            <div >

                <ul className="topnav">                    
                    <NavLink className="topnav-link" exact to="/" onClick={this.destroyUserData}>Logout</NavLink>
                    {/* <NavLink className="topnav-link" exact to="/Userprofile">Profile</NavLink> */}
                </ul>                
                <div className="sidenav">
                    s<NavLink className="sidenav-link" exact to="/admin/dashboard" >Home</NavLink>
                    <NavLink className="sidenav-link" exact to="/admin/user">Users</NavLink>
                    <NavLink className="sidenav-link" exact to="/admin/company">Company</NavLink>
                    
                </div>
                <div className="main">
                    <div className="centering">
                        <div className="card" style={{width: "500px"}}>
                            <div className="container-form">            
                                <div className="col-lg-12 col-md-12 " width="400px">
                                    <form style={{fontSize:"15px"}}>
                                        <div className="container">
                                            <h3 className="text-center">Add New User</h3>
                                            <div className="form-group">
                                                <label>First name</label>
                                                <input type="text" className="form-control" placeholder="First name" name="firstname" value={this.state.firstname} onChange={this.onChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Last name</label>
                                                <input type="text" className="form-control" placeholder="Last name" name="lastname" value={this.state.lastname} onChange={this.onChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Date of Birth</label>
                                                <input type="Date" className="form-control" placeholder="Enter Your DOB" name="dob" value={this.state.dob} onChange={this.onChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>User Access Level</label>
                                                <select name="accessLevel" className="form-control" name="accesslevel" value={this.state.accesslevel} onChange={this.onChange}>
                                                    <option>Select a Access Level</option>
                                                    <option value="1">Admin</option>
                                                    <option value="2">Manager</option>
                                                    <option value="3">Investor</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary btn-block" onClick={this.saveUser}>Save User</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Route exact path="/admin/user" component={Userlisting}/>
        </HashRouter>
        );
    }
}

export default Adduser;