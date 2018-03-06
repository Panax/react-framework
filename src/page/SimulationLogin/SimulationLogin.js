import React, {PureComponent,Component} from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin' ;   react15.3 版本中用PureComponent
export default class SimulationLogin extends PureComponent{
    constructor(props){
        super(props);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isLoggedIn:false
        }
    }
    componentWillMount(){
        document.title = '模拟登陆' ;
    }
    handleLoginClick = () => {
        this.setState({isLoggedIn:true})
    }
    handleLogoutClick = () => {
        this.setState({isLoggedIn:false})
    }
    render(){
        // render 之后就不能通过setState改变state的值了；
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (<div>
                <Greeting isLoggedIn={isLoggedIn} />
               {button}

        </div>)
    }
}

// 功能组件
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props)  {
    const isLoggedIn = props.isLoggedIn;
    console.log(isLoggedIn)
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}