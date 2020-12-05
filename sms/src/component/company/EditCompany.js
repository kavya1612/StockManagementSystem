import React, { Component } from "react";
import {Route,NavLink,HashRouter,Link} from "react-router-dom";
import CompanyDataService from '../../services/company.service';

class Editcompany extends Component {
    constructor(props){
        super(props);
        this.state={
            companyName:'',
            companyManager:'',
            investorInvestmentLimit:'',
            investorStocksLimit:''
        }
        this.updateCompany=this.updateCompany.bind(this);
        this.loadCompany=this.loadCompany.bind(this);
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
    componentDidMount(){
        this.checkLoggedIn();
        this.loadCompany();
    }

    loadCompany(){
        CompanyDataService.getCompanyById(window.localStorage.getItem("id"))
        .then((res)=>{
            let company = res.data;
            this.setState({
                id:company.id,
                companyName:company.companyName,
                companyManager:company.companyManager,
                investorInvestmentLimit:company.investorInvestmentLimit,
                investorStocksLimit:company.investorStocksLimit
            })
        });
    }

    onChange = (e) =>this.setState({ [e.target.name]: e.target.value });

    updateCompany=(e) => {
        e.preventDefault();
        let company ={
            id:this.state.id,
            companyName:this.state.companyName,
            companyManager:this.state.companyManager,
            investorInvestmentLimit:this.state.investorInvestmentLimit,
            investorStocksLimit:this.state.investorStocksLimit
        };

        CompanyDataService.updateCompany(company)
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
                        <div className="centering">
                            <div className="card" style={{width: "500px"}}>                   
                                <div className="col-lg-12 col-md-12 " width="400px">
                                    <form>
                                        <h3>Edit Company</h3>
                                        <div className="form-group">
                                            <label>Company ID</label>
                                            <input type="text" className="form-control" placeholder="Company ID" name="id" value={this.state.id} onChange={this.onChange} readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control" placeholder="Company Name" name="companyName" value={this.state.companyName} onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Company Manager</label>
                                            <input type="text" className="form-control" placeholder="Company Manager Name" name="companyManager" value={this.state.companyManager} onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Investment Limit</label>
                                            <input type="text" className="form-control" placeholder="Enter the Investment Limit" name="investorInvestmentLimit" value={this.state.investorInvestmentLimit} onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Stock Purchasing Limit</label>
                                            <input type="text" className="form-control" placeholder="Enter the Stock Purchasing Limits" name="investorStocksLimit" value={this.state.investorStocksLimit} onChange={this.onChange}/>
                                        </div>
                                        <div className="card-footer">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={this.updateCompany}>Update User</button>                                        
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

export default Editcompany;