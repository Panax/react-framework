import React , { PureComponent, Component } from 'react' ;
export default class Clock extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
           date:new Date()
        }
    }
    componentWillMount(){
        document.title = 'Clock 定时器' ;
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render(){
        // console.log(this.state.date)
        return (<div>
            <h2>{this.state.date.toLocaleTimeString()}</h2>

        </div>)
    }


}

