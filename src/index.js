import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RouterMap from './router/router.js';   //跟路由组件RouterMap没有关系；
import {Provider} from 'react-redux'       //引入状态管理库
import { createStore } from 'redux'
import { BrowserRouter, Router, HashRouter,  Route, hashHistory, IndexRoute, IndexLink ,Switch} from 'react-router-dom';
import configureStore from './store/configureStore'

//引入的公共组件
// import shallowCompare from 'react-addons-shallow-compare';    //性能优化浅比较；
// window.localStorage.setItem("shallowCompare", shallowCompare);

// const store = createStore() ;  //引入的组件名可以以函数的形式进行赋值；


const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <div>
            <RouterMap history={BrowserRouter}/>
        </div>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();

// 初始化字体大小rem
var fontSize = 0;
(function(doc,win){
    //获取html节点和事件 和屏幕变化改变字体大小
    const docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            const clientWidth = docEl.clientWidth;
            if(!clientWidth) return;//排除宽度没值
            if(clientWidth >= 750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    function fontSizeFun(){
        var size = 0;
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;//排除宽度没值
        if(clientWidth >= 750){
            size = 100;
        }else{
            size = 100 * (clientWidth / 750);
        }
        return size;
    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener("DOMContentLoaded",recalc,false);
    fontSize = fontSizeFun();
    win.addEventListener(resizeEvt,function(){
        fontSize=fontSizeFun();
    },false);
    doc.addEventListener("DOMContentLoaded",function(){
        fontSize=fontSizeFun();
    },false);
})(document,window);
