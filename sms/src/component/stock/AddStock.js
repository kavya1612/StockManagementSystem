import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import StocksDataService from '../../services/stocks.service';

class Addstock extends Component {
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
            stockName:'',
            stockCount:'',
            stockPrice:'',
        }
        this.saveStock=this.saveStock.bind(this);
    }

    saveStock=(e) => {
        e.preventDefault();
        let stocks ={
            stockName       :   this.state.stockName,
            stockCount      :   this.state.stockCount,
            stockPrice      :   this.state.stockPrice,
        };

        StocksDataService.addStock(stocks)
            .then(res=>{
                // this.setState({message:'User Added Successfully'});
                this.props.history.push('/manager/stock');
            });
        
    }
 
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
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
                        <div className="centering">
                            <div className="col-lg-12 col-md-12 " width="400px">
                                <form className="card" style={{width:"500px"}}>
                                    <div className="card-header">
                                        <h3>Add New Stock</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>Stock Name</label>
                                            <input type="text" className="form-control" placeholder="Enter the Stock Name" name="stockName" value={this.state.stockName} onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Stock Count</label>
                                            <input type="text" className="form-control" placeholder="Enter the Number of Stocks" name="stockCount" value={this.state.stockCount} onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Stock Price</label>
                                            <input type="text" className="form-control" placeholder="Enter the Stock Price" name="stockPrice" value={this.state.stockPrice} onChange={this.onChange}/>
                                        </div>                       
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={this.saveStock}>Add Stock</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
        );
    }
}

export default Addstock;