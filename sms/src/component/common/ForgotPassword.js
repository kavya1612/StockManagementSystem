import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Login from "./Login.js";
 
class Forgotpassword extends Component {
  render() {
    return (
            <HashRouter>
                <div className="container center">         
                    <div className=" centering">
                        <div className="card" style={{width: "500px"}}>
                            <div className="col-lg-12 col-md-12 ">
                                <form>
                                    <h3>Forgot Password</h3>
                                    <br/>
                                    <div className="form-group">
                                        <label>Please Provide Your Email ID</label>
                                        <input type="text" className="form-control" placeholder="Enter your Email ID" />
                                    </div>                
                                    <button type="submit" className="btn btn-primary">Send Password</button>
                                    <br/>
                                    <div className="row">                
                                        <div className="col-12">
                                            <p className="forgot-password text-left">
                                                Click to<NavLink exact to="/"> Login</NavLink>
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

export default Forgotpassword;