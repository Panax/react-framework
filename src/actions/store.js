/* ------ cosntants文件 引入类型type*/
/*---Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。
它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。*/

/*---{
Redux 中只需把 action 创建函数的结果传给 dispatch() 方法即可发起一次 dispatch 过程。

dispatch(addTodo(text))
dispatch(completeTodo(index))
*/
import * as actionTypes from '../constantTypes/store'

export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function remove(item) {
    return {
        type: actionTypes.STORE_REMOVE,
        data: item
    }
}

