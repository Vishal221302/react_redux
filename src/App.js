import './App.css';
// import Home from './components/Pages/Home';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import User from './components/Pages/User';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
      </div>
    </Provider>
  );
}

export default App;
