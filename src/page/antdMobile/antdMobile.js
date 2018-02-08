import React, {Component} from 'react' ;
// import { immutableRenderDecorator } from 'react-immutable-render-mixin';   //es7 修饰符写法，但create-react-app 不识别;
// import { is } from 'immutable';                            //  节点变化的深比较
//import shallowCompare from 'react-addons-shallow-compare';   // 节点变化的浅比较;
import PureRenderMixin from 'react-addons-pure-render-mixin' ;  // 插件
import { Link } from 'react-router-dom' ;
import { Button } from 'antd';
import { Progress } from 'antd';
import './antdMobile.less' ;

var shallowCompare = window.localStorage.getItem("shallowCompare");
// @immutableRenderDecorator
export default class AntdMobile extends Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        }
    }
    componentWillMount(){
        document.title = 'antd-mobile的运用' ;
    }



    render(){
        return (<div>
            <Button type="primary">Button</Button>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
        </div>)
    }
}