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
        return (<div>
            <FormattedDate date={this.state.date} />
        </div>)
    }


}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}
