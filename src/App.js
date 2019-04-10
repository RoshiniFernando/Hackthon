import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import www from './ss.component/www';
import abo from './ss.component/abo';
import ccc from './ss.component/ccc';
import eee from './ss.component/eee';
import CardFrame from "./ss.component/CardFrame";



class App extends Component {
  render() {
    return (
        <div>
        <div>
         <div>
            <div>
                 <div>
                     <div style={{height: '450px', position: 'relative'}}>
                             <Layout style={{background: 'url(https://cdn.wallpapersafari.com/92/99/OYxX3b.jpg) center / cover'}}>

                                  <Header transparent title="Traveller" style={{color: 'white'}}>
                                    <Router>
                    <Navigation >
                        <Link to={'/www'} onClick={www}> Home </Link>
                        <Link to={'/abo'} onClick={abo}> AboutUs </Link>
                        <Link to={'/ccc'} onClick={ccc}> ContactUs </Link>
                        <Link to={'/eee'} onClick={eee}> SignIn </Link>
                        <Link to={'/eee'} onClick={eee}> SignUp </Link>
                    </Navigation>


                    </Router>
                </Header><br/>
                <switch>
                    <Route exact path = '/www' component = {www}/>
                    <Route exact path = '/abo' component = {abo}/>
                    <Route exact path = '/ccc' component = {ccc}/>
                    <Route exact path = '/eee' component = {eee}/>
                    <Route exact path = '/eee' component = {eee}/>
                </switch>
                <Drawer title="CgApp">
                    <Navigation>
                        <a href="/">Home</a>
                        <a href="/">AboutMe</a>
                        <a href="/">Projects</a>
                        <a href="/">ShoppingCart</a>
                    </Navigation>
                </Drawer>

                <Content />

            </Layout>
        </div>

           <Layout style={{height: '400px', position: 'relative',background:'green'}}>
               <div>
                   <br/> <br/>
                   <h2>View Your Loving attractive Places in Sri Lanka. </h2>
            <CardFrame/>
               </div>
           </Layout>
        </div>
            <Layout style={{height: '400px', position: 'relative',background:'pink'}}>
                <br/> <br/>
                <h2>Book Your favorite Hotel this time. </h2>
                <CardFrame/>
            </Layout>
         </div>
            <Layout style={{height: '400px', position: 'relative',background:'lightblue'}}>
            <br/> <br/>
                <h2>Book Your Transport Sevice. </h2>
                <CardFrame/>
            </Layout>
        </div>
            <Layout style={{height: '400px', position: 'relative',background:'yellow'}}>
                <br/> <br/>
                <h2>Book an attractive package service. </h2>
                <CardFrame/>
            </Layout>
        </div>
            <footer  style={{height: '225px', position: 'relative',background:'grey'}}>
                <br/>
                <h4>This is the footer. we can add many links and descriptions related to travelling. </h4>
            </footer>
        </div>
    );
  }
}

export default App;
