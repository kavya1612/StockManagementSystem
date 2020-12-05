import React, { Component } from "react";
import {Route,NavLink, Redirect, HashRouter} from "react-router-dom";
import AdminDashboard from "../dashboard/Admin";
import Forgotpassword from "./ForgotPassword";
import Register from "./Register.js";
import AuthenticationDataServce from '../../services/authentication.service';
 
class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email       :'',
            password    :''
        }
        this.LoginUser=this.LoginUser.bind(this);
    }

    LoginUser=(e)=>{
        e.preventDefault();

        let loginuser ={
            email       :   this.state.email,
            password    :   this.state.password          
        };
        if(this.state.email !='' || this.state.password !=''){
                    AuthenticationDataServce.logTheUserIn(loginuser)
            .then(res=>{
                var data=[];
                // this.setState({message:'User Added Successfully'});
                this.setState({loginuser:res.data})
                console.log({loginuser:res.data});
                window.localStorage.setItem("userid",res.data.id);
                window.localStorage.setItem("firstname", res.data.firstname);
                window.localStorage.setItem("lastname", res.data.lastname);
                window.localStorage.setItem("accessLevel",res.data.accessLevel);
                window.localStorage.setItem("email",res.data.lastname);

                if(res.data.password==this.state.password && res.data.email==this.state.email){
                    if(res.data.accessLevel=="1"){
                        console.log("User is Admin");
                        this.props.history.push('/admin/dashboard');      
                    } else if(res.data.accessLevel=="2"){
                        console.log("User is Manager");
                        this.props.history.push('/manager/dashboard');    
                    } else if(res.data.accessLevel=="3"){
                        console.log("User is Investor");
                        this.props.history.push('/investor/dashboard');    
                    }
                } else{
                    document.getElementById("error").innerHTML="Wrong Username Or Password";
                }
                //this.props.history.push('/');
            });
        }else{
            document.getElementById("error").innerHTML="Username or Password Can't be Empty";
        }
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    render() {
    return (
        <HashRouter>
        <div className="body layout"> 
            
            <div className="centering">
                <div className="card" style={{width: "500px"}}>
                    <image src="logo.jpg" style={{width:'50px'}}></image>
                    <div className="col-lg-12 col-md-8">
                        <form onSubmit={this.onSubmit} method="post">
                            <h3 className="text-center">Sign In</h3>
                            <p className="text-danger" id="error"></p>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" id="email" name="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control  password"  placeholder="Enter password" id="password" name="password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block password" onClick={this.LoginUser}>Submit</button>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-6">
                                    <p className="forgot-password text-left">
                                      {/* <NavLink exact to="/Forgotpassword">Forgot Password?</NavLink> */}
                                        <Route exact path="/Forgotpassword" component={Forgotpassword}/>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="forgot-password text-right">
                                        New here? <NavLink exact to="/Register">Click here to Register</NavLink>
                                        <Route exact path="/Register" component={Register}/>
                                        <Route exact path="/admin/dashboard" component={AdminDashboard}/>
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
 
export default Login;