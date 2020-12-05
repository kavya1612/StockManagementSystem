import React, { Component } from "react";
import {Route,NavLink,HashRouter,Link} from "react-router-dom";
import { PencilSquare } from 'react-bootstrap-icons';
import { TrashFill } from 'react-bootstrap-icons';
import CompanyDataService from '../../services/company.service';
 
class Companylisting extends Component {

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
            company:[],
            message:null
        }
        this.deleteCompany =this.deleteCompany.bind(this);
        this.editCompany =this.editCompany.bind(this);
        this.addCompany =this.addCompany.bind(this);
        this.companyListing =this.companyListing.bind(this);
    }

    componentDidMount(){
        this.checkLoggedIn();
        this.companyListing();
        
    }

    companyListing(){
        CompanyDataService.getCompany()
            .then((res)=>{
                this.setState({company:res.data})
            });
    }

    deleteCompany(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/admin/company/delete');
    }

    editCompany(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/admin/company/edit');
    }

    addCompany() {
        window.localStorage.removeItem("id");
        this.props.history.push('/admin/company/add');
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
                    
                        
                    <h3>Company</h3>

                    <button type="submit" className="btn btn-primary btn-block float-right col-3" onClick={()=>this.addCompany()}>Add Company</button>
                        <br/><br/>
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead>
                            <tr>
                                <th>Si No.</th>
                                <th>Company Name</th>
                                <th>Stock Limit</th>
                                <th>Investment Limit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.company.map(
                                    company=>
                                    <tr key={company.id}>
                                    <td>{company.id}</td>                                            
                                    <td>{company.companyName}</td>                                        
                                    <td>{company.investorStocksLimit}</td>      
                                    <td>{company.investorInvestmentLimit}</td>      
                                    <td>
                                        <div className="row">
                                            <div className="col-6">
                                                <PencilSquare color="royalblue" size={20} onClick={()=>this.editCompany(company.id)} />
                                            </div>
                                            <div className="col-6">
                                                <TrashFill color="royalblue" size={20} onClick={()=>this.deleteCompany(company.id)}/>
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
                </HashRouter>
        );
    }
}

export default Companylisting;