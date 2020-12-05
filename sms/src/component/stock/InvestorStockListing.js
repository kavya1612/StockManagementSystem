import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import { Cart, CartCheckFill} from 'react-bootstrap-icons';
import StocksDataService from '../../services/stocks.service';

class Investorstocklisting extends Component {
    constructor(props){
        super(props);
        this.state={
            stocks:[],
            message:null
        }
    }
    componentDidMount(){
        this.checkLoggedIn();
        this.stockListing();
        
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
      stockListing(){
        StocksDataService.getAllStocks()
            .then((res)=>{
                this.setState({stocks:res.data})
                console.log(res.data)
            });            
    }
    buyStock(id,stockName,stockPrice) {
        window.localStorage.setItem("id",id);
        window.localStorage.setItem("stockName",stockName);
        window.localStorage.setItem("stockPrice",stockPrice);
        this.props.history.push('/investor/stock/buyconfirmation');
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
                    <NavLink className="sidenav-link" exact to="/investor/dashboard" >Home</NavLink>
                    <NavLink className="sidenav-link" exact to="/investor/stock">My Stocks</NavLink>
                    <NavLink className="sidenav-link" exact to="/investor/stock/available">Availble Stocks</NavLink>
                </div>
                <div className="main bg-white">
                    <div>
                        <h3>Available Stock</h3>
                        <table className="table table-striped" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>Si No.</th>
                                    <th>Stock Name</th>
                                    <th>Stock Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.stocks.map(
                                        stocks=>
                                        <tr key={stocks.id}>
                                        <td>{stocks.id}</td>   
                                        <td>{stocks.stockName}</td>                                            
                                        <td>{stocks.stockPrice}</td>                                            
                                        
                                        
                                        <td>
                                            <div className="row">
                                                <div className="col-6">
                                                    <CartCheckFill color="royalblue" size={20} onClick={()=>this.buyStock(stocks.id,stocks.stockName,stocks.stockPrice)} />  Buy this Stock                                              
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

export default Investorstocklisting;