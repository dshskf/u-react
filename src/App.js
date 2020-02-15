import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss';

import HomePage from './Pages/Home/home'
import DetailsPage from './Pages/Product-Details/details'
import AccountPage from './Pages/Accounts/account'
import CartPage from './Pages/Cart/cart'
import AddProductPage from './Pages/Add-Product/add'
import EditProductPage from './Pages/Edit-Product/edit'
import UserProduct from './Pages/User-Product/product'
import EditProfilePage from './Pages/Edit-profile/profile'
import UserOrderPage from './Pages/User-Order/order'
import SellerPage from './Pages/Seller-Shop/seller'
import UserShopPage from './Pages/User-shop/shop'
import ResetPage from './Pages/Reset/reset'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user-product" component={UserProduct}></Route>
          <Route path="/user-order" component={UserOrderPage}></Route>
          <Route path="/user-shop" component={UserShopPage}></Route>

          <Route path="/edit-product/:productId" component={EditProductPage}></Route>
          <Route path="/add-product" component={AddProductPage}></Route>

          <Route path="/product/:productId" component={DetailsPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/seller-detail/:sellerId" component={SellerPage}></Route>

          <Route path="/signup" render={
            (props) => <AccountPage{...props} isLogin={false}></AccountPage>
          } ></Route>
          <Route path="/signin" render={
            (props) => <AccountPage{...props} isLogin={true}></AccountPage>
          } ></Route>
          <Route path="/edit-profile" component={EditProfilePage}></Route>
          <Route path="/reset/:token" component={ResetPage}></Route>

          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
