import React,{Component} from 'react' ;
import './flexDocument.less'  ;
import PureRenderMixin from 'react-addons-pure-render-mixin' ;

export default class FlexDocument extends Component{
    constructor(props,context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {}
    }
    compomentWillMount(){
        document.title = 'flex练习文件'
    }
    render(){
        return (<div>
            <div className='box'>
                <div><span>1</span></div>
                <div><span>2</span></div>
                <div><span>3</span></div>
            </div>
            <div className='grayColor'>
                <div className='float-first'>
                    <div>你最美</div>
                    <div>哈哈...我差点信啦..</div>
                </div>
            </div>
            <div className='test-flex'>
                <div className='float-first'>
                    <div>我喜欢你</div>
                    <div>不好意思，说了一句假话</div>
                    <div>这句话也是假的</div>
                </div>
            </div>
            <div className='grayColor'>
                <div className='float-first'>
                    <div>周末一起看电影可好？</div>
                    <div>不好意思，我不喜欢你</div>
                </div>
            </div>
        </div>)
    }
}
