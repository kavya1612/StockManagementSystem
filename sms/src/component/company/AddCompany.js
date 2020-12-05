import React, { Component } from "react";
import {Route,NavLink,HashRouter,Link} from "react-router-dom";
import CompanyDataService from '../../services/company.service';
 
class Addcompany extends Component {

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
            companyName:'',
            companyManager:'',
            investorInvestmentLimit:'',
            investorStockLimit:''
        }
        this.saveUser=this.saveCompany.bind(this);
    }

    saveCompany=(e) => {
        e.preventDefault();
        let company ={
            companyName:this.state.companyname,
            companyManager:this.state.companymanager,
            investorInvestmentLimit:this.state.investorinvestmentlimit,
            investorStockLimit:this.state.investorstocklimit
        };

        console.log(company);
        CompanyDataService.addCompany(company)
            .then(res=>{
                // this.setState({message:'User Added Successfully'});
                this.props.history.push('/admin/user');
            });
        
    }
 
    onChange = (e) => this.setState({[e.target.name]:e.target.value});

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
                <div className=" centering">
                    <div className="card" style={{width: "500px"}}>         
                        <div className="col-lg-12 col-md-12 " width="400px">
                            <form>
                                <h3>Add New Company</h3>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" name="companyname" value={this.state.companyname} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Company Manager</label>
                                    <input type="text" className="form-control" placeholder="Company Manager Name" name="companymanager" value={this.state.companymanager} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Investment Limit</label>
                                    <input type="text" className="form-control" placeholder="Enter the Investment Limit" name="investorinvestmentlimit" value={this.state.investorinvestmentlimit} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Stock Purchasing Limit</label>
                                    <input type="text" className="form-control" placeholder="Enter the Stock Purchasing Limits" name="investorstocklimit" value={this.state.investorstocklimit} onChange={this.onChange}/>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" className="btn btn-primary btn-block"  onClick={this.saveCompany}>Add Company</button>
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

export default Addcompany;