/*
 store 能维持应用的 state，并在当你发起 action 的时候调用 reducer。
 */
import { createStore } from 'redux'
import rootReducer from '../reducers'

// createStore() 的第二个参数是可选的, 用于设置 state 初始状态。这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致, 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。
// 例如：let store = createStore(todoApp, window.STATE_FROM_SERVER)

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store ;
    // console.log(store.getState())
}

/*
* 后记：Store 就是把它们联系到一起的对象。Store 有以下职责：
    维持应用的 state；
    提供 getState() 方法获取 state；
    提供 dispatch(action) 方法更新 state；
    通过 subscribe(listener) 注册监听器;
    通过 subscribe(listener) 返回的函数注销监听器。
    再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
* */