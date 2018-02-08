import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './sassExercise.sass' ;
import PureRenderMixin from 'react-addons-pure-render-mixin' ;
export default class SassExercise extends Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        }
    }
    componentWillMount(){
        document.title = '练习文件' ;
    }

    render(){
        return (<div>
            <div id='boxss'>
               config配置为scss,文件名若为scss则报错，而改成sass则渲染不上；

                <br/>
                <span>历史的脚步不断的向前</span>
            </div>

        </div>)
    }
}