import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme} from './theme/muiTheme'

// css
import './index.css'

// fonst
import './fonts'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
           <App />
        </BrowserRouter>
    </ThemeProvider>
);
