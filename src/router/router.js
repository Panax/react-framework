import React, { Component } from 'react';
import { BrowserRouter, Router, HashRouter,  Route, hashHistory, IndexRoute, IndexLink ,Switch} from 'react-router-dom';
import App from '../App';


/*----------------引入模块---------------*/
import LessExercise from '../page/lessExercise/exercise.js' ;      //less 练习文件
import SassExercise from '../page/sassExercise/sassExercise.js' ;  //sass 练习文件，没有配置成功；
import FlexDocument from '../page/flexDocument/flexDocument.js' ;   //flex 兼容测试；
import AntdMobile from '../page/antdMobile/antdMobile.js' ;        //antd desigin 练习文件；
import Login from '../page/Login/Login.js' ;                    //login 登陆文件
import SimulationLogin from '../page/SimulationLogin/SimulationLogin.js' ;   // 模拟登陆；
import SexCheckbox from '../page/SexCheckbox/SexCheckbox.js' ;   // sex 复选框；
import TemplateHtml from '../page/templateHtml/templateHtml.js' ;   // html 模板；
import Clock from '../page/clock/clock.js'                       // 定时器 ；
import clockModul from '../page/clock/clockModul.js'                       // 定时器 ；

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
                        <Route path="/SimulationLogin" component={SimulationLogin} />
                        <Route path="/SexCheckbox" component={SexCheckbox} />
                        <Route path="/TemplateHtml" component={TemplateHtml} />
                        <Route path="/Clock" component={Clock} />
                        <Route path="/clockModul" component={clockModul} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}