import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path : 'SignIn',
    /*  异步调用 getComponent 获取组件   */
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            /*  依赖注入   */
            const SignIn = require('./SignInContainer').default
            const reducer = require('./SignInModule').default
            /*  添加一个 有key  的 reducer  */
            injectReducer(store, { key: 'SignIn', reducer })

            /* 回调返回组件 getComponent   */
            cb(null, SignIn);

            /* Webpack 构建包的名字 */
        }, 'SignIn')
    }
})
