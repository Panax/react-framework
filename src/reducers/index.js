/*
    作用：index 文件夹  userInfo,store 多个store 联合起来
 */
// 根据已有的 reducer 来创建 store 是非常容易的。我们使用 combineReducers() 将多个 reducer 合并成为一个。现在我们将其导入，并传递 createStore()。

import {combineReducers} from 'redux';
import userInfo from './userinfo' ;
import store from './store';

const rootReducer = combineReducers({
    userInfo,
    store
})

export default rootReducer