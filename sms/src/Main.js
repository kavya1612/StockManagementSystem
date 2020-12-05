import React, { Component } from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";

/*Common Paths*/
import Login from "./component/common/Login.js";
import Forgotpassword from "./component/common/ForgotPassword.js";
import Register from "./component/common/Register.js";
import AdminDashboard from "./component/dashboard/Admin.js";
import ManagerDashboard from "./component/dashboard/Manager.js";
import InvestorDashboard from "./component/dashboard/Investor.js";
import Userprofile from "./component/user/UserProfile.js";
import Adduser from "./component/user/AddUser.js";
import Userlisting from "./component/user/UserListing.js";
import Edituser from "./component/user/EditUser.js";
import Deleteuser from "./component/user/DeleteUser.js";
import Companylisting from "./component/company/CompanyListing.js";
import Addcompany from "./component/company/AddCompany.js";
import Editcompany from "./component/company/EditCompany.js";
import Deletecompany from "./component/company/DeleteCompany.js";
import Addstock from "./component/stock/AddStock.js";
import Stocklisting from "./component/stock/StockListing.js";
import Editstock from "./component/stock/EditStock.js";
import Deletestock from "./component/stock/DeleteStock.js";
import Owninvestorstocklisting from "./component/stock/OwnInvestorStockListing.js";
import Investorstocklisting from "./component/stock/InvestorStockListing.js";
import Buystockprompt from "./component/stock/BuyStockPrompt.js";
import Sellstockprompt from "./component/stock/sellStockPrompt.js";


 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

          <h1 style={{color:'yellow',textAlign:'center'}}>Welcome To Stock Management System</h1>
            <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Forgotpassword" component={Forgotpassword}/>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/admin/dashboard" component={AdminDashboard}/>
            <Route exact path="/manager/dashboard" component={ManagerDashboard}/>
            <Route exact path="/investor/dashboard" component={InvestorDashboard}/>
            <Route exact path="/userprofile" component={Userprofile}/>
            <Route exact path="/admin/user" component={Userlisting}/>
            <Route exact path="/admin/user/add" component={Adduser}/>
            <Route exact path="/admin/user/edit" component={Edituser}/>
            <Route exact path="/admin/user/delete" component={Deleteuser}/>
            <Route exact path="/admin/company/" component={Companylisting}/>
            <Route exact path="/admin/company/add" component={Addcompany}/>
            <Route exact path="/admin/company/edit" component={Editcompany}/>
            <Route exact path="/admin/company/delete" component={Deletecompany}/>
            <Route exact path="/manager/stock" component={Stocklisting}/>
            <Route exact path="/manager/stock/add" component={Addstock}/>
            <Route exact path="/manager/stock/edit" component={Editstock}/>
            <Route exact path="/manager/stock/delete" component={Deletestock}/>
            <Route exact path="/investor/stock" component={Owninvestorstocklisting}/>
            <Route exact path="/investor/stock/available" component={Investorstocklisting}/>
            <Route exact path="/investor/stock/buyconfirmation" component={Buystockprompt}/>
            <Route exact path="/investor/stock/sellconfirmation" component={Sellstockprompt}/>



            </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;