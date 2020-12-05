import React, { Component } from "react";
import {Route,Link,NavLink,HashRouter} from "react-router-dom";
import { PencilSquare } from 'react-bootstrap-icons';
import { TrashFill } from 'react-bootstrap-icons';
import UserDataService from '../../services/users.service';
 
class Userlisting extends Component {

    constructor(props){
        super(props);
        this.state={
            users:[],
            message:null
        }
        this.deleteUser =this.deleteUser.bind(this);
        this.editUser =this.editUser.bind(this);
        this.addUser =this.addUser.bind(this);
        this.userListing =this.userListing.bind(this);
    }

    // componentDidMount(){
    //     this.checkLoggedIn();
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
        this.userListing();
    }

    userListing(){
        UserDataService.getAll()
            .then((res)=>{
                this.setState({users:res.data})
            });
    }

    deleteUser(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/admin/user/delete');
    }

    editUser(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/admin/user/edit');
    }

    addUser() {
        window.localStorage.removeItem("id");
        this.props.history.push('/admin/user/add');
    }


  render() {
    return (
            <HashRouter>
                <div className="bg-white">
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
                        <div className="card">
                        <h3>User</h3>
                        
                        <button type="submit" className="btn btn-primary btn-block float-right col-3" onClick={()=>this.addUser()}>Add User</button>
                        <br/><br/>
                        <table className="table table-striped" style={{fontSize:"15px"}} >
                            <thead>
                                <tr>
                                    <th>Si No.</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        users=>
                                        <tr key={users.id}>
                                        <td>{users.id}</td>                                            
                                        <td>{users.firstname} {users.lastname}</td>                                        
                                        <td>{users.email}</td>      
                                        <td>
                                            <div className="row">
                                                <div className="col-6">
                                                    <PencilSquare color="royalblue" size={20} onClick={()=>this.editUser(users.id)} />
                                                </div>
                                                <div className="col-6">
                                                    <TrashFill color="royalblue" size={20} onClick={()=>this.deleteUser(users.id)}/>
                                                </div>
                                            </div>
                                        </td>                                  
                                        </tr>
                                    )
                                }                               
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Userlisting;