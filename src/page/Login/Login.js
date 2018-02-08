import React from 'react' ;
import PureRenderMixin from 'react-addons-pure-render-mixin' ;
import { connect } from 'react-redux' ;
//使用 react-redux 提供的 connect() 帮助器来调用。bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上。
import { bindActionCreators } from 'redux' ;
import { BrowserRouter, Router, HashRouter,  Route, hashHistory, IndexRoute, IndexLink ,Switch} from 'react-router-dom';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js';
import LoginComponent from '../../components/Login/login.js';
class Login extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render(){
        return (
            <div>
                {
                    //验证之后再显示登录信息
                    this.state.checking
                        ?<div>已登录</div>
                        : <LoginComponent loginHandle = {this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount(){
        //判断是否登录
        this.doCheck();
    }

    loginHandle(username){
        //将用户名存入redux  ,从包装容器中获取；
        const actions = this.props.userInfoActions;
        let userInfo = this.props.userInfo;
        // 把参数赋给容器变量中实际的userInfo; mapStateToProps 改变statede的值；
        userInfo.username = username;
        // mapDispatchToProps 调用active方法 处理逻辑;
        actions.update(userInfo);

        const params = this.props.params;
        console.log(params)
        const router = params.router;
        //如果有router，则跳转到指定页面
        if(router){
            // BrowserRouter.push(router)
        }else {
            //跳转到用户主页
            this.goUserPage();
        }
    }

    doCheck(){
        const userInfo = this.props.userInfo;
        if(userInfo.username){
            //已经登录，跳转到用户中心页
            this.goUserPage();
        }else {
            //未登录，显示登录页

            this.setState({
                checking: false
            })
        }
    }

    goUserPage(){
        BrowserRouter.push('/LessExercise');
    }
}

//主要用处：一般情况下，我们可以通过Provider将store通过React的connext属性向下传递，
// bindActionCreators的唯一用处就是需要传递action creater到子组件，并且改子组件并没有接收到父组件上传递的store和dispatch。
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

// 分发到视图;
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)   // 两个参数，第一个是文件名，第二个是dispatch;
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)