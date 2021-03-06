import React, { Component } from "react";
import {Route,NavLink,HashRouter,Link} from "react-router-dom";
import CompanyDataService from '../../services/company.service';
class Deletecompany extends Component {

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
    deletecompany() {
        CompanyDataService.deleteCompany(window.localStorage.getItem("id"))
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
                    <NavLink className="topnav-link" to="/"onClick={this.destroyUserData}>Logout</NavLink>
                    {/* <NavLink className="topnav-link" to="/Userprofile">Profile</NavLink> */}
                </ul>
              
                <div className="sidenav">
                    <NavLink className="sidenav-link" exact to="/admin/dashboard" >Home</NavLink>
                    <NavLink className="sidenav-link" exact to="/admin/user">Users</NavLink>
                    <NavLink className="sidenav-link" exact to="/admin/company">Company</NavLink>                  
                </div>

                <div className="main">
                    <div className="container center">                             
                        <div className="card" style={{width: "1000px"}}>  
                            <div className="card-header">
                                <h3>Delete the Company</h3>
                            </div>
                            <div className="card-body">       
                                <div className="col-lg-12 col-md-12 " width="400px">
                                    <form>                                      
                                        <div className="form-group">
                                            <label>Are Your Sure you want to delete this Company?</label>
                                        </div>                                      
                                    </form>
                                </div>
                            </div>
                            <div className="card-footer">                                                        
                                <button type="submit" className=" btn btn-danger"onClick={()=>this.deletecompany()}>Yes, Delete the Company</button>            

                                <button type="submit" className=" btn btn-primary ">Cancel</button>                                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Deletecompany;