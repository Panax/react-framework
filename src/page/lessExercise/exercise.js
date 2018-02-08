import React, {Component} from 'react'  ;
import { Link } from 'react-router-dom' ;
import './exercise.less' ;
import PureRenderMixin from 'react-addons-pure-render-mixin' ;

export default class LessExercise extends Component {
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
            <div id='box'>
                hjhkjhjkjkjlkjlkjljlkjkljlkjhjkkkkkkkkkkkkhjkhkjh
                hjkhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhkkhi
            </div>
        </div>)
    }
}