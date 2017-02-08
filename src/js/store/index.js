import {createStore,compose} from 'redux'
import Devtools from '../containers/DevTools'
import reducers from '../reducers/index'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const enhancer = compose(
  Devtools.instrument()
);

let store = createStore(reducers,enhancer)

export default store