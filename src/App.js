import './styles/app.scss';
import {Header} from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {HomePageContainer} from './pages/HomePage';
import {HomePage} from './pages/HomePage';
import {CartPage} from './pages/CartPage';

import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="wrapper">
                  <Header />

                  <div className="content">
                    <Routes>
                    {/* <Route path="/" element={<HomePageContainer />} /> */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/checkout" element={<CartPage />} />
                    </Routes>
                  </div>
                </div>
            </Provider>
        </BrowserRouter>
  );
}

export default App;
