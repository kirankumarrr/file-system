
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import ViewFiles from './pages'
import Sidebar from './components/Sidebar'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={configureStore()}>

      <div className='app-container'>
        <Sidebar />
        hi
        <ViewFiles />
        {/* <Footer /> */}
      </div>

    </Provider>

  );
}

export default App;
