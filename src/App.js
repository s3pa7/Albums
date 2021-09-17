import {Fragment} from "react";
import Albums from "./components/Albums";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import store from './store/index'
import { persistStore } from 'redux-persist'


let persistor = persistStore(store);

function App() {
  return (
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Albums/>
      </PersistGate>
    </Provider>
  );
}

export default App;
