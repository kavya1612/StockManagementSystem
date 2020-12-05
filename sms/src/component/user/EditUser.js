import React, { Component } from "react";
import {Route,Link,NavLink,HashRouter} from "react-router-dom";
import UserDataService from '../../services/users.service';
 
class Edituser extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            dob:'',
            accesslevel:'',
            email:'',
            password:''
        }
        this.updateUser=this.updateUser.bind(this);
        this.loadUser=this.loadUser.bind(this);
    }
    // componentDidMount(){
     
    // }
    checkLoggedIn() {
        if(window.localStorage.getItem("userid")===null){
            this.props.history.push('/');
            console.log("empty");
        }
    }

    destroyUserData(){
        localStorage.clear();
      }

    componentDidMount(){
        this.checkLoggedIn();
        this.loadUser();
    }

    loadUser(){
        UserDataService.getUserById(window.localStorage.getItem("id"))
        .then((res)=>{
            let users = res.data;
            this.setState({
                id:users.id,
                firstname:users.firstname,
                lastname:users.lastname,
                dob:users.dob,
                accesslevel:users.accesslevel,
                email:users.email,
                password:users.password
            })
        });
    }

    onChange = (e) =>this.setState({ [e.target.name]: e.target.value });

    updateUser=(e) => {
        e.preventDefault();
        let users ={
            id          :   this.state.id,
            firstname   :   this.state.firstname,
            lastname    :   this.state.lastname,
            dob         :   this.state.dob,
            accesslevel :   this.state.accesslevel,
            email       :   this.state.email,
            password    :   this.state.password
        };

        UserDataService.updateUser(users)
            .then(res=>{
                // this.setState({message:'User Added Successfully'});
                this.props.history.push('/admin/user');
            });
        
    }

  render() {
    return (
        <HashRouter>
                <div>
                    <ul className="topnav">                    
                        <NavLink className="topnav-link" to="/" onClick={this.destroyUserData}>Logout</NavLink>
                        {/* <NavLink className="topnav-link" to="/Userprofile">Profile</NavLink> */}
                    </ul>
                    
                    <div className="sidenav">
                    <NavLink className="sidenav-link" exact to="/admin/dashboard" >Home</NavLink>
                    <NavLink className="sidenav-link" exact to="/admin/user">Users</NavLink>
                    <NavLink className="sidenav-link" exact to="/admin/company">Company</NavLink>
                    
                    </div>
                    <div className="main">
            <div className="container center">        
                <div className="centering" style={{top : '5'}}>
                    <div className="card" style={{width: "500px"}}>

                            <div className="col-lg-12 col-md-12 " width="400px">
                                <form method="put">
                                   
                                    <div className="card-header">
                                        <h3>Edit User</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>User ID</label>
                                            <input type="text" className="form-control" placeholder="First name" name="id" value={this.state.id} onChange={this.onChange} readOnly/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>First name</label>
                                                    <input type="text" className="form-control" placeholder="First name" name="firstname" value={this.state.firstname} onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Last name</label>
                                                    <input type="text" className="form-control" placeholder="Last name" name="lastname" value={this.state.lastname} onChange={this.onChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Date of Birth</label>
                                                    <input type="Date" className="form-control" placeholder="Enter Your DOB" name="dob" value={this.state.dob} onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>User Access Level</label>
                                                    <select name="accessLevel" className="form-control" name="accesslevel" value={this.state.accesslevel} onChange={this.onChange}>
                                                        <option>Select a Access Level</option>
                                                        <option value="1">Admin</option>
                                                        <option value="2">Manager</option>
                                                        <option value="3">Investor</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                                        </div>       
                                    </div>                                                                      
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary btn-block"  onClick={this.updateUser}>Update User</button>
                                    </div>
                                </form>
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

export default Edituser;