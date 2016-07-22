import App from './App';
import { Provider } from 'react-redux';
import configureStore from '../store';
import { getAllProducts } from '../modules/products';

const store = configureStore();
store.dispatch(getAllProducts());
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
