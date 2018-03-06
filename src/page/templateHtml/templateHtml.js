import React , { PureComponent, Component } from 'react' ;
import PropTypes from 'prop-types' ;
export default class TemplateHtml extends PureComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
        document.title = 'html组件模板' ;
    }
    render(){
       const message = {
           from:'江西' ,
           status:'工作中',
           content:'想请个假去旅行'
       }
       return (<CommonHtml message={message} />)
    }


}

function CommonHtml({message}) {
    return(<div className='container'>
        <div className='from'>
            <span className='label'>From:</span>
            <span className='value'>{message.from}</span>
        </div>
    <div className='status'>
        <span className='label'>Status:</span>
        <span className='value'>{message.status}</span>
    </div>
    <div className='message'>
        <span className='label'>Message:</span>
        <span className='value'>{message.content}</span>
    </div>
</div>)
}

CommonHtml.PropTypes = {
    message:PropTypes.object.isRequired
}