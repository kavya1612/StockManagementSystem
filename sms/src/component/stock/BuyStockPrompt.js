import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import StockLedgerDataService from "../../services/stockledger.service";
class Buystockprompt extends Component {
    componentDidMount(){
        this.checkLoggedIn();
        console.log(window.localStorage.getItem("id"));
        console.log(window.localStorage.getItem("stockName"));
        console.log(window.localStorage.getItem("stockPrice"));
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
            purchaseStockId:'',
            ownerId:'',
            dateOfPurchase:'',
            purchaseStockName:'',
            stockPrice:''
        }
        this.buyStock=this.buyStock.bind(this);
        }

        buyStock=(e) => {
            e.preventDefault();
            let stocks ={
                purchaseStockId     :   localStorage.getItem('id'),
                ownerId             :   localStorage.getItem('userid'),
                dateOfPurchase      :   new Date(),
                purchaseStockName   :   localStorage.getItem('stockName'),
                stockPrice          :   localStorage.getItem('stockPrice')
            };
            StockLedgerDataService.addStock(stocks)
                .then(res=>{
                    console.log("success");
                    this.props.history.push('/investor/stock');
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
                    <NavLink className="sidenav-link" exact to="/investor/dashboard" >Home</NavLink>
                    <NavLink className="sidenav-link" exact to="/investor/stock">My Stocks</NavLink>
                    <NavLink className="sidenav-link" exact to="/investor/stock/available">Availble Stocks</NavLink>
                </div>
                <div className="main">
                    <div className="container center">            
                        <div className="col-lg-12 col-md-12 " width="400px">
                            <form className="card" style={{width:"1000px"}}>
                                <div className="card-header">
                                    <h3>Purchasing the Stock</h3>
                                </div>
                                <div class="Card-body">
                                    <div className="form-group">
                                        <label>Are Your Sure you want to buy this Stock?</label>
                                    </div>
                                </div>
                                <div class="card-footer">                                    
                                    <button type="submit" className=" btn btn-success" onClick={this.buyStock}>Proceed</button>                                    
                                    <button type="cancel" className=" btn btn-primary">Cancel</button>                                                                
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

export default Buystockprompt;