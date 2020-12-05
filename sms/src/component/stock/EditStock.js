import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import StocksDataService from '../../services/stocks.service';
 
class Editstock extends Component {

    constructor(props){
        super(props);
        this.state={
            stockName:'',
            stockCount:'',
            stockPrice:'',
        }
        this.updateStocks=this.updateStocks.bind(this);
        this.loadStocks=this.loadStocks.bind(this);
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
        this.loadStocks();
    }

    loadStocks(){
        StocksDataService.getStockById(window.localStorage.getItem("id"))
        .then((res)=>{
            let stocks = res.data;
            this.setState({
                id:stocks.id,
                stockName:stocks.stockName,
                stockCount:stocks.stockCount,
                stockPrice:stocks.stockPrice,
            })
        });
    }

    onChange = (e) =>this.setState({ [e.target.name]: e.target.value });

    updateStocks=(e) => {
        e.preventDefault();
        let stocks ={
            id              :   this.state.id,
            stockName       :   this.state.stockName,
            stockCount      :   this.state.stockCount,
            stockPrice      :   this.state.stockPrice,
        };

        StocksDataService.updateStock(stocks)
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
                    <div className="centering">
                        <div className="container">            
                            <div className="col-lg-12 col-md-12 " width="400px">
                                <form>
                                    <div className="card" style={{width:"500px"}}>
                                        <div className="card-header">
                                            <h3>Edit Stock</h3>
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
                                                <input type="text" className="form-control" placeholder="Enter the Stock Price"  name="stockPrice" value={this.state.stockPrice} onChange={this.onChange}/>
                                            </div>                       
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary btn-block" onClick={this.updateStocks}>Update Stock</button>
                                        </div>
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

export default Editstock;