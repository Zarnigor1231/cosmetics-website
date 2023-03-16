import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme} from './theme/muiTheme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// css
import './index.css'

// fonst
import './fonts'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={muiTheme}>
        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);
