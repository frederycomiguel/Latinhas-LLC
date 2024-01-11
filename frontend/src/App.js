// frontend/pages/_app.js
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import '..//src/styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
