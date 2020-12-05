import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import { Cash } from 'react-bootstrap-icons';
import StockledgerDataService from '../../services/stockledger.service';

class Owninvestorstocklisting extends Component {
    constructor(props){
        super(props);
        this.state={
            stockledger:[],
            message:null
        }
    }
    componentDidMount(){
        this.checkLoggedIn();
        this.stockLedgerListing();
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
      
      stockLedgerListing(){
        
        StockledgerDataService.getAllStocks()
            .then((res)=>{
                this.setState({stockledger:res.data})
                console.log(res.data);
            });            
    }

    sellStock(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/investor/stock/sellconfirmation');
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
                                        <th>Stock Bought on</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.stockledger.map(                                            
                                        stocks=>                                    
                                            <tr key={stocks.id}>
                                                <td>{stocks.id}</td>   
                                                <td>{stocks.purchaseStockName}</td>                                            
                                                <td>{stocks.stockPrice}</td>  
                                                <td>{stocks.dateOfPurchase}</td>                                                                                                                                  
                                                <td>
                                                    <div className="row">
                                                        <div className="col-6">
                                                        <Cash color="royalblue" size={20} onClick={()=>this.sellStock(stocks.id)} />Sell this Stock
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

export default Owninvestorstocklisting;

// this.state.stockledger.map(
//     stocks=>{
    
//     <tr key={stocks.id}>
//     <td>{stocks.id}</td>   
//     <td>{stocks.purchaseStockName}</td>                                            
    
//     <td>Rs. {stocks.stockPrice}</td>                                            
//     <td>{stocks.dateOfPurchase}</td>                                            
    
//     <td>
//         <div className="row">
//             <div className="col-6">
//                 <Cash color="royalblue" size={20} onClick={()=>this.sellStock(stocks.id)} />
//             </div>
            
//         </div>
//     </td>                                  
//     </tr>
//     })