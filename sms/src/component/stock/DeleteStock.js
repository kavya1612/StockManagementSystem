import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import StocksDataService from '../../services/stocks.service';
 
class Deletestock extends Component {
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
    deleteStocks() {
        StocksDataService.deleteStock(window.localStorage.getItem("id"))
        .then(res=>{
            // this.setState({message:'User Added Successfully'});
            this.props.history.push('/manager/stock');
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
                    <NavLink className="sidenav-link" exact to="/manager/dashboard" >Home</NavLink>
                    <NavLink className="sidenav-link" exact to="/manager/stock">Stocks</NavLink>
                </div>
                <div className="main">
                    <div className="container center">            
                        <div className="col-lg-12 col-md-12 " width="400px">
                            <form className="card" style={{width:"1000px"}}>
                                <div className="card-header">
                                    <h3>Delete the Stock</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Are Your Sure you want to delete this Stock?</label>
                                    </div>
                                </div>
                                <div class="card-footer">                                    
                                    <button type="submit" className=" btn btn-danger" onClick={()=>this.deleteStocks()}>Yes, Delete Stock</button>
                                    <button type="submit" className=" btn btn-primary">Cancel</button>                                    
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

export default Deletestock;