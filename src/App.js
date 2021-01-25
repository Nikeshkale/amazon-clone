import React,{ useEffect } from "react";
import Header from './Header'; 
import './App.css';
import Home from "./Home";
import{BrowserRouter as Router,Switch,Route}from"react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import CreateAccount from "./CreateAccount";
import Payment from "./Payment";
import Orders from "./Orders";
import {auth} from "./firebase";
import { useStateValue} from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51I7lxXFmHr9yKNWIqXe5ajKvKLVpcK7LiuTmmCbkFMYC0hslImIMRJoKatfa6fdOV5ga74l4y3WeWH8Y26UsqsW700UJusbI4V"
);


function App() {
  const[{},dispatch] = useStateValue();

  useEffect(() => {

    // will only run once when the app component loads..
   auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>',authUser);

    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser,
      });
    }
    else{
      //user is logout
      dispatch({
        type:'SET_USER',
      user: null,
      });
      
    }
   });
  }, []);

  return (
    //BEM
   <Router> 
      <div className="app">
        <Switch>
          <Route path="/login">
          <Login/>
          </Route>

          <Route path = "/createaccount">
            <CreateAccount/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>    
          </Route> 

          <Route path="/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path= "/orders">
            <Header/>
            <Orders/> 
          </Route>
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </div>
   </Router>
   
  );
}

export default App; 
