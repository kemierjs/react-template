import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";
import store from "./store";
import {Provider} from 'react-redux'
let root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)


