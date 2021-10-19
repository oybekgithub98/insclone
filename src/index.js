import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import Spinner from './components/spinner/Spinner.js';
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
