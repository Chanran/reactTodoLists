import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers/index'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

let store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 使用redux chrome插件，上线的时候记得要注释掉这句
  )
)

export default store