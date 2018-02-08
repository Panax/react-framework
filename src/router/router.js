import React, { Component } from 'react';
import { BrowserRouter, Router, HashRouter,  Route, hashHistory, IndexRoute, IndexLink ,Switch} from 'react-router-dom';
import App from '../App';


/*----------------引入模块---------------*/
import LessExercise from '../page/lessExercise/exercise.js' ;
import SassExercise from '../page/sassExercise/sassExercise.js' ;
import FlexDocument from '../page/flexDocument/flexDocument.js' ;
import AntdMobile from '../page/antdMobile/antdMobile.js' ;
import Login from '../page/Login/Login.js' ;
//路由模块
export default class RouterMap extends Component{
    render(){
        return(
            <div>
                <BrowserRouter  >
                    <Switch  history={this.props.history}>
                        <Route exact path="/" component={App} />
                        <Route path="/LessExercise" component={LessExercise} />
                        <Route path="/SassExercise" component={SassExercise} />
                        <Route path="/AntdMobile" component={AntdMobile} />
                        <Route path="/FlexDocument" component={FlexDocument} />
                        <Route path="/Login" component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}