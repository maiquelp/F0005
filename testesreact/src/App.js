import {Provider} from 'react-redux';
import store from './store';

import Todos from './Todos';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <p>
            <h1>Edit <code>src/App.js</code> and save to reload.</h1>
            <Todos />
          </p>
      </div>
    </Provider>
  );
}

export default App;
