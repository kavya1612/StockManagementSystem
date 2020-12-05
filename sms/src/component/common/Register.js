import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Login from "./Login.js";
import AuthenticationDataServce from '../../services/authentication.service';
 
class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname   :'',
            lastname    :'',
            dob         :'',
            accessLevel :'',
            email       :'',
            password    :'',
            createdAt   :''
        }
        this.RegisterUser=this.RegisterUser.bind(this);
    }

    RegisterUser=(e)=>{
        e.preventDefault();

        let registeruser ={
            firstname   :   this.state.firstname,
            lastname    :   this.state.lastname,
            dob         :   this.state.dob,
            accessLevel :   3,
            email       :   this.state.email,
            password    :   this.state.password,
            createdAt   :   new Date()
            
        };

        AuthenticationDataServce.registerUser(registeruser)
        .then(res=>{
            // this.setState({message:'User Added Successfully'});
            this.props.history.push('/');
        });

       

    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    
  render() {
    return (
        <HashRouter>
            <div className="container center">     
                <div className=" centering">
                    <div className="card" style={{width: "500px"}}>       
                        <div className="col-lg-12 col-md-12 " width="400px">
                            <form method="post">
                                <h3>Sign Up</h3>
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
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm you password" name="confirm-password"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.RegisterUser}>Sign Up</button>
                                <br/>
                                <div className="row">                
                                    <div className="col-12">
                                        <p className="forgot-password text-left">
                                            Already Register? <NavLink exact to="/">Click here to Login</NavLink>
                                            <Route exact path="/" component={Login}/>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Register;