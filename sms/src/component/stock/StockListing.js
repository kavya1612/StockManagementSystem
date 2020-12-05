import React, { Component } from "react";
import {Route,NavLink,HashRouter,Link} from "react-router-dom";
import { PencilSquare } from 'react-bootstrap-icons';
import { TrashFill } from 'react-bootstrap-icons';
import StocksDataService from '../../services/stocks.service';

class Stocklisting extends Component {
    constructor(props){
        super(props);
        this.state={
            stocks:[],
            message:null
        }
        this.deleteStock =this.deleteStock.bind(this);
        this.editStock =this.editStock.bind(this);
        this.addStock =this.addStock.bind(this);
        this.stockListing =this.stockListing.bind(this);
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
        this.stockListing();

    }

    stockListing(){
        StocksDataService.getAllStocks()
            .then((res)=>{
                this.setState({stocks:res.data})
            });
    }

    deleteStock(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/manager/stock/delete');
    }

    editStock(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/manager/stock/edit');
    }

    addStock() {
        window.localStorage.removeItem("id");
        this.props.history.push('/manager/stock/add');
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
                    <div className="bg-white">
                        <h3>Stock Management</h3>

                        <button type="submit" className="btn btn-primary btn-block float-right col-3" onClick={()=>this.addStock()}>Add Stock</button>
                            <br/>
                            <br/>
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
                                                        <PencilSquare color="royalblue" size={20} onClick={()=>this.editStock(stocks.id)} />
                                                    </div>
                                                    <div className="col-6">
                                                        <TrashFill color="royalblue" size={20} onClick={()=>this.deleteStock(stocks.id)}/>
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

export default Stocklisting;