import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Component/Index/Index';
import Login from './Component/Login/Login';
import RegisterAccount from './Component/Register/RegisterAccount';
import RegisterEmail from './Component/Register/RegisterEmail';
import RegisterPassword from './Component/Register/RegisterPassword';

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Index}/>
                <Route exact path="/register/account" component={RegisterAccount}/>
                <Route exact path="/register/email" component={RegisterEmail}/>
                <Route exact path="/register/password" component={RegisterPassword}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        )
    }
}

export default App;