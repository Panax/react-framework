import React , {PureComponent,Component} from  'react' ;
export default class SexCheckbox extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    compomentWillMount(){
        document.title = '单复选框' ;
    }

    handleClick(event) {
        this.setState({ open: !this.state.open })
    }
    render() {
        let open = this.state.open,
            className = open ? 'switch-button open' : 'btn-switch'
        return (<div>
            <label className={className} onClick={this.handleClick}>
                <input type="checkbox" checked={open}/> 男
            </label>
        </div> )}
}
